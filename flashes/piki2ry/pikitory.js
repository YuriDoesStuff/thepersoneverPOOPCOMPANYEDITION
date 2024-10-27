(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"pikitory_atlas_1", frames: [[0,0,650,450],[652,0,650,450],[1304,0,650,450],[0,452,650,450],[652,452,650,450],[1304,452,179,191]]}
];


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



(lib.bg = function() {
	this.initialize(ss["pikitory_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bomb1 = function() {
	this.initialize(ss["pikitory_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bomb2 = function() {
	this.initialize(ss["pikitory_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bomb3 = function() {
	this.initialize(ss["pikitory_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.catthing_2 = function() {
	this.initialize(ss["pikitory_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.playpikitory = function() {
	this.initialize(ss["pikitory_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Scene_1_Layer_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.catthing_2();
	this.instance.setTransform(-218,87);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(2).to({x:-307,y:92},0).to({_off:true},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.playbutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aq0PNQgFgEgCgLIgIgnQgJAEgGgGQgFgEgCgLIgPhDIhIAoQgHAEgDADQgDAEgCAGIgFAYQgCASgJAEIgKADIgKAEQgJACgGgIQgGgHAEgIQgJgCgBgQQgEgsAChCIAAgJIgDgFQgCgHABgNQAEg4gBhHIgEh+QgBgsADgRIAHgjQAFgbABg3IABgQIgFAAQgFgBgEgEQgDgFABgNQABgOgBgVIgBgkIABgPQABgHADgEQADgEAFgBQABgpADgdQALhVAEgpQACggAAgvIAAhOQABgNABgEQADgGAEgCIgDgDQgCgFABgIQAGg3AWhEIgBgBQgGgDAAgKQAAgEADgKQAIgZAEgbQgHAAgEgJQgBgFAAgJQAAgZADgQIAGgYIAGgRQgEgFAAgKIAEgeIACg7IgBgCQgCgGACgQIADgXIABgIQAFgwAFhBIAAgSIgBgQIABgMQABgHgBgEIgEgMQgCgJAEgQIAIgqQAFgbALgLQANgPAeAAQAgAAAVARIAIAJIAGgBQAJAAAOAIQBBAiAwAcQAUALAKAHQARAQAJAGIAYAOQAPAIAIAIQAGAHACAFQAGAGAEADQAGgHAKAGQAEADAIAJQAJAKASAIQAVAIAJAFQAUAKAjAeQAhAeAVAKIAiAOQAJAEAQALIAaAPIAdANIATALIAUAMIAXANIAeAXQAMAIAkAUQAfARAQAOIAGAGQAFgBAFADIAHAFIAJACQAJACAMAHQAtAXASASIAQAQIATALIAjAXIAkAWIAdAQQASAJAKAGQANAIAUAPIAqAeIAyAnQAfAYAVAOIAVANQAiAXAKAIIAfAZQALAJA0AkQBgBBBJBaQAQAUAKAIIAMAKQAHAHgCAHIgCAFIABAFQADAQgFAKQgFAJgPALQgNAJgKAFIggAMQgJADgaAPQgOAIgLAEIAAADIgDAgQAAAMgBADQgDALgKABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAAAABIgBADQAAAIgFAGQgFAHgIgBQgDAAgIgFQgEgBgCgDQgDgEAAgLQAAgeAEgTQgOAEgSAJQglARgNAEIgdAIIggAMIgeAJIgSAFQgBAHgIAFIgPAIQgGADgJAHIgPAKQgLAHgZAHQgZAGgLAHQgKAggKAbQgEALgHACIgMgBQgJACgEgBQgJgBgDgKQgCgFACgMQgRAJgdAJQgmALgKAEQgSAHgQAIQgMAIgDAFQgDAFgDAOQgCANgFAFQgEAEgKAEQgKAEgEgCQgHgBgCgIQgDgHACgHQAIgSABgJQg4AEgmAZIgeAVQgJAFgTAHQgaAKgPABIgOAAIgQACQgRAFgLAFQgSAIgKgDQACAcgLAZQgHAPgKAAQgHABgLgLQgKgMABgIIABgDIgnALQgfAJgUANQgNAJgIgBQgIgCgKgNIhKAfQgKAFgBACIgEALQgDAJgIAGIgMAGQgJAEgGgBQgHgBgEgIQgDgHAEgHQgFABgFgCIgxAUQADAIgIAJQgEAEgLAFIhHAhQgpAUgZAWQgDACgCADQgCAEACAHQAHAkABAYQACAZAAAfQAAAQgEAGQgDAFgFACIgFABQgDAAgDgBgAr4usIAAAJIACgCQAHgGAMgDIgMAAQgFAAgEACg");
	mask.setTransform(14.6632,-10.7682);

	// Layer_1
	this.instance = new lib.playpikitory();
	this.instance.setTransform(-75,-107);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-107,179,191);


(lib.percent = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.loadtxt.text = evround + "%";
	}
	this.frame_4 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// Layer_1
	this.loadtxt = new cjs.Text("0%", "24px 'PMD'");
	this.loadtxt.name = "loadtxt";
	this.loadtxt.lineHeight = 21;
	this.loadtxt.lineWidth = 272;
	this.loadtxt.parent = this;
	this.loadtxt.setTransform(-12.25,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.loadtxt).wait(5));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjoB/IAAj9IHSAAIAAD9g");
	this.shape.setTransform(3.9,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-14.1,281.2,178);


(lib.bombs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.bomb3();
	this.instance.setTransform(-344,-170);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(21));

	// Layer_2
	this.instance_1 = new lib.bomb2();
	this.instance_1.setTransform(-344,-170);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(41));

	// Layer_1
	this.instance_2 = new lib.bomb1();
	this.instance_2.setTransform(-344,-170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-344,-170,650,450);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-326,-226,652,452);


(lib.Scene_1_video = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// video
	this.fmv = new lib.an_Video({'id': 'fmv', 'src':'videos/pikitoryas3.mp4', 'autoplay':false, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.fmv.name = "fmv";
	this.fmv.setTransform(-343.95,225,1.625,1.5,0,0,0,200,150);
	this.fmv._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fmv).wait(8).to({_off:false},0).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_scripts = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// scripts
	this.preloaderanim = new lib.an_Video({'id': 'preloaderanim', 'src':'videos/preloaderanm.mp4', 'autoplay':true, 'controls':false, 'muted':true, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.preloaderanim.name = "preloaderanim";
	this.preloaderanim.setTransform(-333,225,1.625,1.5,0,0,0,200,150);
	this.preloaderanim._off = true;

	this.timeline.addTween(cjs.Tween.get(this.preloaderanim).wait(5).to({_off:false},0).to({_off:true},4).wait(23));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.playbutton = new lib.playbutton();
	this.playbutton.name = "playbutton";
	this.playbutton.setTransform(341.85,234.85);
	this.playbutton._off = true;
	new cjs.ButtonHelper(this.playbutton, 0, 1, 2, false, new lib.playbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.playbutton).wait(8).to({_off:false},0).to({_off:true},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.percent();
	this.instance.setTransform(568.35,533.25,1.8659,1.8657,0,0,0,128.8,77.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(27));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop,reversed) {
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
	this.bombs = new lib.bombs();
	this.bombs.name = "bombs";
	this.bombs.setTransform(325,225,1,1,0,0,0,-19,55);

	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.bombs}]}).to({state:[{t:this.instance},{t:this.bombs}]},8).to({state:[{t:this.instance},{t:this.bombs}]},1).to({state:[{t:this.instance},{t:this.bombs}]},17).to({state:[]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.pikitory = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {buttonstart:3,preanimend:9,videostart2:27};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,26,30,31];
	this.streamSoundSymbolsList[9] = [{id:"sound_player_pl_dirt1wav",startFrame:9,endFrame:16,loop:1,offset:0}];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		this.bombs = this.Layer_1.bombs;
		var _this = this
		
		var req = new XMLHttpRequest();
		
		req.onprogress = event => {
		  // event.loaded returns how many bytes are downloaded
		  // event.total returns the total number of bytes
		  // event.total is only available if server sends `Content-Length` header
			var evunround = ((event.loaded / event.total) * 100) / 2; 
			evround1 =  Math.round(evunround)
			evround = evround1 + evround2
			console.log(evround);
		}
		
		req.open('GET', 'video/pikitoryas3.mp4', true);
		req.responseType = 'blob';
		
		req.onload = function() {
		req.addEventListener('progress', function() {
		
		});
			// Onload is triggered even on 404
		   // so we need to check the status code
		   if (this.status === 200) {
		      var videoBlob = this.response;
		      var vid = URL.createObjectURL(videoBlob); // IE10+
			   // Video is now downloaded
			   // and we can set it as source on the video element
		      console.log("first download done");
			  req2();
		   }
		}
		req.onerror = function() {
		}
		
		req.send();
		
		function req2(){
			var req = new XMLHttpRequest();
		
		req.onprogress = event => {
		  // event.loaded returns how many bytes are downloaded
		  // event.total returns the total number of bytes
		  // event.total is only available if server sends `Content-Length` header
			var evunround = ((event.loaded / event.total) * 100) / 2; 
			evround2 =  Math.round(evunround)
			evround = evround1 + evround2
			console.log(evround);
		}
		
		req.open('GET', 'video/preloaderanm.mp4', true);
		req.responseType = 'blob';
		
		req.onload = function() {
		req.addEventListener('progress', function() {
		
		});
			// Onload is triggered even on 404
		   // so we need to check the status code
		   if (this.status === 200) {
		      var videoBlob = this.response;
		      var vid = URL.createObjectURL(videoBlob); // IE10+
			   // Video is now downloaded
			   // and we can set it as source on the video element
		      console.log("second download done");
			  done1 = true
		   }
		}
		req.onerror = function() {
		}
		req.send();
		}
	}
	this.frame_1 = function() {
		root = this
		
		if (evround == 100){
			root.gotoAndPlay("buttonstart");
		}
	}
	this.frame_2 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_3 = function() {
		console.log("oh heyyy");
	}
	this.frame_4 = function() {
		this.bombs.stop();
	}
	this.frame_5 = function() {
		this.preloaderanim = this.scripts.preloaderanim;
	}
	this.frame_6 = function() {
		root = this;
		var prelanim = document.getElementById("preloaderanim");
			prelanim.addEventListener("ended", woohoo);
			
		document.getElementById("canvas").addEventListener("focus", (event) => {
		      prelanim.muted = false;
		});
		
		function woohoo(){
			root.gotoAndPlay("preanimend");
			}
	}
	this.frame_7 = function() {
		var video = document.querySelector("video");
		var canvas = document.createElement("canvas");
		var oldcanv = document.getElementById("canvas");
		var fps = 60;
		
		canvas.width = 650;
		canvas.height = 450;
		canvas.id = "moviecanvas";
		document.getElementById("animation_container").appendChild(canvas);
		
		function drawImage() {
		  canvas.getContext('2d', { alpha: false }).drawImage(video, 0, 0, 650, 450);
		}canvasInterval = window.setInterval(() => {
		  drawImage(video);
		}, 1000 / fps);video.onpause = function() {
		  clearInterval(canvasInterval);
		};video.onended = function() {
		  clearInterval(canvasInterval);
		};video.onplay = function() {
		  clearInterval(canvasInterval);
		  canvasInterval = window.setInterval(() => {
		    drawImage(video);
		  }, 1000 / fps);
		};
		
		video.play();
	}
	this.frame_8 = function() {
		this.bombs = undefined;this.fmv = this.video.fmv;
		this.playbutton = this.Layer_6.playbutton;
		this.bombs = this.Layer_1.bombs;
		const oldcanv = document.getElementById("canvas");
		oldcanv.style.display = "none";
		this.stop();
	}
	this.frame_9 = function() {
		var soundInstance = playSound("sound_player_pl_dirt1wav",0);
		this.InsertIntoSoundStreamData(soundInstance,9,16,1);
		this.bombs = undefined;this.preloaderanim = undefined;this.bombs = this.Layer_1.bombs;
		const canvas = document.getElementById("moviecanvas");
		const oldcanv = document.getElementById("canvas");
		
		oldcanv.style.display = "inline";
		canvas.style.display = "none";
		
		this.playbutton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame2.bind(this));
		root = this;
		stage.frameRate = 24;
		
		function fl_ClickToGoToAndPlayFromFrame2()
		{
			console.log("huh");
			root.gotoAndPlay(27);
			return;
		}
	}
	this.frame_26 = function() {
		this.bombs = undefined;this.bombs = this.Layer_1.bombs;
		console.log("hugggghhh");
		this.stop();
	}
	this.frame_30 = function() {
		var video = document.querySelector("video");
		var canvas = document.createElement("canvas");
		var oldcanv = document.getElementById("canvas");
		var fps = 60;
		
		canvas.width = 650;
		canvas.height = 450;
		canvas.id = "moviecanvas";
		document.getElementById("animation_container").appendChild(canvas);
		
		function drawImage() {
		  canvas.getContext('2d', { alpha: false }).drawImage(video, 0, 0, 650, 450);
		}canvasInterval = window.setInterval(() => {
		  drawImage(video);
		}, 1000 / fps);video.onpause = function() {
		  clearInterval(canvasInterval);
		};video.onended = function() {
		  clearInterval(canvasInterval);
		};video.onplay = function() {
		  clearInterval(canvasInterval);
		  canvasInterval = window.setInterval(() => {
		    drawImage(video);
		  }, 1000 / fps);
		};
		
		video.play();
	}
	this.frame_31 = function() {
		this.bombs = undefined;this.playbutton = undefined;this.___loopingOver___ = true;
		var oldcanv = document.getElementById("canvas");
		oldcanv.style.display = "none";
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(17).call(this.frame_26).wait(4).call(this.frame_30).wait(1).call(this.frame_31).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(325,225);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({_off:true},28).wait(4));

	// scripts_obj_
	this.scripts = new lib.Scene_1_scripts();
	this.scripts.name = "scripts";
	this.scripts.depth = 0;
	this.scripts.isAttachedToCamera = 1
	this.scripts.isAttachedToMask = 0
	this.scripts.layerDepth = 0
	this.scripts.layerIndex = 0
	this.scripts.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.scripts).wait(32));

	// video_obj_
	this.video = new lib.Scene_1_video();
	this.video.name = "video";
	this.video.depth = 0;
	this.video.isAttachedToCamera = 0
	this.video.isAttachedToMask = 0
	this.video.layerDepth = 0
	this.video.layerIndex = 1
	this.video.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.video).wait(32));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 2
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(12).to({_off:true},18).wait(2));

	// Layer_3_obj_
	this.Layer_3 = new lib.Scene_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.setTransform(554.1,527.6,1,1,0,0,0,554.1,527.6);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 3
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(26).to({_off:true},4).wait(2));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_8 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_9 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_10 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_11 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_12 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_13 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_14 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_15 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_16 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_17 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_18 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_19 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_20 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_21 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_22 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_23 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_24 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_25 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_26 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_27 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_28 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_29 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");
	var mask_graphics_30 = new cjs.Graphics().p("AnaQKQgagFgUgQIgGgGQgPAIgSABQgRACgQgFQgSgEgPgLQgOgLgLgOQgKgPgEgSIgCgHQgHgGgFgIQgGgIgEgJQgEgKgDgKQgDgMABgMQAAgMACgMQgVAEgVgFQgagGgUgSQgTgSgIgZQgIgaAGgaQAEgSALgQIABgCIABgDIACgDIABgCIABgCIABgDIABgCIABgDIABgCIACgCIABgCIACgCIABgCIABgDIACgDIABgCIABgDIACgCIABgCIACgDIACgCIACgCIAFgLIAFgLIAGgKIAIgNIAGgLIACgEIADgFIACgFIADgFIADgEIACgFIABgBQgIgHgGgJQgGgKgEgKQgEgLgCgLIgBgIIAAgBIgBgEIgBgDIAAgDIgBgDIAAgCIgBgCIgBgCIAAgDIgBgCIAAgDIgBgDIAAgDIgBgDIgBgDIgBgGIAAgDIAAgCIgBgCIgBgDIAAgCIgBgDIAAgBIgBgCIgBgFIgCgFIgCgJIgCgJIgBgGIgBgEIgCgGIgCgFIgBgFIgBgGIgDgHIgDgIIgBgGIgEgKIgBgHQgHgVAAgWIABgkQgBgTAEgSIAGglIABgGIACgDIACgGIADgGIACgGIABgDIAJgNQAHgIAIgGQAHgGAIgEIAPgHIAKgDIAAgDIgBgDIgBgDIAAgDIAAgBIgFgHIgHgJIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgBgDIgCgDIgCgKIgBgKIAAgKIABgJIABgKIABgDIAEgKIADgIIACgEIgGgDIgLgGIgLgGIgHgFIgHgEIgEgCIgDgCIgEgBIgDgCQgKgEgKgFQgKgGgIgHIgOgQQgFgHgDgIQgFgKgCgKIgCgOQgQgKgMgPQgLgPgFgSQgFgRABgTQABgUAIgSQAIgRAOgNQAIgHAJgFIg4gJQgdgFgdgHQgZgFgYgHQgdgJgdgGQgcgGgcgIQgigGgfgOQgVgJgPgTQgUgaAAgiQAAghATgaQAUgaAegKQAagHAbABIAjABIgHgDIgGgDIgHgEIgGgFIgHgGIgHgFQgKgKgGgMQgGgKgEgMQgDgLAAgMQAAgMACgMQADgNAGgNQAFgKAIgJQgRgaAAgeQAAgaAMgWQAMgWAUgOQAVgOAZgCQAhgCAgABQATAAARADQAYAAAYAEIAnAHIAvAGIArAHQASADAQAEQAaADAZAGQAVAFAWADIAEAAIAAgOQABgTAGgSQAGgVAMgTQAIgOAMgKIAFgGIAHgGIAGgFIAGgEIAGgEIAEgBIgCAAIAXgKIAUgGQAJgCAKgBIATAAIAUABIADAAIAUgDIAQgBIAaAAIAYAAIAWABIAOADQAQAAAQAEQAQADAPAGIAZAKIAHADIAPgGQATgHAUgBQALgCAKAAIAVgBIAVAAIAVACQAKABAKAEIACAAIADABIADAAIACABIADABIACABIADABIACABIACAAIADABIADABIADABIADABIACACIABAAIABAAIAHADIAIADIAJAEIAHAEIAHAFIAHAEIAHAFIAGAFIAGAFIAGAGIAFAGIACADIADACIADADIADADIAEAEIADAEIADAEIACAEIADAFIABACIAHAFIAGAGIAGAGIAGAHIAGAGIACACIAFADIAEAEIAEADIAEAEIAEADIADADIACACIACABIACACIADACIABAAIACABIABABIACACIABABIACABIAAABIABAAIACgBIADgBIACgBIADgBIAEAAQATgGAUgCQAXgCAVAJQARAGANANQANALAIAPQAJAQACATIABAMIgBAEIAAADIgBADIAAAEIAAADIgBADIAAAEIgBADIgCAGIgCAGIgDAFIgCAGIgEAFIgDAFIACAHIACAGIAAACIALACIAGACQAWACATAKIAKAGQAPgBAPAAQASABARAHQAQAHANALQANAMAJAPQAGANADANIAKgCIAKgDIAMgEIANgDIANgCIADAAQAXgIAXgEIASgDQAbgFAbABIAuAAQAYABAVAJQAJADAJAGIAegNQAQgHARgFIAhgKIAfgJIAfgGIADAAIAFgCIAHgBIAKgBIAIgBIADAAIAGAAQAIAAAJABIARADQAMADALAHQANAHAKALQAKAKAGANQAHAOADAPQACAPgCAPIgCANIgCADIgBADIgBADIgCADIgBADIgBADIgBADIgCADQgGAKgIAIQgJAKgLAHIgXAPQgMAIgOAFIgDACIAHAEIAHAHIAGAGIAHAIIAHAJQAEAGACAGIAEAOIABADIAAADIABADIAAACIAAADIABADIAAADIABADIAAADIAAAJIgBAIIgCAIIgCAIIgDAIIgEAHIgCADIgKANIgJAKIgLAKIgQAKIgMAFQANAJAKALQAJAMAGANQAGAOACAQQACARgEARIgEALQAOAMAJAPIAUgCQAPgBAOACQANACALAGQANAFAKAJQANAKAIANQAJAOAEAPIABAFIALgEIAMgCQAGgBAGAAIALABIAMACIAGABIAHACIAIADIAGAEIAHAEIAGAEIAGAFIAEAEIAIAJIAHAJIAGAJIAEAMIACALIACAMIABAJIgBALIgCALIgDAKIgEALIgFAJIgDAFQAGAPACAPQACAMgBAMIgCAQIgDALQgDANgHANQgHAPgLAOIgHAKQgUAgggAXIgSANQgeAWggAVIgnAZQgbASgdAQQgsAXgtAUQgrASgsAOQgmANgoAKIgsAMQgrAMgtAJIgqAJIgIADIgJADIgJADIgIACIgIACQgKADgLABQgMABgLAAQgLgBgKgDIgRgGIgPgJIgMgLIgCgCIgCgCIgBgDIgCgCIgCgCIgCgDIgCgCIgBgDIgCgCIgCgDIgBgDIgBgDIgBgDIgCgDIgBgDIgBgDIgyAVQgWAKgXAHIg1ARQgeAKgeALIgpAOIgNAGIgMAFIgEACIgLAEIgMAEIgNABIgNAAIgDAAIgBADIgBADIgBADIgBACIgBADIgCADIgBACIgBADQABAUgEAVQgCASgJARQgKASgPAMQgOANgSAGQgTAGgTgBQgVgCgTgJQgGAEgGADIgNAHQgHADgHABQgHACgIABQgHAAgIgBIgRgDIgDAAIgCgBIgCAAQgKANgPAJIgBADQgIARgMANQgNAOgQAIQgRAIgSACQgQACgQgEIgBADIAAADIAAADIAAADIgBADIAAADIAAACIgBADIAAADQABAVgDAVQgEAagOAXQgRAbgfAMQgRAHgTAAQgJAAgJgCgAsVKZIABAAIAAgBIgBABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_8,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_9,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_10,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_11,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_12,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_13,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_14,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_15,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_16,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_17,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_18,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_19,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_20,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_21,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_22,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_23,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_24,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_25,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_26,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_27,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_28,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_29,x:332.775,y:227.1083}).wait(1).to({graphics:mask_graphics_30,x:332.775,y:227.1083}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Layer_6_obj_
	this.Layer_6 = new lib.Scene_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 4
	this.Layer_6.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(32));

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.setTransform(325,225,1,1,0,0,0,325,225);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 5
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(32));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-344.7,224,1161.1,469.6);
// library properties:
lib.properties = {
	id: '842FDB3D1F34DC44A01C65B292EE045A',
	width: 650,
	height: 450,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/pikitory_atlas_1.png", id:"pikitory_atlas_1"},
		{src:"sounds/sound_player_pl_dirt1wav.mp3", id:"sound_player_pl_dirt1wav"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js", id:"an.Video"}
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
an.compositions['842FDB3D1F34DC44A01C65B292EE045A'] = {
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

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
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

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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