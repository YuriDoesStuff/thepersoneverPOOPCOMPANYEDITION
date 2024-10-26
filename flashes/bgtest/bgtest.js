(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.startbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("AFOTcQn1gimChtIlshzQjbhFiWgaQAGgkARgrQAMgcAXgvQEgo1CNkaQD3nzCKlxQArhzAjg4QAggyAngeIAAgDQACgHAFgFQAFgGAGACQADAAACADQATgMAUgHQAJAKgKAOQgIALgQAKIgGAEQAFAVAMAYQAKAUAWAgQBTB5CgDhQBtCXA4BDQBCBPBNBLQAKAJAAAIIgBADQChChByCTQDHD/CmFfQB9EICMGOQAPAqgSARQgKAKgcAAIgcAAQpCAAkrgVg");
	this.shape.setTransform(128.6712,126.5006);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.startbutton, new cjs.Rectangle(0,0,257.4,253), null);


// stage content:
(lib.bgtest = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {startpoint:368};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,2,375,384,398,412];
	this.streamSoundSymbolsList[2] = [{id:"opening",startFrame:2,endFrame:432,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		body.style = "background-color: black;";
		
		this.startbutton.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
		console.log("it works <3");
		this.gotoAndPlay("startpoint");
		}
		this.stop();
	}
	this.frame_2 = function() {
		var soundInstance = playSound("opening",0);
		this.InsertIntoSoundStreamData(soundInstance,2,432,1);
	}
	this.frame_375 = function() {
		body.style.backgroundColor = "white";
	}
	this.frame_384 = function() {
		body.style.backgroundColor = "red";
	}
	this.frame_398 = function() {
		body.style.backgroundColor = "purple";
	}
	this.frame_412 = function() {
		body.style.backgroundColor = "grey";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(373).call(this.frame_375).wait(9).call(this.frame_384).wait(14).call(this.frame_398).wait(14).call(this.frame_412).wait(20));

	// Actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AvdCAQhBgSgJhEIAAgHQAEhDBAgXQBCgWAqA2QArA2gnA6QgeArgtAAQgPAAgQgEgAOsA6QhBgSgJhDIAAgHQAEhEBAgXQBCgWAqA2QArA3gnA5QgeArgtAAQgPAAgQgEg");
	this.shape.setTransform(-393.5169,41.5214);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},375).wait(57));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("ApGHJQiogoiAhVQhdg+hchkQhChJhYh4QA6gHAxAdQgDALgLAIQgMAHgMgBQBpCkC0BwQCqBpDLAmQC+AjDRgYQC/gXDHhHQCtg9DAhnQCVhRDDh9QBDgqAigRQA6gdAzgEIjQB/Qi2BxhgA3QicBYiFA4QldCUliAFIgWAAQihAAiLghgAvwk3QgHgDgBgCQgDgFADgHIAEgGQAFgFAHAAIAAgDQAPABAEACIAGACQAEADABAGQABAGgEAEQgEAFgMACIgHABIgGABgAH2ndIAAgCIAAgCIAEgFIADgBQAFgCAEAAIADAAIACACIAEADIABACIABADQAAAGgDAGIgRADQgFgHgCgGg");
	this.shape_1.setTransform(147.125,323.7582);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("A7ybQQiogniAhVQhdg+hchkQhChKhYh4QA6gHAxAcQgDAMgLAIQgMAIgMgCQBpClC0BvQCqBqDLAlQC+AkDRgZQDAgWDHhHQCtg+DAhnQCVhQDDh+QBDgrAigQQA6gdAygFIjPCBQi2BxhgA2QicBZiFA4QldCTljAFIgWABQihAAiLgigEgicAPQQgHgEgBgCQgDgEADgHIAEgHQAFgFAHAAIAAgCQAPABAEABIAGADQAEADABAGQABAGgEAEQgEAEgMACIgHACIgGAAgEg9LANJQgDgMAJgOIAVgYQAJgKAHgMQgJgQgDgUQgGgjAUgYQAHABAFAIQAEAIABAJIgCARIAAAFIADgTQAEgfgDhFQgJkTBrnBIBWlpQAtjOAPieQAiAQgLBCQgXCXgzDcIhWFyQhhG7ASEsQBghNENjwQDhjKCShqQCRhoC9hqQCEhLDahtQGAi/D8hjQFmiME3gxQC2gcDngIQCEgEEcABQEvACCPALQD4ASC+A5QDjBDCsCEQC+CSBUDEQgXgGgUgYQgLgNgUgiQhkiqi5h5QinhtjWg1QiwgtjogNQh0gGkpgBQkjgBhXACQjUAFijAWQlhAvmzCmQoaDPnoE5QnpE3mcGSQgcAbgOASQgSAXgKAXIATAGQBbAWBugkQAqgOA0gZIBbguQCzhcCYg4QCKgyBigEQBAgDA5AOQA+APAwAhQALAIAAAIQgBAJgMAAQgKgBgKgGQhbg2h9AIQhdAFh9AtQiUA0iqBYQh+BBguATQhkAnhTgBQgxgBgjgQQgEALgGAGQgNAPgZABIgFABQgRAAgYgGgEg8fAMsIAUgCIADgBIAFgHIgBgCIAAgBIgHgGgAq1MqIAAgDIAAgCIAEgFIADgBQAFgCAEAAIADABIACABIAEAEIABACIABADQAAAFgDAHIgRACQgFgHgCgFgEAgQAEzQicgjiJhPQhpg+hNhOQhVhWgrhlQg1h/AJieQAIiHA1iZQBZkDCdivQCzjHEahrQD9hgEugLQBmgEBPAHQBhAKBOAdQBZAhBDA7QBIA/AfBSQghgYg8g9Qg6g8gjgZQhDguhggSQhHgOhrAAQlDgCj+BUQiQAvh7BLQiCBPhgBoQiZClhbD3Qg5CagKCJQgLCgA1CAQAtBrBdBYQBTBQByA7QCSBLCkAaQCkAaCigZQCVgXCchFQCHg8CThgQFTjfDQkYQByibBIipQBLiyAWi1QARiJgXhvQgciDhQhRQhxhxjpgXQifgPifAXQigAXiUA7QgaALgQABQgXADgPgMQCXhGCkghQCkghCmAGQEPAKCLCCQA6A2AlBNQAjBIANBUQAWCPgqC1QhJE9jbEfQjJEFknDLQl6EElaAbQgoAEgpAAQh0AAh0gbg");
	this.shape_2.setTransform(266.706,195.0047);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},7).to({state:[{t:this.shape_2}]},32).to({state:[]},15).wait(378));

	// Layer_3
	this.startbutton = new lib.startbutton("synched",0);
	this.startbutton.name = "startbutton";
	this.startbutton.setTransform(244.8,196.65,1,1,0,0,0,128.7,126.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Au4KxQh2ACh1gQQh0gPhxgfQhygghugqQhvgrhpg3Qhog2hjg+QhlhAhVhTQg7g5AphHQAWgmArgFQBHgIAuA5QAUAZAaASQBgBFBpA5QBnA3BrAvQBtAwBzAjQBzAjB2APQB0APB1AAQB2gBB1gMQB0gLBzgRQB3gTB3gYQB2gZB0ggQB2ghB4gbQBygaBwgiIDhhFQB1glBtg5QBVgsBTgtQANgHAOABQBZAFAKBYQAFAygpAfQhdBFhpAwQhrAxhxAkIjYBEQhwAihxAbQhyAahxAfQhzAgh1AaQhuAXhvATQhyAThyAOQh2APh2AFQgqACgqAAIgqAAgEAhGgDGQgngegBgwQgIhHA7glQAtgcAvAZQA+AhgDBGQgCBJhFAaQgSAHgRAAQgeAAgagUgEghFgHyQhBgSgJhEIAAgGQAEhFBAgWQBCgXAqA3QArA3gnA5QgeAsgtAAQgOAAgRgFg");
	this.shape_3.setTransform(286.2144,295.1463);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ArVYCQhogGhlgUQhkgUhfgoQhdgnhUg6QhTg6hQg9Iihh7IgcgXQgKgLgGgNQgFgOgCgPQgCgOACgPQADgQAHgOQAHgOALgLQALgLAOgHQAOgHAQgDIAQgBIAJABIAIABIAJABQBIAqBCA1QBaBKBeBEQBiBIBwAsQBuArB2AMQCDANCDgKQCMgLCGgtQBvglBqgyQBqgzBlg/QBhg8BdhDQBdhCBYhIQBThDBBhWQBGheA6hnQA5hmAlhwQAmh2AXh5QAYh8ABh/QABg/gQg+QgNgvgDgxQgBgcARgWQAxhABKAhQAtAUAPAwQAhBvgBB0QgCB2gPB2QgPBxggBvQghBtgsBpQg2CAhLB1QhFBthZBeQhPBShcBDIjDCNQhdBDhjA4QhlA6hqAvQhxAzh2AlQh4Amh9APQhEAIhFAAQg5AAg5gGgEgmkAE9IgHgDIgHgDIgGgDIgGgEIgGgEIgGgEIgFgFIgFgFQgfgWgIglQgIglASgiQAVglApgOQAhgLAhAMQAkAOASAjIAGALQAMARADAUQADAWgGAWQgHAYgRASQgTAUgbAIQgNADgNAAQgOAAgNgDgEAlAgWFQgWhCA2gqQA1gpA4AiQA8AjgNBEQgLA2g0AUQgQAGgSAAQhEgEgXhAg");
	this.shape_4.setTransform(281.9078,175.6132);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("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");
	this.shape_5.setTransform(282.0224,210.9408);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("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");
	this.shape_6.setTransform(296.0716,308.4969);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startbutton}]}).to({state:[]},2).to({state:[{t:this.shape_3}]},373).to({state:[{t:this.shape_4}]},9).to({state:[{t:this.shape_5}]},14).to({state:[{t:this.shape_6}]},14).wait(20));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-224.9,217.3,1129.9,304.7);
// library properties:
lib.properties = {
	id: '1BF0964711CF734F8EB25B383FF45249',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/opening.mp3", id:"opening"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1BF0964711CF734F8EB25B383FF45249'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;