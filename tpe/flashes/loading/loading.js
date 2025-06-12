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



(lib.frame_00_delay015s = function() {
	this.initialize(img.frame_00_delay015s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,280);


(lib.frame_01_delay015s = function() {
	this.initialize(img.frame_01_delay015s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,280);


(lib.frame_02_delay015s = function() {
	this.initialize(img.frame_02_delay015s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,280);


(lib.frame_03_delay015s = function() {
	this.initialize(img.frame_03_delay015s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,280);


(lib.frame_04_delay015s = function() {
	this.initialize(img.frame_04_delay015s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,280);


(lib.frame_05_delay015s = function() {
	this.initialize(img.frame_05_delay015s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,280);


(lib.frame_06_delay015s = function() {
	this.initialize(img.frame_06_delay015s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,280);


(lib.frame_07_delay015s = function() {
	this.initialize(img.frame_07_delay015s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,280);


(lib.frame_08_delay015s = function() {
	this.initialize(img.frame_08_delay015s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,280);


(lib.frame_09_delay015s = function() {
	this.initialize(img.frame_09_delay015s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,280);


(lib.loadinguibar = function() {
	this.initialize(img.loadinguibar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,500);


(lib.loadinguibox = function() {
	this.initialize(img.loadinguibox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,493);


(lib.play = function() {
	this.initialize(img.play);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.smallbox = function() {
	this.initialize(img.smallbox);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,507);// helper functions:

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


(lib.sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.frame_00_delay015s();
	this.instance.setTransform(-248,-141);

	this.instance_1 = new lib.frame_01_delay015s();
	this.instance_1.setTransform(-248,-141);

	this.instance_2 = new lib.frame_02_delay015s();
	this.instance_2.setTransform(-248,-141);

	this.instance_3 = new lib.frame_03_delay015s();
	this.instance_3.setTransform(-248,-141);

	this.instance_4 = new lib.frame_04_delay015s();
	this.instance_4.setTransform(-248,-141);

	this.instance_5 = new lib.frame_05_delay015s();
	this.instance_5.setTransform(-248,-141);

	this.instance_6 = new lib.frame_06_delay015s();
	this.instance_6.setTransform(-248,-141);

	this.instance_7 = new lib.frame_07_delay015s();
	this.instance_7.setTransform(-248,-141);

	this.instance_8 = new lib.frame_08_delay015s();
	this.instance_8.setTransform(-248,-141);

	this.instance_9 = new lib.frame_09_delay015s();
	this.instance_9.setTransform(-248,-141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_8}]},4).to({state:[{t:this.instance_9}]},4).to({state:[{t:this.instance_9}]},6).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_7}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance}]},4).wait(7));

	// Layer_2
	this.instance_10 = new lib.frame_00_delay015s();
	this.instance_10.setTransform(-248,-141);

	this.instance_11 = new lib.frame_01_delay015s();
	this.instance_11.setTransform(-248,-141);

	this.instance_12 = new lib.frame_02_delay015s();
	this.instance_12.setTransform(-248,-141);

	this.instance_13 = new lib.frame_03_delay015s();
	this.instance_13.setTransform(-248,-141);

	this.instance_14 = new lib.frame_04_delay015s();
	this.instance_14.setTransform(-248,-141);

	this.instance_15 = new lib.frame_05_delay015s();
	this.instance_15.setTransform(-248,-141);

	this.instance_16 = new lib.frame_06_delay015s();
	this.instance_16.setTransform(-248,-141);

	this.instance_17 = new lib.frame_07_delay015s();
	this.instance_17.setTransform(-248,-141);

	this.instance_18 = new lib.frame_08_delay015s();
	this.instance_18.setTransform(-248,-141);

	this.instance_19 = new lib.frame_09_delay015s();
	this.instance_19.setTransform(-248,-141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_16}]},4).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_18}]},4).to({state:[{t:this.instance_19}]},4).to({state:[{t:this.instance_19}]},7).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_17}]},4).to({state:[{t:this.instance_16}]},4).to({state:[{t:this.instance_15}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_10}]},4).wait(8));

	// Layer_1
	this.instance_20 = new lib.frame_00_delay015s();
	this.instance_20.setTransform(-248,-141);

	this.instance_21 = new lib.frame_01_delay015s();
	this.instance_21.setTransform(-248,-141);

	this.instance_22 = new lib.frame_02_delay015s();
	this.instance_22.setTransform(-248,-141);

	this.instance_23 = new lib.frame_03_delay015s();
	this.instance_23.setTransform(-248,-141);

	this.instance_24 = new lib.frame_04_delay015s();
	this.instance_24.setTransform(-248,-141);

	this.instance_25 = new lib.frame_05_delay015s();
	this.instance_25.setTransform(-248,-141);

	this.instance_26 = new lib.frame_06_delay015s();
	this.instance_26.setTransform(-248,-141);

	this.instance_27 = new lib.frame_07_delay015s();
	this.instance_27.setTransform(-248,-141);

	this.instance_28 = new lib.frame_08_delay015s();
	this.instance_28.setTransform(-248,-141);

	this.instance_29 = new lib.frame_09_delay015s();
	this.instance_29.setTransform(-248,-141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_22}]},4).to({state:[{t:this.instance_23}]},4).to({state:[{t:this.instance_24}]},4).to({state:[{t:this.instance_25}]},4).to({state:[{t:this.instance_26}]},4).to({state:[{t:this.instance_27}]},4).to({state:[{t:this.instance_28}]},4).to({state:[{t:this.instance_29}]},4).to({state:[{t:this.instance_28}]},8).to({state:[{t:this.instance_27}]},4).to({state:[{t:this.instance_26}]},4).to({state:[{t:this.instance_25}]},4).to({state:[{t:this.instance_24}]},4).to({state:[{t:this.instance_23}]},4).to({state:[{t:this.instance_22}]},4).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_20}]},4).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-141,500,280);


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

	// Layer_1
	this.instance = new lib.play();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.whitebg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("EAK7AgoIgSgCIhuAAIhiAAIhhAAIh0AAQgrAAgqgCQgOgBgNgDIhZAAIhMAAIhOAAIhMAAIhEAAQgWgBgUgDIgDgBIgrAAIggAAIghAAIghAAIgZgBIgbgDIgJgBIgVAAIgfAAIgVAAIgVAAIgVAAIgVAAIgSAAIgHAAIgLgBIgLgCIgMgCIgKAAIgVAAIgTAAIgTAAIgRgBIgSgBIgRgCIgDgBIgKAAIgKAAIgJAAIgLAAIgKAAIgGAAIgGAAIgLgBIgKgCIgLgDIAAAAIgBAAIgJAAIgJgBIgIgBIgJgCIgDAAIgVAAIgUAAIgWAAIgLAAIgLAAIgLAAIgLAAIgGABIgKACIgIABIgJAAIgJAAIgDAAIgHACIgLACIgJABIgJABIgKAAIgGAAIgKACIgJABIgKABIgJABIgIAAIgBAAIgJABIgIACIgJABIgIABIgCAAQgUAFgUAAIgkAAIgpAAIgpAAIgpAAIgsgBIgLAAQgcAJgegCIg9gBIhAAAIg+AAIg9AAIgmAAIgBAAIgLACIgLACIgLACIgGAAIgHAAIgKAAIgKAAIgJAAIgIAAIgJAAIgIAAIgJABIgJACIgJABIgIAAIghAAIgnAAIgqAAIgpAAIggAAQgSAAgRgDIgGgBIgIAAIgKgBIgLgBIgKgCIgLgCIAAAAIgGAAIgGAAIgGAAIgGAAIgLgBIgKgCIgLgCIgBAAIgIAAIgIgBIgIgBIgJgBIgJgBIgIgBIgGgCIgKgDIgDAAIg3AAIgsAAIgrAAIgpAAIgrgBIgiAAIgHACIgIACIgIACIgGABIgHACIgHADIgHACIgIABIgEACIgKABIgJACIgKABIgJABIgHAAIgIgBIgKgBIgLgCIgKgCIgHgBIgHgEIgHgDIgIgEIgHgGIgGgFIgFgEIgGgHIgGgIIgFgIIgEgIIgDgIIgDgJIgBgGIgCgHIgCgGIgCgIIgCgIIgCgIIgDgJIgDgJIgCgGIgCgJIgBgKIgCgJIAAgCIgCgJIgBgKIgBgJIgBgKIAAgGIAAgHIAAgKIgCgKIgBgJIgBgKIAAgIIgBgJIAAgIIAAgIIAAgIIgEgWQgCgOABgNIAAgbIAAgbIAAgaQgBgOABgOQABgQAEgQIAAgpIAAgqIAAgqIAAgoIAAgpIAAgkQgFgSAAgUIAAggIAAgmIAAgkIAAgiQgBgPACgQIADgVIABgFIAAgKIAAgKIAAgJIABgJIAAgJIABgJIABgJIACgJIAAgJIAAgJIABgJIAAgFIABgIIABgJIACgJIACgIIAEgIIAEgIIAEgIIAFgIQAIgJAJgHIAAgoIAAg+IABg3IAAgoQgEgRgBgRQgBgUAAgTIAAgoIAAgmIADgbIACgOIAAgXIAAgYIAAgXIAAgbIAAgeIgCgJIgBgKIgBgKIgBgLIAAgKIAAgKIAAgOIgDgPQgCgKAAgLIAAgWIAAgVIAAgYIAAgNIgCgGIgBgJIgCgPQgBgHABgHIAAgQIAAgPIAAgLIgBgEIgBgFIgBgFIgBgFIAAgFIgBgEIgBgDIgBgGIgBgFIgBgGIgBgGIAAgFIAAgGIAAgGIgBgEIgBgEIgBgFIgBgDIAAgEIAAgDIgCgFIgBgFIgBgGIgBgEIAAgGIgBgGIgBgDIgBgEIgBgFIgBgFIgBgDIgBgDIgBgFIgBgDIgBgFIgCgFIgBgGIgBgEIgBgFIgBgFIAAgFIgCgEIgBgEIgBgEIgCgEIgBgEIgBgEIgCgFIgCgFIgBgEIAAgEIgBgEIgCgGIgCgFIgBgFIgBgGIgBgEIgBgFIgCgFIgBgGIgBgEIgBgDIgBgFIgBgGIgBgFIAAgGIgBgGIgBgEIAAgFIgBgFIgBgFQgHgUgBgXIAAgqIAAguIAAgqQAAgTADgSIACgMIAAgFIABgJIABgKIABgNIABgFIABgGIABgDIgBhNIAAhRIAAhLIAAg8QAAgbAFgYIAAgYIAAgdIAAgaQAAgOABgNIAEgYIAAgFIAAgJIABgJIABgJIABgJIACgLIABgEIAAgDIAAgEIAAgFIAAgGIABgGIABgFIAAgGIABgFIABgFIABgGIAAhGIAAhKIAAhCIAAg8IAAg1IgBgEIgBgGIgBgGIgBgGIgBgGIAAgGIAAgGQgEgOgBgPIgBgeIAAgfIAAgcIADgaIADgOIAAgLIAAgLIAAgKIABgLIABgMIACgMIABgFIAAgRIAAgRIAAgQIAAgPIABgSIADgOIABgEIAAgRIAAgRIAAgOIAAgQIABgQIAEgRIAAgJIAAgLIAAgJIABgJIABgIIABgHIABgFIACgGIAAgFIAAgGIABgEIABgGIABgFIABgFIABgFIACgEIABgGIABgEIABgGIACgEIABgFQAIgiAWgaQAUgWAggLQAegJAdAJIABAAIANAAIAxABIA2AAIA9gBQAigBAiAEIATADIAIAAIAJACIAJABIAJACIAIAAIAJABIAIABIAIACIADAAIBtAAIBtAAICXAAIBygBQAgAAAfAHIAVAAIAUAAIAIAAIAIAAIAIAAIAKABIAKACIAKACIATAAIATAAIALAAIALAAIAJAAIAIABIALABIAKABIAJACIAUAAIAUAAIAKAAIAKAAIAHAAIAIAAIALACIAKACIALABIA0AAIA0AAIA1AAIA3AAIA6AAIALAAQAOgEAPgBIAegBIAUABIAUAAIATAAIAeAAIAKAAQA5gIA6ABQBBACBBAAICxAAQBSAABSgCQAvgBAuAIIAGAAIAKAAIAKABIAKACIAKACIABAAIALABIAKABIALACIAHABIAIAAIAJAAIAGAAIAHAAIAJABIAJABIAJACIAIABIAFABIAKABIAJABIAKACIAIAAIAIAAIAIAAIAHABIALABIAKABIALACIAFAAIAIAAIAHAAIAIAAIAHAAIAIAAIAIABIAIABIAJABIAJABIAHACIAKAAIAKAAIAIAAIAIAAIAHABIAHAAIAHABIAHABIAGABIACABIA1AAIArAAIArAAIAsAAIA3AAIAWAAIAAgBIAGgBIALgBIALgBIAKgBIAKAAIAJAAIAIAAIAIAAIAJAAIAIgCIAJgBIAHgBIAHgBIAHgBIAIAAIAKAAIAHgBIAJgBIAJgBIAIgBIAJgBIAKAAIAGgBIAKgCIAIgBIAJAAIAIAAIALAAQATgEASgBIAegBIAdAAIAeAAIAcAAQAQAAAPADIAUADIBZAAIBZAAIBtAAIBygBQAaAAAaAFIAKAAIAKAAIAGAAIAGAAIAJABIAJABIAJABIAKACIAHABIALABIAKACIAKACIAgAAIAfAAIAgAAIAgAAIAfAAIAbABIADgBIAJgDIAJgBIAKgBIAJgBIAIAAIAIAAIAHAAIAGAAIAGgBIAKgBIAIgBIAIgBIAIgBIABAAIAGgBIAKgCIAIgBIAIAAIAIAAIABAAIAGgCIAIgBIAIgCIAIgCIAJgCIAKgBIAJgBIAHAAIAGAAIAGAAIAAAAIAGgBIALgDIAKgBIALAAIAGAAIAHAAIAHAAIAIAAIABAAIALgCIAKgBIALgCIAhAAIAcAAIAeAAIAdAAIAbAAQATgBATACIAYAEIAfAAIAeAAIAeAAIAdAAIAfAAIAVAAIAHgCIAHAAIAIgDIAIgCIAGgBIAGgBIAGgCIAHgBIAIgBIAFgDIAHgBIAGgBIAHgCIAHgCIAHgBIAHgCIADgBIAJgBIAJgCIAIAAIAJgBIAjAAIAcAAIAdAAIAcAAIAbAAQATgBATACIAYADIAKAAIAKAAIAJAAIAJAAIAIAAIAJAAIABAAIAJgCIAJgBQANgKAQgGQAMgFANAAQANgCAOADQANACAMAGQAMAFAKAIQANAMAJAOIAAABQAKAEAJAGQAZAQAKAbQAPAkgEAnQgBAUgEAUQgBATAAAVIAAAiIAAAeIAAAeIAAAXQAEAQABAQQABASgBARIAAAhIAAAeQAAAOgBAOIgEAUIAAAKIAAAOIgBALIgBALIgBAHIgBAFIgBAEIAAAJIgBAJIgBAJIgCAKIgBAEIAAAEIAAAKIgBAJIgBAJIgCAJIgBAEIAAAIIgBAMIAAAIIgBAJIgCAIIgBAJIAAARIgBAPIgBANIgCAPIgBAHIAAAnIAAAeIAAAcIAAAXIAAAXIAAAEIABAHIACAJIABAJIABAJIAAAJQAHAfgBAgIgBA1IAAAwIAAAvQAAAXgDAYIgCAMIAAAjIAAAeIAAAdIAAAYIgBAZIAAAFQAEAMABAMQABALAAALIAAAQIAAARIAAAOIAAAEIADAPIACANIAAAOIAAAMIAAAJIAAAFQAFAVAAAWIAAAiIAAAiIAAAdIAAAiQAHAfgBAfIgBA4IAAA7IAAA5QABAbgCAbQAPAEAMAIQAcATALAeQAIATgBAVIACAMIACAMIABAMIAAAMIAAAQIAAARIACAIIABAJIACAJIAAAJIAAAJIAAAJIAAAKIADAIIACAFIABAFIABAFIABAGIABAFIABANIABAMIAAADIABAEIABADIAAAEIABAEIAAADIABAFIAAAEIABAFIAAADIABAEIABAEIABAEIAAAEIACAEIABAFIABADIAAAEIABADIABADIABAEIABADIABAEIABAEIABAFIABADIABAEIABAFIABAEIABAEIAAAEIAAAFIACADIABAEIAAADIABADIABAEIAAAEIABAEIAAAEIAAAEIABAEIABAEIABAFIABAEIABAFIAAAFIAAAEIAAAEIAAAEIAAADIAFAaQABAPAAAQIAAApIAAAeQAAARgBAQQgBALgEAKIAAAKIAAAKIAAAJIgBAKIgCAJIgCAJIAAADIAAADIAAADIAAACIgBADIAAAEIAAADIgBADIAAAEIgBACIAAADIgBAEIgBAFIgBAEIgBAEIgBAGIAAAEIgCAFIgBAEIgBAFIgBAEIgBAFIgBADIgBAFIgBAEIgCAFIAAADIgBAFIgBADIgBAEIgCAEIAAADIgBAEIgBADIgBAEIgBAEIgCADIgBAEIgCAEIgCAEIAAACIgBADIgBAFIgCADIgBAFIgBAEIgBAFIgBADIgCAFIgCAEIgCAEIAAADIgBACIAAADIgBAEIgBADIgBADIAAAFIgBAEIgBAFIgBADIgBAFIgCADIgBAFIAAABIgCADIgBAFIgBACIgBADIAAAEIgBADIgBAFIgBAEIgCAFIAAADIgBAEIgBAFIgBAEIgCAFIAAADIgBAEIgBADIgBAFIgBADIgCAEIAAADIgBADIAAADIgBADIgCAMIgDAMIgEAOIgDAMIgEAQIgFAQIAAAEIgBAEIAAAEIgBAEIgBAEIAAADIgBAEIgBAEIAAAFIAAAEIgBAFIgBAEIAAAFIgBADIgBAEIgBAEIAAAFIgBAEIgBAFIAAAEIgBACIgBADIAAALIAAAJIAAAIIAAAJIgBAJIgCANIgCAKIAAAjIAAAjIAAApIAAAiIAAAdIABACIABAFIAAAFIABAEIABAFQAEAPACAQQABARAAAQIAAAmIAAAiIAAAiIAAAEIABAIIACALIABALIABAJIAAAQIAAATIAAAOQAHAngBAoQAAAagEAZQgDATgJAPQAJASACAVQACAfgQAbQgNAWgXANQgXAPgbAAIgVAAIgJACIgJABIgJABIgIAAIgJAAIgCAAQgtAJgugBQgwgCgwAAIhrAAIh7AAIhkAAIgWAAIgBABIgKABIgJABIgKACIgCAAIgIACIgJACIgJABIgJAAIgGABIgIABIgHABIgFACIgJADIgJABIgJABIgJAAIgGACIgJABIgJABIgIABIgIABIgGAAQgMADgMABQgNABgMgBIgSAAIgSAAIgSAAIgSAAIgTAAIgVAAIgLgBIgLgBIgLgCIgLAAIgWAAIgUAAIgGAAIgHgBIgLgBIgLgCIgLgCIhDAAIg3AAIg4AAIhEAAIhBAAIgWAAIgUADIgVADIgVAAIgVAAIgUAAIgUAAIgKAAIgKACIgKABIgKABIgLAAIgKABIgLgBIgLAAIgKAAIhPAAIhPAAIhLAAIhLABIgKAAQghAAgigDgEAa3AgiIABAAIgBAAIgBAAIABAAgEgjKAgeIABAAIgBgBgEgHzAgTIABAAIgBgBIgBAAIABABgAb/dmIABAAIgBgBIgBAAIABABgARUdmIABAAIABgBIgBAAIgBABgEghRAdmIABAAIgBgBIAAAAgAb7dlIABAAIgBAAIgBAAIABAAgEghUAdlIABAAIgBAAIgBAAIABAAgAGH8YIABAAIABgBIgBAAIgBABgAa/8yIABAAIABAAIgBAAgADx/QIABAAIABgBIgBAAIgBABgAja/fIABAAIABAAIgBAAIgBAAIgBAAIABAAgAjd/fIABAAIgBgBIgBAAIABABg");
	this.shape.setTransform(0.0063,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-292.4,-209.1,584.8,418.2);


(lib.skylong = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.frame_00_delay015s();
	this.instance.setTransform(-248,-141);

	this.instance_1 = new lib.frame_01_delay015s();
	this.instance_1.setTransform(-248,-141);

	this.instance_2 = new lib.frame_02_delay015s();
	this.instance_2.setTransform(-248,-141);

	this.instance_3 = new lib.frame_03_delay015s();
	this.instance_3.setTransform(-248,-141);

	this.instance_4 = new lib.frame_04_delay015s();
	this.instance_4.setTransform(-248,-141);

	this.instance_5 = new lib.frame_05_delay015s();
	this.instance_5.setTransform(-248,-141);

	this.instance_6 = new lib.frame_06_delay015s();
	this.instance_6.setTransform(-248,-141);

	this.instance_7 = new lib.frame_07_delay015s();
	this.instance_7.setTransform(-248,-141);

	this.instance_8 = new lib.frame_08_delay015s();
	this.instance_8.setTransform(-248,-141);

	this.instance_9 = new lib.frame_09_delay015s();
	this.instance_9.setTransform(-248,-141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},2).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_3}]},7).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},7).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_7}]},12).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},9).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:true},2).wait(147).to({_off:false},0).wait(16));

	// Layer_2
	this.instance_10 = new lib.frame_00_delay015s();
	this.instance_10.setTransform(-248,-141);

	this.instance_11 = new lib.frame_01_delay015s();
	this.instance_11.setTransform(-248,-141);

	this.instance_12 = new lib.frame_02_delay015s();
	this.instance_12.setTransform(-248,-141);

	this.instance_13 = new lib.frame_03_delay015s();
	this.instance_13.setTransform(-248,-141);

	this.instance_14 = new lib.frame_04_delay015s();
	this.instance_14.setTransform(-248,-141);

	this.instance_15 = new lib.frame_05_delay015s();
	this.instance_15.setTransform(-248,-141);

	this.instance_16 = new lib.frame_06_delay015s();
	this.instance_16.setTransform(-248,-141);

	this.instance_17 = new lib.frame_07_delay015s();
	this.instance_17.setTransform(-248,-141);

	this.instance_18 = new lib.frame_08_delay015s();
	this.instance_18.setTransform(-248,-141);

	this.instance_19 = new lib.frame_09_delay015s();
	this.instance_19.setTransform(-248,-141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},8).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},8).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},8).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},8).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},8).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},8).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},8).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_17}]},8).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},9).to({state:[{t:this.instance_17}]},12).to({state:[{t:this.instance_16}]},9).to({state:[{t:this.instance_15}]},9).to({state:[{t:this.instance_14}]},9).to({state:[{t:this.instance_13}]},9).to({state:[{t:this.instance_12}]},9).to({state:[{t:this.instance_11}]},9).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.instance_10}]},9).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({_off:true},1).wait(147).to({_off:false},0).wait(17));

	// Layer_1
	this.instance_20 = new lib.frame_00_delay015s();
	this.instance_20.setTransform(-248,-141);

	this.instance_21 = new lib.frame_01_delay015s();
	this.instance_21.setTransform(-248,-141);

	this.instance_22 = new lib.frame_02_delay015s();
	this.instance_22.setTransform(-248,-141);

	this.instance_23 = new lib.frame_03_delay015s();
	this.instance_23.setTransform(-248,-141);

	this.instance_24 = new lib.frame_04_delay015s();
	this.instance_24.setTransform(-248,-141);

	this.instance_25 = new lib.frame_05_delay015s();
	this.instance_25.setTransform(-248,-141);

	this.instance_26 = new lib.frame_06_delay015s();
	this.instance_26.setTransform(-248,-141);

	this.instance_27 = new lib.frame_07_delay015s();
	this.instance_27.setTransform(-248,-141);

	this.instance_28 = new lib.frame_08_delay015s();
	this.instance_28.setTransform(-248,-141);

	this.instance_29 = new lib.frame_09_delay015s();
	this.instance_29.setTransform(-248,-141);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).to({state:[{t:this.instance_21}]},9).to({state:[{t:this.instance_22}]},9).to({state:[{t:this.instance_23}]},9).to({state:[{t:this.instance_24}]},9).to({state:[{t:this.instance_25}]},9).to({state:[{t:this.instance_26}]},9).to({state:[{t:this.instance_27}]},9).to({state:[{t:this.instance_28}]},9).to({state:[{t:this.instance_29}]},9).to({state:[{t:this.instance_29}]},9).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_27}]},9).to({state:[{t:this.instance_26}]},9).to({state:[{t:this.instance_25}]},9).to({state:[{t:this.instance_24}]},9).to({state:[{t:this.instance_23}]},9).to({state:[{t:this.instance_22}]},9).to({state:[{t:this.instance_21}]},9).to({state:[{t:this.instance_20}]},9).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248,-141,500,280);


(lib.Symbol51 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#323232").ss(4,1,1).p("AxRqmQBsn8J9hbQJ7hcGuISQGuIRgfJDQgfJElKG6");
	this.shape.setTransform(110.6043,129.1509);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,225.2,262.3);


(lib.psirightthrobber = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").p("ACWCWIkrAAIAAkrIErAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D7D7D").s().p("AiVCWIAAkrIErAAIAAErg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.psirightthrobber, new cjs.Rectangle(-16,-16,32,32), null);


(lib.psirightfiller = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").p("AB4CWIjvAAIAAkrIDvAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D7D7D").s().p("Ah3CWIAAkrIDvAAIAAErg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.psirightfiller, new cjs.Rectangle(-12.9,-16,25.9,32), null);


(lib.psiright = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").p("AEiHvIpDAAIAAvdIJDAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D7D7D").s().p("AkhHvIAAvdIJDAAIAAPdg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.psiright, new cjs.Rectangle(-30,-50.5,60,101.1), null);


(lib.psileft = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#FFFFFF").p("AEiKVIpDAAIAA0pIJDAAg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D7D7D").s().p("AkhKVIAA0pIJDAAIAAUpg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.psileft, new cjs.Rectangle(-30,-67.1,60,134.3), null);


(lib.newsymbol = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#7D7D7D").p("ApiAAITFAA");
	this.shape.setTransform(0.475,18.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7D7D7D").p("AEvC9Ipdl5");
	this.shape_1.setTransform(30.7,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#7D7D7D").p("Ak0C9IJpl5");
	this.shape_2.setTransform(-30.425,-0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7D7D7D").s().p("ApeC9IgCgDIJkl2IJdF5g");
	this.shape_3.setTransform(0.05,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.newsymbol, new cjs.Rectangle(-62.3,-19.9,124.9,39.8), null);


(lib.smallbox_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.smallbox();
	this.instance.setTransform(-396,-247);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-396,-247,800,507);


(lib.loadingguibox = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.loadinguibox();
	this.instance.setTransform(0,0,0.3438,0.3437);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,169.5);


(lib.loadingguibar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.loadinguibar();
	this.instance.setTransform(0,0,0.3438,0.3438);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275,171.9);


(lib.nocursor = function(mode,startPosition,loop,reversed) {
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
	this.frame_1 = function() {
		canvas.style.cursor = "none";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,204,0.549)").s().p("AjHAqQABgQAIgEQAFgDAGADQAGADACAGQAEAHgBAQQgODVAjDWQAFAeABAOQACAZgGASIgUADQgvkEANkNgArbIFQABgMAJgcQALgmABgyQABgegDg7QgUmbAAmxQAAgYANgCQAJgBAFAKQAEAJAAALQgDGqAYGgIAchDQARgkASgaQAuhEA/gWQAagJAQAGQAdALAKA2IA5EOQAJArgEAWIgXADQghixgwjBQg0AEgmAjQgPANgQAYQggAugVBDQgOAqgSBQIgdCAIgTACQgLgNACgXgAHKHJQg0gBghgKQgtgNgVgfQgGgJAAgLQABgLAJgCQAGgBAGAFIAKAMQAUAZAnAKQAbAGAvAAQA6AAAggCQAygDAngJIAigIQATgFAPABQAPAAADAHQADAHgGAHQgGAGgJADQg3AThHAGQghADgsAAIg0gBgAEXBnIAAgCIABgCIAEgFIADgBQAFgCADAAIAEAAIACACIADADIACACIAAADQAAAGgCAGIgSADQgFgHgCgGgAJhBJIAAgCIABgCIAEgFIADgBQAFgCADAAIAEAAIACACIADADIACACIAAADQAAAGgCAGIgSADQgFgHgCgGgAjZirQgtgBgVgKQgOgFgHgKQgPgUAQgtQAKgdAIgQQANgXARgNQAHAFACAKQADAJgDAJQgCAHgFAJIgJAPQgLASgFAVQgDAQAEAHQAHAKAXABIAYABQAMAAAFgCQALgEALgSQAagoAAgaQAAgSgJgIQgGgGgQgDQgPgDgGgFQgFARgJACQgJACgFgKQgEgGABgLQAAgNAGgHQAJgJAPADIAZAIIAUAEQANACAGAFQATAMAAAjQABAggMAeQgMAegWAXQgMANgLADQgGACgIAAIgHAAg");
	this.shape.setTransform(-226.3776,-81.2844);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-299.6,-138.3,146.50000000000003,114.10000000000001);


(lib.skaianportalanimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {s1:4,p1:36,p2:51,p3:138,p4:153,f1:178};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_50 = function() {
		this.gotoAndPlay(0);
	}
	this.frame_83 = function() {
		this.stop();
	}
	this.frame_152 = function() {
		this.stop();
	}
	this.frame_177 = function() {
		this.gotoAndPlay(0)
	}
	this.frame_225 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(16).call(this.frame_50).wait(33).call(this.frame_83).wait(69).call(this.frame_152).wait(25).call(this.frame_177).wait(48).call(this.frame_225).wait(15));

	// Layer_3
	this.instance = new lib.Symbol51("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(4,1,1).p("AxRqmQBsn8J9hbQJ7hcGuISQGuIRgfJDQgfJElKG6");
	this.shape.setTransform(110.6043,129.1509);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#323232").ss(4,1,1).p("AyoncQArrdKFjKQKDjKJFO4QJEO2iEHIQiDHGltD5");
	this.shape_1.setTransform(119.2652,109.0491);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#323232").ss(4,1,1).p("A0DkTQgWu9KMk5QKNk5LZVeQLbVdjoFKQjoFKmQA3");
	this.shape_2.setTransform(128.3561,88.9085);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#323232").ss(4,1,1).p("Az2kcQgUuzKMk1QKLk0LMVQQLLVOjkFPQjkFPl9A6");
	this.shape_3.setTransform(127.1001,89.823);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#323232").ss(4,1,1).p("AzpkmQgSupKNkwQKKkwK8VBQK9VAjgFVQjhFVlpA8");
	this.shape_4.setTransform(125.8408,90.7653);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#323232").ss(4,1,1).p("AzdkvQgOugKMkrQKKkrKtUzQKtUxjcFaQjdFalVA/");
	this.shape_5.setTransform(124.5833,91.6743);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#323232").ss(4,1,1).p("AzQk4QgMuXKLkmQKKknKeUkQKeUjjZFgQjYFflCBC");
	this.shape_6.setTransform(123.3186,92.6074);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#323232").ss(4,1,1).p("AzElBQgJuOKLkhQKKkiKOUWQKPUUjVFlQjUFlkvBE");
	this.shape_7.setTransform(122.0573,93.5087);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#323232").ss(4,1,1).p("Ay3lLQgGuEKLkcQKJkeJ/UIQKAUGjRFqQjRFqkbBH");
	this.shape_8.setTransform(120.7958,94.4591);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#323232").ss(4,1,1).p("AyqlUQgEt6KLkYQKJkZJwT5QJwT3jNFwQjNFwkHBJ");
	this.shape_9.setTransform(119.5337,95.3668);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#323232").ss(4,1,1).p("AyeldQgBtxKLkTQKIkUJhTqQJhTpjJF2QjKF1jzBL");
	this.shape_10.setTransform(118.2688,96.2679);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#323232").ss(4,1,1).p("AyRlmQACtoKKkOQKIkQJRTcQJSTajFF7QjGF7jfBO");
	this.shape_11.setTransform(117.0047,97.2173);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#323232").ss(4,1,1).p("AyElvQAEteKKkKQKIkLJCTNQJCTMjBGBQjCF/jLBR");
	this.shape_12.setTransform(115.7406,98.1181);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#323232").ss(4,1,1).p("Ax4l5QAItUKJkGQKHkGIzS/QI0S+i+GFQi+GGi4BT");
	this.shape_13.setTransform(114.4705,99.0512);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#323232").ss(4,1,1).p("AxrmCQAKtLKJkBQKHkBIkSwQIkSvi6GMQi6GKilBW");
	this.shape_14.setTransform(113.2067,99.9584);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#323232").ss(4,1,1).p("AxemLQANtCKIj8QKHj9IVSiQIUShi2GQQi2GQiRBZ");
	this.shape_15.setTransform(111.943,100.9009);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#323232").ss(4,1,1).p("AxSmUQAQs4KIj4QKHj4IFSUQIFSSiyGWQiyGVh9Bb");
	this.shape_16.setTransform(110.6794,101.8086);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#323232").ss(4,1,1).p("AxFmdQASsvKIjzQKGjzH2SFQH2SDiuGcQiuGbhqBd");
	this.shape_17.setTransform(109.4144,102.7154);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#323232").ss(4,1,1).p("Aw5mnQAWslKHjuQKGjvHnR3QHmR1iqGgQiqGhhWBg");
	this.shape_18.setTransform(108.1511,103.6577);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#323232").ss(4,1,1).p("AwsmwQAYscKIjpQKFjqHYRoQHXRmimGnQinGlhCBj");
	this.shape_19.setTransform(106.888,104.5641);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#323232").ss(4,1,1).p("Awfm5QAbsSKGjlQKGjlHIRZQHIRYijGsQiiGrgvBl");
	this.shape_20.setTransform(105.6194,105.4962);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#323232").ss(4,1,1).p("AwTnCQAesJKGjgQKFjgG5RLQG5RJifGxQifGxgbBn");
	this.shape_21.setTransform(104.3568,106.396);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#323232").ss(4,1,1).p("AwGnLQAhsAKGjbQKEjcGqQ8QGqQ7ibG3QibG2gIBq");
	this.shape_22.setTransform(103.0943,107.3442);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#323232").ss(4,1,1).p("Av5nVQAjr2KGjWQKEjXGaQtQGbQtiXG8QiYG7ANBt");
	this.shape_23.setTransform(101.8304,108.2507);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#323232").ss(4,1,1).p("AvtndQAmrtKGjSQKEjSGLQfQGLQeiTHBQiUHBAgBv");
	this.shape_24.setTransform(100.5685,109.1493);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#323232").ss(4,1,1).p("AvgnnQAorjKGjNQKDjOF8QRQF8QPiPHHQiQHGA0By");
	this.shape_25.setTransform(99.3068,110.0978);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#323232").ss(4,1,1).p("AvTnwQArraKFjIQKDjJFtQCQFsQBiLHMQiMHMBIB0");
	this.shape_26.setTransform(98.0437,110.9968);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#323232").ss(4,1,1).p("AvHn5QAurRKFjDQKDjFFdP0QFePyiIHSQiIHRBbB3");
	this.shape_27.setTransform(96.7798,111.9268);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#323232").ss(4,1,1).p("Au6oCQAxrHKEi/QKDjAFOPlQFOPkiEHXQiEHXBuB5");
	this.shape_28.setTransform(95.5195,112.8322);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#323232").ss(4,1,1).p("AuuoMQA0q9KEi6QKCi8E/PXQE/PViAHdQiBHcCDB8");
	this.shape_29.setTransform(94.2577,113.7726);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#323232").ss(4,1,1).p("AuhoVQA3q0KDi1QKCi3EwPIQEvPHh8HiQh9HiCXB+");
	this.shape_30.setTransform(92.9944,114.678);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#323232").ss(4,1,1).p("Av2pdQBRpYKAiJQJ/iJFvLtQFuLshNITQhOIThaEc");
	this.shape_31.setTransform(101.5264,121.9158);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#323232").ss(4,1,1).p("AwDpMQBaptICiRQIAiRHSKoQHRKnAIImQAIImjXGl");
	this.shape_32.setTransform(102.8394,120.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#323232").ss(4,1,1).p("Au+nzQBIrdGHjGQGGjIH0M+QH1M9AwIJQAvIJhkGP");
	this.shape_33.setTransform(95.8828,111.2996);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#323232").ss(4,1,1).p("AvIoCQBLrKGbi+QGai+HvMlQHvMjApIOQApIOh4GT");
	this.shape_34.setTransform(96.9237,112.785);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#323232").ss(4,1,1).p("AvToRQBOq3Gvi1QGvi1HpMMQHqMLAiISQAiITiLGW");
	this.shape_35.setTransform(98.0351,114.2946);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#323232").ss(4,1,1).p("AvfogQBRqkHEisQHEisHjLyQHjLzAcIWQAcIYieGa");
	this.shape_36.setTransform(99.1858,115.7785);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#323232").ss(4,1,1).p("AvrovQBUqSHZijQHXijHeLaQHdLZAVIcQAWIdixGd");
	this.shape_37.setTransform(100.3664,117.2615);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#323232").ss(4,1,1).p("Av3o+QBXp/HtiaQHsiaHYLAQHXLBAPIgQAPIijEGh");
	this.shape_38.setTransform(101.5783,118.7606);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#323232").ss(4,1,1).p("AwQpbQBdpaIWiIQIViIHMKOQHLKOACIrQABIrjqGp");
	this.shape_39.setTransform(104.1005,121.7301);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#323232").ss(4,1,1).p("AwdpqQBhpHIqh/QIpiAHGJ2QHGJ1gFIwQgFIwj9Gs");
	this.shape_40.setTransform(105.3777,123.2263);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#323232").ss(4,1,1).p("Awqp5QBko1I/h2QI+h2G/JcQHAJdgMI0QgLI1kQGw");
	this.shape_41.setTransform(106.6644,124.7039);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#323232").ss(4,1,1).p("Aw3qIQBnoiJThtQJThtG5JDQG6JEgSI5QgSI6kjGz");
	this.shape_42.setTransform(107.9603,126.1799);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#323232").ss(4,1,1).p("AxEqXQBqoPJohkQJnhkG0IqQGzIqgYI/QgZI/k2G2");
	this.shape_43.setTransform(109.2902,127.679);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#323232").ss(4,1,1).p("AygmVQE1wEKGh0QKFh1FhNUQFgNSA7LqQA7Lqo/Ak");
	this.shape_44.setTransform(118.529,101.8687);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#323232").ss(4,1,1).p("Az3i5QH94LKQiPQKQiOESSWQETSVCVOQQCWOQs0ly");
	this.shape_45.setTransform(127.1516,79.8806);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#323232").ss(4,1,1).p("AzZi/QHr3rKLiRQKKiSEMSGQELSGCHOGQCHOFrwlh");
	this.shape_46.setTransform(124.6018,80.8116);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#323232").ss(4,1,1).p("Ay8jEQHa3LKGiVQKGiVEER3QEER2B4N8QB5N6qslR");
	this.shape_47.setTransform(122.0024,81.7118);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#323232").ss(4,1,1).p("AyejKQHI2qKBiYQKBiZD9RoQD8RnBqNwQBqNxpolB");
	this.shape_48.setTransform(119.4526,82.6377);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#323232").ss(4,1,1).p("AyBjPQG32KJ9icQJ7icD2RZQD1RXBcNmQBbNmokkw");
	this.shape_49.setTransform(116.8791,83.5384);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#323232").ss(4,1,1).p("AxjjWQGl1pJ3ifQJ3igDuRKQDuRIBNNcQBONbnhkg");
	this.shape_50.setTransform(114.3127,84.4772);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#323232").ss(4,1,1).p("AxGjcQGT1JJziiQJyijDnQ6QDmQ5A/NRQA/NRmdkP");
	this.shape_51.setTransform(111.7608,85.4135);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#323232").ss(4,1,1).p("AwojiQGC0oJuimQJsinDgQrQDfQqAwNHQAxNGlZj/");
	this.shape_52.setTransform(109.1739,86.3509);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#323232").ss(4,1,1).p("AwLjoQFw0IJpipQJoiqDYQcQDYQaAiM8QAiM8kVjv");
	this.shape_53.setTransform(106.6356,87.3165);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#323232").ss(4,1,1).p("AvujuQFfzoJkisQJjitDRQMQDQQLAUMxQAUMyjSjf");
	this.shape_54.setTransform(104.0828,88.2673);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#323232").ss(4,1,1).p("AvRj0QFNzHJgiwQJeixDJP9QDJP8AFMnQAFMmiNjN");
	this.shape_55.setTransform(101.5585,89.2358);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#323232").ss(4,1,1).p("Au1j6QE8ynJai0QJaizDCPtQDBPtgJMcQgJMchKi9");
	this.shape_56.setTransform(99.12,90.1874);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#323232").ss(4,1,1).p("AuZkAQEqyHJVi3QJVi3C6PeQC7PdgYMSQgYMSgGit");
	this.shape_57.setTransform(96.7868,91.1844);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#323232").ss(4,1,1).p("AuHkHQEYxmJRi7QJPi6CzPPQCzPOgmMHQgmMHA+ic");
	this.shape_58.setTransform(95.4,92.1854);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#323232").ss(4,1,1).p("AuGkNQEGxHJMi9QJMi+CrPAQCsO+g1L9Qg1L8CCiM");
	this.shape_59.setTransform(95.6,93.1895);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#323232").ss(4,1,1).p("AuEkVQD1wlJHjBQJFjCClOxQCkOvhDLyQhDLyDGh7");
	this.shape_60.setTransform(95.85,94.224);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#323232").ss(4,1,1).p("AuDkcQDjwFJCjEQJBjFCeOhQCdOghSLoQhRLnEJhr");
	this.shape_61.setTransform(96.05,95.2564);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#323232").ss(4,1,1).p("AuBkjQDRvlI+jHQI8jJCWOSQCVORhfLdQhhLdFNhb");
	this.shape_62.setTransform(96.275,96.3191);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#323232").ss(4,1,1).p("AuAkqQDAvFI5jLQI3jMCOODQCPOChvLSQhuLSGRhK");
	this.shape_63.setTransform(96.525,97.4075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#323232").ss(4,1,1).p("At+kxQCuulI0jOQIyjPCHNzQCHNzh8LIQh9LHHUg6");
	this.shape_64.setTransform(96.725,98.4789);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#323232").ss(4,1,1).p("At9k5QCduEIvjSQItjTCANlQCANjiMK9QiLK9IZgp");
	this.shape_65.setTransform(96.975,99.6101);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#323232").ss(4,1,1).p("At7lBQCLtjIqjWQIpjWB4NVQB4NUiZKzQiaKyJcgZ");
	this.shape_66.setTransform(97.175,100.7477);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#323232").ss(4,1,1).p("At6lJQB6tEIljYQIkjZBxNFQBxNEioKpQioKoKggJ");
	this.shape_67.setTransform(97.4,101.9475);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#323232").ss(4,1,1).p("At4lSQBosjIgjcQIfjcBqM2QBpM1i2KeQi3KdLkAI");
	this.shape_68.setTransform(97.625,103.1431);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#323232").ss(4,1,1).p("At3lbQBXsCIcjgQIajgBiMnQBiMmjFKTQjFKTMoAY");
	this.shape_69.setTransform(97.85,104.3666);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#323232").ss(4,1,1).p("At1lkQBFriIWjiQIVjkBbMYQBbMWjTKJQjUKINsAp");
	this.shape_70.setTransform(98.075,105.5854);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#323232").ss(4,1,1).p("At0lsQA0rCISjmQIPjnBUMJQBUMHjiJ+QjhJ+OvA5");
	this.shape_71.setTransform(98.3,106.762);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#323232").ss(4,1,1).p("Atyl1QAiqhINjqQILjqBML5QBML4jwJ0QjvJzPyBK");
	this.shape_72.setTransform(98.525,107.9734);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#323232").ss(4,1,1).p("Atxl9QARqBIHjtQIHjuBFLqQBFLqj/JoQj+JoQ3Ba");
	this.shape_73.setTransform(98.75,109.1574);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#323232").ss(4,1,1).p("AtvmGQgBpgIDjxQIBjwA+LaQA9LakNJeQkMJeR6Bq");
	this.shape_74.setTransform(98.9748,110.3574);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#323232").ss(4,1,1).p("AtwmLQABpeIFjuQIEjuBELWQBELXkJJdQkIJeRgBw");
	this.shape_75.setTransform(98.85,110.6886);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#323232").ss(4,1,1).p("AtxmQQADpdIHjrQIGjsBLLUQBKLTkEJdQkEJdRGB2");
	this.shape_76.setTransform(98.75,111.0477);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#323232").ss(4,1,1).p("AtxmVQAEpbIKjpQIIjpBRLQQBRLQkAJcQkAJcQrB9");
	this.shape_77.setTransform(98.625,111.3767);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#323232").ss(4,1,1).p("AtymaQAGpaIMjmQIKjmBYLMQBYLMj8JcQj7JcQQCD");
	this.shape_78.setTransform(98.5,111.729);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#323232").ss(4,1,1).p("AtzmgQAJpXIOjjQIMjkBeLIQBfLJj4JbQj3JcP2CI");
	this.shape_79.setTransform(98.375,112.0614);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#323232").ss(4,1,1).p("At0mlQALpWIQjgQIOjhBlLFQBlLFjzJaQjzJcPcCO");
	this.shape_80.setTransform(98.275,112.4149);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#323232").ss(4,1,1).p("At0mqQAMpUISjeQIRjeBrLCQBsLBjvJaQjvJbPBCU");
	this.shape_81.setTransform(98.175,112.7432);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#323232").ss(4,1,1).p("At1mvQAOpSIUjbQIUjcBxK+QBzK9jsJaQjqJbOnCa");
	this.shape_82.setTransform(98.05,113.0753);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#323232").ss(4,1,1).p("At2m0QAQpRIWjYQIWjZB5K6QB4K6jnJZQjmJaONCh");
	this.shape_83.setTransform(97.95,113.4282);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#323232").ss(4,1,1).p("At3m6QASpOIZjWQIXjWCAK2QB/K3jjJZQjjJZN0Cm");
	this.shape_84.setTransform(97.825,113.7546);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#323232").ss(4,1,1).p("At4m/QAUpNIbjTQIajUCFKzQCGKzjeJZQjfJZNaCs");
	this.shape_85.setTransform(97.7,114.1114);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#323232").ss(4,1,1).p("At4nEQAWpLIdjQQIbjRCNKvQCMKwjaJYQjaJYM+Cy");
	this.shape_86.setTransform(97.575,114.4388);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#323232").ss(4,1,1).p("At5nJQAYpJIfjOQIejOCTKsQCTKrjWJYQjWJYMkC4");
	this.shape_87.setTransform(97.475,114.791);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#323232").ss(4,1,1).p("At6nOQAapIIijLQIgjLCZKoQCaKojSJXQjSJXMKC/");
	this.shape_88.setTransform(97.35,115.1314);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#323232").ss(4,1,1).p("At7nTQAcpGIkjIQIijJCgKkQCgKljNJXQjOJXLwDE");
	this.shape_89.setTransform(97.225,115.448);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#323232").ss(4,1,1).p("At8nYQAepEImjGQIkjGCnKhQCnKhjJJWQjKJWLWDL");
	this.shape_90.setTransform(97.125,115.7995);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#323232").ss(4,1,1).p("At9neQAgpCIojDQInjDCuKdQCtKdjFJWQjFJWK7DQ");
	this.shape_91.setTransform(97,116.1407);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#323232").ss(4,1,1).p("At9njQAipAIqjBQIpjBCzKaQC0KajAJVQjBJWKgDW");
	this.shape_92.setTransform(96.875,116.4818);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#323232").ss(4,1,1).p("At+noQAko/Isi+QIri+C6KWQC7KXi8JUQi9JVKGDd");
	this.shape_93.setTransform(96.75,116.8065);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#323232").ss(4,1,1).p("At/ntQAmo9Iui7QIti8DCKTQDAKSi4JUQi4JVJsDj");
	this.shape_94.setTransform(96.65,117.1722);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#323232").ss(4,1,1).p("At/nyQAno7Ixi5QIvi5DIKQQDHKOizJUQi1JUJRDp");
	this.shape_95.setTransform(96.55,117.489);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#323232").ss(4,1,1).p("AuAn4QApo5Izi2QIxi2DPKMQDOKLiwJTQiwJUI3Du");
	this.shape_96.setTransform(96.425,117.813);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#323232").ss(4,1,1).p("AuBn9QAro3I1izQI0i0DVKIQDUKIirJTQisJTIdD0");
	this.shape_97.setTransform(96.325,118.1782);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#323232").ss(4,1,1).p("AuCoCQAto1I3ixQI3ixDbKFQDbKEinJSQinJTICD6");
	this.shape_98.setTransform(96.2,118.4932);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#323232").ss(4,1,1).p("AuDoHQAwo0I5iuQI4iuDiKBQDiKBijJRQijJTHoEA");
	this.shape_99.setTransform(96.075,118.8414);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#323232").ss(4,1,1).p("AuEoMQAyoyI7irQI6isDpJ9QDoJ9ieJSQifJSHOEG");
	this.shape_100.setTransform(95.95,119.1811);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#323232").ss(4,1,1).p("AuEoRQAzoxI+ioQI8ipDvJ6QDvJ5iaJRQibJRG0EN");
	this.shape_101.setTransform(95.85,119.5216);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#323232").ss(4,1,1).p("AuFoXQA1ouJAimQI/imD1J2QD2J2iWJQQiWJRGYES");
	this.shape_102.setTransform(95.725,119.8598);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#323232").ss(4,1,1).p("AuGocQA3osJCijQJBikD9JyQD7JziSJQQiRJQF+EY");
	this.shape_103.setTransform(95.6,120.182);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#323232").ss(4,1,1).p("AuHohQA5orJEigQJDihEEJvQECJuiOJQQiNJQFkEe");
	this.shape_104.setTransform(95.5,120.5219);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#323232").ss(4,1,1).p("AuIomQA8opJGieQJFieEKJrQEJJriJJPQiKJQFKEk");
	this.shape_105.setTransform(95.375,120.8605);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#323232").ss(4,1,1).p("AuJorQA+ooJIibQJIibEQJnQEQJoiFJOQiFJPEvEr");
	this.shape_106.setTransform(95.25,121.2069);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#323232").ss(4,1,1).p("AuJowQA/omJLiYQJJiZEXJkQEWJkiBJOQiAJPEUEw");
	this.shape_107.setTransform(95.125,121.52);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#323232").ss(4,1,1).p("AuKo1QBBokJNiWQJMiWEdJgQEdJgh9JOQh8JOD6E3");
	this.shape_108.setTransform(95.025,121.8829);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#323232").ss(4,1,1).p("AuLo7QBDoiJPiTQJOiTEkJdQEjJch4JNQh4JODgE8");
	this.shape_109.setTransform(94.925,122.2044);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#323232").ss(4,1,1).p("AuMpAQBFogJSiQQJPiRErJZQEqJZh0JNQh0JNDGFC");
	this.shape_110.setTransform(94.8,122.5168);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#323232").ss(4,1,1).p("AuNpFQBHoeJUiOQJSiOExJWQEwJVhvJMQhwJNCsFI");
	this.shape_111.setTransform(94.7,122.8789);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#323232").ss(4,1,1).p("AuNpKQBJocJViLQJUiME4JSQE3JShrJMQhsJMCRFO");
	this.shape_112.setTransform(94.575,123.1985);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#323232").ss(4,1,1).p("AuTpPQBLobJYiIQJWiJE+JOQE+JPhnJLQhnJMB2FU");
	this.shape_113.setTransform(94.9457,123.535);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#323232").ss(4,1,1).p("AuepUQBNoZJaiGQJZiGFEJLQFFJKhjJLQhjJMBcFa");
	this.shape_114.setTransform(95.8321,123.8713);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#323232").ss(4,1,1).p("AuppZQBPoYJciDQJbiDFLJHQFLJHheJKQhfJLBCFh");
	this.shape_115.setTransform(96.7244,124.2158);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#323232").ss(4,1,1).p("Au0peQBRoWJeiAQJdiBFSJEQFSJDhbJKQhaJLAnFm");
	this.shape_116.setTransform(97.6068,124.5339);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#323232").ss(4,1,1).p("Au+pkQBToTJgh+QJfh+FZJAQFYJAhXJJQhWJKANFs");
	this.shape_117.setTransform(98.494,124.8611);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#323232").ss(4,1,1).p("AvKppQBVoSJjh7QJhh7FfI8QFfI8hSJJQhSJKgNFy");
	this.shape_118.setTransform(99.4023,125.2043);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#323232").ss(4,1,1).p("AvVpuQBXoQJlh4QJjh5FmI5QFlI5hNJIQhOJJgoF4");
	this.shape_119.setTransform(100.3162,125.522);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#323232").ss(4,1,1).p("AvgpzQBZoOJnh2QJmh2FsI1QFsI1hKJIQhJJJhCF+");
	this.shape_120.setTransform(101.2174,125.8735);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#323232").ss(4,1,1).p("Avrp4QBboMJphzQJoh0FzIyQFyIxhFJIQhFJIhdGE");
	this.shape_121.setTransform(102.1239,126.1898);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#323232").ss(4,1,1).p("Av2p9QBdoLJrhwQJqhxF5IuQF5IuhBJHQhBJIh2GK");
	this.shape_122.setTransform(103.0529,126.5312);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#323232").ss(4,1,1).p("AwBqCQBeoJJuhuQJshuGAIrQF/Iqg8JGQg9JIiRGQ");
	this.shape_123.setTransform(104.0122,126.8576);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#323232").ss(4,1,1).p("AwMqHQBgoHJwhrQJuhsGHInQGGIng5JGQg4JHisGW");
	this.shape_124.setTransform(104.9325,127.1725);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#323232").ss(4,1,1).p("AwYqMQBjoGJxhoQJxhpGNIkQGNIig0JGQg1JHjFGc");
	this.shape_125.setTransform(105.8765,127.5126);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#323232").ss(4,1,1).p("AwjqRQBkoEJ0hlQJzhnGUIgQGTIggwJFQgwJGjgGi");
	this.shape_126.setTransform(106.8054,127.8375);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#323232").ss(4,1,1).p("AwuqWQBmoCJ2hjQJ1hkGaIcQGaIcgsJFQgrJGj7Go");
	this.shape_127.setTransform(107.7382,128.1759);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#323232").ss(4,1,1).p("Aw6qbQBpoAJ4hhQJ3hgGhIYQGgIYgnJFQgoJFkVGu");
	this.shape_128.setTransform(108.6961,128.4894);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#323232").ss(4,1,1).p("AxGqgQBrn/J6hdQJ5hfGoIWQGnIUgjJEQgkJFkvG0");
	this.shape_129.setTransform(109.6587,128.839);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#323232").ss(4,1,1).p("AvEn9QBqoXHQk+QHOk+G1LZQG0LaAUJkQAVJmhhHH");
	this.shape_130.setTransform(96.4788,112.3231);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#323232").ss(4,1,1).p("AuclKQBnoyEjohQEiogG6OhQG7OiBIKGQBIKHCIHU");
	this.shape_131.setTransform(92.475,94.4001);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#323232").ss(4,1,1).p("AuMlhQBnotEeoBQEeoBHhOHQHiOGA5KAQA5KBBBHM");
	this.shape_132.setTransform(90.9,96.6925);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#323232").ss(4,1,1).p("At8l4QBnopEanhQEZnhIJNrQIINrAqJ7QApJ7gFHF");
	this.shape_133.setTransform(89.3272,98.994);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#323232").ss(4,1,1).p("AuImPQBookEVnBQEVnCIvNQQIwNQAaJ1QAaJ1hMG9");
	this.shape_134.setTransform(90.5469,101.2639);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#323232").ss(4,1,1).p("AuhmlQBpogEQmiQERmhJWM1QJWM0AMJvQAKJwiSG0");
	this.shape_135.setTransform(92.9572,103.513);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#323232").ss(4,1,1).p("Au7m8QBpobEMmCQELmCJ+MaQJ9MZgEJqQgFJqjYGs");
	this.shape_136.setTransform(95.6262,105.7839);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#323232").ss(4,1,1).p("AvXnSQBqoXEHliQEHliKlL+QKkL+gTJkQgUJlkfGk");
	this.shape_137.setTransform(98.3523,108.0305);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#323232").ss(4,1,1).p("AvynoQBqoTEDlCQEClCLLLjQLMLjgjJeQgjJfllGc");
	this.shape_138.setTransform(101.1066,110.2389);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#323232").ss(4,1,1).p("AwOn/QBroOD+kiQD+kiLyLHQLzLIgyJYQgzJZmsGV");
	this.shape_139.setTransform(103.8833,112.4639);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#323232").ss(4,1,1).p("AwqoUQBroKD6kCQD5kDMaKtQMaKshCJTQhCJTnyGM");
	this.shape_140.setTransform(106.6996,114.6319);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#323232").ss(4,1,1).p("AxGoqQBroFD1jiQD1jjNAKRQNBKRhQJNQhSJOo4GE");
	this.shape_141.setTransform(109.5047,116.7871);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#323232").ss(4,1,1).p("Axio/QBsoBDwjDQDwjCNoJ1QNoJ2hgJHQhhJJp/F8");
	this.shape_142.setTransform(112.326,118.9295);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#323232").ss(4,1,1).p("Ax+pUQBsn9DsiiQDrijOPJaQOPJahwJCQhwJDrFF0");
	this.shape_143.setTransform(115.1499,121.0091);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#323232").ss(4,1,1).p("AykkBQA8sxJAo6QI/o7JaXUQJZXUgoJwQgpJvj+lE");
	this.shape_144.setTransform(118.8528,87.1036);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#323232").ss(4,1,1).p("Az2g5QALxlIEwbUAIEgQaAMEAmYUAMFAmXgAyAKbQgzKbiyxC");
	this.shape_145.setTransform(127.0782,67.1312);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#323232").ss(4,1,1).p("AzuhJQAQxIIKvsUAIJgPtAL0Ak8UAL0Ak7gAxAKXQgxKXi6v5");
	this.shape_146.setTransform(126.299,68.7158);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#323232").ss(4,1,1).p("AzmhZQAVwrIPu+UAIPgO/ALjAjgUALlAjfgAxAKTQgwKTjBuw");
	this.shape_147.setTransform(125.4991,70.3367);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#323232").ss(4,1,1).p("AzehqQAZwNIVuRUAIVgORALTAiFUALUAiDgAwAKPQgvKPjIto");
	this.shape_148.setTransform(124.7212,71.9897);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#323232").ss(4,1,1).p("AzWh7QAdvwIbtjUAIbgNkALCAgpUALEAgogAuAKLQgvKKjPsf");
	this.shape_149.setTransform(123.9433,73.7069);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#323232").ss(4,1,1).p("AzPiNQAivSIhs2QIgs2KzfOQKzfLgtKHQguKGjXrV");
	this.shape_150.setTransform(123.1655,75.4815);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#323232").ss(4,1,1).p("AzHifQAnu1InsIQImsJKidyQKidwgsKDQgtKCjeqN");
	this.shape_151.setTransform(122.3627,77.3291);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#323232").ss(4,1,1).p("Ay/izQAsuXIsrbQIsraKRcVQKTcVgsJ+QgsJ+jlpD");
	this.shape_152.setTransform(121.5848,79.2784);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#323232").ss(4,1,1).p("Ay3jHQAwt6IyqtQIxqtKCa6QKCa4grJ7QgrJ6jsn7");
	this.shape_153.setTransform(120.8069,81.3171);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#323232").ss(4,1,1).p("AyvjdQA1tdI3p/QI4p/JxZeQJxZdgqJ2QgqJ2jzmy");
	this.shape_154.setTransform(120.0071,83.4934);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#323232").ss(4,1,1).p("Aynj0QA5tAI+pRQI8pSJhYDQJiYBgpJyQgpJyj7lp");
	this.shape_155.setTransform(119.2292,85.841);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#323232").ss(4,1,1).p("AygkOQA+siJDojQJColJSWnQJRWmgoJuQgpJtkBkg");
	this.shape_156.setTransform(118.4514,88.3858);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#323232").ss(4,1,1).p("AyYkqQBDsEJJn2QJHn3JBVLQJBVKgnJqQgnJpkJjX");
	this.shape_157.setTransform(117.6735,91.1948);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#323232").ss(4,1,1).p("AyQlJQBIroJOnIQJOnJIwTwQIxTugnJlQgmJlkQiN");
	this.shape_158.setTransform(116.8737,94.3324);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#323232").ss(4,1,1).p("AyIltQBMrKJVmbQJTmbIgSUQIgSSglJhQgmJhkXhF");
	this.shape_159.setTransform(116.0959,97.9043);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#323232").ss(4,1,1).p("AyAmXQBQqtJaltQJZltIQQ4QIQQ2gkJdQglJdkeAE");
	this.shape_160.setTransform(115.318,102.1291);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#323232").ss(4,1,1).p("Ax4nFQBVqPJgk/QJflAH/PcQH/PbgjJZQgkJZklBN");
	this.shape_161.setTransform(114.5153,106.6856);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#323232").ss(4,1,1).p("AxwnyQBapyJlkSQJlkSHvOAQHvN/gjJVQgiJVktCW");
	this.shape_162.setTransform(113.7375,111.2327);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#323232").ss(4,1,1).p("AxpogQBfpUJrjkQJqjlHfMlQHfMjgiJRQgiJQk0Dg");
	this.shape_163.setTransform(112.9596,115.7728);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#323232").ss(4,1,1).p("AxhpNQBjo3Jxi2QJwi3HPLJQHOLIggJMQghJMk7Eo");
	this.shape_164.setTransform(112.1818,120.2562);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#323232").ss(4,1,1).p("AxZp5QBooaJ3iJQJ2iJG+JtQG+JtggJIQggJIlCFx");
	this.shape_165.setTransform(111.3821,124.7369);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#323232").ss(4,1,1).p("AtFirQnWpwKxnVQKwnVIpVBQIpVAjKDkQjLDjl2gc");
	this.shape_166.setTransform(140.7591,73.0159);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#323232").ss(4,1,1).p("AnRAbQwYriLltPUALkgNPAKkAhxUAKlAhwgF2gB9Ql2h+mjny");
	this.shape_167.setTransform(160.5685,47.6201);
	this.shape_167._off = true;

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#323232").ss(4,1,1).p("AnbAXQwHraLrtBUALqgNCAKWAhTUAKWAhRgFygB1Qlzh2mhnY");
	this.shape_168.setTransform(160.2554,48.0102);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#323232").ss(4,1,1).p("AnmAUQv1rSLxs0UALwgM0AKIAg0UAKIAgzgFvgBtQlwhumem/");
	this.shape_169.setTransform(159.909,48.3826);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#323232").ss(4,1,1).p("AnwARQvkrLL4smUAL2gMnAJ6AgWUAJ5AgUgFsgBlQlthmmbml");
	this.shape_170.setTransform(159.5768,48.7519);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#323232").ss(4,1,1).p("An6AOQvTrDL+sZQL9sZJrf3QJrf2lphdQlphemYmL");
	this.shape_171.setTransform(159.2201,49.1132);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#323232").ss(4,1,1).p("AoEALQvBq8MEsLQMCsMJdfZQJdfXlmhVQlmhVmVly");
	this.shape_172.setTransform(158.8726,49.5005);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#323232").ss(4,1,1).p("AoPAIQuvq0MKr+QMJr+JPe6QJOe5ljhNQljhNmSlZ");
	this.shape_173.setTransform(158.5175,49.8656);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#323232").ss(4,1,1).p("AoYAFQueqsMQrxQMPrxJAecQJAealfhEQlghFmQk/");
	this.shape_174.setTransform(158.1454,50.2432);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#323232").ss(4,1,1).p("AoiABQuNqkMXrjQMVrjIyd9QIxd8lcg9Qldg9mNkl");
	this.shape_175.setTransform(157.7833,50.6367);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#323232").ss(4,1,1).p("AosgBQt7qeMdrVQMbrWIkdeQIjdelag1QlZg1mKkL");
	this.shape_176.setTransform(157.397,51.0085);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#323232").ss(4,1,1).p("Ao2gEQtqqWMjrIQMirJIVdAQIVc/lXgsQlWgtmHjy");
	this.shape_177.setTransform(157.0186,51.3936);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#323232").ss(4,1,1).p("ApAgHQtYqPMpq6QMoq7IHchQIGcglTgkQlTgkmEjZ");
	this.shape_178.setTransform(156.629,51.7826);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#323232").ss(4,1,1).p("ApKgLQtGqGMvquQMuqtH5cDQH3cClPgcQlRgdmBi/");
	this.shape_179.setTransform(156.229,52.1744);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#323232").ss(4,1,1).p("ApUgOQs0p/M1qgQM0qgHqbkQHqbklNgUQlNgUl+im");
	this.shape_180.setTransform(155.8248,52.5573);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#323232").ss(4,1,1).p("ApdgSQskp3M8qSQM7qTHbbGQHbbFlJgMQlKgMl8iM");
	this.shape_181.setTransform(155.4118,52.9667);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#323232").ss(4,1,1).p("ApngVQsSpwNCqFQNBqFHNaoQHNamlHgDQlHgFl4hy");
	this.shape_182.setTransform(155.0006,53.3681);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#323232").ss(4,1,1).p("ApwgZQsApnNIp4QNGp4G/aJQG/aIlEAFQlDAEl2hZ");
	this.shape_183.setTransform(154.5803,53.7694);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#323232").ss(4,1,1).p("Ap5gdQrvpgNOpqQNNpqGxZqQGwZplBANQlAAMlzg/");
	this.shape_184.setTransform(154.1477,54.2732);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#323232").ss(4,1,1).p("AqDgjQrdpYNUpdQNTpdGiZMQGiZLk9AVQk9AUlwgl");
	this.shape_185.setTransform(153.7049,54.9323);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#323232").ss(4,1,1).p("AqMgtQrMpRNbpPQNZpPGUYuQGTYsk6AdQk6AcltgM");
	this.shape_186.setTransform(153.2587,55.9891);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#323232").ss(4,1,1).p("AqWhAQq6pJNhpBQNgpCGFYPQGFYNk3AlQk3AllqAO");
	this.shape_187.setTransform(152.8108,57.904);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#323232").ss(4,1,1).p("AqfhUQqopBNno0QNlo1F3XxQF3Xvk0AtQk0AtlnAn");
	this.shape_188.setTransform(152.3587,59.9833);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#323232").ss(4,1,1).p("AqnhoQqYo6NuonQNsomFoXSQFoXQkwA2QkxA0llBB");
	this.shape_189.setTransform(151.8927,62.0741);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#323232").ss(4,1,1).p("Aqxh9QqFoyNzoZQNyoZFaWzQFaWyktA+QkuA9liBa");
	this.shape_190.setTransform(151.4189,64.1665);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#323232").ss(4,1,1).p("Aq5iRQp1oqN6oMQN5oMFLWVQFMWUkrBGQkqBFlfB0");
	this.shape_191.setTransform(150.94,66.2454);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#323232").ss(4,1,1).p("ArDilQpiojOAn+QN+n+E+V2QE8V1kmBOQkoBNlcCO");
	this.shape_192.setTransform(150.4523,68.3492);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#323232").ss(4,1,1).p("ArLi5QpRobOGnxQOEnxEvVYQEvVWkkBWQkkBWlZCn");
	this.shape_193.setTransform(149.9667,70.4278);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#323232").ss(4,1,1).p("ArUjOQpAoTONnjQOLnkEgU5QEgU4kgBeQkhBelXDB");
	this.shape_194.setTransform(149.4597,72.5197);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#323232").ss(4,1,1).p("ArdjiQouoMOTnWQORnWESUbQESUakeBmQkeBllTDb");
	this.shape_195.setTransform(148.9681,74.6095);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#323232").ss(4,1,1).p("Arlj2QodoEOZnJQOXnIEET8QEDT7kaBvQkbBtlRD0");
	this.shape_196.setTransform(148.4526,76.6875);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#323232").ss(4,1,1).p("ArukLQoLn8Ofm7QOem7D1TeQD1TckXB3QkYB2lOEN");
	this.shape_197.setTransform(147.9401,78.779);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#323232").ss(4,1,1).p("Ar2kfQn6n1OlmtQOkmuDnTAQDnS+kVB+QkUB+lLEn");
	this.shape_198.setTransform(147.4254,80.868);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#323232").ss(4,1,1).p("Ar/kzQnontOsmgQOqmhDYShQDYSgkQCGQkSCHlIFA");
	this.shape_199.setTransform(146.8841,82.9591);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#323232").ss(4,1,1).p("AsHlHQnXnmOymSQOwmTDKSCQDKSBkOCPQkOCOlFFb");
	this.shape_200.setTransform(146.3685,85.0362);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#323232").ss(4,1,1).p("AsQlcQnFndO4mFQO3mGC7RkQC8RjkLCWQkLCXlCF0");
	this.shape_201.setTransform(145.819,87.1381);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#323232").ss(4,1,1).p("AsYlwQmznWO9l4QO9l3CtRFQCuREkICfQkICek/GO");
	this.shape_202.setTransform(145.2921,89.2123);
	this.shape_202._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_202}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).wait(1).to({_off:true},1).wait(86).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(22).to({_off:false},0).wait(2).to({_off:true},1).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.shape_167).wait(180).to({_off:false},0).wait(1).to({x:160.5762,y:47.6444},0).wait(8).to({x:160.5685,y:47.6201},0).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.shape_202).wait(224).to({_off:false},0).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-189.6,272.70000000000005,513.6);


(lib.triange = function(mode,startPosition,loop,reversed) {
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
	this.newsymbol = new lib.newsymbol();
	this.newsymbol.name = "newsymbol";
	this.newsymbol.setTransform(0.1,0,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.newsymbol).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.triange, new cjs.Rectangle(-61.8,-19.4,123.9,38.8), null);


(lib.psitriangle = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7D7D7D").s().p("AhyDZIAAmxIDlAAIAAGxg");
	this.shape.setTransform(-43.8,-1.675);

	this.triange = new lib.triange();
	this.triange.name = "triange";
	this.triange.setTransform(0.1,3.9,1,1,0,0,0,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.triange},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-23.3,123.9,46.7);


(lib.darksky = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.skylong();
	this.instance.setTransform(-1.8,-1.95,1,1,0,0,0,2,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.skylong();
	this.instance_1.setTransform(-1.8,-1.95,1,1,0,0,180,2,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.darksky, new cjs.Rectangle(-251.8,-141.9,500,280), null);


(lib.psihouseai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// static_idn
	this.psitrange = new lib.psitriangle("synched",0);
	this.psitrange.name = "psitrange";
	this.psitrange.setTransform(62.2,23.9,1,1,0,0,0,0.1,0);

	this.psileft = new lib.psileft();
	this.psileft.name = "psileft";
	this.psileft.setTransform(30.45,121.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.psileft},{t:this.psitrange}]}).wait(55));

	// right
	this.psiright = new lib.psiright();
	this.psiright.name = "psiright";
	this.psiright.setTransform(94.7,105.3);

	this.timeline.addTween(cjs.Tween.get(this.psiright).wait(8).to({scaleY:0.904,y:100.55},0).wait(1).to({scaleY:0.808,x:95.15,y:94.9},0).wait(1).to({x:94.7,y:95.8},0).wait(43).to({scaleY:0.904,y:100.55},0).wait(1).to({scaleY:1,x:94.25,y:105.75},0).wait(1));

	// throbfiller
	this.psirightfiller = new lib.psirightfiller();
	this.psirightfiller.name = "psirightfiller";
	this.psirightfiller.setTransform(111,172.5);

	this.timeline.addTween(cjs.Tween.get(this.psirightfiller).wait(8).to({scaleX:0.6862,scaleY:1.3,x:115,y:168.3},0).wait(1).to({regX:0.1,scaleX:0.3724,scaleY:1.6,x:120.4,y:162.7},0).wait(1).to({x:119.05,y:164.05},0).wait(43).to({regX:0,scaleX:0.6862,scaleY:1.3,x:115,y:168.3},0).wait(1).to({scaleX:1,scaleY:1,x:110.55,y:172.95},0).wait(1));

	// throbber
	this.psirightthrobber = new lib.psirightthrobber();
	this.psirightthrobber.name = "psirightthrobber";
	this.psirightthrobber.setTransform(87.7,165.3,0.9825,1.0009,7.4986);
	this.psirightthrobber._off = true;

	this.timeline.addTween(cjs.Tween.get(this.psirightthrobber).wait(9).to({_off:false},0).wait(1).to({rotation:151.4995},0).wait(1).to({rotation:295.4995},0).wait(1).to({rotation:439.4996},0).wait(1).to({rotation:583.4996},0).wait(1).to({rotation:727.4996},0).wait(1).to({rotation:871.4997},0).wait(1).to({rotation:1015.4997},0).wait(1).to({rotation:1159.4998},0).wait(1).to({rotation:1303.4998},0).wait(1).to({rotation:1447.4998},0).wait(1).to({rotation:1591.4999},0).wait(1).to({rotation:1735.4999},0).wait(1).to({rotation:1879.4999},0).wait(1).to({rotation:2023.5},0).wait(1).to({rotation:2167.5},0).to({_off:true},1).wait(30));

	// throbber
	this.psirightthrobber_1 = new lib.psirightthrobber();
	this.psirightthrobber_1.name = "psirightthrobber_1";
	this.psirightthrobber_1.setTransform(79.25,172.5);

	this.timeline.addTween(cjs.Tween.get(this.psirightthrobber_1).wait(8).to({scaleX:0.9825,scaleY:1.0009,rotation:7.4995,x:83.725,y:168.775},0).to({_off:true},1).wait(16).to({_off:false,rotation:7.4986,x:87.7,y:165.3},0).wait(2).to({scaleX:0.9824,scaleY:1.0008,rotation:-112.4988,x:87.75,y:165.25},0).wait(2).to({rotation:-232.5004,x:87.65},0).wait(3).to({rotation:-262.501,x:87.6},0).wait(7).to({scaleX:1,scaleY:1,rotation:-360,x:79.25,y:172.5},0).wait(1).to({x:77.65,y:174.2},0).wait(1).to({x:79.15,y:172.8},0).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.6,125.2,189.6);


(lib.Symbol73 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {idle:0,drumhit:2,pian1:4,pian2:6,pian3:8,pian4:10,fag1:12};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop()
	}
	this.frame_2 = function() {
		var _this = this;
		
		_this.l1.gotoAndPlay('s1');
		_this.l2.gotoAndPlay('s1');
		_this.l3.gotoAndPlay('s1');
		_this.l4.gotoAndPlay('s1');
		_this.l5.gotoAndPlay('s1');
		_this.l6.gotoAndPlay('s1');
		_this.l7.gotoAndPlay('s1');
		_this.l8.gotoAndPlay('s1');
		_this.l9.gotoAndPlay('s1');
		_this.l10.gotoAndPlay('s1');
		_this.r1.gotoAndPlay('s1');
		_this.r2.gotoAndPlay('s1');
		_this.r3.gotoAndPlay('s1');
		_this.r4.gotoAndPlay('s1');
		_this.r5.gotoAndPlay('s1');
		_this.r6.gotoAndPlay('s1');
		_this.r7.gotoAndPlay('s1');
		_this.r8.gotoAndPlay('s1');
		_this.r9.gotoAndPlay('s1');
		_this.r10.gotoAndPlay('s1');
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		var _this = this;
		
		_this.l1.gotoAndPlay('p1');
		_this.l2.gotoAndPlay('p1');
		_this.l3.gotoAndPlay('p1');
		_this.l4.gotoAndPlay('p1');
		_this.l5.gotoAndPlay('p1');
		_this.l6.gotoAndPlay('p1');
		_this.l7.gotoAndPlay('p1');
		_this.l8.gotoAndPlay('p1');
		_this.l9.gotoAndPlay('p1');
		_this.l10.gotoAndPlay('p1');
		_this.r1.gotoAndPlay('p1');
		_this.r2.gotoAndPlay('p1');
		_this.r3.gotoAndPlay('p1');
		_this.r4.gotoAndPlay('p1');
		_this.r5.gotoAndPlay('p1');
		_this.r6.gotoAndPlay('p1');
		_this.r7.gotoAndPlay('p1');
		_this.r8.gotoAndPlay('p1');
		_this.r9.gotoAndPlay('p1');
		_this.r10.gotoAndPlay('p1');
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		var _this = this;
		
		_this.l1.gotoAndPlay('p2');
		_this.l2.gotoAndPlay('p2');
		_this.l3.gotoAndPlay('p2');
		_this.l4.gotoAndPlay('p2');
		_this.l5.gotoAndPlay('p2');
		_this.l6.gotoAndPlay('p2');
		_this.l7.gotoAndPlay('p2');
		_this.l8.gotoAndPlay('p2');
		_this.l9.gotoAndPlay('p2');
		_this.l10.gotoAndPlay('p2');
		_this.r1.gotoAndPlay('p2');
		_this.r2.gotoAndPlay('p2');
		_this.r3.gotoAndPlay('p2');
		_this.r4.gotoAndPlay('p2');
		_this.r5.gotoAndPlay('p2');
		_this.r6.gotoAndPlay('p2');
		_this.r7.gotoAndPlay('p2');
		_this.r8.gotoAndPlay('p2');
		_this.r9.gotoAndPlay('p2');
		_this.r10.gotoAndPlay('p2');
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		var _this = this;
		
		_this.l1.gotoAndPlay('p3');
		_this.l2.gotoAndPlay('p3');
		_this.l3.gotoAndPlay('p3');
		_this.l4.gotoAndPlay('p3');
		_this.l5.gotoAndPlay('p3');
		_this.l6.gotoAndPlay('p3');
		_this.l7.gotoAndPlay('p3');
		_this.l8.gotoAndPlay('p3');
		_this.l9.gotoAndPlay('p3');
		_this.l10.gotoAndPlay('p3');
		_this.r1.gotoAndPlay('p3');
		_this.r2.gotoAndPlay('p3');
		_this.r3.gotoAndPlay('p3');
		_this.r4.gotoAndPlay('p3');
		_this.r5.gotoAndPlay('p3');
		_this.r6.gotoAndPlay('p3');
		_this.r7.gotoAndPlay('p3');
		_this.r8.gotoAndPlay('p3');
		_this.r9.gotoAndPlay('p3');
		_this.r10.gotoAndPlay('p3');
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		var _this = this;
		
		_this.l1.gotoAndPlay('p4');
		_this.l2.gotoAndPlay('p4');
		_this.l3.gotoAndPlay('p4');
		_this.l4.gotoAndPlay('p4');
		_this.l5.gotoAndPlay('p4');
		_this.l6.gotoAndPlay('p4');
		_this.l7.gotoAndPlay('p4');
		_this.l8.gotoAndPlay('p4');
		_this.l9.gotoAndPlay('p4');
		_this.l10.gotoAndPlay('p4');
		_this.r1.gotoAndPlay('p4');
		_this.r2.gotoAndPlay('p4');
		_this.r3.gotoAndPlay('p4');
		_this.r4.gotoAndPlay('p4');
		_this.r5.gotoAndPlay('p4');
		_this.r6.gotoAndPlay('p4');
		_this.r7.gotoAndPlay('p4');
		_this.r8.gotoAndPlay('p4');
		_this.r9.gotoAndPlay('p4');
		_this.r10.gotoAndPlay('p4');
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		var _this = this;
		
		_this.l1.gotoAndPlay('f1');
		_this.l2.gotoAndPlay('f1');
		_this.l3.gotoAndPlay('f1');
		_this.l4.gotoAndPlay('f1');
		_this.l5.gotoAndPlay('f1');
		_this.l6.gotoAndPlay('f1');
		_this.l7.gotoAndPlay('f1');
		_this.l8.gotoAndPlay('f1');
		_this.l9.gotoAndPlay('f1');
		_this.l10.gotoAndPlay('f1');
		_this.r1.gotoAndPlay('f1');
		_this.r2.gotoAndPlay('f1');
		_this.r3.gotoAndPlay('f1');
		_this.r4.gotoAndPlay('f1');
		_this.r5.gotoAndPlay('f1');
		_this.r6.gotoAndPlay('f1');
		_this.r7.gotoAndPlay('f1');
		_this.r8.gotoAndPlay('f1');
		_this.r9.gotoAndPlay('f1');
		_this.r10.gotoAndPlay('f1');
	}
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(342));

	// Layer_3
	this.l2 = new lib.skaianportalanimation();
	this.l2.name = "l2";
	this.l2.setTransform(344.85,131.6,1,1,0,35.9996,-144.0004);

	this.timeline.addTween(cjs.Tween.get(this.l2).wait(355));

	// Layer_4
	this.l3 = new lib.skaianportalanimation();
	this.l3.name = "l3";
	this.l3.setTransform(382.9,210.35,1,1,0,71.9997,-108.0003);

	this.timeline.addTween(cjs.Tween.get(this.l3).wait(355));

	// Layer_5
	this.l4 = new lib.skaianportalanimation();
	this.l4.name = "l4";
	this.l4.setTransform(367.55,297.9,1,1,0,108.0003,-71.9997);

	this.timeline.addTween(cjs.Tween.get(this.l4).wait(355));

	// Layer_6
	this.l5 = new lib.skaianportalanimation();
	this.l5.name = "l5";
	this.l5.setTransform(304.35,358.8,1,1,0,143.9999,-36.0001);

	this.timeline.addTween(cjs.Tween.get(this.l5).wait(355));

	// Layer_7
	this.l6 = new lib.skaianportalanimation();
	this.l6.name = "l6";
	this.l6.setTransform(217,370.65,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.l6).wait(355));

	// Layer_8
	this.l7 = new lib.skaianportalanimation();
	this.l7.name = "l7";
	this.l7.setTransform(138.2,328.65,1,1,0,-144.0009,35.9991);

	this.timeline.addTween(cjs.Tween.get(this.l7).wait(355));

	// Layer_9
	this.l8 = new lib.skaianportalanimation();
	this.l8.name = "l8";
	this.l8.setTransform(99.85,249.55,1,1,0,-107.9995,72.0005);

	this.timeline.addTween(cjs.Tween.get(this.l8).wait(355));

	// Layer_10
	this.l9 = new lib.skaianportalanimation();
	this.l9.name = "l9";
	this.l9.setTransform(115.2,163.05,1,1,0,-72.0002,107.9998);

	this.timeline.addTween(cjs.Tween.get(this.l9).wait(355));

	// Layer_11
	this.l10 = new lib.skaianportalanimation();
	this.l10.name = "l10";
	this.l10.setTransform(178.9,102.15,1,1,0,-35.9991,144.0009);

	this.timeline.addTween(cjs.Tween.get(this.l10).wait(355));

	// Layer_12
	this.l1 = new lib.skaianportalanimation();
	this.l1.name = "l1";
	this.l1.setTransform(267.35,89.85,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.l1).wait(355));

	// Layer_13
	this.r10 = new lib.skaianportalanimation();
	this.r10.name = "r10";
	this.r10.setTransform(138.45,131.6,1,1,-35.9996);

	this.timeline.addTween(cjs.Tween.get(this.r10).wait(355));

	// Layer_14
	this.r9 = new lib.skaianportalanimation();
	this.r9.name = "r9";
	this.r9.setTransform(100.4,210.35,1,1,-71.9997);

	this.timeline.addTween(cjs.Tween.get(this.r9).wait(355));

	// Layer_15
	this.r8 = new lib.skaianportalanimation();
	this.r8.name = "r8";
	this.r8.setTransform(115.75,297.9,1,1,-108.0003);

	this.timeline.addTween(cjs.Tween.get(this.r8).wait(355));

	// Layer_16
	this.r7 = new lib.skaianportalanimation();
	this.r7.name = "r7";
	this.r7.setTransform(178.95,358.8,1,1,-143.9999);

	this.timeline.addTween(cjs.Tween.get(this.r7).wait(355));

	// Layer_17
	this.r6 = new lib.skaianportalanimation();
	this.r6.name = "r6";
	this.r6.setTransform(266.3,370.65,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.r6).wait(355));

	// Layer_18
	this.r5 = new lib.skaianportalanimation();
	this.r5.name = "r5";
	this.r5.setTransform(345.1,328.65,1,1,144.0009);

	this.timeline.addTween(cjs.Tween.get(this.r5).wait(355));

	// Layer_19
	this.r4 = new lib.skaianportalanimation();
	this.r4.name = "r4";
	this.r4.setTransform(383.45,249.55,1,1,107.9995);

	this.timeline.addTween(cjs.Tween.get(this.r4).wait(355));

	// Layer_20
	this.r3 = new lib.skaianportalanimation();
	this.r3.name = "r3";
	this.r3.setTransform(368.1,163.05,1,1,72.0002);

	this.timeline.addTween(cjs.Tween.get(this.r3).wait(355));

	// Layer_21
	this.r2 = new lib.skaianportalanimation();
	this.r2.name = "r2";
	this.r2.setTransform(304.4,102.15,1,1,35.9991);

	this.timeline.addTween(cjs.Tween.get(this.r2).wait(355));

	// Layer_22
	this.r1 = new lib.skaianportalanimation();
	this.r1.name = "r1";
	this.r1.setTransform(215.95,89.85);

	this.timeline.addTween(cjs.Tween.get(this.r1).wait(355));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-2.5,489,464.9);


(lib.spiningskaianportal = function(mode,startPosition,loop,reversed) {
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
	this.inner = new lib.Symbol73();
	this.inner.name = "inner";
	this.inner.setTransform(-10.95,4.1,0.8055,0.8043,0,0,0,241.2,229.5);

	
	var _tweenStr_0 = cjs.Tween.get(this.inner).wait(1).to({regX:241.7,regY:230.1,rotation:0.7516,x:-10.55,y:4.6},0).wait(1).to({scaleX:0.8056,rotation:1.5031,x:-10.5},0).wait(1).to({rotation:2.2547,x:-10.55},0).wait(1).to({rotation:3.0063},0).wait(1).to({rotation:3.7578},0).wait(1).to({scaleX:0.8055,rotation:4.5094},0).wait(1).to({rotation:5.261,y:4.65},0).wait(1).to({rotation:6.0125},0).wait(1).to({scaleX:0.8056,rotation:6.7641,x:-10.6,y:4.7},0).wait(1).to({rotation:7.5157,x:-10.55,y:4.65},0).wait(1).to({rotation:8.2672,x:-10.6},0).wait(1).to({scaleX:0.8055,rotation:9.0188},0).wait(1).to({rotation:9.7704,x:-10.65,y:4.7},0).wait(1).to({rotation:10.5219,y:4.65},0).wait(1).to({rotation:11.2735},0).wait(1).to({scaleX:0.8056,rotation:12.0251,x:-10.6},0).wait(1).to({rotation:12.7766,x:-10.65,y:4.7},0).wait(1).to({rotation:13.5282},0).wait(1).to({scaleX:0.8055,rotation:14.2797,y:4.65},0).wait(1).to({rotation:15.0313,y:4.7},0).wait(1).to({rotation:15.7829,x:-10.7},0).wait(1).to({rotation:16.5344,x:-10.65,y:4.65},0).wait(1).to({rotation:17.286,x:-10.7,y:4.7},0).wait(1).to({rotation:18.0376,x:-10.65},0).wait(1).to({scaleX:0.8056,rotation:18.7891,x:-10.7},0).wait(1).to({rotation:19.5407},0).wait(1).to({scaleX:0.8055,rotation:20.2923,x:-10.75},0).wait(1).to({scaleX:0.8056,rotation:21.0438,y:4.75},0).wait(1).to({scaleX:0.8055,rotation:21.7954,x:-10.7},0).wait(1).to({rotation:22.547,x:-10.75,y:4.7},0).wait(1).to({rotation:23.2985,x:-10.8,y:4.75},0).wait(1).to({scaleX:0.8056,rotation:24.0501,x:-10.75},0).wait(1).to({rotation:24.8017,x:-10.8,y:4.7},0).wait(1).to({scaleX:0.8055,rotation:25.5532,y:4.75},0).wait(1).to({scaleX:0.8056,rotation:26.3048,x:-10.75},0).wait(1).to({scaleX:0.8055,rotation:27.0564,x:-10.8,y:4.7},0).wait(1).to({rotation:27.8079,x:-10.85,y:4.75},0).wait(1).to({rotation:28.5595,x:-10.8},0).wait(1).to({rotation:29.3111,x:-10.85,y:4.7},0).wait(1).to({rotation:30.0626,x:-10.8,y:4.75},0).wait(1).to({rotation:30.8142,x:-10.85},0).wait(1).to({rotation:31.5658},0).wait(1).to({rotation:32.3173},0).wait(1).to({rotation:33.0689,x:-10.9,y:4.8},0).wait(1).to({rotation:33.8205,x:-10.85,y:4.75},0).wait(1).to({rotation:34.572,x:-10.9,y:4.8},0).wait(1).to({rotation:35.3236,y:4.75},0).wait(1).to({rotation:36.0752,x:-10.95,y:4.8},0).wait(1).to({rotation:36.8267,x:-10.9,y:4.75},0).wait(1).to({rotation:37.5783},0).wait(1).to({rotation:38.3299,y:4.8},0).wait(1).to({rotation:39.0814,y:4.75},0).wait(1).to({rotation:39.833,x:-10.95},0).wait(1).to({rotation:40.5846},0).wait(1).to({rotation:41.3361},0).wait(1).to({rotation:42.0877},0).wait(1).to({rotation:42.8392,x:-11},0).wait(1).to({rotation:43.5908,y:4.8},0).wait(1).to({rotation:44.3424,y:4.75},0).wait(1).to({rotation:45.0939},0).wait(1).to({rotation:45.8455,x:-11.05},0).wait(1).to({rotation:46.5971,x:-11},0).wait(1).to({rotation:47.3486},0).wait(1).to({rotation:48.1002},0).wait(1).to({rotation:48.8518,x:-11.1},0).wait(1).to({rotation:49.6033,y:4.8},0).wait(1).to({rotation:50.3549,x:-11.15,y:4.75},0).wait(1).to({rotation:51.1065,x:-11.1},0).wait(1).to({rotation:51.858,y:4.8},0).wait(1).to({rotation:52.6096},0).wait(1).to({rotation:53.3612,x:-11.15},0).wait(1).to({rotation:54.1127,y:4.75},0).wait(1).to({rotation:54.8643,y:4.7},0).wait(1).to({rotation:55.6159,x:-11.2,y:4.75},0).wait(1).to({rotation:56.3674,x:-11.15},0).wait(1).to({rotation:57.119,y:4.7},0).wait(1).to({rotation:57.8706,x:-11.2,y:4.8},0).wait(1).to({rotation:58.6221,y:4.7},0).wait(1).to({rotation:59.3737,y:4.75},0).wait(1).to({rotation:60.1253,y:4.7},0).wait(1).to({rotation:60.8768,y:4.75},0).wait(1).to({rotation:61.6284,x:-11.25,y:4.7},0).wait(1).to({scaleX:0.8056,rotation:62.38},0).wait(1).to({scaleX:0.8055,rotation:63.1315,y:4.75},0).wait(1).to({scaleX:0.8056,rotation:63.8831,y:4.7},0).wait(1).to({rotation:64.6347,x:-11.3,y:4.75},0).wait(1).to({rotation:65.3862,x:-11.25,y:4.7},0).wait(1).to({scaleX:0.8055,rotation:66.1378,x:-11.3},0).wait(1).to({scaleX:0.8056,rotation:66.8894},0).wait(1).to({scaleX:0.8055,rotation:67.6409},0).wait(1).to({rotation:68.3925},0).wait(1).to({scaleX:0.8056,rotation:69.1441,x:-11.35},0).wait(1).to({scaleX:0.8055,rotation:69.8956},0).wait(1).to({scaleX:0.8056,rotation:70.6472},0).wait(1).to({rotation:71.3987},0).wait(1).to({rotation:72.1503,x:-11.3,y:4.65},0).wait(1).to({scaleX:0.8055,rotation:72.9019,x:-11.35},0).wait(1).to({rotation:73.6534,y:4.7},0).wait(1).to({rotation:74.405},0).wait(1).to({rotation:75.1566,y:4.65},0).wait(1).to({rotation:75.9081,x:-11.4},0).wait(1).to({rotation:76.6597},0).wait(1).to({scaleX:0.8056,rotation:77.4113,x:-11.35},0).wait(1).to({rotation:78.1628,x:-11.4,y:4.6},0).wait(1).to({rotation:78.9144,y:4.65},0).wait(1).to({rotation:79.666,x:-11.35},0).wait(1).to({scaleX:0.8055,rotation:80.4175,x:-11.45},0).wait(1).to({rotation:81.1691,y:4.6},0).wait(1).to({rotation:81.9207},0).wait(1).to({rotation:82.6722,x:-11.4},0).wait(1).to({scaleX:0.8056,rotation:83.4238,x:-11.45},0).wait(1).to({rotation:84.1754},0).wait(1).to({rotation:84.9269,x:-11.5},0).wait(1).to({scaleX:0.8055,rotation:85.6785},0).wait(1).to({rotation:86.4301,y:4.55},0).wait(1).to({rotation:87.1816},0).wait(1).to({scaleX:0.8056,rotation:87.9332,y:4.5},0).wait(1).to({rotation:88.6848,y:4.55},0).wait(1).to({rotation:89.4363},0).wait(1).to({scaleX:0.8055,rotation:90.1879},0).wait(1).to({rotation:90.9395,y:4.5},0).wait(1).to({rotation:91.691,x:-11.55,y:4.55},0).wait(1).to({scaleX:0.8056,rotation:92.4426,x:-11.5,y:4.5},0).wait(1).to({rotation:93.1942,x:-11.55,y:4.55},0).wait(1).to({rotation:93.9457,y:4.5},0).wait(1).to({rotation:94.6973},0).wait(1).to({scaleX:0.8055,rotation:95.4489},0).wait(1).to({rotation:96.2004,x:-11.6},0).wait(1).to({rotation:96.952,x:-11.55,y:4.45},0).wait(1).to({scaleX:0.8056,rotation:97.7035,y:4.5},0).wait(1).to({rotation:98.4551},0).wait(1).to({rotation:99.2067,x:-11.6},0).wait(1).to({scaleX:0.8055,rotation:99.9582,x:-11.55,y:4.45},0).wait(1).to({rotation:100.7098,x:-11.6},0).wait(1).to({rotation:101.4614},0).wait(1).to({rotation:102.2129},0).wait(1).to({scaleX:0.8056,rotation:102.9645},0).wait(1).to({rotation:103.7161,y:4.4},0).wait(1).to({rotation:104.4676},0).wait(1).to({rotation:105.2192,y:4.35},0).wait(1).to({rotation:105.9708,y:4.45},0).wait(1).to({scaleX:0.8055,rotation:106.7223,y:4.4},0).wait(1).to({rotation:107.4739},0).wait(1).to({rotation:108.2255,x:-11.65},0).wait(1).to({rotation:108.977,x:-11.6,y:4.35},0).wait(1).to({rotation:109.7286},0).wait(1).to({rotation:110.4802},0).wait(1).to({rotation:111.2317,y:4.4},0).wait(1).to({rotation:111.9833,x:-11.65,y:4.35},0).wait(1).to({rotation:112.7349},0).wait(1).to({rotation:113.4864,y:4.3},0).wait(1).to({rotation:114.238},0).wait(1).to({rotation:114.9896,y:4.25},0).wait(1).to({rotation:115.7411,y:4.35},0).wait(1).to({rotation:116.4927,y:4.3},0).wait(1).to({rotation:117.2443,x:-11.7},0).wait(1).to({rotation:117.9958,x:-11.65},0).wait(1).to({rotation:118.7474,y:4.25},0).wait(1).to({rotation:119.499},0).wait(1).to({rotation:120.2505},0).wait(1).to({scaleX:0.8056,rotation:121.0021,x:-11.7,y:4.3},0).wait(1).to({scaleX:0.8055,rotation:121.7537,x:-11.65,y:4.2},0).wait(1).to({rotation:122.5052,x:-11.7,y:4.25},0).wait(1).to({rotation:123.2568,x:-11.65,y:4.2},0).wait(1).to({rotation:124.0084},0).wait(1).to({rotation:124.7599},0).wait(1).to({rotation:125.5115,x:-11.7},0).wait(1).to({rotation:126.263,x:-11.65},0).wait(1).to({rotation:127.0146},0).wait(1).to({rotation:127.7662,x:-11.7,y:4.15},0).wait(1).to({rotation:128.5177,x:-11.65},0).wait(1).to({rotation:129.2693,x:-11.7},0).wait(1).to({rotation:130.0209},0).wait(1).to({rotation:130.7724,x:-11.65},0).wait(1).to({rotation:131.524,y:4.1},0).wait(1).to({rotation:132.2756},0).wait(1).to({rotation:133.0271,x:-11.7},0).wait(1).to({rotation:133.7787,x:-11.65,y:4.05},0).wait(1).to({rotation:134.5303,x:-11.7,y:4.1},0).wait(1).to({rotation:135.2818,x:-11.65},0).wait(1).to({rotation:136.0334,x:-11.7,y:4},0).wait(1).to({rotation:136.785,x:-11.65,y:3.95},0).wait(1).to({rotation:137.5365,x:-11.7,y:4},0).wait(1).to({rotation:138.2881},0).wait(1).to({rotation:139.0397,x:-11.65},0).wait(1).to({rotation:139.7912,y:3.95},0).wait(1).to({rotation:140.5428,y:4},0).wait(1).to({rotation:141.2944,x:-11.7},0).wait(1).to({rotation:142.0459,x:-11.6,y:3.95},0).wait(1).to({rotation:142.7975,x:-11.7},0).wait(1).to({rotation:143.5491,x:-11.65},0).wait(1).to({rotation:144.3006,y:3.9},0).wait(1).to({rotation:145.0522,y:3.95},0).wait(1).to({rotation:145.8038,y:3.9},0).wait(1).to({rotation:146.5553,y:3.85},0).wait(1).to({rotation:147.3069,y:3.9},0).wait(1).to({rotation:148.0585,x:-11.6},0).wait(1).to({rotation:148.81,x:-11.65},0).wait(1).to({rotation:149.5616,x:-11.6},0).wait(1).to({rotation:150.3132,x:-11.65,y:3.8},0).wait(1).to({scaleX:0.8056,rotation:151.0647,y:3.85},0).wait(1).to({rotation:151.8163,x:-11.6,y:3.8},0).wait(1).to({scaleX:0.8055,rotation:152.5678,y:3.85},0).wait(1).to({rotation:153.3194,y:3.8},0).wait(1).to({rotation:154.071,y:3.85},0).wait(1).to({rotation:154.8225,x:-11.65,y:3.8},0).wait(1).to({rotation:155.5741,x:-11.6},0).wait(1).to({rotation:156.3257},0).wait(1).to({rotation:157.0772},0).wait(1).to({rotation:157.8288,y:3.75},0).wait(1).to({rotation:158.5804},0).wait(1).to({rotation:159.3319,x:-11.55},0).wait(1).to({scaleX:0.8056,rotation:160.0835,x:-11.6},0).wait(1).to({rotation:160.8351},0).wait(1).to({scaleX:0.8055,rotation:161.5866},0).wait(1).to({scaleX:0.8056,rotation:162.3382,x:-11.55,y:3.7},0).wait(1).to({rotation:163.0898,x:-11.6,y:3.75},0).wait(1).to({rotation:163.8413,x:-11.55},0).wait(1).to({rotation:164.5929,y:3.7},0).wait(1).to({rotation:165.3445},0).wait(1).to({rotation:166.096},0).wait(1).to({scaleX:0.8055,rotation:166.8476},0).wait(1).to({rotation:167.5992,y:3.65},0).wait(1).to({scaleX:0.8056,rotation:168.3507},0).wait(1).to({rotation:169.1023},0).wait(1).to({rotation:169.8539,y:3.7},0).wait(1).to({rotation:170.6054,y:3.65},0).wait(1).to({rotation:171.357},0).wait(1).to({scaleX:0.8055,rotation:172.1086,x:-11.5,y:3.7},0).wait(1).to({rotation:172.8601,x:-11.55,y:3.6},0).wait(1).to({rotation:173.6117,y:3.65},0).wait(1).to({scaleX:0.8056,rotation:174.3633,x:-11.5,y:3.6},0).wait(1).to({rotation:175.1148,y:3.65},0).wait(1).to({rotation:175.8664,y:3.6},0).wait(1).to({rotation:176.618,x:-11.45},0).wait(1).to({scaleX:0.8055,rotation:177.3695,x:-11.5,y:3.65},0).wait(1).to({rotation:178.1211,x:-11.45},0).wait(1).to({scaleX:0.8056,rotation:178.8727,y:3.6},0).wait(1).to({rotation:179.6242},0).wait(1).to({rotation:180.3758,x:-11.5,y:3.55},0).wait(1).to({rotation:181.1273,x:-11.45},0).wait(1).to({scaleX:0.8055,rotation:181.8789},0).wait(1).to({rotation:182.6305},0).wait(1).to({scaleX:0.8056,rotation:183.382},0).wait(1).to({rotation:184.1336,x:-11.4,y:3.5},0).wait(1).to({rotation:184.8852,x:-11.45},0).wait(1).to({rotation:185.6367,x:-11.4,y:3.55},0).wait(1).to({scaleX:0.8055,rotation:186.3883},0).wait(1).to({rotation:187.1399,y:3.5},0).wait(1).to({rotation:187.8914},0).wait(1).to({scaleX:0.8056,rotation:188.643,y:3.55},0).wait(1).to({rotation:189.3946,y:3.5},0).wait(1).to({rotation:190.1461,x:-11.35,y:3.55},0).wait(1).to({rotation:190.8977,y:3.5},0).wait(1).to({rotation:191.6493,x:-11.4},0).wait(1).to({scaleX:0.8055,rotation:192.4008,x:-11.35},0).wait(1).to({rotation:193.1524},0).wait(1).to({scaleX:0.8056,rotation:193.904,y:3.45},0).wait(1).to({rotation:194.6555,y:3.5},0).wait(1).to({rotation:195.4071},0).wait(1).to({rotation:196.1587,x:-11.3,y:3.45},0).wait(1).to({rotation:196.9102},0).wait(1).to({rotation:197.6618,x:-11.25,y:3.5},0).wait(1).to({scaleX:0.8055,rotation:198.4134,x:-11.3,y:3.45},0).wait(1).to({scaleX:0.8056,rotation:199.1649,y:3.5},0).wait(1).to({rotation:199.9165,x:-11.25},0).wait(1).to({scaleX:0.8055,rotation:200.6681},0).wait(1).to({rotation:201.4196,y:3.45},0).wait(1).to({rotation:202.1712},0).wait(1).to({rotation:202.9228,x:-11.2},0).wait(1).to({rotation:203.6743,x:-11.25,y:3.4},0).wait(1).to({rotation:204.4259,x:-11.2,y:3.45},0).wait(1).to({rotation:205.1775,y:3.4},0).wait(1).to({rotation:205.929,x:-11.25},0).wait(1).to({rotation:206.6806,x:-11.2,y:3.45},0).wait(1).to({rotation:207.4322},0).wait(1).to({scaleX:0.8056,rotation:208.1837,x:-11.15,y:3.4},0).wait(1).to({rotation:208.9353,y:3.45},0).wait(1).to({scaleX:0.8055,rotation:209.6868,x:-11.2},0).wait(1).to({rotation:210.4384,x:-11.15,y:3.4},0).wait(1).to({rotation:211.19},0).wait(1).to({rotation:211.9415},0).wait(1).to({rotation:212.6931,y:3.45},0).wait(1).to({rotation:213.4447,x:-11.1,y:3.4},0).wait(1).to({rotation:214.1962,x:-11.15,y:3.45},0).wait(1).to({rotation:214.9478,y:3.4},0).wait(1).to({rotation:215.6994,x:-11.1},0).wait(1).to({rotation:216.4509},0).wait(1).to({rotation:217.2025,y:3.45},0).wait(1).to({rotation:217.9541,x:-11.05,y:3.4},0).wait(1).to({rotation:218.7056,y:3.45},0).wait(1).to({rotation:219.4572,y:3.4},0).wait(1).to({rotation:220.2088,x:-11.1},0).wait(1).to({rotation:220.9603},0).wait(1).to({rotation:221.7119,x:-11.05},0).wait(1).to({rotation:222.4635},0).wait(1).to({rotation:223.215},0).wait(1).to({rotation:223.9666,x:-11,y:3.45},0).wait(1).to({rotation:224.7182,x:-10.95,y:3.4},0).wait(1).to({rotation:225.4697},0).wait(1).to({rotation:226.2213,y:3.45},0).wait(1).to({rotation:226.9729,x:-10.9,y:3.35},0).wait(1).to({rotation:227.7244,x:-10.85,y:3.4},0).wait(1).to({rotation:228.476,x:-10.9},0).wait(1).to({rotation:229.2276},0).wait(1).to({rotation:229.9791,x:-10.85,y:3.45},0).wait(1).to({rotation:230.7307,y:3.4},0).wait(1).to({rotation:231.4823},0).wait(1).to({rotation:232.2338},0).wait(1).to({rotation:232.9854,y:3.45},0).wait(1).to({rotation:233.737,y:3.4},0).wait(1).to({rotation:234.4885},0).wait(1).to({rotation:235.2401,x:-10.8,y:3.45},0).wait(1).to({rotation:235.9916,x:-10.85},0).wait(1).to({rotation:236.7432,x:-10.8},0).wait(1).to({rotation:237.4948},0).wait(1).to({rotation:238.2463},0).wait(1).to({scaleX:0.8056,rotation:238.9979},0).wait(1).to({scaleX:0.8055,rotation:239.7495,y:3.4},0).wait(1).to({rotation:240.501,x:-10.7,y:3.45},0).wait(1).to({rotation:241.2526,x:-10.8},0).wait(1).to({rotation:242.0042,x:-10.75,y:3.5},0).wait(1).to({rotation:242.7557,y:3.45},0).wait(1).to({rotation:243.5073,x:-10.7},0).wait(1).to({rotation:244.2589},0).wait(1).to({rotation:245.0104},0).wait(1).to({rotation:245.762,x:-10.75,y:3.4},0).wait(1).to({rotation:246.5136,x:-10.7,y:3.5},0).wait(1).to({rotation:247.2651},0).wait(1).to({rotation:248.0167,y:3.45},0).wait(1).to({rotation:248.7683,y:3.5},0).wait(1).to({rotation:249.5198,x:-10.65,y:3.45},0).wait(1).to({rotation:250.2714,y:3.5},0).wait(1).to({rotation:251.023},0).wait(1).to({rotation:251.7745,y:3.45},0).wait(1).to({rotation:252.5261,x:-10.6,y:3.55},0).wait(1).to({rotation:253.2777,y:3.5},0).wait(1).to({scaleX:0.8056,rotation:254.0292},0).wait(1).to({rotation:254.7808},0).wait(1).to({rotation:255.5324},0).wait(1).to({rotation:256.2839},0).wait(1).to({rotation:257.0355,y:3.55},0).wait(1).to({scaleX:0.8055,rotation:257.7871,y:3.5},0).wait(1).to({rotation:258.5386,y:3.55},0).wait(1).to({rotation:259.2902},0).wait(1).to({rotation:260.0418,x:-10.55},0).wait(1).to({scaleX:0.8056,rotation:260.7933},0).wait(1).to({rotation:261.5449,x:-10.6},0).wait(1).to({rotation:262.2965,x:-10.55},0).wait(1).to({scaleX:0.8055,rotation:263.048,y:3.6},0).wait(1).to({rotation:263.7996,y:3.55},0).wait(1).to({rotation:264.5511,y:3.6},0).wait(1).to({scaleX:0.8056,rotation:265.3027},0).wait(1).to({rotation:266.0543,x:-10.5,y:3.55},0).wait(1).to({rotation:266.8058,y:3.6},0).wait(1).to({rotation:267.5574},0).wait(1).to({scaleX:0.8055,rotation:268.309,y:3.65},0).wait(1).to({rotation:269.0605,y:3.6},0).wait(1).to({rotation:269.8121},0).wait(1).to({scaleX:0.8056,rotation:270.5637},0).wait(1).to({rotation:271.3152,y:3.65},0).wait(1).to({rotation:272.0668},0).wait(1).to({scaleX:0.8055,rotation:272.8184},0).wait(1).to({rotation:273.5699},0).wait(1).to({rotation:274.3215,x:-10.45},0).wait(1).to({scaleX:0.8056,rotation:275.0731},0).wait(1).to({rotation:275.8246,y:3.7},0).wait(1).to({rotation:276.5762},0).wait(1).to({scaleX:0.8055,rotation:277.3278},0).wait(1).to({rotation:278.0793},0).wait(1).to({rotation:278.8309,x:-10.4},0).wait(1).to({rotation:279.5825},0).wait(1).to({scaleX:0.8056,rotation:280.334},0).wait(1).to({rotation:281.0856,y:3.75},0).wait(1).to({rotation:281.8372,y:3.7},0).wait(1).to({rotation:282.5887,y:3.75},0).wait(1).to({scaleX:0.8055,rotation:283.3403,x:-10.45},0).wait(1).to({rotation:284.0919,x:-10.4},0).wait(1).to({rotation:284.8434,x:-10.35},0).wait(1).to({rotation:285.595,x:-10.4},0).wait(1).to({rotation:286.3466,x:-10.35},0).wait(1).to({rotation:287.0981},0).wait(1).to({scaleX:0.8056,rotation:287.8497,y:3.85},0).wait(1).to({rotation:288.6013,x:-10.4,y:3.8},0).wait(1).to({rotation:289.3528},0).wait(1).to({scaleX:0.8055,rotation:290.1044},0).wait(1).to({scaleX:0.8056,rotation:290.8559,x:-10.35},0).wait(1).to({scaleX:0.8055,rotation:291.6075,y:3.85},0).wait(1).to({rotation:292.3591,x:-10.4},0).wait(1).to({scaleX:0.8056,rotation:293.1106},0).wait(1).to({scaleX:0.8055,rotation:293.8622,x:-10.35},0).wait(1).to({scaleX:0.8056,rotation:294.6138,y:3.9},0).wait(1).to({rotation:295.3653,y:3.85},0).wait(1).to({rotation:296.1169,y:3.9},0).wait(1).to({scaleX:0.8055,rotation:296.8685,x:-10.3,y:3.85},0).wait(1).to({scaleX:0.8056,rotation:297.62,x:-10.35,y:3.9},0).wait(1).to({scaleX:0.8055,rotation:298.3716},0).wait(1).to({rotation:299.1232,y:3.85},0).wait(1);
	this.timeline.addTween(_tweenStr_0.to({rotation:299.8747,x:-10.3,y:3.95},0).wait(1).to({rotation:300.6263},0).wait(1).to({rotation:301.3779,x:-10.35},0).wait(1).to({rotation:302.1294,x:-10.3},0).wait(1).to({rotation:302.881,x:-10.35},0).wait(1).to({rotation:303.6326,x:-10.3},0).wait(1).to({rotation:304.3841},0).wait(1).to({rotation:305.1357,y:4},0).wait(1).to({rotation:305.8873},0).wait(1).to({rotation:306.6388},0).wait(1).to({rotation:307.3904},0).wait(1).to({rotation:308.142},0).wait(1).to({rotation:308.8935},0).wait(1).to({rotation:309.6451,x:-10.35,y:4.05},0).wait(1).to({rotation:310.3967,x:-10.3,y:4},0).wait(1).to({rotation:311.1482,x:-10.35,y:4.1},0).wait(1).to({rotation:311.8998,x:-10.3,y:4.05},0).wait(1).to({rotation:312.6514,x:-10.35},0).wait(1).to({rotation:313.4029,x:-10.3},0).wait(1).to({rotation:314.1545},0).wait(1).to({rotation:314.9061,y:4.1},0).wait(1).to({rotation:315.6576,y:4.05},0).wait(1).to({rotation:316.4092,x:-10.35,y:4.1},0).wait(1).to({rotation:317.1608,x:-10.3},0).wait(1).to({rotation:317.9123,y:4.2},0).wait(1).to({rotation:318.6639,y:4.15},0).wait(1).to({rotation:319.4154,x:-10.35,y:4.2},0).wait(1).to({rotation:320.167},0).wait(1).to({rotation:320.9186},0).wait(1).to({rotation:321.6701,x:-10.3,y:4.25},0).wait(1).to({rotation:322.4217,x:-10.35,y:4.2},0).wait(1).to({rotation:323.1733,x:-10.3,y:4.25},0).wait(1).to({rotation:323.9248},0).wait(1).to({rotation:324.6764,x:-10.35},0).wait(1).to({rotation:325.428},0).wait(1).to({rotation:326.1795,y:4.3},0).wait(1).to({rotation:326.9311,y:4.25},0).wait(1).to({rotation:327.6827,x:-10.3},0).wait(1).to({rotation:328.4342,y:4.3},0).wait(1).to({rotation:329.1858,x:-10.35},0).wait(1).to({rotation:329.9374,y:4.25},0).wait(1).to({rotation:330.6889,y:4.3},0).wait(1).to({rotation:331.4405,x:-10.4},0).wait(1).to({rotation:332.1921,x:-10.35},0).wait(1).to({rotation:332.9436,y:4.35},0).wait(1).to({scaleX:0.8056,rotation:333.6952,y:4.3},0).wait(1).to({scaleX:0.8055,rotation:334.4468},0).wait(1).to({scaleX:0.8056,rotation:335.1983,y:4.4},0).wait(1).to({rotation:335.9499,x:-10.4,y:4.35},0).wait(1).to({scaleX:0.8055,rotation:336.7015,y:4.4},0).wait(1).to({rotation:337.453,y:4.35},0).wait(1).to({rotation:338.2046,y:4.4},0).wait(1).to({scaleX:0.8056,rotation:338.9562,y:4.45},0).wait(1).to({scaleX:0.8055,rotation:339.7077},0).wait(1).to({scaleX:0.8056,rotation:340.4593},0).wait(1).to({rotation:341.2109,x:-10.45},0).wait(1).to({scaleX:0.8055,rotation:341.9624,x:-10.4,y:4.4},0).wait(1).to({rotation:342.714,y:4.45},0).wait(1).to({rotation:343.4656},0).wait(1).to({rotation:344.2171},0).wait(1).to({rotation:344.9687},0).wait(1).to({rotation:345.7203,y:4.5},0).wait(1).to({scaleX:0.8056,rotation:346.4718},0).wait(1).to({rotation:347.2234},0).wait(1).to({rotation:347.9749},0).wait(1).to({scaleX:0.8055,rotation:348.7265},0).wait(1).to({rotation:349.4781,x:-10.45},0).wait(1).to({rotation:350.2296,x:-10.5},0).wait(1).to({rotation:350.9812,x:-10.45,y:4.55},0).wait(1).to({scaleX:0.8056,rotation:351.7328,x:-10.5,y:4.5},0).wait(1).to({rotation:352.4843,x:-10.45,y:4.55},0).wait(1).to({rotation:353.2359},0).wait(1).to({scaleX:0.8055,rotation:353.9875},0).wait(1).to({rotation:354.739,x:-10.5},0).wait(1).to({rotation:355.4906},0).wait(1).to({scaleX:0.8056,rotation:356.2422,x:-10.45},0).wait(1).to({rotation:356.9937,x:-10.5},0).wait(1).to({rotation:357.7453,y:4.6},0).wait(1).to({rotation:358.4969},0).wait(1).to({scaleX:0.8055,rotation:359.2484},0).wait(1).to({rotation:360,x:-10.55,y:4.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.4,-182.5,393.8,374);


// stage content:
(lib.loadingTMR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {buttonfinal:11,start:20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,9,19,20,21,58,95,133,173,209,246,284,304,324,364,404,439,459,479,519,559,596,609,632,672,707,749,769,786,824];
	this.streamSoundSymbolsList[20] = [{id:"sburban",startFrame:20,endFrame:1784,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}
	this.frame_9 = function() {
		var _this = this;
		this.playbutton.addEventListener("click", startmovie.bind(this));
		
		function startmovie()
		{
		_this.gotoAndPlay('start');
		}
	}
	this.frame_19 = function() {
		this.gotoAndPlay('buttonfinal');
	}
	this.frame_20 = function() {
		var soundInstance = playSound("sburban",0);
		this.InsertIntoSoundStreamData(soundInstance,20,1784,1);
		this.skiport.stop();
	}
	this.frame_21 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('drumhit');
	}
	this.frame_58 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('drumhit');
	}
	this.frame_95 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('drumhit');
	}
	this.frame_133 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('drumhit');
	}
	this.frame_173 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('drumhit');
	}
	this.frame_209 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('drumhit');
	}
	this.frame_246 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('pian1');
	}
	this.frame_284 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('pian1');
	}
	this.frame_304 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('pian2');
	}
	this.frame_324 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('pian3');
	}
	this.frame_364 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('pian4');
	}
	this.frame_404 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('pian2');
		_this.skiport2.inner.gotoAndPlay('pian2');
	}
	this.frame_439 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('pian1');
		_this.skiport2.inner.gotoAndPlay('pian1');
	}
	this.frame_459 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('pian2');
		_this.skiport2.inner.gotoAndPlay('pian2');
	}
	this.frame_479 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('pian4');
		_this.skiport2.inner.gotoAndPlay('pian4');
	}
	this.frame_519 = function() {
		var _this = this; 
		
		_this.skiport.inner.gotoAndPlay('pian2');
		_this.skiport2.inner.gotoAndPlay('pian2');
	}
	this.frame_559 = function() {
		var _this = this; 
		_this.skiport.inner.gotoAndPlay('pian3');
	}
	this.frame_596 = function() {
		this.skiport.inner.gotoAndPlay('pian3');
	}
	this.frame_609 = function() {
		this.skiport.inner.gotoAndPlay('drumhit');
	}
	this.frame_632 = function() {
		this.skiport.inner.gotoAndPlay('pian4');
	}
	this.frame_672 = function() {
		this.skiport.inner.gotoAndPlay('pian3');
	}
	this.frame_707 = function() {
		this.skiport.inner.gotoAndPlay('pian1');
	}
	this.frame_749 = function() {
		this.skiport.inner.gotoAndPlay('drumhit');
	}
	this.frame_769 = function() {
		this.skiport.inner.gotoAndPlay('pian1');
	}
	this.frame_786 = function() {
		this.skiport.inner.gotoAndPlay('pian4');
	}
	this.frame_824 = function() {
		this.skiport.inner.gotoAndPlay('fag1');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(37).call(this.frame_58).wait(37).call(this.frame_95).wait(38).call(this.frame_133).wait(40).call(this.frame_173).wait(36).call(this.frame_209).wait(37).call(this.frame_246).wait(38).call(this.frame_284).wait(20).call(this.frame_304).wait(20).call(this.frame_324).wait(40).call(this.frame_364).wait(40).call(this.frame_404).wait(35).call(this.frame_439).wait(20).call(this.frame_459).wait(20).call(this.frame_479).wait(40).call(this.frame_519).wait(40).call(this.frame_559).wait(37).call(this.frame_596).wait(13).call(this.frame_609).wait(23).call(this.frame_632).wait(40).call(this.frame_672).wait(35).call(this.frame_707).wait(42).call(this.frame_749).wait(20).call(this.frame_769).wait(17).call(this.frame_786).wait(38).call(this.frame_824).wait(995));

	// nomouse
	this.instance = new lib.nocursor();
	this.instance.setTransform(73.2,-72.95,1,1,0,0,0,-226.4,-81.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(1799));

	// loading_bar
	this.instance_1 = new lib.loadingguibar("synched",0);
	this.instance_1.setTransform(252.1,748.3,0.0433,1,0,0,0,136.4,86.1);
	this.instance_1._off = true;

	
	var _tweenStr_1 = cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).wait(1).to({regX:136.7,scaleX:0.0512,x:213.2,y:515.05},0).wait(1).to({regX:136.8,scaleX:0.0592,x:174.3,y:281.8},0).wait(1).to({regX:136.4,scaleX:0.0598,x:174.4,y:281.85},0).wait(1).to({regX:136.8,scaleX:0.0603,x:174.45},0).wait(1).to({regX:136.3,scaleX:0.0609,x:174.5},0).wait(1).to({regX:136.8,scaleX:0.0614,x:174.6},0).wait(1).to({regX:137.2,scaleX:0.062,x:174.65,y:281.9},0).wait(1).to({regX:136.7,scaleX:0.0625,x:174.7},0).wait(1).to({regX:137.1,scaleX:0.0631,x:174.75},0).wait(1).to({regX:137.5,scaleX:0.0637,x:174.8},0).wait(1).to({regX:136.2,scaleX:0.0642},0).wait(1).to({regX:136.7,scaleX:0.0648,x:174.85,y:281.95},0).wait(1).to({regX:137,scaleX:0.0653,x:174.9},0).wait(1).to({regX:136.6,scaleX:0.0659,x:175},0).wait(1).to({regX:137,scaleX:0.0665,x:175.05},0).wait(1).to({regX:136.6,scaleX:0.067,x:175.1,y:282},0).wait(1).to({regX:136.9,scaleX:0.0676,x:175.2},0).wait(1).to({regX:137.2,scaleX:0.0681,x:175.25},0).wait(1).to({regX:136.8,scaleX:0.0687,x:175.3},0).wait(1).to({regX:136.4,scaleX:0.0692},0).wait(1).to({regX:136.8,scaleX:0.0698,x:175.4,y:282.05},0).wait(1).to({regX:136.4,scaleX:0.0704},0).wait(1).to({regX:136.8,scaleX:0.0709,x:175.45},0).wait(1).to({regX:136.4,scaleX:0.0715,x:175.5},0).wait(1).to({regX:136.8,scaleX:0.072,x:175.55},0).wait(1).to({regX:137.1,scaleX:0.0726,x:175.65,y:282.1},0).wait(1).to({regX:136.7,scaleX:0.0732,x:175.75},0).wait(1).to({regX:137.1,scaleX:0.0737,x:175.8},0).wait(1).to({regX:136.7,scaleX:0.0743,x:175.85},0).wait(1).to({regX:137,scaleX:0.0748,x:175.9,y:282.15},0).wait(1).to({regX:136.7,scaleX:0.0754},0).wait(1).to({regX:136.3,scaleX:0.0759,x:175.95},0).wait(1).to({regX:136.6,scaleX:0.0765,x:176},0).wait(1).to({regX:136.9,scaleX:0.0771,x:176.05},0).wait(1).to({regX:136.6,scaleX:0.0776,x:176.1,y:282.2},0).wait(1).to({regX:136.9,scaleX:0.0782,x:176.2},0).wait(1).to({regX:136.6,scaleX:0.0787,x:176.3},0).wait(1).to({regX:136.8,scaleX:0.0793,x:176.35},0).wait(1).to({regX:137.2,scaleX:0.0798,x:176.4},0).wait(1).to({regX:136.8,scaleX:0.0804,x:176.45,y:282.25},0).wait(1).to({regX:136.5,scaleX:0.081},0).wait(1).to({regX:136.8,scaleX:0.0815,x:176.5},0).wait(1).to({regX:136.4,scaleX:0.0821,x:176.55},0).wait(1).to({regX:136.8,scaleX:0.0826,x:176.6,y:282.3},0).wait(1).to({regX:136.4,scaleX:0.0832,x:176.65},0).wait(1).to({regX:136.7,scaleX:0.0838,x:176.75},0).wait(1).to({regX:137,scaleX:0.0843,x:176.8},0).wait(1).to({regX:136.7,scaleX:0.0849,x:176.85},0).wait(1).to({regX:137,scaleX:0.0854,x:176.95,y:282.35},0).wait(1).to({regX:136.7,scaleX:0.086},0).wait(1).to({regX:137,scaleX:0.0865,x:177.05},0).wait(1).to({regX:136.7,scaleX:0.0871},0).wait(1).to({regX:136.9,scaleX:0.0877,x:177.1},0).wait(1).to({regX:136.6,scaleX:0.0882,x:177.15,y:282.4},0).wait(1).to({regX:136.8,scaleX:0.0888,x:177.2},0).wait(1).to({regX:136.6,scaleX:0.0893,x:177.25},0).wait(1).to({regX:136.8,scaleX:0.0899,x:177.35},0).wait(1).to({regX:136.6,scaleX:0.0904,x:177.4,y:282.45},0).wait(1).to({regX:136.8,scaleX:0.091,x:177.45},0).wait(1).to({regX:136.5,scaleX:0.0916},0).wait(1).to({regX:136.2,scaleX:0.0921,x:177.55},0).wait(1).to({regX:136.5,scaleX:0.0927,x:177.6},0).wait(1).to({regX:136.8,scaleX:0.0932,x:177.65,y:282.5},0).wait(1).to({regX:136.4,scaleX:0.0938,x:177.7},0).wait(1).to({regX:136.8,scaleX:0.0943,x:177.75},0).wait(1).to({regX:137,scaleX:0.0949,x:177.85},0).wait(1).to({regX:136.7,scaleX:0.0955},0).wait(1).to({regX:137,scaleX:0.096,x:177.95,y:282.55},0).wait(1).to({regX:136.7,scaleX:0.0966,x:178},0).wait(1).to({regX:136.9,scaleX:0.0971,x:178.05},0).wait(1).to({regX:136.7,scaleX:0.0977},0).wait(1).to({regX:136.4,scaleX:0.0983,x:178.15,y:282.6},0).wait(1).to({regX:136.6,scaleX:0.0988,x:178.2},0).wait(1).to({regX:136.3,scaleX:0.0994,x:178.25},0).wait(1).to({regX:136.6,scaleX:0.0999,x:178.3},0).wait(1).to({regX:136.8,scaleX:0.1005,x:178.4},0).wait(1).to({regX:136.6,scaleX:0.101,x:178.45,y:282.65},0).wait(1).to({regX:136.8,scaleX:0.1016,x:178.5},0).wait(1).to({regX:137.1,scaleX:0.1022,x:178.55},0).wait(1).to({regX:136.8,scaleX:0.1027,x:178.6},0).wait(1).to({regX:137,scaleX:0.1033,x:178.65},0).wait(1).to({regX:136.2,scaleX:0.1038,y:282.7},0).wait(1).to({regX:136.5,scaleX:0.1044,x:178.7},0).wait(1).to({regX:136.8,scaleX:0.1049,x:178.8},0).wait(1).to({regX:136.4,scaleX:0.1055,x:178.85},0).wait(1).to({regX:136.7,scaleX:0.1061,x:178.9,y:282.75},0).wait(1).to({regX:136.9,scaleX:0.1066,x:179},0).wait(1).to({regX:136.7,scaleX:0.1072,x:179.05},0).wait(1).to({regX:136.9,scaleX:0.1077,x:179.1},0).wait(1).to({regX:136.7,scaleX:0.1083},0).wait(1).to({regX:136.4,scaleX:0.1089,x:179.15,y:282.8},0).wait(1).to({regX:136.7,scaleX:0.1094,x:179.2},0).wait(1).to({regX:136.4,scaleX:0.11,x:179.25},0).wait(1).to({regX:136.6,scaleX:0.1105,x:179.3},0).wait(1).to({regX:136.4,scaleX:0.1111,x:179.35},0).wait(1).to({regX:136.6,scaleX:0.1116,x:179.5,y:282.85},0).wait(1).to({regX:136.8,scaleX:0.1122,x:179.55},0).wait(1).to({regX:136.6,scaleX:0.1128,x:179.6},0).wait(1).to({regX:136.8,scaleX:0.1133,x:179.65},0).wait(1).to({regX:137,scaleX:0.1139,x:179.7,y:282.9},0).wait(1).to({regX:136.3,scaleX:0.1144},0).wait(1).to({regX:136.6,scaleX:0.115,x:179.75},0).wait(1).to({regX:136.8,scaleX:0.1156,x:179.8},0).wait(1).to({regX:136.5,scaleX:0.1161,x:179.85},0).wait(1).to({regX:136.7,scaleX:0.1167,x:179.9,y:282.95},0).wait(1).to({regX:136.5,scaleX:0.1172,x:180},0).wait(1).to({regX:136.7,scaleX:0.1178,x:180.1},0).wait(1).to({regX:136.9,scaleX:0.1183,x:180.15},0).wait(1).to({regX:136.7,scaleX:0.1189,x:180.2,y:283},0).wait(1).to({regX:136.8,scaleX:0.1195,x:180.25},0).wait(1).to({regX:136.7,scaleX:0.12},0).wait(1).to({regX:136.4,scaleX:0.1206,x:180.3},0).wait(1).to({regX:136.6,scaleX:0.1211,x:180.35},0).wait(1).to({regX:136.4,scaleX:0.1217,x:180.4,y:283.05},0).wait(1).to({regX:136.6,scaleX:0.1223,x:180.45},0).wait(1).to({regX:136.8,scaleX:0.1228,x:180.5},0).wait(1).to({regX:136.6,scaleX:0.1234,x:180.6},0).wait(1).to({regX:136.8,scaleX:0.1239,x:180.65},0).wait(1).to({regX:136.6,scaleX:0.1245,x:180.75,y:283.1},0).wait(1).to({regX:136.3,scaleX:0.125},0).wait(1).to({regX:136.6,scaleX:0.1256,x:180.8},0).wait(1).to({regX:136.3,scaleX:0.1262,x:180.85},0).wait(1).to({regX:136.6,scaleX:0.1267,x:180.9,y:283.15},0).wait(1).to({regX:136.7,scaleX:0.1273,x:180.95},0).wait(1).to({regX:136.5,scaleX:0.1278,x:181},0).wait(1).to({regX:136.7,scaleX:0.1284,x:181.1},0).wait(1).to({regX:136.8,scaleX:0.129,x:181.15},0).wait(1).to({regX:136.7,scaleX:0.1295,x:181.2,y:283.2},0).wait(1).to({regX:136.8,scaleX:0.1301,x:181.25},0).wait(1).to({regX:136.7,scaleX:0.1306,x:181.35},0).wait(1).to({regX:136.4,scaleX:0.1312},0).wait(1).to({regX:136.7,scaleX:0.1317,x:181.4},0).wait(1).to({regX:136.4,scaleX:0.1323,x:181.45,y:283.25},0).wait(1).to({regX:136.6,scaleX:0.1329,x:181.5},0).wait(1).to({regX:136.4,scaleX:0.1334,x:181.55},0).wait(1).to({regX:136.6,scaleX:0.134,x:181.65},0).wait(1).to({regX:136.8,scaleX:0.1345,x:181.7,y:283.3},0).wait(1).to({regX:136.6,scaleX:0.1351,x:181.75},0).wait(1).to({regX:136.8,scaleX:0.1356,x:181.8},0).wait(1).to({regX:136.6,scaleX:0.1362},0).wait(1).to({regX:136.3,scaleX:0.1368,x:181.85},0).wait(1).to({regX:136.6,scaleX:0.1373,x:181.95,y:283.35},0).wait(1).to({regX:136.3,scaleX:0.1379,x:182},0).wait(1).to({regX:136.6,scaleX:0.1384,x:182.05},0).wait(1).to({regX:136.7,scaleX:0.139,x:182.1},0).wait(1).to({regX:136.5,scaleX:0.1395,x:182.15},0).wait(1).to({regX:136.7,scaleX:0.1401,x:182.25,y:283.4},0).wait(1).to({regX:136.8,scaleX:0.1407,x:182.3},0).wait(1).to({regX:136.7,scaleX:0.1412,x:182.35},0).wait(1).to({regX:136.4,scaleX:0.1418},0).wait(1).to({regX:136.3,scaleX:0.1423,x:182.4,y:283.45},0).wait(1).to({regX:136.4,scaleX:0.1429,x:182.45},0).wait(1).to({regX:136.7,scaleX:0.1434,x:182.5},0).wait(1).to({regX:136.4,scaleX:0.144,x:182.6},0).wait(1).to({regX:136.6,scaleX:0.1446,x:182.7},0).wait(1).to({regX:136.8,scaleX:0.1451,x:182.75,y:283.5},0).wait(1).to({regX:136.6,scaleX:0.1457,x:182.8},0).wait(1).to({regX:136.8,scaleX:0.1462,x:182.85},0).wait(1).to({regX:136.6,scaleX:0.1468,x:182.9},0).wait(1).to({regX:136.8,scaleX:0.1474,x:182.95},0).wait(1).to({regX:136.6,scaleX:0.1479,y:283.55},0).wait(1).to({regX:136.4,scaleX:0.1485,x:183},0).wait(1).to({regX:136.6,scaleX:0.149,x:183.05},0).wait(1).to({regX:136.7,scaleX:0.1496,x:183.1},0).wait(1).to({regX:136.6,scaleX:0.1501,x:183.2,y:283.6},0).wait(1).to({regX:136.7,scaleX:0.1507,x:183.3},0).wait(1).to({regX:136.5,scaleX:0.1513,x:183.35},0).wait(1).to({regX:136.7,scaleX:0.1518,x:183.4},0).wait(1).to({regX:136.5,scaleX:0.1524},0).wait(1).to({regX:136.3,scaleX:0.1529,x:183.45,y:283.65},0).wait(1).to({regX:136.5,scaleX:0.1535,x:183.5},0).wait(1).to({regX:136.3,scaleX:0.1541,x:183.55},0).wait(1).to({regX:136.4,scaleX:0.1546,x:183.6},0).wait(1).to({regX:136.7,scaleX:0.1552,x:183.65},0).wait(1).to({regX:136.4,scaleX:0.1557,x:183.7,y:283.7},0).wait(1).to({regX:136.6,scaleX:0.1563,x:183.75},0).wait(1).to({regX:136.8,scaleX:0.1568,x:183.9},0).wait(1).to({regX:136.6,scaleX:0.1574,x:183.95},0).wait(1).to({regX:136.8,scaleX:0.158,x:184,y:283.75},0).wait(1).to({regX:136.6,scaleX:0.1585},0).wait(1).to({regX:136.4,scaleX:0.1591,x:184.05},0).wait(1).to({regX:136.6,scaleX:0.1596,x:184.1},0).wait(1).to({regX:136.4,scaleX:0.1602,x:184.15},0).wait(1).to({regX:136.6,scaleX:0.1608,x:184.2,y:283.8},0).wait(1).to({regX:136.7,scaleX:0.1613,x:184.3},0).wait(1).to({regX:136.6,scaleX:0.1619,x:184.35},0).wait(1).to({regX:136.7,scaleX:0.1624,x:184.4},0).wait(1).to({regX:136.5,scaleX:0.163,x:184.45},0).wait(1).to({scaleX:0.2726,scaleY:1.6682,x:134.2,y:338.3},0).wait(1).to({regX:136.4,scaleX:0.2734,x:134.3,y:338.35},0).wait(1).to({scaleX:0.2742,x:134.4},0).wait(1).to({regX:136.6,scaleX:0.275,x:134.5},0).wait(1).to({regX:136.5,scaleX:0.2758,x:134.55},0).wait(1).to({scaleX:0.2766,x:134.65},0).wait(1).to({regX:136.6,scaleX:0.2774,x:134.75},0).wait(1).to({scaleX:0.2782,x:134.85},0).wait(1).to({scaleX:0.279,x:134.9},0).wait(1).to({regX:136.3,scaleX:0.2798,x:134.95},0).wait(1).to({regX:136.4,scaleX:0.2806,x:135.1},0).wait(1).to({scaleX:0.2814,x:135.15},0).wait(1).to({scaleX:0.2823,x:135.2},0).wait(1).to({regX:136.3,scaleX:0.2831,x:135.3},0).wait(1).to({regX:136.5,scaleX:0.2839,x:135.4},0).wait(1).to({regX:136.4,scaleX:0.2847,x:135.45},0).wait(1).to({scaleX:0.2855,x:135.55},0).wait(1).to({scaleX:0.2863,x:135.6},0).wait(1).to({regX:136.6,scaleX:0.2871,x:135.75},0).wait(1).to({regX:136.5,scaleX:0.2879,x:135.8},0).wait(1).to({regX:136.4,scaleX:0.2887,x:135.85},0).wait(1).to({scaleX:0.2895,x:135.95},0).wait(1).to({regX:136.6,scaleX:0.2903,x:136.05},0).wait(1).to({scaleX:0.2912,x:136.1},0).wait(1).to({regX:136.5,scaleX:0.292,x:136.2},0).wait(1).to({regX:136.7,scaleX:0.2928,x:136.3},0).wait(1).to({regX:136.6,scaleX:0.2936,x:136.4},0).wait(1).to({scaleX:0.2944,x:136.45},0).wait(1).to({regX:136.5,scaleX:0.2952,x:136.5},0).wait(1).to({regX:136.3,scaleX:0.296,x:136.6},0).wait(1).to({regX:136.4,scaleX:0.2968,x:136.75},0).wait(1).to({scaleX:0.2976},0).wait(1).to({scaleX:0.2984,x:136.85},0).wait(1).to({regX:136.5,scaleX:0.2992,x:136.95},0).wait(1).to({regX:136.4,scaleX:0.3001,x:137.05},0).wait(1).to({scaleX:0.3009,x:137.1},0).wait(1).to({scaleX:0.3017,x:137.15},0).wait(1).to({regX:136.3,scaleX:0.3025,x:137.25},0).wait(1).to({regX:136.5,scaleX:0.3033,x:137.4},0).wait(1).to({regX:136.4,scaleX:0.3041},0).wait(1).to({scaleX:0.3049,x:137.5},0).wait(1).to({scaleX:0.3057,x:137.6},0).wait(1).to({regX:136.6,scaleX:0.3065,x:137.7},0).wait(1).to({regX:136.5,scaleX:0.3073,x:137.75},0).wait(1).to({regX:136.4,scaleX:0.3082,x:137.8},0).wait(1).to({scaleX:0.309,x:137.9},0).wait(1).to({regX:136.6,scaleX:0.3098,x:138.05},0).wait(1).to({regX:136.5,scaleX:0.3106},0).wait(1).to({scaleX:0.3114,x:138.15},0).wait(1).to({regX:136.4,scaleX:0.3122,x:138.25,y:338.4},0).wait(1).to({regX:136.6,scaleX:0.313,x:138.35},0).wait(1).to({scaleX:0.3138,x:138.4},0).wait(1).to({regX:136.3,scaleX:0.3146,x:138.5},0).wait(1).to({regX:136.5,scaleX:0.3154,x:138.6},0).wait(1).to({regX:136.4,scaleX:0.3162,x:138.7},0).wait(1).to({scaleX:0.317},0).wait(1).to({scaleX:0.3179,x:138.8},0).wait(1).to({regX:136.5,scaleX:0.3187,x:138.95},0).wait(1).to({regX:136.4,scaleX:0.3195,x:139},0).wait(1).to({scaleX:0.3203,x:139.05},0).wait(1).to({scaleX:0.3211,x:139.15},0).wait(1).to({regX:136.6,scaleX:0.3219,x:139.25},0).wait(1).to({regX:136.5,scaleX:0.3227,x:139.3},0).wait(1).to({regX:136.4,scaleX:0.3235,x:139.35},0).wait(1).to({scaleX:0.3243,x:139.45},0).wait(1).to({regX:136.6,scaleX:0.3251,x:139.6},0).wait(1).to({scaleX:0.3259},0).wait(1).to({regX:136.5,scaleX:0.3268,x:139.7},0).wait(1).to({regX:136.4,scaleX:0.3276,x:139.8},0).wait(1).to({scaleX:0.3284,x:139.85},0).wait(1).to({regX:136.6,scaleX:0.3292,x:140},0).wait(1).to({regX:136.5,scaleX:0.33,x:140.05},0).wait(1).to({scaleX:0.3308,x:140.1},0).wait(1).to({regX:136.6,scaleX:0.3316,x:140.25},0).wait(1).to({scaleX:0.3324,x:140.3},0).wait(1).to({scaleX:0.3332,x:140.35},0).wait(1).to({regX:136.3,scaleX:0.334,x:140.45},0).wait(1).to({regX:136.5,scaleX:0.3349,x:140.55},0).wait(1).to({regX:136.4,scaleX:0.3357,x:140.65},0).wait(1).to({scaleX:0.3365,x:140.7},0).wait(1).to({scaleX:0.3373,x:140.75},0).wait(1).to({regX:136.5,scaleX:0.3381,x:140.9},0).wait(1).to({regX:136.4,scaleX:0.3389,x:140.95},0).wait(1).to({scaleX:0.3397,x:141},0).wait(1).to({scaleX:0.3405,x:141.1},0).wait(1).to({regX:136.6,scaleX:0.3413,x:141.2},0).wait(1).to({regX:136.5,scaleX:0.3421,x:141.25},0).wait(1).to({regX:136.4,scaleX:0.3429,x:141.35},0).wait(1).to({scaleX:0.3438,x:141.4},0).wait(1).to({regX:136.6,scaleX:0.3446,x:141.55},0).wait(1).to({regX:136.5,scaleX:0.3454,x:141.6},0).wait(1).to({scaleX:0.3462,x:141.65},0).wait(1).to({regX:136.4,scaleX:0.347,x:141.75},0).wait(1).to({regX:136.6,scaleX:0.3478,x:141.9},0).wait(1).to({regX:136.4,scaleX:0.3486},0).wait(1).to({regX:136.3,scaleX:0.3494,x:141.95},0).wait(1).to({scaleX:0.3502,x:142.05},0).wait(1).to({regX:136.4,scaleX:0.351,x:142.2,y:338.45},0).wait(1).to({scaleX:0.3518,x:142.25},0).wait(1).to({scaleX:0.3526,x:142.3},0).wait(1).to({regX:136.5,scaleX:0.3535,x:142.45},0).wait(1).to({scaleX:0.3543,x:142.55},0).wait(1).to({regX:136.4,scaleX:0.3551},0).wait(1).to({scaleX:0.3559,x:142.65},0).wait(1).to({scaleX:0.3567,x:142.75},0).wait(1).to({regX:136.5,scaleX:0.3575,x:142.85},0).wait(1).to({regX:136.4,scaleX:0.3583},0).wait(1).to({scaleX:0.3591,x:142.95},0).wait(1).to({scaleX:0.3599,x:143.05},0).wait(1).to({regX:136.5,scaleX:0.3607,x:143.2},0).wait(1).to({scaleX:0.3616},0).wait(1).to({regX:136.4,scaleX:0.3624,x:143.25},0).wait(1).to({scaleX:0.3632,x:143.4},0).wait(1).to({regX:136.6,scaleX:0.364,x:143.5},0).wait(1).to({regX:136.5,scaleX:0.3648,x:143.55},0).wait(1).to({scaleX:0.3656,x:143.6},0).wait(1).to({regX:136.4,scaleX:0.3664,x:143.7},0).wait(1).to({regX:136.6,scaleX:0.3672,x:143.85},0).wait(1).to({scaleX:0.368},0).wait(1).to({regX:136.4,scaleX:0.3688,x:143.95},0).wait(1).to({regX:136.3,scaleX:0.3696,x:144.05},0).wait(1).to({regX:136.4,scaleX:0.3705,x:144.15},0).wait(1).to({scaleX:0.3713,x:144.2},0).wait(1).to({scaleX:0.3721,x:144.3},0).wait(1).to({regX:136.5,scaleX:0.3729,x:144.4},0).wait(1).to({scaleX:0.3737,x:144.5},0).wait(1).to({regX:136.4,scaleX:0.3745},0).wait(1).to({scaleX:0.3753,x:144.6},0).wait(1).to({regX:136.6,scaleX:0.3761,x:144.8},0).wait(1).to({regX:136.5,scaleX:0.3769},0).wait(1).to({regX:136.4,scaleX:0.3777},0).wait(1).to({scaleX:0.3785,x:144.95},0).wait(1).to({regX:136.6,scaleX:0.3793,x:145.05},0).wait(1).to({regX:136.5,scaleX:0.3802,x:145.1},0).wait(1).to({scaleX:0.381,x:145.2},0).wait(1).to({regX:136.4,scaleX:0.3818},0).wait(1).to({scaleX:0.3826,x:145.4},0).wait(1).to({regX:136.6,scaleX:0.3834,x:145.45},0).wait(1).to({regX:136.5,scaleX:0.3842,x:145.5},0).wait(1).to({scaleX:0.385,x:145.6},0).wait(1).to({regX:136.4,scaleX:0.3858,x:145.65},0).wait(1).to({scaleX:0.3866,x:145.8},0).wait(1).to({scaleX:0.3875,x:145.85},0).wait(1).to({scaleX:0.3883,x:145.9},0).wait(1).to({regX:136.3,scaleX:0.3891,x:146},0).wait(1).to({regX:136.4,scaleX:0.3899,x:146.15},0).wait(1).to({scaleX:0.3907,y:338.5},0).wait(1).to({scaleX:0.3915,x:146.25},0).wait(1).to({regX:136.5,scaleX:0.3923,x:146.35},0).wait(1).to({scaleX:0.3931,x:146.45},0).wait(1).to({regX:136.4,scaleX:0.3939,x:146.5},0).wait(1).to({scaleX:0.3947,x:146.55},0).wait(1).to({regX:136.5,scaleX:0.3955,x:146.7},0).wait(1).to({scaleX:0.3963,x:146.75},0).wait(1).to({regX:136.4,scaleX:0.3972},0).wait(1).to({scaleX:0.398,x:146.9},0).wait(1).to({regX:136.6,scaleX:0.3988,x:147.05},0).wait(1).to({regX:136.5,scaleX:0.3996},0).wait(1).to({scaleX:0.4004,x:147.15},0).wait(1).to({regX:136.4,scaleX:0.4012},0).wait(1).to({regX:136.6,scaleX:0.402,x:147.35},0).wait(1).to({regX:136.4,scaleX:0.4028,x:147.4},0).wait(1).to({scaleX:0.4036,x:147.45},0).wait(1).to({regX:136.3,scaleX:0.4044,x:147.5},0).wait(1).to({regX:136.4,scaleX:0.4052,x:147.7},0).wait(1).to({scaleX:0.4061},0).wait(1).to({scaleX:0.4069,x:147.8},0).wait(1).to({scaleX:0.4077,x:147.85},0).wait(1).to({regX:136.5,scaleX:0.4085,x:148},0).wait(1).to({regX:136.4,scaleX:0.4093,x:148.05},0).wait(1).to({scaleX:0.4101,x:148.1},0).wait(1).to({scaleX:0.4109,x:148.2},0).wait(1).to({regX:136.5,scaleX:0.4117,x:148.35},0).wait(1).to({regX:136.4,scaleX:0.4125},0).wait(1).to({scaleX:0.4133,x:148.45},0).wait(1).to({scaleX:0.4142,x:148.55},0).wait(1).to({regX:136.5,scaleX:0.415,x:148.65},0).wait(1).to({scaleX:0.4158,x:148.7},0).wait(1).to({regX:136.4,scaleX:0.4166},0).wait(1).to({scaleX:0.4174,x:148.85},0).wait(1).to({regX:136.6,scaleX:0.4182,x:149},0).wait(1).to({regX:136.5,scaleX:0.419},0).wait(1).to({scaleX:0.4198,x:149.1},0).wait(1).to({regX:136.4,scaleX:0.4206,x:149.15},0).wait(1).to({scaleX:0.4214,x:149.3},0).wait(1).to({scaleX:0.4222,x:149.35},0).wait(1).to({scaleX:0.423,x:149.45},0).wait(1).to({regX:136.3,scaleX:0.4239},0).wait(1).to({regX:136.4,scaleX:0.4247,x:149.6},0).wait(1).to({scaleX:0.4255,x:149.65},0).wait(1).to({scaleX:0.4263,x:149.75},0).wait(1).to({scaleX:0.4271,x:149.85},0).wait(1).to({regX:136.5,scaleX:0.4279,x:149.95},0).wait(1).to({regX:136.4,scaleX:0.4287,x:150},0).wait(1).to({scaleX:0.4295,x:150.1,y:338.55},0).wait(1).to({scaleX:0.4303,x:150.15},0).wait(1).to({regX:136.5,scaleX:0.4311,x:150.3},0).wait(1).to({scaleX:0.4319,x:150.35},0).wait(1).to({regX:136.4,scaleX:0.4328,x:150.4},0).wait(1).to({regX:136.6,scaleX:0.4336,x:150.55},0).wait(1).to({regX:136.5,scaleX:0.4344},0).wait(1).to({scaleX:0.4352,x:150.65},0).wait(1).to({regX:136.4,scaleX:0.436,x:150.7},0).wait(1).to({scaleX:0.4368,x:150.85},0).wait(1).to({scaleX:0.4376,x:150.9},0).wait(1).to({scaleX:0.4384,x:151},0).wait(1).to({regX:136.5,scaleX:0.4392,x:151.05},0).wait(1).to({regX:136.4,scaleX:0.44,x:151.1},0).wait(1).to({scaleX:0.4409,x:151.3},0).wait(1);
	var _tweenStr_2 = _tweenStr_1.to({scaleX:0.4417},0).wait(1).to({scaleX:0.4425,x:151.4},0).wait(1).to({regX:136.3,scaleX:0.4433},0).wait(1).to({regX:136.4,scaleX:0.4441,x:151.55},0).wait(1).to({scaleX:0.4449,x:151.65},0).wait(1).to({scaleX:0.4457,x:151.7},0).wait(1).to({scaleX:0.4465,x:151.8},0).wait(1).to({regX:136.5,scaleX:0.4473,x:151.95},0).wait(1).to({regX:136.4,scaleX:0.4481},0).wait(1).to({scaleX:0.4489,x:152.05},0).wait(1).to({regX:136.5,scaleX:0.4498,x:152.15},0).wait(1).to({scaleX:0.4506,x:152.25},0).wait(1).to({regX:136.4,scaleX:0.4514},0).wait(1).to({scaleX:0.4522,x:152.35},0).wait(1).to({regX:136.6,scaleX:0.453,x:152.55},0).wait(1).to({regX:136.5,scaleX:0.4538},0).wait(1).to({scaleX:0.4546,x:152.6},0).wait(1).to({regX:136.3,scaleX:0.4554,x:152.65},0).wait(1).to({regX:136.4,scaleX:0.4562,x:152.85},0).wait(1).to({scaleX:0.457},0).wait(1).to({scaleX:0.4578,x:152.95},0).wait(1).to({scaleX:0.4586,x:153},0).wait(1).to({scaleX:0.4595,x:153.1},0).wait(1).to({scaleX:0.4603,x:153.2},0).wait(1).to({scaleX:0.4611,x:153.25},0).wait(1).to({scaleX:0.4619,x:153.35},0).wait(1).to({regX:136.5,scaleX:0.4627,x:153.5},0).wait(1).to({regX:136.4,scaleX:0.4635,x:153.45},0).wait(1).to({scaleX:0.4643,x:153.6},0).wait(1).to({scaleX:0.4651,x:153.7},0).wait(1).to({regX:136.5,scaleX:0.4659,x:153.8},0).wait(1).to({scaleX:0.4668,x:153.9},0).wait(1).to({regX:136.4,scaleX:0.4676,x:153.85},0).wait(1).to({scaleX:0.4684,x:154,y:338.6},0).wait(1).to({scaleX:0.4692,x:154.1},0).wait(1).to({regX:136.5,scaleX:0.47,x:154.2},0).wait(1).to({regX:136.4,scaleX:0.4708},0).wait(1).to({scaleX:0.4716,x:154.3},0).wait(1).to({regX:136.6,scaleX:0.4724,x:154.5},0).wait(1).to({regX:136.5,scaleX:0.4732},0).wait(1).to({scaleX:0.474,x:154.6},0).wait(1).to({regX:136.3,scaleX:0.4748},0).wait(1).to({regX:136.4,scaleX:0.4756,x:154.8},0).wait(1).to({scaleX:0.4765},0).wait(1).to({scaleX:0.4773,x:154.9},0).wait(1).to({scaleX:0.4781,x:155},0).wait(1).to({scaleX:0.4789,x:155.05},0).wait(1).to({scaleX:0.4797,x:155.15},0).wait(1).to({scaleX:0.4805,x:155.25},0).wait(1).to({scaleX:0.4813,x:155.3},0).wait(1).to({regX:136.5,scaleX:0.4821,x:155.45},0).wait(1).to({regX:136.4,scaleX:0.4829},0).wait(1).to({scaleX:0.4837,x:155.55},0).wait(1).to({scaleX:0.4845,x:155.65},0).wait(1).to({regX:136.5,scaleX:0.4854,x:155.75},0).wait(1).to({scaleX:0.4862,x:155.8},0).wait(1).to({regX:136.4,scaleX:0.487,x:155.85},0).wait(1).to({regX:136.6,scaleX:0.4878,x:156.05},0).wait(1).to({regX:136.5,scaleX:0.4886,x:156.1},0).wait(1).to({regX:136.4,scaleX:0.4894,x:156.15},0).wait(1).to({regX:136.3,scaleX:0.4902},0).wait(1).to({regX:136.4,scaleX:0.491,x:156.3},0).wait(1).to({scaleX:0.4918,x:156.35},0).wait(1).to({scaleX:0.4926,x:156.45},0).wait(1).to({scaleX:0.4934,x:156.55},0).wait(1).to({regX:136.3,scaleX:0.4943},0).wait(1).to({regX:136.4,scaleX:0.4951,x:156.75},0).wait(1).to({scaleX:0.4959,x:156.8},0).wait(1).to({scaleX:0.4967,x:156.85},0).wait(1).to({scaleX:0.4975,x:156.95},0).wait(1).to({scaleX:0.4983,x:157.05},0).wait(1).to({scaleX:0.4991,x:157.1},0).wait(1).to({scaleX:0.4999,x:157.2},0).wait(1).to({scaleX:0.5007,x:157.25},0).wait(1).to({regX:136.5,scaleX:0.5015,x:157.4},0).wait(1).to({regX:136.4,scaleX:0.5023},0).wait(1).to({scaleX:0.5032,x:157.5},0).wait(1).to({regX:136.5,scaleX:0.504,x:157.65},0).wait(1).to({scaleX:0.5048,x:157.75},0).wait(1).to({scaleX:0.5056},0).wait(1).to({regX:136.4,scaleX:0.5064,x:157.8},0).wait(1).to({scaleX:0.5072,x:157.95},0).wait(1).to({regX:136.5,scaleX:0.508,x:158.05,y:338.65},0).wait(1).to({regX:136.4,scaleX:0.5088,x:158.1},0).wait(1).to({regX:136.3,scaleX:0.5096},0).wait(1).to({regX:136.4,scaleX:0.5104,x:158.25},0).wait(1).to({scaleX:0.5112,x:158.35},0).wait(1).to({scaleX:0.5121,x:158.4},0).wait(1).to({scaleX:0.5129,x:158.5},0).wait(1).to({scaleX:0.5137,x:158.6},0).wait(1).to({scaleX:0.5145},0).wait(1).to({scaleX:0.5153,x:158.75},0).wait(1).to({scaleX:0.5161,x:158.85},0).wait(1).to({regX:136.5,scaleX:0.5169,x:158.95},0).wait(1).to({regX:136.4,scaleX:0.5177},0).wait(1).to({scaleX:0.5185,x:159.05},0).wait(1).to({scaleX:0.5193,x:159.15},0).wait(1).to({regX:136.5,scaleX:0.5201,x:159.3},0).wait(1).to({scaleX:0.521},0).wait(1).to({regX:136.4,scaleX:0.5218,x:159.35},0).wait(1).to({scaleX:0.5226,x:159.5},0).wait(1).to({scaleX:0.5234,x:159.55},0).wait(1).to({regX:136.5,scaleX:0.5242,x:159.7},0).wait(1).to({regX:136.4,scaleX:0.525},0).wait(1).to({scaleX:0.5258,x:159.75},0).wait(1).to({regX:136.6,scaleX:0.5266,x:160},0).wait(1).to({regX:136.5,scaleX:0.5274,x:159.95},0).wait(1).to({regX:136.4,scaleX:0.5282,x:160.05},0).wait(1).to({scaleX:0.5291,x:160.15},0).wait(1).to({scaleX:0.5299,x:160.2},0).wait(1).to({scaleX:0.5307,x:160.3},0).wait(1).to({scaleX:0.5315,x:160.4},0).wait(1).to({scaleX:0.5323,x:160.45},0).wait(1).to({scaleX:0.5331,x:160.55},0).wait(1).to({scaleX:0.5339},0).wait(1).to({scaleX:0.5347,x:160.7},0).wait(1).to({scaleX:0.5355,x:160.8},0).wait(1).to({regX:136.5,scaleX:0.5363,x:160.9},0).wait(1).to({regX:136.4,scaleX:0.5371},0).wait(1).to({scaleX:0.5379,x:161.05},0).wait(1).to({scaleX:0.5388,x:161.1},0).wait(1).to({regX:136.5,scaleX:0.5396,x:161.25},0).wait(1).to({scaleX:0.5404,x:161.3},0).wait(1).to({regX:136.4,scaleX:0.5412},0).wait(1).to({scaleX:0.542,x:161.45},0).wait(1).to({scaleX:0.5428,x:161.55},0).wait(1).to({scaleX:0.5436,x:161.6},0).wait(1).to({scaleX:0.5444,x:161.7},0).wait(1).to({regX:136.3,scaleX:0.5452},0).wait(1).to({regX:136.4,scaleX:0.546,x:161.9},0).wait(1).to({scaleX:0.5468,x:161.95,y:338.7},0).wait(1).to({scaleX:0.5477,x:162},0).wait(1).to({scaleX:0.5485,x:162.1},0).wait(1).to({scaleX:0.5493,x:162.15},0).wait(1).to({scaleX:0.5501,x:162.25},0).wait(1).to({scaleX:0.5509,x:162.35},0).wait(1).to({scaleX:0.5517,x:162.4},0).wait(1).to({scaleX:0.5525,x:162.5},0).wait(1).to({scaleX:0.5533,x:162.55},0).wait(1).to({scaleX:0.5541,x:162.65},0).wait(1).to({scaleX:0.5549,x:162.75},0).wait(1).to({regX:136.5,scaleX:0.5558,x:162.9},0).wait(1).to({regX:136.4,scaleX:0.5566,x:162.85},0).wait(1).to({scaleX:0.5574,x:163},0).wait(1).to({scaleX:0.5582,x:163.1},0).wait(1).to({regX:136.5,scaleX:0.559,x:163.2},0).wait(1).to({scaleX:0.5598,x:163.25},0).wait(1).to({regX:136.4,scaleX:0.5606},0).wait(1).to({scaleX:0.5614,x:163.4},0).wait(1).to({scaleX:0.5622,x:163.55},0).wait(1).to({scaleX:0.563},0).wait(1).to({scaleX:0.5638,x:163.65},0).wait(1).to({scaleX:0.5647,x:163.75},0).wait(1).to({scaleX:0.5655,x:163.85},0).wait(1).to({scaleX:0.5663,x:163.9},0).wait(1).to({scaleX:0.5671,x:164},0).wait(1).to({scaleX:0.5679,x:164.05},0).wait(1).to({scaleX:0.5687,x:164.1},0).wait(1).to({scaleX:0.5695,x:164.2},0).wait(1).to({scaleX:0.5703,x:164.3},0).wait(1).to({regX:136.5,scaleX:0.5711,x:164.45},0).wait(1).to({regX:136.4,scaleX:0.5719,x:164.4},0).wait(1).to({scaleX:0.5727,x:164.5},0).wait(1).to({scaleX:0.5735,x:164.65},0).wait(1).to({regX:136.5,scaleX:0.5744,x:164.75},0).wait(1).to({scaleX:0.5752,x:164.8},0).wait(1).to({regX:136.4,scaleX:0.576,x:164.85},0).wait(1).to({regX:136.3,scaleX:0.5768,x:164.9},0).wait(1).to({regX:136.4,scaleX:0.5776,x:165.05},0).wait(1).to({regX:136.5,scaleX:0.5784,x:165.15},0).wait(1).to({scaleX:0.5792,x:165.2},0).wait(1).to({regX:136.4,scaleX:0.58,x:165.25},0).wait(1).to({regX:136.3,scaleX:0.5808,x:165.3},0).wait(1).to({regX:136.4,scaleX:0.5816,x:165.5},0).wait(1).to({scaleX:0.5825,x:165.55},0).wait(1).to({scaleX:0.5833,x:165.6},0).wait(1).to({regX:136.3,scaleX:0.5841,x:165.65},0).wait(1).to({regX:136.4,scaleX:0.5849,x:165.75},0).wait(1).to({scaleX:0.5857,x:165.85},0).wait(1).to({scaleX:0.5865,x:165.95,y:338.75},0).wait(1).to({scaleX:0.5873,x:166},0).wait(1).to({scaleX:0.5881,x:166.05},0).wait(1).to({scaleX:0.5889,x:166.2},0).wait(1).to({scaleX:0.5897,x:166.25},0).wait(1).to({regX:136.5,scaleX:0.5905,x:166.4},0).wait(1).to({regX:136.4,scaleX:0.5914},0).wait(1).to({scaleX:0.5922,x:166.45},0).wait(1).to({scaleX:0.593,x:166.6},0).wait(1).to({regX:136.5,scaleX:0.5938,x:166.7},0).wait(1).to({scaleX:0.5946,x:166.75},0).wait(1).to({regX:136.4,scaleX:0.5954,x:166.8},0).wait(1).to({regX:136.3,scaleX:0.5962,x:166.85},0).wait(1).to({regX:136.4,scaleX:0.597,x:167.05},0).wait(1).to({scaleX:0.5978,x:167.1},0).wait(1).to({scaleX:0.5986,x:167.15},0).wait(1).to({scaleX:0.5994,x:167.25},0).wait(1).to({scaleX:0.6003,x:167.35},0).wait(1).to({scaleX:0.6011,x:167.4},0).wait(1).to({scaleX:0.6019,x:167.5},0).wait(1).to({scaleX:0.6027,x:167.55},0).wait(1).to({scaleX:0.6035,x:167.65},0).wait(1).to({scaleX:0.6043,x:167.7},0).wait(1).to({scaleX:0.6051,x:167.8},0).wait(1).to({scaleX:0.6059,x:167.9},0).wait(1).to({scaleX:0.6067,x:168},0).wait(1).to({scaleX:0.6075},0).wait(1).to({scaleX:0.6084,x:168.15},0).wait(1).to({scaleX:0.6092,x:168.25},0).wait(1).to({regX:136.5,scaleX:0.61,x:168.35},0).wait(1).to({regX:136.4,scaleX:0.6108},0).wait(1).to({scaleX:0.6116,x:168.4},0).wait(1).to({scaleX:0.6124,x:168.55},0).wait(1).to({regX:136.5,scaleX:0.6132,x:168.7},0).wait(1).to({scaleX:0.614},0).wait(1).to({regX:136.4,scaleX:0.6148,x:168.8},0).wait(1).to({regX:136.3,scaleX:0.6156,x:168.85},0).wait(1).to({regX:136.4,scaleX:0.6164,x:169},0).wait(1).to({scaleX:0.6172,x:169.05},0).wait(1).to({scaleX:0.6181,x:169.15},0).wait(1).to({scaleX:0.6189,x:169.2},0).wait(1).to({scaleX:0.6197,x:169.3},0).wait(1).to({scaleX:0.6205,x:169.35},0).wait(1).to({scaleX:0.6213,x:169.45},0).wait(1).to({scaleX:0.6221,x:169.55},0).wait(1).to({scaleX:0.6229},0).wait(1).to({scaleX:0.6237,x:169.65},0).wait(1).to({scaleX:0.6245,x:169.8},0).wait(1).to({regX:136.5,scaleX:0.6253,x:169.9,y:338.8},0).wait(1).to({regX:136.4,scaleX:0.6261},0).wait(1).to({scaleX:0.627,x:169.95},0).wait(1).to({scaleX:0.6278,x:170.05},0).wait(1).to({regX:136.5,scaleX:0.6286,x:170.25},0).wait(1).to({scaleX:0.6294},0).wait(1).to({regX:136.4,scaleX:0.6302,x:170.35},0).wait(1).to({regX:136.3,scaleX:0.631,x:170.4},0).wait(1).to({regX:136.4,scaleX:0.6318,x:170.55},0).wait(1).to({scaleX:0.6326,x:170.6},0).wait(1).to({regX:136.5,scaleX:0.6334,x:170.7},0).wait(1).to({regX:136.4,scaleX:0.6342,x:170.75},0).wait(1).to({regX:136.3,scaleX:0.6351,x:170.8},0).wait(1).to({regX:136.4,scaleX:0.6359,x:170.95},0).wait(1).to({scaleX:0.6367,x:171},0).wait(1).to({scaleX:0.6375,x:171.1},0).wait(1).to({scaleX:0.6383,x:171.15},0).wait(1).to({scaleX:0.6391,x:171.25},0).wait(1).to({scaleX:0.6399,x:171.35},0).wait(1).to({scaleX:0.6407,x:171.4},0).wait(1).to({scaleX:0.6415,x:171.5},0).wait(1).to({scaleX:0.6423,x:171.55},0).wait(1).to({scaleX:0.6431,x:171.6},0).wait(1).to({scaleX:0.644,x:171.75},0).wait(1).to({regX:136.5,scaleX:0.6448,x:171.85},0).wait(1).to({regX:136.4,scaleX:0.6456},0).wait(1).to({scaleX:0.6464,x:171.95},0).wait(1).to({scaleX:0.6472,x:172.05},0).wait(1).to({regX:136.5,scaleX:0.648,x:172.2},0).wait(1).to({regX:136.4,scaleX:0.6488,x:172.25},0).wait(1).to({scaleX:0.6496,x:172.3},0).wait(1).to({regX:136.3,scaleX:0.6504,x:172.35},0).wait(1).to({regX:136.4,scaleX:0.6512,x:172.55},0).wait(1).to({scaleX:0.652},0).wait(1).to({scaleX:0.6528,x:172.65},0).wait(1).to({scaleX:0.6537,x:172.7},0).wait(1).to({scaleX:0.6545,x:172.8},0).wait(1).to({scaleX:0.6553,x:172.9},0).wait(1).to({scaleX:0.6561,x:172.95},0).wait(1).to({scaleX:0.6569,x:173.05},0).wait(1).to({scaleX:0.6577,x:173.15},0).wait(1).to({scaleX:0.6585},0).wait(1).to({scaleX:0.6593,x:173.3},0).wait(1).to({scaleX:0.6601,x:173.4},0).wait(1).to({scaleX:0.6609,x:173.45},0).wait(1).to({scaleX:0.6618,x:173.5},0).wait(1).to({scaleX:0.6626,x:173.55},0).wait(1).to({scaleX:0.6634,x:173.7},0).wait(1).to({regX:136.5,scaleX:0.6642,x:173.85,y:338.85},0).wait(1).to({regX:136.4,scaleX:0.665,x:173.8},0).wait(1).to({scaleX:0.6658,x:173.9},0).wait(1).to({scaleX:0.6666,x:174.05},0).wait(1).to({regX:136.5,scaleX:0.6674,x:174.15},0).wait(1).to({scaleX:0.6682,x:174.2},0).wait(1).to({regX:136.4,scaleX:0.669,x:174.25},0).wait(1).to({regX:136.3,scaleX:0.6698,x:174.3},0).wait(1).to({regX:136.4,scaleX:0.6707,x:174.5},0).wait(1).to({scaleX:0.6715},0).wait(1).to({scaleX:0.6723,x:174.6},0).wait(1).to({scaleX:0.6731,x:174.7},0).wait(1).to({scaleX:0.6739,x:174.75},0).wait(1).to({scaleX:0.6747,x:174.85},0).wait(1).to({scaleX:0.6755,x:174.95},0).wait(1).to({scaleX:0.6763,x:175},0).wait(1).to({scaleX:0.6771,x:175.1},0).wait(1).to({scaleX:0.6779},0).wait(1).to({scaleX:0.6787,x:175.25},0).wait(1).to({scaleX:0.6796,x:175.35},0).wait(1).to({scaleX:0.6804},0).wait(1).to({scaleX:0.6812,x:175.45},0).wait(1).to({scaleX:0.682,x:175.55},0).wait(1).to({scaleX:0.6828,x:175.7},0).wait(1).to({scaleX:0.6836,x:175.75},0).wait(1).to({scaleX:0.6844,x:175.85},0).wait(1).to({scaleX:0.6852,x:175.9},0).wait(1).to({scaleX:0.686,x:176},0).wait(1).to({scaleX:0.6868,x:176.05},0).wait(1).to({scaleX:0.6876,x:176.15},0).wait(1).to({scaleX:0.6885,x:176.25},0).wait(1).to({scaleX:0.6893,x:176.3},0).wait(1).to({scaleX:0.6901,x:176.45},0).wait(1).to({scaleX:0.6909,x:176.5},0).wait(1).to({scaleX:0.6917,x:176.55},0).wait(1).to({scaleX:0.6925,x:176.65},0).wait(1).to({scaleX:0.6933,x:176.75},0).wait(1).to({scaleX:0.6941,x:176.8},0).wait(1).to({scaleX:0.6949,x:176.9},0).wait(1).to({scaleX:0.6957,x:176.95},0).wait(1).to({scaleX:0.6965,x:177.05},0).wait(1).to({scaleX:0.6974,x:177.1},0).wait(1).to({scaleX:0.6982,x:177.2},0).wait(1).to({regX:136.5,scaleX:0.699,x:177.35},0).wait(1).to({regX:136.4,scaleX:0.6998},0).wait(1).to({scaleX:0.7006,x:177.4},0).wait(1).to({scaleX:0.7014,x:177.5},0).wait(1).to({scaleX:0.7022,x:177.65},0).wait(1).to({scaleX:0.703,x:177.7},0).wait(1).to({scaleX:0.7038,x:177.8,y:338.9},0).wait(1).to({scaleX:0.7046,x:177.85},0).wait(1).to({scaleX:0.7054,x:177.95},0).wait(1).to({scaleX:0.7063,x:178.05},0).wait(1).to({scaleX:0.7071,x:178.1},0).wait(1).to({scaleX:0.7079,x:178.2},0).wait(1).to({scaleX:0.7087,x:178.3},0).wait(1).to({scaleX:0.7095},0).wait(1).to({scaleX:0.7103,x:178.45},0).wait(1).to({scaleX:0.7111,x:178.5},0).wait(1).to({scaleX:0.7119,x:178.6},0).wait(1).to({scaleX:0.7127,x:178.65},0).wait(1).to({scaleX:0.7135,x:178.7},0).wait(1).to({scaleX:0.7143,x:178.85},0).wait(1).to({regX:136.5,scaleX:0.7151,x:179},0).wait(1).to({regX:136.4,scaleX:0.716,x:178.95},0).wait(1).to({scaleX:0.7168,x:179.05},0).wait(1).to({scaleX:0.7176,x:179.2},0).wait(1).to({scaleX:0.7184,x:179.25},0).wait(1).to({scaleX:0.7192,x:179.3},0).wait(1).to({scaleX:0.72,x:179.35},0).wait(1).to({scaleX:0.7208,x:179.45},0).wait(1).to({scaleX:0.7216,x:179.65},0).wait(1).to({scaleX:0.7224},0).wait(1).to({scaleX:0.7233,x:179.75},0).wait(1).to({scaleX:0.7241,x:179.85},0).wait(1).to({scaleX:0.7249,x:179.9},0).wait(1).to({scaleX:0.7257,x:180},0).wait(1).to({scaleX:0.7265,x:180.1},0).wait(1).to({scaleX:0.7273,x:180.15},0).wait(1).to({scaleX:0.7281,x:180.25},0).wait(1).to({scaleX:0.7289},0).wait(1).to({scaleX:0.7297,x:180.4},0).wait(1).to({scaleX:0.7305,x:180.5},0).wait(1).to({scaleX:0.7313,x:180.55},0).wait(1).to({scaleX:0.7321,x:180.6},0).wait(1).to({scaleX:0.733,x:180.7},0).wait(1).to({scaleX:0.7338,x:180.8},0).wait(1).to({scaleX:0.7346,x:180.9},0).wait(1).to({scaleX:0.7354,x:180.95},0).wait(1).to({scaleX:0.7362,x:181},0).wait(1).to({regX:136.3,scaleX:0.737,x:181.1},0).wait(1).to({regX:136.4,scaleX:0.7378,x:181.2},0).wait(1).to({scaleX:0.7386,x:181.3},0).wait(1).to({scaleX:0.7394,x:181.4},0).wait(1).to({scaleX:0.7402,x:181.45},0).wait(1).to({scaleX:0.741,x:181.55},0).wait(1).to({scaleX:0.7419,x:181.65},0).wait(1).to({scaleX:0.7427,x:181.7,y:338.95},0).wait(1).to({scaleX:0.7435,x:181.8},0).wait(1).to({scaleX:0.7443,x:181.9},0).wait(1).to({scaleX:0.7451,x:181.95},0).wait(1).to({scaleX:0.7459,x:182.05},0).wait(1).to({scaleX:0.7467,x:182.1},0).wait(1).to({scaleX:0.7475,x:182.2},0).wait(1).to({scaleX:0.7483,x:182.25},0).wait(1).to({scaleX:0.7491,x:182.35},0).wait(1).to({scaleX:0.75,x:182.45},0).wait(1).to({scaleX:0.7508,x:182.55},0).wait(1).to({scaleX:0.7516},0).wait(1).to({scaleX:0.7524,x:182.65},0).wait(1).to({scaleX:0.7532,x:182.75},0).wait(1).to({scaleX:0.754,x:182.85},0).wait(1).to({scaleX:0.7548,x:182.9},0).wait(1).to({scaleX:0.7556,x:183},0).wait(1).to({regX:136.3,scaleX:0.7564,x:183.05},0).wait(1).to({regX:136.4,scaleX:0.7572,x:183.2},0).wait(1).to({scaleX:0.758,x:183.25},0).wait(1).to({scaleX:0.7589,x:183.35},0).wait(1).to({scaleX:0.7597,x:183.45},0).wait(1).to({scaleX:0.7605,x:183.5},0).wait(1).to({scaleX:0.7613,x:183.6},0).wait(1).to({scaleX:0.7621,x:183.65},0).wait(1).to({scaleX:0.7629,x:183.75},0).wait(1).to({scaleX:0.7637,x:183.8},0).wait(1);
	var _tweenStr_3 = _tweenStr_2.to({scaleX:0.7645,x:183.9},0).wait(1).to({scaleX:0.7653,x:184},0).wait(1).to({scaleX:0.7661,x:184.1},0).wait(1).to({scaleX:0.7669},0).wait(1).to({scaleX:0.7677,x:184.2},0).wait(1).to({scaleX:0.7686,x:184.35},0).wait(1).to({regX:136.5,scaleX:0.7694,x:184.45},0).wait(1).to({regX:136.4,scaleX:0.7702},0).wait(1).to({scaleX:0.771,x:184.5},0).wait(1).to({scaleX:0.7718,x:184.6},0).wait(1).to({scaleX:0.7726,x:184.75},0).wait(1).to({scaleX:0.7734},0).wait(1).to({scaleX:0.7742,x:184.85},0).wait(1).to({scaleX:0.775,x:185},0).wait(1).to({regX:136.3,scaleX:0.7758},0).wait(1).to({regX:136.4,scaleX:0.7767,x:185.15},0).wait(1).to({scaleX:0.7775,x:185.25},0).wait(1).to({scaleX:0.7783,x:185.3},0).wait(1).to({scaleX:0.7791,x:185.4},0).wait(1).to({scaleX:0.7799,x:185.45},0).wait(1).to({scaleX:0.7807,x:185.55},0).wait(1).to({scaleX:0.7815,x:185.65},0).wait(1).to({scaleX:0.7823,x:185.7,y:339},0).wait(1).to({scaleX:0.7831,x:185.75},0).wait(1).to({scaleX:0.7839,x:185.9},0).wait(1).to({scaleX:0.7847,x:185.95},0).wait(1).to({scaleX:0.7856,x:186.05},0).wait(1).to({scaleX:0.7864,x:186.1},0).wait(1).to({scaleX:0.7872,x:186.15},0).wait(1).to({scaleX:0.788,x:186.3},0).wait(1).to({regX:136.5,scaleX:0.7888,x:186.4},0).wait(1).to({regX:136.4,scaleX:0.7896,x:186.45},0).wait(1).to({scaleX:0.7904,x:186.55},0).wait(1).to({regX:136.3,scaleX:0.7912},0).wait(1).to({regX:136.4,scaleX:0.792,x:186.75},0).wait(1).to({scaleX:0.7928,x:186.8},0).wait(1).to({scaleX:0.7936,x:186.85},0).wait(1).to({scaleX:0.7944,x:186.95},0).wait(1).to({scaleX:0.7953},0).wait(1).to({scaleX:0.7961,x:187.1},0).wait(1).to({scaleX:0.7969,x:187.2},0).wait(1).to({scaleX:0.7977,x:187.25},0).wait(1).to({scaleX:0.7985,x:187.3},0).wait(1).to({scaleX:0.7993,x:187.4},0).wait(1).to({scaleX:0.8001,x:187.5},0).wait(1).to({scaleX:0.8009,x:187.6},0).wait(1).to({scaleX:0.8017,x:187.7},0).wait(1).to({scaleX:0.8026},0).wait(1).to({scaleX:0.8034,x:187.85},0).wait(1).to({scaleX:0.8042,x:187.9},0).wait(1).to({scaleX:0.805,x:188},0).wait(1).to({scaleX:0.8058,x:188.05},0).wait(1).to({scaleX:0.8066,x:188.1},0).wait(1).to({scaleX:0.8074,x:188.25},0).wait(1).to({scaleX:0.8082,x:188.35},0).wait(1).to({scaleX:0.809},0).wait(1).to({scaleX:0.8098,x:188.5},0).wait(1).to({regX:136.3,scaleX:0.8106,x:188.55},0).wait(1).to({regX:136.4,scaleX:0.8114,x:188.65},0).wait(1).to({scaleX:0.8123,x:188.75},0).wait(1).to({scaleX:0.8131,x:188.8},0).wait(1).to({scaleX:0.8139,x:188.9},0).wait(1).to({scaleX:0.8147,x:188.95},0).wait(1).to({scaleX:0.8155,x:189.05},0).wait(1).to({scaleX:0.8163,x:189.15},0).wait(1).to({scaleX:0.8171,x:189.25},0).wait(1).to({scaleX:0.8179},0).wait(1).to({scaleX:0.8187,x:189.35},0).wait(1).to({scaleX:0.8195,x:189.5},0).wait(1).to({scaleX:0.8203,x:189.55},0).wait(1).to({scaleX:0.8212,x:189.6,y:339.05},0).wait(1).to({scaleX:0.822,x:189.65},0).wait(1).to({scaleX:0.8228,x:189.8},0).wait(1).to({regX:136.5,scaleX:0.8236,x:189.95},0).wait(1).to({regX:136.4,scaleX:0.8244},0).wait(1).to({scaleX:0.8252,x:190.05},0).wait(1).to({scaleX:0.826,x:190.15},0).wait(1).to({scaleX:0.8268,x:190.25},0).wait(1).to({scaleX:0.8276,x:190.3},0).wait(1).to({scaleX:0.8284,x:190.4},0).wait(1).to({scaleX:0.8293,x:190.45},0).wait(1).to({scaleX:0.8301,x:190.55},0).wait(1).to({scaleX:0.8309,x:190.6},0).wait(1).to({scaleX:0.8317,x:190.7},0).wait(1).to({scaleX:0.8325,x:190.8},0).wait(1).to({scaleX:0.8333,x:190.85},0).wait(1).to({scaleX:0.8341,x:190.9},0).wait(1).to({scaleX:0.8349,x:191.05},0).wait(1).to({scaleX:0.8357,x:191.1},0).wait(1).to({scaleX:0.8365,x:191.2},0).wait(1).to({scaleX:0.8373},0).wait(1).to({scaleX:0.8382,x:191.3},0).wait(1).to({scaleX:0.839,x:191.45},0).wait(1).to({scaleX:0.8398,x:191.5},0).wait(1).to({scaleX:0.8406,x:191.55},0).wait(1).to({scaleX:0.8414,x:191.65},0).wait(1).to({scaleX:0.8422,x:191.7},0).wait(1).to({regX:136.5,scaleX:0.843,x:191.9},0).wait(1).to({regX:136.4,scaleX:0.8438,x:191.95},0).wait(1).to({scaleX:0.8446,x:192},0).wait(1).to({scaleX:0.8454,x:192.1},0).wait(1).to({scaleX:0.8462,x:192.15},0).wait(1).to({scaleX:0.847,x:192.25},0).wait(1).to({scaleX:0.8479,x:192.35},0).wait(1).to({scaleX:0.8487,x:192.4},0).wait(1).to({scaleX:0.8495,x:192.5},0).wait(1).to({scaleX:0.8503,x:192.6},0).wait(1).to({scaleX:0.8511,x:192.65},0).wait(1).to({scaleX:0.8519,x:192.75},0).wait(1).to({scaleX:0.8527,x:192.8},0).wait(1).to({scaleX:0.8535,x:192.85},0).wait(1).to({scaleX:0.8543,x:193},0).wait(1).to({scaleX:0.8551,x:193.05},0).wait(1).to({scaleX:0.856,x:193.15},0).wait(1).to({scaleX:0.8568,x:193.2},0).wait(1).to({scaleX:0.8576,x:193.25},0).wait(1).to({scaleX:0.8584,x:193.4},0).wait(1).to({scaleX:0.8592,x:193.5},0).wait(1).to({scaleX:0.86,y:339.1},0).wait(1).to({scaleX:0.8608,x:193.6},0).wait(1).to({scaleX:0.8616,x:193.7},0).wait(1).to({scaleX:0.8624,x:193.85},0).wait(1).to({scaleX:0.8632,x:193.9},0).wait(1).to({scaleX:0.864,x:193.95},0).wait(1).to({scaleX:0.8649,x:194.05},0).wait(1).to({scaleX:0.8657,x:194.15},0).wait(1).to({scaleX:0.8665,x:194.2},0).wait(1).to({scaleX:0.8673,x:194.3},0).wait(1).to({scaleX:0.8681,x:194.4},0).wait(1).to({scaleX:0.8689},0).wait(1).to({scaleX:0.8697,x:194.55},0).wait(1).to({scaleX:0.8705,x:194.65},0).wait(1).to({scaleX:0.8713,x:194.7},0).wait(1).to({scaleX:0.8721,x:194.75},0).wait(1).to({scaleX:0.8729,x:194.8},0).wait(1).to({scaleX:0.8737,x:194.95},0).wait(1).to({scaleX:0.8746,x:195.05},0).wait(1).to({scaleX:0.8754},0).wait(1).to({scaleX:0.8762,x:195.15},0).wait(1).to({scaleX:0.877,x:195.25},0).wait(1).to({scaleX:0.8778,x:195.4},0).wait(1).to({scaleX:0.8786,x:195.45},0).wait(1).to({scaleX:0.8794,x:195.55},0).wait(1).to({scaleX:0.8802,x:195.6},0).wait(1).to({scaleX:0.881,x:195.7},0).wait(1).to({scaleX:0.8818,x:195.75},0).wait(1).to({scaleX:0.8827,x:195.85},0).wait(1).to({scaleX:0.8835,x:195.95},0).wait(1).to({scaleX:0.8843,x:196},0).wait(1).to({scaleX:0.8851,x:196.15},0).wait(1).to({scaleX:0.8859,x:196.2},0).wait(1).to({scaleX:0.8867,x:196.25},0).wait(1).to({scaleX:0.8875,x:196.35},0).wait(1).to({scaleX:0.8883},0).wait(1).to({scaleX:0.8891,x:196.5},0).wait(1).to({scaleX:0.8899,x:196.6},0).wait(1).to({scaleX:0.8907,x:196.65},0).wait(1).to({scaleX:0.8916,x:196.7},0).wait(1).to({scaleX:0.8924,x:196.8},0).wait(1).to({scaleX:0.8932,x:196.9},0).wait(1).to({scaleX:0.894,x:197},0).wait(1).to({scaleX:0.8948,x:197.05},0).wait(1).to({scaleX:0.8956,x:197.1},0).wait(1).to({scaleX:0.8964,x:197.25},0).wait(1).to({regX:136.3,scaleX:0.8972},0).wait(1).to({regX:136.4,scaleX:0.898,x:197.4},0).wait(1).to({scaleX:0.8988,x:197.5},0).wait(1).to({scaleX:0.8996,x:197.55,y:339.15},0).wait(1).to({scaleX:0.9005,x:197.65},0).wait(1).to({scaleX:0.9013,x:197.75},0).wait(1).to({scaleX:0.9021,x:197.8},0).wait(1).to({scaleX:0.9029,x:197.9},0).wait(1).to({scaleX:0.9037,x:198},0).wait(1).to({scaleX:0.9045},0).wait(1).to({scaleX:0.9053,x:198.15},0).wait(1).to({scaleX:0.9061,x:198.2},0).wait(1).to({scaleX:0.9069,x:198.25},0).wait(1).to({scaleX:0.9077,x:198.35},0).wait(1).to({scaleX:0.9085,x:198.4},0).wait(1).to({scaleX:0.9093,x:198.55},0).wait(1).to({scaleX:0.9102,x:198.6},0).wait(1).to({scaleX:0.911,x:198.65},0).wait(1).to({scaleX:0.9118,x:198.75},0).wait(1).to({scaleX:0.9126,x:198.9},0).wait(1).to({scaleX:0.9134,x:198.95},0).wait(1).to({scaleX:0.9142,x:199},0).wait(1).to({scaleX:0.915,x:199.1},0).wait(1).to({scaleX:0.9158,x:199.2},0).wait(1).to({scaleX:0.9166,x:199.35},0).wait(1).to({scaleX:0.9174},0).wait(1).to({scaleX:0.9183,x:199.45},0).wait(1).to({scaleX:0.9191,x:199.55},0).wait(1).to({scaleX:0.9199,x:199.6},0).wait(1).to({scaleX:0.9207,x:199.7},0).wait(1).to({scaleX:0.9215,x:199.8},0).wait(1).to({scaleX:0.9223,x:199.85},0).wait(1).to({scaleX:0.9231,x:199.95},0).wait(1).to({scaleX:0.9239},0).wait(1).to({scaleX:0.9247,x:200.1},0).wait(1).to({scaleX:0.9255,x:200.2},0).wait(1).to({scaleX:0.9263},0).wait(1).to({scaleX:0.9272,x:200.3},0).wait(1).to({scaleX:0.928,x:200.4},0).wait(1).to({scaleX:0.9288,x:200.5},0).wait(1).to({scaleX:0.9296,x:200.55},0).wait(1).to({scaleX:0.9304,x:200.6},0).wait(1).to({scaleX:0.9312,x:200.75},0).wait(1).to({regX:136.3,scaleX:0.932,x:200.8},0).wait(1).to({regX:136.4,scaleX:0.9328,x:200.9},0).wait(1).to({scaleX:0.9336,x:201},0).wait(1).to({scaleX:0.9344,x:201.1},0).wait(1).to({scaleX:0.9352,x:201.15},0).wait(1).to({scaleX:0.9361,x:201.25},0).wait(1).to({scaleX:0.9369,x:201.35},0).wait(1).to({scaleX:0.9377,x:201.4},0).wait(1).to({scaleX:0.9385,x:201.5,y:339.2},0).wait(1).to({scaleX:0.9393,x:201.55},0).wait(1).to({scaleX:0.9401,x:201.65},0).wait(1).to({scaleX:0.9409,x:201.75},0).wait(1).to({scaleX:0.9417,x:201.8},0).wait(1).to({scaleX:0.9425,x:201.9},0).wait(1).to({scaleX:0.9433,x:201.95},0).wait(1).to({scaleX:0.9442,x:202.05},0).wait(1).to({scaleX:0.945,x:202.15},0).wait(1).to({scaleX:0.9458,x:202.2},0).wait(1).to({scaleX:0.9466,x:202.25},0).wait(1).to({scaleX:0.9474,x:202.35},0).wait(1).to({scaleX:0.9482,x:202.45},0).wait(1).to({scaleX:0.949,x:202.55},0).wait(1).to({scaleX:0.9498,x:202.65},0).wait(1).to({scaleX:0.9506,x:202.7},0).wait(1).to({regX:136.3,scaleX:0.9514,x:202.75},0).wait(1).to({regX:136.4,scaleX:0.9522,x:202.9},0).wait(1).to({scaleX:0.953,x:202.95},0).wait(1).to({scaleX:0.9539,x:203.05},0).wait(1).to({scaleX:0.9547,x:203.15},0).wait(1).to({scaleX:0.9555},0).wait(1).to({scaleX:0.9563,x:203.3},0).wait(1).to({scaleX:0.9571,x:203.35},0).wait(1).to({scaleX:0.9579,x:203.45},0).wait(1).to({scaleX:0.9587,x:203.5},0).wait(1).to({scaleX:0.9595,x:203.6},0).wait(1).to({scaleX:0.9603,x:203.7},0).wait(1).to({scaleX:0.9611,x:203.8},0).wait(1).to({scaleX:0.9619},0).wait(1).to({scaleX:0.9628,x:203.9},0).wait(1).to({scaleX:0.9636,x:204.05},0).wait(1).to({scaleX:0.9644},0).wait(1).to({scaleX:0.9652,x:204.2},0).wait(1).to({scaleX:0.966},0).wait(1).to({scaleX:0.9668,x:204.3},0).wait(1).to({scaleX:0.9676,x:204.45},0).wait(1).to({scaleX:0.9684},0).wait(1).to({scaleX:0.9692,x:204.6},0).wait(1).to({scaleX:0.97,x:204.7},0).wait(1).to({regX:136.3,scaleX:0.9709},0).wait(1).to({regX:136.4,scaleX:0.9717,x:204.85},0).wait(1).to({scaleX:0.9725,x:204.9},0).wait(1).to({scaleX:0.9733,x:205},0).wait(1).to({scaleX:0.9741,x:205.1},0).wait(1).to({scaleX:0.9749},0).wait(1).to({scaleX:0.9757,x:205.25},0).wait(1).to({scaleX:0.9765,x:205.35},0).wait(1).to({scaleX:0.9773,x:205.4,y:339.25},0).wait(1).to({scaleX:0.9781,x:205.45},0).wait(1).to({scaleX:0.9789,x:205.6},0).wait(1).to({scaleX:0.9798,x:205.65},0).wait(1).to({scaleX:0.9806,x:205.75},0).wait(1).to({scaleX:0.9814},0).wait(1).to({scaleX:0.9822,x:205.85},0).wait(1).to({scaleX:0.983,x:206},0).wait(1).to({scaleX:0.9838,x:206.05},0).wait(1).to({scaleX:0.9846,x:206.15},0).wait(1).to({scaleX:0.9854,x:206.25},0).wait(1).to({scaleX:0.9862,x:206.3},0).wait(1).to({scaleX:0.987,x:206.4},0).wait(1).to({scaleX:0.9878,x:206.5},0).wait(1).to({scaleX:0.9886,x:206.55},0).wait(1).to({scaleX:0.9895,x:206.65},0).wait(1).to({scaleX:0.9903},0).wait(1).to({scaleX:0.9911,x:206.8},0).wait(1).to({scaleX:0.9919,x:206.9},0).wait(1).to({scaleX:0.9927,x:206.95},0).wait(1).to({scaleX:0.9935,x:207},0).wait(1).to({scaleX:0.9943,x:207.1},0).wait(1).to({scaleX:0.9951,x:207.2},0).wait(1).to({scaleX:0.9959,x:207.3},0).wait(1).to({scaleX:0.9967,x:207.4},0).wait(1).to({scaleX:0.9976},0).wait(1).to({scaleX:0.9984,x:207.55},0).wait(1).to({scaleX:0.9992,x:207.6},0).wait(1).to({scaleX:1,x:207.65},0).wait(1).to({scaleX:1.0008,x:207.75},0).wait(1).to({scaleX:1.0016,x:207.8},0).wait(1).to({scaleX:1.0024,x:207.95},0).wait(1).to({scaleX:1.0032,x:208.05},0).wait(1).to({scaleX:1.004,x:208.1},0).wait(1).to({scaleX:1.0048,x:208.2},0).wait(1).to({scaleX:1.0056,x:208.3},0).wait(1).to({scaleX:1.0065,x:208.35},0).wait(1).to({scaleX:1.0073,x:208.45},0).wait(1).to({scaleX:1.0081,x:208.5},0).wait(1).to({scaleX:1.0089,x:208.6},0).wait(1).to({scaleX:1.0097,x:208.65},0).wait(1).to({scaleX:1.0105,x:208.75},0).wait(1).to({scaleX:1.0113,x:208.85},0).wait(1).to({scaleX:1.0121,x:208.95},0).wait(1).to({scaleX:1.0129},0).wait(1).to({scaleX:1.0137,x:209.05},0).wait(1).to({scaleX:1.0145,x:209.15},0).wait(1).to({scaleX:1.0154,x:209.25},0).wait(1).to({scaleX:1.0162,x:209.3},0).wait(1).to({scaleX:1.017,x:209.35,y:339.3},0).wait(1).to({scaleX:1.0178,x:209.5},0).wait(1).to({scaleX:1.0186,x:209.65},0).wait(1).to({scaleX:1.0194},0).wait(1).to({scaleX:1.0202,x:209.75},0).wait(1).to({scaleX:1.021,x:209.85},0).wait(1).to({regX:136.3,scaleX:1.0218},0).wait(1).to({regX:136.4,scaleX:1.0226,x:210},0).wait(1).to({scaleX:1.0235,x:210.05},0).wait(1).to({scaleX:1.0243,x:210.15},0).wait(1).to({scaleX:1.0251,x:210.25},0).wait(1).to({scaleX:1.0259,x:210.3},0).wait(1).to({scaleX:1.0267,x:210.4},0).wait(1).to({scaleX:1.0275,x:210.5},0).wait(1).to({scaleX:1.0283,x:210.55},0).wait(1).to({scaleX:1.0291,x:210.6},0).wait(1).to({scaleX:1.0299,x:210.75},0).wait(1).to({scaleX:1.0307,x:210.8},0).wait(1).to({scaleX:1.0315,x:210.9},0).wait(1).to({scaleX:1.0323},0).wait(1).to({scaleX:1.0332,x:211},0).wait(1).to({scaleX:1.034,x:211.15},0).wait(1).to({scaleX:1.0348,x:211.2},0).wait(1).to({scaleX:1.0356,x:211.25},0).wait(1).to({scaleX:1.0364,x:211.35},0).wait(1).to({scaleX:1.0372,x:211.45},0).wait(1).to({scaleX:1.038,x:211.6},0).wait(1).to({scaleX:1.0388,x:211.65},0).wait(1).to({scaleX:1.0396,x:211.7},0).wait(1).to({scaleX:1.0404,x:211.8},0).wait(1).to({scaleX:1.0412,x:211.85},0).wait(1).to({scaleX:1.0421,x:211.95},0).wait(1).to({scaleX:1.0429,x:212.05},0).wait(1).to({scaleX:1.0437,x:212.1},0).wait(1).to({scaleX:1.0445,x:212.15},0).wait(1).to({scaleX:1.0453,x:212.3},0).wait(1).to({scaleX:1.0461,x:212.35},0).wait(1).to({scaleX:1.0469,x:212.45},0).wait(1).to({scaleX:1.0477,x:212.5},0).wait(1).to({scaleX:1.0485,x:212.55},0).wait(1).to({scaleX:1.0493,x:212.7},0).wait(1).to({scaleX:1.0502,x:212.75},0).wait(1).to({scaleX:1.051,x:212.85},0).wait(1).to({scaleX:1.0518,x:212.9},0).wait(1).to({scaleX:1.0526,x:212.95},0).wait(1).to({scaleX:1.0534,x:213.1},0).wait(1).to({scaleX:1.0542,x:213.2},0).wait(1).to({scaleX:1.055},0).wait(1).to({scaleX:1.0558,x:213.35,y:339.35},0).wait(1).to({scaleX:1.0566,x:213.4},0).wait(1).to({scaleX:1.0574,x:213.5},0).wait(1).to({scaleX:1.0582,x:213.6},0).wait(1).to({scaleX:1.0591,x:213.65},0).wait(1).to({scaleX:1.0599,x:213.75},0).wait(1).to({scaleX:1.0607,x:213.85},0).wait(1).to({scaleX:1.0615,x:213.9},0).wait(1).to({scaleX:1.0623,x:214},0).wait(1).to({scaleX:1.0631,x:214.1},0).wait(1).to({scaleX:1.0639},0).wait(1).to({scaleX:1.0647,x:214.2},0).wait(1).to({scaleX:1.0655,x:214.3},0).wait(1).to({scaleX:1.0663,x:214.4},0).wait(1).to({scaleX:1.0671,x:214.45},0).wait(1).to({scaleX:1.0679,x:214.5},0).wait(1).to({scaleX:1.0688,x:214.65},0).wait(1).to({scaleX:1.0696,x:214.75},0).wait(1).to({scaleX:1.0704},0).wait(1).to({scaleX:1.0712,x:214.85},0).wait(1).to({scaleX:1.072,x:215},0).wait(1).to({scaleX:1.0728,x:215.1},0).wait(1).to({scaleX:1.0736,x:215.15},0).wait(1).to({scaleX:1.0744,x:215.2},0).wait(1).to({scaleX:1.0752,x:215.3},0).wait(1).to({scaleX:1.076,x:215.4},0).wait(1).to({scaleX:1.0769,x:215.45},0).wait(1).to({scaleX:1.0777,x:215.55},0).wait(1).to({scaleX:1.0785,x:215.65},0).wait(1).to({scaleX:1.0793,x:215.7},0).wait(1).to({scaleX:1.0801,x:215.75},0).wait(1).to({scaleX:1.0809,x:215.9},0).wait(1).to({scaleX:1.0817,x:215.95},0).wait(1).to({scaleX:1.0825,x:216.05},0).wait(1).to({scaleX:1.0833},0).wait(1).to({scaleX:1.0841,x:216.15},0).wait(1).to({scaleX:1.0849,x:216.3},0).wait(1).to({scaleX:1.0858,x:216.35},0).wait(1).to({scaleX:1.0866,x:216.4},0).wait(1);
	var _tweenStr_4 = _tweenStr_3.to({scaleX:1.0874,x:216.5},0).wait(1).to({scaleX:1.0882,x:216.6},0).wait(1).to({scaleX:1.089,x:216.7},0).wait(1).to({scaleX:1.0898,x:216.8},0).wait(1).to({scaleX:1.0906,x:216.85},0).wait(1).to({scaleX:1.0914,x:216.95},0).wait(1).to({regX:136.3,scaleX:1.0922,x:216.9},0).wait(1).to({regX:136.4,scaleX:1.093,x:217.1},0).wait(1).to({scaleX:1.0938,x:217.2},0).wait(1).to({scaleX:1.0947,x:217.25},0).wait(1).to({scaleX:1.0955,x:217.3,y:339.4},0).wait(1).to({scaleX:1.0963,x:217.45},0).wait(1).to({scaleX:1.0971,x:217.5},0).wait(1).to({scaleX:1.0979,x:217.6},0).wait(1).to({scaleX:1.0987},0).wait(1).to({scaleX:1.0995,x:217.7},0).wait(1).to({scaleX:1.1003,x:217.85},0).wait(1).to({scaleX:1.1011,x:217.9},0).wait(1).to({scaleX:1.1019,x:217.95},0).wait(1).to({scaleX:1.1027,x:218.05},0).wait(1).to({scaleX:1.1035,x:218.1},0).wait(1).to({scaleX:1.1044,x:218.25},0).wait(1).to({scaleX:1.1052,x:218.35},0).wait(1).to({scaleX:1.106},0).wait(1).to({scaleX:1.1068,x:218.45},0).wait(1).to({scaleX:1.1076,x:218.55},0).wait(1).to({scaleX:1.1084,x:218.65},0).wait(1).to({scaleX:1.1092,x:218.7},0).wait(1).to({scaleX:1.11,x:218.8},0).wait(1).to({scaleX:1.1108,x:218.9},0).wait(1).to({scaleX:1.1116,x:219.05},0).wait(1).to({scaleX:1.1125},0).wait(1).to({scaleX:1.1133,x:219.15},0).wait(1).to({scaleX:1.1141,x:219.25},0).wait(1).to({scaleX:1.1149},0).wait(1).to({scaleX:1.1157,x:219.4},0).wait(1).to({scaleX:1.1165,x:219.45},0).wait(1).to({scaleX:1.1173,x:219.55},0).wait(1).to({scaleX:1.1181,x:219.6},0).wait(1).to({scaleX:1.1189,x:219.65},0).wait(1).to({scaleX:1.1197,x:219.8},0).wait(1).to({scaleX:1.1205,x:219.9},0).wait(1).to({scaleX:1.1214},0).wait(1).to({scaleX:1.1222,x:220},0).wait(1).to({scaleX:1.123,x:220.1},0).wait(1).to({scaleX:1.1238,x:220.2},0).wait(1).to({scaleX:1.1246,x:220.3},0).wait(1).to({scaleX:1.1254,x:220.35},0).wait(1).to({scaleX:1.1262,x:220.45},0).wait(1).to({scaleX:1.127,x:220.55},0).wait(1).to({scaleX:1.1278,x:220.6},0).wait(1).to({scaleX:1.1286,x:220.7},0).wait(1).to({scaleX:1.1294,x:220.8},0).wait(1).to({scaleX:1.1302,x:220.85},0).wait(1).to({scaleX:1.1311,x:220.95},0).wait(1).to({scaleX:1.1319,x:221.05},0).wait(1).to({scaleX:1.1327,x:221.1},0).wait(1).to({scaleX:1.1335,x:221.2},0).wait(1).to({scaleX:1.1343,y:339.45},0).wait(1).to({scaleX:1.1351,x:221.35},0).wait(1).to({scaleX:1.1359,x:221.45},0).wait(1).to({scaleX:1.1367,x:221.5},0).wait(1).to({scaleX:1.1375,x:221.55},0).wait(1).to({scaleX:1.1384,x:221.65},0).wait(1).to({scaleX:1.1392,x:221.75},0).wait(1).to({scaleX:1.14,x:221.85},0).wait(1).to({scaleX:1.1408},0).wait(1).to({scaleX:1.1416,x:221.95},0).wait(1).to({scaleX:1.1424,x:222.05},0).wait(1).to({scaleX:1.1432,x:222.15},0).wait(1).to({scaleX:1.144,x:222.25},0).wait(1).to({scaleX:1.1448,x:222.35},0).wait(1).to({scaleX:1.1456,x:222.4},0).wait(1).to({scaleX:1.1464,x:222.5},0).wait(1).to({scaleX:1.1472,x:222.6},0).wait(1).to({scaleX:1.1481,x:222.65},0).wait(1).to({scaleX:1.1489,x:222.75},0).wait(1).to({scaleX:1.1497,x:222.8},0).wait(1).to({scaleX:1.1505,x:222.9},0).wait(1).to({scaleX:1.1513,x:223},0).wait(1).to({scaleX:1.1521,x:223.05},0).wait(1).to({scaleX:1.1529,x:223.1},0).wait(1).to({scaleX:1.1537,x:223.2},0).wait(1).to({scaleX:1.1545,x:223.3},0).wait(1).to({scaleX:1.1553,x:223.4},0).wait(1).to({scaleX:1.1561,x:223.45},0).wait(1).to({scaleX:1.157,x:223.5},0).wait(1).to({scaleX:1.1578,x:223.6},0).wait(1).to({scaleX:1.1586,x:223.75},0).wait(1).to({scaleX:1.1594,x:223.8},0).wait(1).to({scaleX:1.1602,x:223.85},0).wait(1).to({scaleX:1.161,x:223.9},0).wait(1).to({scaleX:1.1618,x:224},0).wait(1).to({regX:136.3,scaleX:1.1626,x:224.05},0).wait(1).to({regX:136.4,scaleX:1.1634,x:224.2},0).wait(1).to({scaleX:1.1642,x:224.3},0).wait(1).to({scaleX:1.1651,x:224.4},0).wait(1).to({scaleX:1.1659,x:224.45},0).wait(1).to({scaleX:1.1667,x:224.55},0).wait(1).to({scaleX:1.1675,x:224.6},0).wait(1).to({scaleX:1.1683,x:224.7},0).wait(1).to({scaleX:1.1691,x:224.8},0).wait(1).to({scaleX:1.1699,x:224.85},0).wait(1).to({scaleX:1.1707,x:224.95},0).wait(1).to({scaleX:1.1715,x:225.05},0).wait(1).to({scaleX:1.1723},0).wait(1).to({scaleX:1.1731,x:225.15,y:339.5},0).wait(1).to({scaleX:1.174,x:225.3},0).wait(1).to({scaleX:1.1748,x:225.35},0).wait(1).to({scaleX:1.1756,x:225.4},0).wait(1).to({scaleX:1.1764,x:225.45},0).wait(1).to({scaleX:1.1772,x:225.55},0).wait(1).to({scaleX:1.178,x:225.75},0).wait(1).to({scaleX:1.1788},0).wait(1).to({scaleX:1.1796,x:225.85},0).wait(1).to({scaleX:1.1804,x:225.95},0).wait(1).to({scaleX:1.1812,x:226},0).wait(1).to({scaleX:1.182,x:226.1},0).wait(1).to({scaleX:1.1828,x:226.2},0).wait(1).to({scaleX:1.1837,x:226.25},0).wait(1).to({scaleX:1.1845,x:226.35},0).wait(1).to({scaleX:1.1853},0).wait(1).to({scaleX:1.1861,x:226.5},0).wait(1).to({scaleX:1.1869,x:226.6},0).wait(1).to({scaleX:1.1877,x:226.65},0).wait(1).to({scaleX:1.1885,x:226.7},0).wait(1).to({scaleX:1.1893,x:226.8},0).wait(1).to({scaleX:1.1901,x:226.9},0).wait(1).to({scaleX:1.1909,x:227},0).wait(1).to({scaleX:1.1918},0).wait(1).to({scaleX:1.1926,x:227.1},0).wait(1).to({scaleX:1.1934,x:227.2},0).wait(1).to({scaleX:1.1942,x:227.3},0).wait(1).to({scaleX:1.195,x:227.35},0).wait(1).to({scaleX:1.1958,x:227.45},0).wait(1).to({scaleX:1.1966,x:227.55},0).wait(1).to({scaleX:1.1974,x:227.7},0).wait(1).to({scaleX:1.1982,x:227.75},0).wait(1).to({scaleX:1.199,x:227.8},0).wait(1).to({scaleX:1.1998,x:227.9},0).wait(1).to({scaleX:1.2007,x:227.95},0).wait(1).to({scaleX:1.2015,x:228.05},0).wait(1).to({scaleX:1.2023,x:228.15},0).wait(1).to({scaleX:1.2031,x:228.2},0).wait(1).to({scaleX:1.2039,x:228.3},0).wait(1).to({scaleX:1.2047,x:228.35},0).wait(1).to({scaleX:1.2055,x:228.45},0).wait(1).to({scaleX:1.2063,x:228.55},0).wait(1).to({scaleX:1.2071,x:228.65},0).wait(1).to({scaleX:1.2079},0).wait(1).to({scaleX:1.2087,x:228.75},0).wait(1).to({scaleX:1.2095,x:228.85},0).wait(1).to({scaleX:1.2104,x:228.9},0).wait(1).to({scaleX:1.2112,x:229},0).wait(1).to({scaleX:1.212,x:229.1},0).wait(1).to({scaleX:1.2128,x:229.2,y:339.55},0).wait(1).to({scaleX:1.2136,x:229.3},0).wait(1).to({scaleX:1.2144,x:229.35},0).wait(1).to({scaleX:1.2152,x:229.45},0).wait(1).to({scaleX:1.216,x:229.55},0).wait(1).to({scaleX:1.2168,x:229.65},0).wait(1).to({scaleX:1.2177,x:229.7},0).wait(1).to({scaleX:1.2185,x:229.75},0).wait(1).to({scaleX:1.2193,x:229.85},0).wait(1).to({scaleX:1.2201,x:229.95},0).wait(1).to({scaleX:1.2209,x:230},0).wait(1).to({scaleX:1.2217,x:230.1},0).wait(1).to({scaleX:1.2225,x:230.2},0).wait(1).to({scaleX:1.2233,x:230.25},0).wait(1).to({scaleX:1.2241,x:230.3},0).wait(1).to({scaleX:1.2249,x:230.45},0).wait(1).to({scaleX:1.2257,x:230.5},0).wait(1).to({scaleX:1.2265,x:230.55},0).wait(1).to({scaleX:1.2274,x:230.6},0).wait(1).to({scaleX:1.2282,x:230.7},0).wait(1).to({scaleX:1.229,x:230.85},0).wait(1).to({scaleX:1.2298},0).wait(1).to({scaleX:1.2306,x:230.95},0).wait(1).to({scaleX:1.2314,x:231.1},0).wait(1).to({scaleX:1.2322,x:231.15},0).wait(1).to({scaleX:1.233,x:231.25},0).wait(1).to({scaleX:1.2338,x:231.3},0).wait(1).to({scaleX:1.2346,x:231.4},0).wait(1).to({scaleX:1.2354,x:231.5},0).wait(1).to({scaleX:1.2363},0).wait(1).to({scaleX:1.2371,x:231.65},0).wait(1).to({scaleX:1.2379,x:231.75},0).wait(1).to({scaleX:1.2387,x:231.8},0).wait(1).to({scaleX:1.2395,x:231.85},0).wait(1).to({scaleX:1.2403,x:231.95},0).wait(1).to({scaleX:1.2411,x:232.05},0).wait(1).to({scaleX:1.2419,x:232.15},0).wait(1).to({scaleX:1.2427},0).wait(1).to({scaleX:1.2435,x:232.25},0).wait(1).to({scaleX:1.2444,x:232.4},0).wait(1).to({scaleX:1.2452,x:232.45},0).wait(1).to({scaleX:1.246,x:232.5},0).wait(1).to({scaleX:1.2468,x:232.6},0).wait(1).to({scaleX:1.2476,x:232.65},0).wait(1).to({scaleX:1.2484,x:232.8},0).wait(1).to({scaleX:1.2492,x:232.85},0).wait(1).to({scaleX:1.25,x:232.95},0).wait(1).to({scaleX:1.2508,x:233.05},0).wait(1).to({scaleX:1.2516,x:233.1,y:339.6},0).wait(1).to({scaleX:1.2524,x:233.2},0).wait(1).to({scaleX:1.2533,x:233.3},0).wait(1).to({scaleX:1.2541,x:233.35},0).wait(1).to({scaleX:1.2549,x:233.45},0).wait(1).to({scaleX:1.2557,x:233.5},0).wait(1).to({scaleX:1.2565,x:233.6},0).wait(1).to({scaleX:1.2573,x:233.7},0).wait(1).to({scaleX:1.2581,x:233.8},0).wait(1).to({scaleX:1.2589},0).wait(1).to({scaleX:1.2597,x:233.95},0).wait(1).to({scaleX:1.2605,x:234},0).wait(1).to({scaleX:1.2613,x:234.1},0).wait(1).to({scaleX:1.2621,x:234.15},0).wait(1).to({scaleX:1.263,x:234.2},0).wait(1).to({scaleX:1.2638,x:234.35},0).wait(1).to({scaleX:1.2646,x:234.45},0).wait(1).to({scaleX:1.2654,x:234.5},0).wait(1).to({scaleX:1.2662,x:234.6},0).wait(1).to({scaleX:1.267,x:234.7},0).wait(1).to({scaleX:1.2678,x:234.75},0).wait(1).to({scaleX:1.2686,x:234.85},0).wait(1).to({scaleX:1.2694,x:234.9},0).wait(1).to({scaleX:1.2702,x:235},0).wait(1).to({scaleX:1.2711,x:235.1},0).wait(1).to({scaleX:1.2719,x:235.15},0).wait(1).to({scaleX:1.2727,x:235.25},0).wait(1).to({scaleX:1.2735,x:235.35},0).wait(1).to({scaleX:1.2743,x:235.4},0).wait(1).to({scaleX:1.2751,x:235.45},0).wait(1).to({scaleX:1.2759,x:235.55},0).wait(1).to({scaleX:1.2767,x:235.65},0).wait(1).to({scaleX:1.2775,x:235.75},0).wait(1).to({scaleX:1.2783},0).wait(1).to({scaleX:1.2791,x:235.9},0).wait(1).to({scaleX:1.28,x:236},0).wait(1).to({scaleX:1.2808,x:236.05},0).wait(1).to({scaleX:1.2816,x:236.1},0).wait(1).to({scaleX:1.2824,x:236.2},0).wait(1).to({scaleX:1.2832,x:236.3},0).wait(1).to({scaleX:1.284,x:236.4},0).wait(1).to({scaleX:1.2848,x:236.45},0).wait(1).to({scaleX:1.2856,x:236.55},0).wait(1).to({scaleX:1.2864,x:236.65},0).wait(1).to({scaleX:1.2872,x:236.7},0).wait(1).to({scaleX:1.288,x:236.8},0).wait(1).to({scaleX:1.2888,x:236.9},0).wait(1).to({scaleX:1.2897,x:236.95},0).wait(1).to({scaleX:1.2905,x:237},0).wait(1).to({scaleX:1.2913,x:237.15,y:339.65},0).wait(1).to({scaleX:1.2921,x:237.2},0).wait(1).to({scaleX:1.2929,x:237.3},0).wait(1).to({scaleX:1.2937},0).wait(1).to({scaleX:1.2945,x:237.4},0).wait(1).to({scaleX:1.2953,x:237.55},0).wait(1).to({scaleX:1.2961,x:237.6},0).wait(1).to({scaleX:1.2969,x:237.65},0).wait(1).to({scaleX:1.2977,x:237.75},0).wait(1).to({scaleX:1.2986,x:237.8},0).wait(1).to({scaleX:1.2994,x:237.95},0).wait(1).to({scaleX:1.3002,x:238.05},0).wait(1).to({scaleX:1.301},0).wait(1).to({scaleX:1.3018,x:238.15},0).wait(1).to({scaleX:1.3026,x:238.2},0).wait(1).to({regX:136.3,scaleX:1.3034},0).wait(1).to({regX:136.4,scaleX:1.3042,x:238.45},0).wait(1).to({scaleX:1.305,x:238.5},0).wait(1).to({scaleX:1.3058,x:238.6},0).wait(1).to({scaleX:1.3067,x:238.7},0).wait(1).to({scaleX:1.3075,x:238.75},0).wait(1).to({scaleX:1.3083,x:238.85},0).wait(1).to({scaleX:1.3091,x:238.95},0).wait(1).to({scaleX:1.3099},0).wait(1).to({scaleX:1.3107,x:239.1},0).wait(1).to({scaleX:1.3115,x:239.15},0).wait(1).to({scaleX:1.3123,x:239.25},0).wait(1).to({scaleX:1.3131,x:239.3},0).wait(1).to({scaleX:1.3139,x:239.35},0).wait(1).to({scaleX:1.3147,x:239.5},0).wait(1).to({scaleX:1.3156,x:239.6},0).wait(1).to({scaleX:1.3164},0).wait(1).to({scaleX:1.3172,x:239.7},0).wait(1).to({scaleX:1.318,x:239.8},0).wait(1).to({scaleX:1.3188,x:239.95},0).wait(1).to({scaleX:1.3196,x:240},0).wait(1).to({scaleX:1.3204,x:240.05},0).wait(1).to({scaleX:1.3212,x:240.15},0).wait(1).to({scaleX:1.322,x:240.2},0).wait(1).to({scaleX:1.3228,x:240.3},0).wait(1).to({scaleX:1.3236,x:240.4},0).wait(1).to({scaleX:1.3244,x:240.5},0).wait(1).to({scaleX:1.3253},0).wait(1).to({scaleX:1.3261,x:240.6},0).wait(1).to({scaleX:1.3269,x:240.7},0).wait(1).to({scaleX:1.3277,x:240.8},0).wait(1).to({scaleX:1.3285,x:240.9},0).wait(1).to({scaleX:1.3293},0).wait(1).to({scaleX:1.3301,x:241.05,y:339.7},0).wait(1).to({scaleX:1.3309,x:241.15},0).wait(1).to({scaleX:1.3317,x:241.2},0).wait(1).to({scaleX:1.3326,x:241.25},0).wait(1).to({scaleX:1.3334,x:241.35},0).wait(1).to({scaleX:1.3342,x:241.45},0).wait(1).to({scaleX:1.335,x:241.55},0).wait(1).to({scaleX:1.3358},0).wait(1).to({scaleX:1.3366,x:241.65},0).wait(1).to({scaleX:1.3374,x:241.8},0).wait(1).to({scaleX:1.3382,x:241.9},0).wait(1).to({scaleX:1.339,x:241.95},0).wait(1).to({scaleX:1.3398,x:242.05},0).wait(1).to({scaleX:1.3406,x:242.1},0).wait(1).to({scaleX:1.3414,x:242.15},0).wait(1).to({scaleX:1.3423,x:242.3},0).wait(1).to({scaleX:1.3431,x:242.35},0).wait(1).to({scaleX:1.3439,x:242.45},0).wait(1).to({scaleX:1.3447},0).wait(1).to({scaleX:1.3455,x:242.55},0).wait(1).to({scaleX:1.3463,x:242.7},0).wait(1).to({scaleX:1.3471,x:242.75},0).wait(1).to({scaleX:1.3479,x:242.8},0).wait(1).to({scaleX:1.3487,x:242.9},0).wait(1).to({scaleX:1.3495,x:242.95},0).wait(1).to({scaleX:1.3503,x:243.1},0).wait(1).to({scaleX:1.3512,x:243.15},0).wait(1).to({scaleX:1.352,x:243.25},0).wait(1).to({scaleX:1.3528,x:243.35},0).wait(1).to({scaleX:1.3536,x:243.45},0).wait(1).to({scaleX:1.3544,x:243.5},0).wait(1).to({scaleX:1.3552,x:243.55},0).wait(1).to({scaleX:1.356,x:243.65},0).wait(1).to({scaleX:1.3568,x:243.75},0).wait(1).to({scaleX:1.3576,x:243.9},0).wait(1).to({scaleX:1.3584},0).wait(1).to({scaleX:1.3593,x:244},0).wait(1).to({scaleX:1.3601,x:244.05},0).wait(1).to({scaleX:1.3609,x:244.1},0).wait(1).to({scaleX:1.3617,x:244.25},0).wait(1).to({scaleX:1.3625,x:244.3},0).wait(1).to({scaleX:1.3633,x:244.4},0).wait(1).to({scaleX:1.3641,x:244.45},0).wait(1).to({scaleX:1.3649,x:244.5},0).wait(1).to({scaleX:1.3657,x:244.65},0).wait(1).to({scaleX:1.3665,x:244.75},0).wait(1).to({scaleX:1.3673},0).wait(1).to({scaleX:1.3681,x:244.85},0).wait(1).to({scaleX:1.369,x:244.95,y:339.75},0).wait(1).to({scaleX:1.3698,x:245.05},0).wait(1).to({scaleX:1.3706,x:245.1},0).wait(1).to({scaleX:1.3714,x:245.15},0).wait(1).to({scaleX:1.3722,x:245.3},0).wait(1).to({scaleX:1.373,x:245.45},0).wait(1).to({scaleX:1.3738},0).wait(1).to({scaleX:1.3746,x:245.55},0).wait(1).to({scaleX:1.3754,x:245.65},0).wait(1).to({scaleX:1.3762,x:245.7},0).wait(1).to({scaleX:1.377,x:245.8},0).wait(1).to({scaleX:1.3779,x:245.85},0).wait(1).to({scaleX:1.3787,x:245.95},0).wait(1).to({scaleX:1.3795,x:246},0).wait(1).to({scaleX:1.3803,x:246.05},0).wait(1).to({scaleX:1.3811,x:246.2},0).wait(1).to({scaleX:1.3819,x:246.3},0).wait(1).to({scaleX:1.3827,x:246.35},0).wait(1).to({scaleX:1.3835,x:246.4},0).wait(1).to({scaleX:1.3843,x:246.5},0).wait(1).to({scaleX:1.3851,x:246.6},0).wait(1).to({scaleX:1.386,x:246.7},0).wait(1).to({scaleX:1.3868},0).wait(1).to({scaleX:1.3876,x:246.8},0).wait(1).to({scaleX:1.3884,x:246.95},0).wait(1).to({scaleX:1.3892,x:247},0).wait(1).to({scaleX:1.39,x:247.05},0).wait(1).to({scaleX:1.3908,x:247.2},0).wait(1).to({scaleX:1.3916,x:247.25},0).wait(1).to({scaleX:1.3924,x:247.4},0).wait(1).to({scaleX:1.3932,x:247.45},0).wait(1).to({scaleX:1.394,x:247.5},0).wait(1).to({scaleX:1.3949,x:247.6},0).wait(1).to({scaleX:1.3957,x:247.65},0).wait(1).to({scaleX:1.3965,x:247.75},0).wait(1).to({scaleX:1.3973,x:247.85},0).wait(1).to({scaleX:1.3981,x:247.9},0).wait(1).to({scaleX:1.3989,x:247.95},0).wait(1).to({scaleX:1.3997,x:248.05},0).wait(1).to({scaleX:1.4005,x:248.15},0).wait(1).to({scaleX:1.4013,x:248.25},0).wait(1).to({scaleX:1.4021},0).wait(1).to({scaleX:1.4029,x:248.35},0).wait(1).to({scaleX:1.4037,x:248.45},0).wait(1).to({scaleX:1.4046,x:248.55},0).wait(1).to({scaleX:1.4054,x:248.6},0).wait(1).to({scaleX:1.4062,x:248.75},0).wait(1).to({scaleX:1.407,x:248.8},0).wait(1).to({scaleX:1.4078,x:248.9},0).wait(1).to({scaleX:1.4086,x:249,y:339.8},0).wait(1).to({scaleX:1.4094,x:249.05},0).wait(1);
	this.timeline.addTween(_tweenStr_4.to({scaleX:1.4102,x:249.15},0).wait(1).to({scaleX:1.411,x:249.2},0).wait(1).to({scaleX:1.4118,x:249.35},0).wait(1).to({scaleX:1.4127,x:249.4},0).wait(1).to({scaleX:1.4135,x:249.45},0).wait(1).to({scaleX:1.4143,x:249.55},0).wait(1).to({scaleX:1.4151,x:249.65},0).wait(1).to({scaleX:1.4159,x:249.7},0).wait(1).to({scaleX:1.4167,x:249.8},0).wait(1).to({scaleX:1.4175,x:249.9},0).wait(1).to({scaleX:1.4183},0).wait(1).to({scaleX:1.4191,x:250},0).wait(1).to({scaleX:1.4199,x:250.1},0).wait(1).to({scaleX:1.4207,x:250.2},0).wait(1).to({scaleX:1.4216,x:250.25},0).wait(1).to({scaleX:1.4224,x:250.3},0).wait(1).to({scaleX:1.4232,x:250.4},0).wait(1).to({scaleX:1.424,x:250.55},0).wait(1).to({scaleX:1.4248,x:250.6},0).wait(1).to({scaleX:1.4256,x:250.7},0).wait(1).to({scaleX:1.4264,x:250.8},0).wait(1).to({scaleX:1.4272,x:250.85},0).wait(1).to({scaleX:1.428,x:250.95},0).wait(1).to({scaleX:1.4288,x:251},0).wait(1).to({scaleX:1.4296,x:251.1},0).wait(1).to({scaleX:1.4305,x:251.2},0).wait(1).to({scaleX:1.4313},0).wait(1).to({scaleX:1.4321,x:251.35},0).wait(1).to({scaleX:1.4329,x:251.45},0).wait(1).to({scaleX:1.4337,x:251.5},0).wait(1).to({scaleX:1.4345,x:251.55},0).wait(1).to({scaleX:1.4353,x:251.65},0).wait(1).to({scaleX:1.4361,x:251.75},0).wait(1).to({scaleX:1.4369,x:251.8},0).wait(1).to({scaleX:1.4377,x:251.85},0).wait(1).to({scaleX:1.4386,x:251.95},0).wait(1).to({scaleX:1.4394,x:252.1},0).wait(1).to({scaleX:1.4402},0).wait(1).to({scaleX:1.441,x:252.15},0).wait(1).to({scaleX:1.4418,x:252.25},0).wait(1).to({scaleX:1.4426,x:252.3},0).wait(1).to({scaleX:1.4434,x:252.45},0).wait(1).to({scaleX:1.4442,x:252.5},0).wait(1).to({scaleX:1.445,x:252.6},0).wait(1).to({scaleX:1.4458,x:252.7},0).wait(1).to({scaleX:1.4466,x:252.75},0).wait(1).to({scaleX:1.4474,x:252.85,y:339.85},0).wait(1).to({scaleX:1.4483,x:252.95},0).wait(1).to({scaleX:1.4491,x:253},0).wait(1).to({scaleX:1.4499,x:253.1},0).wait(1).to({scaleX:1.4507,x:253.15},0).wait(1).to({scaleX:1.4515,x:253.25},0).wait(1).to({scaleX:1.4523,x:253.35},0).wait(1).to({scaleX:1.4531,x:253.4},0).wait(1).to({scaleX:1.4539,x:253.45},0).wait(1).to({scaleX:1.4547,x:253.55},0).wait(1).to({scaleX:1.4555,x:253.65},0).wait(1).to({scaleX:1.4563,x:253.7},0).wait(1).to({scaleX:1.4572,x:253.8},0).wait(1).to({scaleX:1.458,x:253.85},0).wait(1).to({scaleX:1.4588,x:254},0).wait(1).to({regX:136.3,scaleX:1.4596,x:253.95},0).wait(1).to({regX:136.4,scaleX:1.4604,x:254.15},0).wait(1).to({scaleX:1.4612,x:254.25},0).wait(1).to({scaleX:1.462,x:254.3},0).wait(1).to({scaleX:1.4628,x:254.4},0).wait(1).to({scaleX:1.4636,x:254.5},0).wait(1).to({scaleX:1.4644,x:254.55},0).wait(1).to({scaleX:1.4652,x:254.65},0).wait(1).to({scaleX:1.4661,x:254.75},0).wait(1).to({scaleX:1.4669,x:254.8},0).wait(1).to({scaleX:1.4677,x:254.9},0).wait(1).to({scaleX:1.4685,x:255},0).wait(1).to({scaleX:1.4693,x:255.05},0).wait(1).to({scaleX:1.4701,x:255.1},0).wait(1).to({scaleX:1.4709,x:255.2},0).wait(1).to({scaleX:1.4717,x:255.3},0).wait(1).to({scaleX:1.4725,x:255.35},0).wait(1).to({scaleX:1.4733,x:255.4},0).wait(1).to({scaleX:1.4742,x:255.5},0).wait(1).to({scaleX:1.475,x:255.65},0).wait(1).to({scaleX:1.4758},0).wait(1).to({scaleX:1.4766,x:255.75},0).wait(1).to({scaleX:1.4774,x:255.85},0).wait(1).to({scaleX:1.4782,x:255.9},0).wait(1).to({scaleX:1.479,x:256.05},0).wait(1).to({scaleX:1.4798,x:256.1},0).wait(1).to({scaleX:1.4806,x:256.2},0).wait(1).to({scaleX:1.4814,x:256.3},0).wait(1).to({scaleX:1.4822,x:256.35},0).wait(1).to({scaleX:1.483,x:256.45},0).wait(1).to({scaleX:1.4839,x:256.55},0).wait(1).to({scaleX:1.4847,x:256.6},0).wait(1).to({scaleX:1.4855,x:256.65},0).to({_off:true},1).wait(35));

	// loading_text
	this.text = new cjs.Text("coming up with jokes ...", "10px 'Myriad Web Pro Condensed'", "#0000FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.lineWidth = 104;
	this.text.parent = this;
	this.text.setTransform(264.1,459.8);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(95).to({_off:false},0).wait(1).to({x:263.3,y:382.7},0).wait(1).to({x:262.5,y:305.6},0).wait(1).to({y:306.35},0).wait(1).to({y:307.1},0).wait(185).to({x:252.5,y:354.6},0).wait(1499).to({_off:true},1).wait(35));

	// small_loading_box
	this.instance_2 = new lib.smallbox_1("synched",0);
	this.instance_2.setTransform(262.35,350.15,0.5112,0.5111,0,0,0,4.1,7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(284).to({_off:false},0).wait(1).to({y:353.15},0).wait(1).to({y:352.15},0).to({_off:true},1498).wait(35));

	// loading_box
	this.playbutton = new lib.playbutton();
	this.playbutton.name = "playbutton";
	this.playbutton.setTransform(343.65,211.65,1,1,0,0,0,150,150);
	new cjs.ButtonHelper(this.playbutton, 0, 1, 1);

	this.instance_3 = new lib.loadingguibox("synched",0);
	this.instance_3.setTransform(266.5,470.25,1,1,0,0,0,137.5,84.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.playbutton,p:{y:211.65}}]},9).to({state:[{t:this.playbutton,p:{y:227.65}}]},1).to({state:[{t:this.playbutton,p:{y:225.25}}]},1).to({state:[]},9).to({state:[{t:this.instance_3}]},75).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(35));
	
	var _tweenStr_5 = cjs.Tween.get(this.instance_3).wait(95).to({_off:false},0).wait(1).to({y:393},0).wait(1).to({y:315.7},0).wait(1).to({y:316.45},0).wait(1).to({y:317.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:475.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1);
	var _tweenStr_6 = _tweenStr_5.to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1);
	var _tweenStr_7 = _tweenStr_6.to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1);
	var _tweenStr_8 = _tweenStr_7.to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1);
	this.timeline.addTween(_tweenStr_8.to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(35));

	// Layer_4
	this.instance_4 = new lib.psihouseai();
	this.instance_4.setTransform(271.35,196.85,1,1,0,0,0,62.6,95.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},11).to({_off:true},9).wait(1799));

	// portal2
	this.skiport2 = new lib.spiningskaianportal();
	this.skiport2.name = "skiport2";
	this.skiport2.setTransform(-179.25,60.25,0.9788,0.9723,0,0,0,0,4.6);
	this.skiport2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.skiport2).wait(399).to({_off:false},0).wait(1).to({regX:-11,regY:4.1,scaleX:0.9859,scaleY:0.9804,x:-81.3,y:110.35},0).wait(1).to({scaleX:0.993,scaleY:0.9884,x:27.35,y:161},0).wait(1).to({scaleX:1.0001,scaleY:0.9964,x:136,y:211.6},0).wait(1).to({scaleX:1.0072,scaleY:1.0044,x:244.65,y:262.2},0).wait(1).to({scaleX:1.0144,scaleY:1.0125,x:353.4,y:312.85},0).wait(152).to({x:475.15,y:293.45},0).wait(1).to({x:596.9,y:274},0).wait(1).to({x:718.65,y:254.6},0).wait(1).to({x:840.45,y:235.2},0).to({_off:true},1).wait(1259));

	// portal
	this.skiport = new lib.spiningskaianportal();
	this.skiport.name = "skiport";
	this.skiport.setTransform(274.25,317.8,0.3698,0.3691,0,0,0,0,4.9);
	this.skiport._off = true;

	
	var _tweenStr_9 = cjs.Tween.get(this.skiport).wait(20).to({_off:false},0).wait(1).to({regX:0.1,regY:5,scaleX:0.5932,scaleY:0.5921,rotation:-0.2614,x:274.35,y:124.55},0).wait(1).to({regX:0,regY:4.9,scaleX:0.9269,scaleY:0.9253,rotation:-0.5253,x:274.3,y:190.85},0).wait(1).to({scaleX:0.95,scaleY:0.9485,rotation:-0.79,y:188.9},0).wait(1).to({scaleX:0.9498,scaleY:0.9483,rotation:-1.053,y:188.95},0).wait(1).to({regX:0.1,scaleX:0.9496,scaleY:0.9481,rotation:-1.317,x:274.35},0).wait(1).to({regX:0,scaleX:0.9494,scaleY:0.9478,rotation:-1.5803,x:274.3,y:189},0).wait(1).to({regX:0.1,scaleX:0.9491,scaleY:0.9476,rotation:-1.8437,x:274.4,y:188.95},0).wait(1).to({scaleX:0.9489,scaleY:0.9474,rotation:-2.1073,x:274.35},0).wait(1).to({scaleX:0.9487,scaleY:0.9472,rotation:-2.371,x:274.4,y:189.05},0).wait(1).to({scaleX:0.9485,scaleY:0.947,rotation:-2.6349},0).wait(1).to({regX:0,scaleX:0.9483,scaleY:0.9468,rotation:-2.8981,x:274.3},0).wait(1).to({regX:0.1,scaleX:0.9481,scaleY:0.9466,rotation:-3.1614,x:274.35,y:189.1},0).wait(1).to({regX:0,scaleX:0.9479,scaleY:0.9463,rotation:-3.4249,y:189.05},0).wait(1).to({regY:5,scaleX:0.9476,scaleY:0.9461,rotation:-3.6886,x:274.3,y:189.15},0).wait(1).to({regX:0.1,regY:4.9,scaleX:0.9475,scaleY:0.9459,rotation:-3.9515,x:274.35,y:189.1},0).wait(1).to({scaleX:0.9472,scaleY:0.9457,rotation:-4.2158},0).wait(1).to({regY:5,scaleX:0.947,scaleY:0.9455,rotation:-4.4791,x:274.4,y:189.25},0).wait(1).to({regX:0,regY:4.9,scaleX:0.9468,scaleY:0.9453,rotation:-4.7427,x:274.3,y:189.2},0).wait(1).to({scaleX:0.9466,scaleY:0.9451,rotation:-5.0056,y:189.15},0).wait(1).to({regY:5,scaleX:0.9463,scaleY:0.9448,rotation:-5.2697,x:274.35,y:189.3},0).wait(1).to({scaleX:0.9461,scaleY:0.9446,rotation:-5.533,x:274.3},0).wait(1).to({regX:0.1,scaleX:0.9459,scaleY:0.9444,rotation:-5.7968,x:274.45},0).wait(1).to({regX:0,regY:4.9,scaleX:0.9457,scaleY:0.9442,rotation:-6.0605,x:274.3,y:189.25},0).wait(1).to({regX:0.1,scaleX:0.9455,scaleY:0.944,rotation:-6.3237,x:274.35},0).wait(1).to({scaleX:0.9453,scaleY:0.9438,rotation:-6.5871,x:274.45},0).wait(1).to({scaleX:0.9451,scaleY:0.9435,rotation:-6.8508,x:274.4,y:189.3},0).wait(1).to({scaleX:0.9449,scaleY:0.9433,rotation:-7.1138},0).wait(1).to({regY:5,scaleX:0.9447,scaleY:0.9431,rotation:-7.378,y:189.45},0).wait(1).to({scaleX:0.9444,scaleY:0.9429,rotation:-7.6416,y:189.4},0).wait(1).to({regX:0,scaleX:0.9442,scaleY:0.9427,rotation:-7.9054,x:274.3},0).wait(1).to({regX:0.1,regY:4.9,scaleX:0.944,scaleY:0.9425,rotation:-8.1687,x:274.4},0).wait(1).to({regY:5,scaleX:0.9438,scaleY:0.9423,rotation:-8.433,x:274.45,y:189.5},0).wait(1).to({regY:4.9,scaleX:0.9436,scaleY:0.942,rotation:-8.6959,x:274.4,y:189.4},0).wait(1).to({regY:5,scaleX:0.9434,scaleY:0.9418,rotation:-8.9599,y:189.55},0).wait(1).to({regX:0,regY:4.9,scaleX:0.9432,scaleY:0.9416,rotation:-9.2225,x:274.3,y:189.45},0).wait(1).to({regX:0.1,regY:5,scaleX:0.943,scaleY:0.9414,rotation:-9.4872,x:274.4,y:189.55},0).wait(1).to({regX:0,regY:4.9,scaleX:0.9427,scaleY:0.9412,rotation:-9.7502,x:274.35},0).wait(1).to({regX:0.1,scaleX:0.9425,scaleY:0.941,rotation:-10.0137,x:274.4},0).wait(1).to({regX:-0.1,scaleX:0.9423,scaleY:0.9408,rotation:-10.2776,x:274.15,y:189.5},0).wait(1).to({regX:0,scaleX:0.9421,scaleY:0.9405,rotation:-10.5401,x:274.3,y:189.55},0).wait(1).to({regX:0.1,scaleX:0.9419,scaleY:0.9403,rotation:-10.8036,x:274.4,y:189.6},0).wait(1).to({regX:0,regY:5,scaleX:0.9416,scaleY:0.9401,rotation:-11.0675,x:274.35,y:189.7},0).wait(1).to({regX:0.1,regY:4.9,scaleX:0.9414,scaleY:0.9399,rotation:-11.3307,x:274.4,y:189.6},0).wait(1).to({scaleX:0.9412,scaleY:0.9397,rotation:-11.5946},0).wait(1).to({regX:0,scaleX:0.941,scaleY:0.9395,rotation:-11.8575,x:274.3,y:189.7},0).wait(1).to({regY:5,scaleX:0.9408,scaleY:0.9393,rotation:-12.1219,y:189.75},0).wait(1).to({regX:-0.1,regY:4.9,scaleX:0.9406,scaleY:0.939,rotation:-12.3849,x:274.25,y:189.65},0).wait(1).to({regX:0,scaleX:0.9404,scaleY:0.9388,rotation:-12.6489,x:274.3,y:189.75},0).wait(1).to({scaleX:0.9402,scaleY:0.9386,rotation:-12.9118,y:189.7},0).wait(1).to({regX:0.1,scaleX:0.9399,scaleY:0.9384,rotation:-13.176,x:274.4,y:189.75},0).wait(1).to({scaleX:0.9397,scaleY:0.9382,rotation:-13.4393,x:274.35},0).wait(1).to({regX:0,regY:5,scaleX:0.9395,scaleY:0.938,rotation:-13.7023,x:274.3,y:189.8},0).wait(1).to({regX:0.1,regY:4.9,scaleX:0.9393,scaleY:0.9378,rotation:-13.9666,x:274.4,y:189.75},0).wait(1).to({regX:0,scaleX:0.9391,scaleY:0.9375,rotation:-14.2296,x:274.35,y:189.8},0).wait(1).to({regX:0.1,regY:5,scaleX:0.9389,scaleY:0.9373,rotation:-14.4928,x:274.4,y:189.85},0).wait(1).to({regY:4.9,scaleX:0.9387,scaleY:0.9371,rotation:-14.7574,x:274.35},0).wait(1).to({regX:0,regY:5,scaleX:0.9384,scaleY:0.9369,rotation:-15.0208,x:274.3,y:189.9},0).wait(1).to({regX:0.1,scaleX:0.9382,scaleY:0.9367,rotation:-15.2837,x:274.4,y:189.95},0).wait(1).to({regX:0,scaleX:0.938,scaleY:0.9365,rotation:-15.5476,x:274.35},0).wait(1).to({regX:0.1,scaleX:0.9378,scaleY:0.9362,rotation:-15.8112,x:274.45,y:189.9},0).wait(1).to({regX:0,regY:4.9,scaleX:0.9376,scaleY:0.936,rotation:-16.0752,x:274.3},0).wait(1).to({regY:5,scaleX:0.9374,scaleY:0.9358,rotation:-16.3378,y:190},0).wait(1).to({regY:4.9,scaleX:0.9371,scaleY:0.9356,rotation:-16.602,y:189.95},0).wait(1).to({regX:-0.1,scaleX:0.937,scaleY:0.9354,rotation:-16.8656,x:274.2,y:190.1},0).wait(1).to({regX:0.1,regY:5,scaleX:0.9367,scaleY:0.9352,rotation:-17.1287,x:274.45,y:190},0).wait(1).to({regY:4.9,scaleX:0.9365,scaleY:0.9349,rotation:-17.392,x:274.4,y:189.95},0).wait(1).to({regX:0,regY:5,scaleX:0.9363,scaleY:0.9347,rotation:-17.6562,x:274.35,y:190.15},0).wait(1).to({regX:0.1,regY:4.9,scaleX:0.9361,scaleY:0.9345,rotation:-17.9196,y:189.95},0).wait(1).to({regX:0,scaleX:0.9359,scaleY:0.9343,rotation:-18.1834,x:274.3,y:190.05},0).wait(1).to({scaleX:0.9357,scaleY:0.9341,rotation:-18.4462,y:190.1},0).wait(1).to({regX:0.1,scaleX:0.9355,scaleY:0.9339,rotation:-18.7103,x:274.4,y:190.05},0).wait(1).to({regX:0,regY:5,scaleX:0.9352,scaleY:0.9336,rotation:-18.9733,x:274.35,y:190.15},0).wait(1).to({regY:4.9,scaleX:0.935,scaleY:0.9335,rotation:-19.237,x:274.3,y:190.1},0).wait(1).to({regX:0.1,scaleX:0.9348,scaleY:0.9333,rotation:-19.5009,x:274.4},0).wait(1).to({regX:0,regY:5,scaleX:0.9346,scaleY:0.933,rotation:-19.7643,x:274.35,y:190.25},0).wait(1).to({regY:4.9,scaleX:0.9344,scaleY:0.9328,rotation:-20.0285,x:274.3,y:190.2},0).wait(1).to({regX:0.1,regY:5,scaleX:0.9342,scaleY:0.9326,rotation:-20.2919,x:274.4},0).wait(1).to({regX:0,regY:4.9,scaleX:0.9339,scaleY:0.9324,rotation:-20.5549,x:274.35,y:190.3},0).wait(1).to({scaleX:0.9337,scaleY:0.9322,rotation:-20.8187,x:274.3,y:190.25},0).wait(1).to({regX:0.1,scaleX:0.9335,scaleY:0.932,rotation:-21.0826,x:274.4,y:190.2},0).wait(1).to({scaleX:0.9333,scaleY:0.9317,rotation:-21.3452,y:190.25},0).wait(1).to({regX:0,scaleX:0.9331,scaleY:0.9315,rotation:-21.609,x:274.35,y:190.3},0).wait(1).to({regX:0.1,scaleX:0.9329,scaleY:0.9313,rotation:-21.8725,x:274.4},0).wait(1).to({scaleX:0.9327,scaleY:0.9311,rotation:-22.136,y:190.35},0).wait(1).to({regX:0,regY:5,scaleX:0.9324,scaleY:0.9309,rotation:-22.4003,x:274.35,y:190.45},0).wait(1).to({regY:4.9,scaleX:0.9322,scaleY:0.9307,rotation:-22.663,x:274.3,y:190.35},0).wait(1).to({scaleX:0.932,scaleY:0.9304,rotation:-22.9265,x:274.35,y:190.4},0).wait(1).to({scaleX:0.9318,scaleY:0.9302,rotation:-23.1906,x:274.3},0).wait(1).to({scaleX:0.9316,scaleY:0.93,rotation:-23.4539,y:190.45},0).wait(1).to({regY:5,scaleX:0.9314,scaleY:0.9298,rotation:-23.7184,x:274.35,y:190.5},0).wait(1).to({regY:4.9,scaleX:0.9312,scaleY:0.9296,rotation:-23.9813,x:274.3,y:190.45},0).wait(1).to({scaleX:0.9309,scaleY:0.9294,rotation:-24.2439,y:190.5},0).wait(1).to({regX:0.1,scaleX:0.9307,scaleY:0.9292,rotation:-24.5078,x:274.45,y:190.45},0).wait(1).to({regY:5,scaleX:0.9305,scaleY:0.929,rotation:-24.7722,y:190.5},0).wait(1).to({regX:0,scaleX:0.9303,scaleY:0.9287,rotation:-25.0346,x:274.3,y:190.6},0).wait(1).to({scaleX:0.9301,scaleY:0.9285,rotation:-25.2987,x:274.35},0).wait(1).to({regY:4.9,scaleX:0.9299,scaleY:0.9283,rotation:-25.5626,x:274.3},0).wait(1).to({scaleX:0.9297,scaleY:0.9281,rotation:-25.8261},0).wait(1).to({regX:0.1,regY:5,scaleX:0.9295,scaleY:0.9279,rotation:-26.0893,x:274.45},0).wait(1).to({regX:0,scaleX:0.9292,scaleY:0.9277,rotation:-26.3526,x:274.35,y:190.7},0).wait(1).to({regX:-0.1,regY:4.9,scaleX:0.929,scaleY:0.9274,rotation:-26.6169,x:274.25,y:190.65},0).wait(1).to({regX:0,scaleX:0.9288,scaleY:0.9272,rotation:-26.88,x:274.3,y:190.6},0).wait(1).to({regX:-0.1,scaleX:0.9286,scaleY:0.927,rotation:-27.1437,x:274.2,y:190.75},0).wait(1).to({regX:0.1,regY:5,scaleX:0.9284,scaleY:0.9268,rotation:-27.4075,x:274.45,y:190.7},0).wait(1).to({scaleX:0.9282,scaleY:0.9266,rotation:-27.6707},0).wait(1).to({regX:0,regY:4.9,scaleX:0.9279,scaleY:0.9264,rotation:-27.9348,x:274.35,y:190.75},0).wait(1).to({regY:5,scaleX:0.9277,scaleY:0.9262,rotation:-28.1981,y:190.8},0).wait(1).to({regY:4.9,scaleX:0.9275,scaleY:0.926,rotation:-28.4613,x:274.3,y:190.75},0).wait(1).to({regX:0.1,scaleX:0.9273,scaleY:0.9257,rotation:-28.725,x:274.45,y:190.8},0).wait(1).to({regX:0,scaleX:0.9271,scaleY:0.9255,rotation:-28.9889,x:274.25},0).wait(1).to({regX:0.1,scaleX:0.9269,scaleY:0.9253,rotation:-29.2517,x:274.4,y:190.7},0).wait(1).to({regX:-0.1,regY:5,scaleX:0.8127,scaleY:0.8113,rotation:-29.5159,x:274.3,y:155.75},0).wait(1).to({regX:0,scaleX:0.6984,scaleY:0.6972,rotation:-29.7789,x:274.4,y:120.5},0).wait(1).to({regX:0.1,regY:4.9,rotation:-30.0418,x:274.35,y:120.4},0).wait(1).to({rotation:-30.3059},0).wait(1).to({regX:0,scaleX:0.6985,rotation:-30.57,x:274.3,y:120.45},0).wait(1).to({regX:0.1,rotation:-30.8332,x:274.35,y:120.4},0).wait(1).to({regX:0,rotation:-31.0958,x:274.3,y:120.45},0).wait(1).to({regX:-0.1,scaleX:0.6984,rotation:-31.3603},0).wait(1).to({rotation:-31.6231},0).wait(1).to({regX:0.1,rotation:-31.8872,x:274.35,y:120.4},0).wait(1).to({regX:-0.1,rotation:-32.1509,x:274.25,y:120.45},0).wait(1).to({regY:5,rotation:-32.4146,x:274.3,y:120.5},0).wait(1).to({regX:0.1,rotation:-32.678,x:274.4,y:120.45},0).wait(1).to({regX:-0.1,scaleX:0.6985,rotation:-32.942,x:274.3,y:120.55},0).wait(1).to({scaleX:0.6984,rotation:-33.2056,y:120.5},0).wait(1).to({regX:0,scaleX:0.6985,rotation:-33.4692,y:120.45},0).wait(1).to({regY:4.9,rotation:-33.7325,x:274.35,y:120.4},0).wait(1).to({regX:-0.1,scaleX:0.6984,rotation:-33.9954,x:274.25,y:120.5},0).wait(1).to({regX:0.1,rotation:-34.258,x:274.3,y:120.35},0).wait(1).to({regX:-0.1,rotation:-34.5231,y:120.45},0).wait(1).to({regY:5,rotation:-34.7864,y:120.5},0).wait(1).to({regX:0,regY:4.9,rotation:-35.0493,y:120.4},0).wait(1).to({regX:0.1,rotation:-35.313,x:274.35},0).wait(1).to({regX:0,regY:5,rotation:-35.5765,y:120.45},0).wait(1).to({regX:-0.1,rotation:-35.8406,x:274.3,y:120.5},0).wait(1).to({regX:0.1,regY:4.9,rotation:-36.1037,x:274.35,y:120.35},0).wait(1).to({regX:-0.1,rotation:-36.3676,x:274.3,y:120.45},0).wait(1).to({regX:0.1,regY:5,scaleX:0.6985,rotation:-36.6301,x:274.4,y:120.4},0).wait(1).to({regY:4.9,scaleX:0.6984,rotation:-36.8945,x:274.35},0).wait(1).to({regX:0,scaleX:0.6985,rotation:-37.1578,x:274.3},0).wait(1).to({regY:5,scaleX:0.6984,rotation:-37.4216,x:274.35},0).wait(1).to({regX:-0.1,rotation:-37.6845,x:274.3,y:120.5},0).wait(1).to({regX:0.1,rotation:-37.9491,x:274.4,y:120.45},0).wait(1).to({regX:0,rotation:-38.2117,x:274.35},0).wait(1).to({regX:-0.1,regY:4.9,rotation:-38.4759,x:274.3},0).wait(1).to({regX:0,regY:5,rotation:-38.7391,x:274.4,y:120.4},0).wait(1).to({regY:4.9,rotation:-39.0021,x:274.35},0).wait(1).to({regY:5,rotation:-39.2669,y:120.45},0).wait(1).to({regX:-0.1,regY:4.9,rotation:-39.5297,x:274.25,y:120.5},0).wait(1).to({regX:0,regY:5,rotation:-39.7942,x:274.35},0).wait(1).to({regX:-0.1,rotation:-40.0568,x:274.3},0).wait(1).to({regX:0.1,rotation:-40.3211,x:274.4,y:120.4},0).wait(1).to({regX:0,rotation:-40.5844,x:274.35,y:120.45},0).wait(1).to({rotation:-40.8476,x:274.4},0).wait(1).to({regX:-0.1,regY:4.9,rotation:-41.1107,x:274.3,y:120.4},0).wait(1).to({regY:5,rotation:-41.3747,y:120.45},0).wait(1).to({rotation:-41.6384,y:120.5},0).wait(1).to({regX:0.1,rotation:-41.9022,x:274.4,y:120.4},0).wait(1).to({rotation:-42.1659},0).wait(1).to({regX:-0.1,rotation:-42.4286,x:274.3,y:120.5},0).wait(1).to({regX:0.1,regY:4.9,rotation:-42.6922,x:274.35,y:120.35},0).wait(1).to({regX:0,rotation:-42.9558,y:120.4},0).wait(1).to({regX:0.1,regY:5,rotation:-43.2201,x:274.4},0).wait(1).to({regX:0,regY:4.9,rotation:-43.4836,x:274.3,y:120.45},0).wait(1).to({regX:-0.1,regY:5,rotation:-43.747},0).wait(1).to({regX:0.1,regY:4.9,rotation:-44.0095,x:274.35,y:120.35},0).wait(1).to({regX:0,rotation:-44.2738,x:274.3,y:120.45},0).wait(1).to({rotation:-44.5371,y:120.4},0).wait(1).to({rotation:-44.8014},0).wait(1).to({rotation:-45.0647},0).wait(1).to({regX:-0.1,rotation:-45.329,y:120.45},0).wait(1).to({regX:0.1,regY:5,rotation:-45.5914,x:274.4,y:120.4},0).wait(1).to({regX:0,regY:4.9,rotation:-45.8548,x:274.35},0).wait(1).to({regX:0.1,rotation:-46.1182,y:120.35},0).wait(1).to({regX:0,regY:5,rotation:-46.3825,y:120.45},0).wait(1).to({regY:4.9,scaleX:0.6985,rotation:-46.645,x:274.3,y:120.4},0).wait(1).to({regX:0.1,scaleX:0.6984,rotation:-46.9094,x:274.35,y:120.35},0).wait(1).to({regX:-0.1,rotation:-47.1729,x:274.25,y:120.4},0).wait(1).to({regX:0,rotation:-47.4356,x:274.3},0).wait(1).to({regX:-0.1,rotation:-47.7001,y:120.45},0).wait(1).to({regY:5,rotation:-47.9628,y:120.5},0).wait(1).to({regX:0,rotation:-48.2266,x:274.35,y:120.4},0).wait(1).to({regX:0.1,rotation:-48.4904,x:274.4},0).wait(1).to({regX:-0.1,regY:4.9,rotation:-48.7533,x:274.25,y:120.45},0).wait(1).to({regX:0,regY:5,rotation:-49.0173,x:274.4},0).wait(1).to({regX:0.1,regY:4.9,rotation:-49.2813,x:274.35,y:120.35},0).wait(1).to({regX:0,rotation:-49.5455},0).wait(1).to({regX:0.1,regY:5,rotation:-49.8088,x:274.4},0).wait(1).to({regX:-0.1,rotation:-50.0722,x:274.3,y:120.45},0).wait(1).to({regX:0.1,rotation:-50.3357,x:274.4,y:120.35},0).wait(1).to({regX:0,rotation:-50.5985,x:274.35},0).wait(1).to({regY:4.9,rotation:-50.8623,x:274.3},0).wait(1).to({rotation:-51.1261},0).wait(1).to({regY:5,scaleX:0.6985,rotation:-51.3893,x:274.35,y:120.4},0).wait(1).to({regY:4.9,scaleX:0.6984,rotation:-51.6525,y:120.35},0).wait(1).to({regX:-0.1,rotation:-51.9169,x:274.3,y:120.4},0).wait(1).to({rotation:-52.1806},0).wait(1).to({regX:0.1,rotation:-52.4434,x:274.4,y:120.3},0).wait(1).to({regX:0,regY:5,rotation:-52.7073,x:274.35,y:120.35},0).wait(1).to({regX:0.1,regY:4.9,rotation:-52.9711,y:120.3},0).wait(1).to({regX:0,rotation:-53.2344,x:274.3,y:120.35},0).wait(1).to({regX:0.1,regY:5,rotation:-53.4973,x:274.4,y:120.3},0).wait(1).to({regX:-0.1,regY:4.9,rotation:-53.7609,x:274.25,y:120.35},0).wait(1).to({regX:0.1,regY:5,rotation:-54.0255,x:274.4},0).wait(1).to({regX:0,rotation:-54.2889,y:120.4},0).wait(1).to({regX:0.1,regY:4.9,rotation:-54.553,x:274.35,y:120.3},0).wait(1).to({rotation:-54.8157},0).wait(1).to({regX:0,regY:5,rotation:-55.0783,y:120.35},0).wait(1).to({regY:4.9,rotation:-55.3424,x:274.3},0).wait(1).to({rotation:-55.6057},0).wait(1).to({regX:0.1,regY:5,scaleX:0.6985,rotation:-55.8693,x:274.4},0).wait(1).to({regX:-0.1,regY:4.9,scaleX:0.6984,rotation:-56.1329,x:274.3},0).wait(1).to({regX:0,scaleX:0.6985,rotation:-56.3969,x:274.35},0).wait(1).to({regY:5,scaleX:0.6984,rotation:-56.6595},0).wait(1).to({regX:0.1,scaleX:0.6985,rotation:-56.9248,x:274.4,y:120.3},0).wait(1).to({regX:0,scaleX:0.6984,rotation:-57.1867,y:120.4},0).wait(1).to({rotation:-57.4518},0).wait(1).to({scaleX:0.6985,rotation:-57.7144,y:120.35},0).wait(1).to({regY:4.9,scaleX:0.6984,rotation:-57.9781,x:274.35,y:120.3},0).wait(1).to({regX:0.1,regY:5,rotation:-58.2422,x:274.4},0).wait(1).to({regY:4.9,rotation:-58.5057,x:274.35},0).wait(1).to({regX:0,regY:5,scaleX:0.8731,scaleY:0.8715,rotation:-58.7685,x:320.6,y:167.6},0).wait(1).to({regX:-0.1,regY:4.9,scaleX:1.0477,scaleY:1.0458,rotation:-59.0318,x:366.7,y:214.8},0).wait(1).to({regX:0,scaleX:1.2223,scaleY:1.22,rotation:-59.2958,x:412.95,y:261.9},0).wait(1).to({scaleX:1.397,scaleY:1.3944,rotation:-59.5585,x:459.15,y:309.05},0).wait(1).to({scaleX:1.5716,scaleY:1.5686,rotation:-59.8229,x:505.45,y:356.2},0).wait(1).to({rotation:-60.0864,x:505.4,y:356.25},0).wait(1).to({regX:-0.1,scaleY:1.5687,rotation:-60.3493,x:505.35,y:356.35},0).wait(1).to({regX:0,scaleY:1.5686,rotation:-60.6138,x:505.4,y:356.2},0).wait(1).to({regX:-0.1,scaleY:1.5687,rotation:-60.8771,x:505.3,y:356.35},0).wait(1).to({regX:0,rotation:-61.1403,x:505.45,y:356.2},0).wait(1).to({scaleY:1.5686,rotation:-61.4044,x:505.4,y:356.25},0).wait(1).to({scaleY:1.5687,rotation:-61.6678},0).wait(1).to({rotation:-61.9308,x:505.45,y:356.2},0).wait(1).to({rotation:-62.1948,y:356.25},0).wait(1).to({rotation:-62.4576,y:356.2},0).wait(1).to({rotation:-62.7218},0).wait(1).to({rotation:-62.9851,x:505.4,y:356.25},0).wait(1).to({regY:5,scaleY:1.5686,rotation:-63.2485,x:505.55,y:356.3},0).wait(1).to({regY:4.9,scaleY:1.5687,rotation:-63.5127,x:505.45,y:356.25},0).wait(1).to({regX:-0.1,rotation:-63.7759,x:505.4,y:356.35},0).wait(1).to({regX:0,scaleY:1.5686,rotation:-64.0389,y:356.2},0).wait(1).to({scaleY:1.5687,rotation:-64.3029,x:505.45},0).wait(1).to({rotation:-64.5668,y:356.25},0).wait(1).to({regX:-0.1,rotation:-64.8301,x:505.35,y:356.35},0).wait(1).to({rotation:-65.0932},0).wait(1).to({regX:0,rotation:-65.3572,x:505.4,y:356.2},0).wait(1).to({scaleY:1.5686,rotation:-65.6206},0).wait(1).to({scaleY:1.5687,rotation:-65.8838},0).wait(1).to({rotation:-66.148,x:505.45},0).wait(1).to({scaleY:1.5686,rotation:-66.4116,x:505.4},0).wait(1).to({scaleY:1.5687,rotation:-66.6747,y:356.25},0).wait(1).to({rotation:-66.938,y:356.2},0).wait(1).to({scaleY:1.5686,rotation:-67.2023,x:505.45},0).wait(1).to({regY:5,scaleY:1.5687,rotation:-67.4651,x:505.55,y:356.25},0).wait(1).to({regY:4.9,scaleY:1.5686,rotation:-67.729,x:505.4,y:356.2},0).wait(1).to({rotation:-67.9927,x:505.45,y:356.25},0).wait(1).to({scaleY:1.5687,rotation:-68.2556,x:505.4},0).wait(1).to({rotation:-68.5195,y:356.2},0).wait(1).to({rotation:-68.7828},0).wait(1).to({rotation:-69.047,x:505.45},0).wait(1).to({regX:-0.1,scaleX:1.171,scaleY:1.1688,rotation:-69.3099,x:355.6,y:245.65},0).wait(1).to({regY:5,scaleX:0.7703,scaleY:0.7688,rotation:-69.5739,x:205.95,y:135.1},0).wait(1).to({regX:0,regY:4.9,rotation:-69.8369,x:205.9,y:135.05},0).wait(1).to({regX:0.1,rotation:-70.1016,x:205.95,y:135},0).wait(1).to({regX:-0.1,rotation:-70.3635,x:205.85,y:135.05},0).wait(1).to({regY:5,rotation:-70.6282,x:205.9},0).wait(1).to({regX:0,regY:4.9,rotation:-70.8918},0).wait(1).to({regX:-0.1,rotation:-71.1551},0).wait(1).to({regY:5,rotation:-71.4194,x:205.95,y:135.1},0).wait(1).to({regX:0,rotation:-71.683,y:135.05},0).wait(1).to({regX:-0.1,regY:4.9,rotation:-71.9452},0).wait(1).to({regY:5,rotation:-72.2095},0).wait(1).to({regX:0,regY:4.9,rotation:-72.4735,x:205.9},0).wait(1).to({regY:5,rotation:-72.7367},0).wait(1).to({rotation:-73.0008,x:206},0).wait(1).to({regY:4.9,rotation:-73.2634,x:205.85},0).wait(1).to({regX:0.1,regY:5,rotation:-73.5268,x:205.95,y:135},0).wait(1).to({regX:0,rotation:-73.7898,x:206,y:135.05},0).wait(1).to({rotation:-74.054,x:205.95},0).wait(1).to({regX:-0.1,regY:4.9,rotation:-74.3175,x:205.9},0).wait(1).to({regY:5,rotation:-74.5807,x:205.95},0).wait(1).to({regX:0,regY:4.9,rotation:-74.8447,x:205.9},0).wait(1).to({regX:0.1,scaleX:0.7438,scaleY:0.7423,rotation:-75.108,x:242.7,y:130.85},0).wait(1).to({regX:-0.1,regY:5,scaleX:0.7173,scaleY:0.7159,rotation:-75.3717,x:279.55,y:126.6},0).wait(1).to({regY:4.9,scaleX:0.6907,scaleY:0.6894,rotation:-75.6359,x:316.25,y:122.45},0).wait(1).to({scaleX:0.6642,scaleY:0.663,rotation:-75.8988,x:353.05,y:118.2},0).wait(1).to({regY:5,scaleX:0.6377,scaleY:0.6366,rotation:-76.162,x:390,y:113.95},0).wait(1).to({regX:0,regY:4.9,scaleX:0.6112,scaleY:0.6101,rotation:-76.4267,x:426.75,y:109.7},0).wait(1).to({regY:5,scaleX:0.6095,scaleY:0.6085,rotation:-76.689,x:426.85,y:109.6},0).wait(1).to({regX:-0.1,regY:4.9,scaleX:0.6079,scaleY:0.6068,rotation:-76.9541,x:426.9},0).wait(1).to({regX:0,scaleX:0.6062,scaleY:0.6052,rotation:-77.2175,x:427,y:109.45},0).wait(1).to({scaleX:0.6046,scaleY:0.6035,rotation:-77.4806,x:427.1,y:109.35},0).wait(1).to({regY:5,scaleX:0.6029,scaleY:0.6019,rotation:-77.7434,x:427.25,y:109.2},0).wait(1).to({regY:4.9,scaleX:0.6013,scaleY:0.6003,rotation:-78.0074,x:427.35,y:109.15},0).wait(1).to({regX:-0.1,scaleX:0.5996,scaleY:0.5986,rotation:-78.271,x:427.4,y:109.05},0).wait(1).to({regY:5,scaleX:0.5979,scaleY:0.5969,rotation:-78.5338,x:427.5},0).wait(1).to({regY:4.9,scaleX:0.5963,scaleY:0.5953,rotation:-78.7986,x:427.6,y:108.9},0).wait(1).to({regX:0,regY:5,scaleX:0.5947,scaleY:0.5937,rotation:-79.0615,x:427.7,y:108.8},0).wait(1).to({regX:-0.1,regY:4.9,scaleX:0.593,scaleY:0.592,rotation:-79.3252,x:427.75,y:108.75},0).wait(1).to({regX:0.1,scaleX:0.5913,scaleY:0.5904,rotation:-79.5889,x:427.85,y:108.5},0).wait(1).to({regX:0,scaleX:0.5897,scaleY:0.5888,rotation:-79.8524,x:427.95,y:108.45},0).wait(1).to({regX:-0.1,scaleX:0.588,scaleY:0.5871,rotation:-80.1156,x:428.1,y:108.4},0).wait(1).to({regY:5,scaleX:0.6154,scaleY:0.6144,rotation:-80.3793,x:330.65,y:151.95},0).wait(1).to({regY:4.9,scaleX:0.6427,scaleY:0.6417,rotation:-80.6427,x:233.05,y:195.45},0).wait(1).to({regY:5,scaleX:0.6701,scaleY:0.6689,rotation:-80.9055,x:135.6,y:239},0).wait(1).to({regY:4.9,scaleX:0.7009,scaleY:0.6996,rotation:-81.1702,x:140.45,y:237.75},0).wait(1).to({regX:0,scaleX:0.7318,scaleY:0.7303,rotation:-81.4326,x:145.3,y:236.4},0).wait(1).to({regX:-0.1,regY:5,scaleX:0.7626,scaleY:0.761,rotation:-81.697,x:150.3,y:235.2},0).wait(1).to({regX:0,regY:4.9,scaleX:0.7934,scaleY:0.7917,rotation:-81.9609,x:155.1,y:233.85},0).wait(1).to({scaleX:0.8243,scaleY:0.8224,rotation:-82.2235,x:159.95,y:232.55},0).wait(1).to({regX:-0.1,rotation:-82.4873,y:232.65},0).wait(1).to({regX:0,regY:5,scaleX:0.8242,rotation:-82.751,x:160,y:232.55},0).wait(1).to({regX:-0.1,rotation:-83.0145,y:232.6},0).wait(1).to({regX:0.1,regY:4.9,scaleX:0.8243,rotation:-83.2779,x:159.9,y:232.4},0).wait(1).to({regX:0,scaleX:0.8242,rotation:-83.5422,y:232.55},0).wait(1).to({rotation:-83.8055},0).wait(1).to({regX:-0.1,scaleX:0.8243,rotation:-84.0683,y:232.6},0).wait(1).to({regX:0,scaleX:0.8242,rotation:-84.3322,y:232.55},0).wait(1).to({regY:5,rotation:-84.5961,x:160},0).wait(1).to({regX:-0.1,scaleX:0.8243,rotation:-84.8598,y:232.6},0).wait(1).to({regX:0,regY:4.9,rotation:-85.1222,x:159.9,y:232.55},0).wait(1).to({regX:-0.1,scaleX:0.8242,rotation:-85.3868,y:232.6},0).wait(1).to({regY:5,scaleX:0.8243,rotation:-85.6501,x:160},0).wait(1).to({regX:0.1,regY:4.9,rotation:-85.9134,x:159.9,y:232.45},0).wait(1).to({regX:-0.1,scaleX:0.8242,rotation:-86.1777,y:232.6},0).wait(1).to({rotation:-86.4398},0).wait(1).to({regX:0,scaleX:0.8243,rotation:-86.7038,y:232.55},0).wait(1).to({regY:5,rotation:-86.9679,x:159.95,y:232.5},0).wait(1).to({scaleX:0.8242,rotation:-87.2308,y:232.55},0).wait(1).to({regX:-0.1,rotation:-87.4936,y:232.6},0).wait(1).to({scaleX:0.8243,rotation:-87.7585},0).wait(1).to({regX:0,regY:4.9,scaleX:0.8242,rotation:-88.0224,y:232.55},0).wait(1).to({regX:-0.1,rotation:-88.2851,y:232.6},0).wait(1).to({regX:0,regY:5,rotation:-88.5477,y:232.5},0).wait(1).to({rotation:-88.8125,y:232.55},0).wait(1).to({regX:-0.1,regY:4.9,rotation:-89.0762,y:232.6},0).wait(1).to({regX:0,rotation:-89.3398,y:232.5},0).wait(1).to({regX:-0.1,scaleX:0.8243,rotation:-89.6035,y:232.65},0).wait(1).to({regX:0,scaleX:0.8242,rotation:-89.8661,y:232.5},0).wait(1).to({rotation:-90.1276},0).wait(1).to({regX:-0.1,scaleX:0.8949,scaleY:0.8929,rotation:-90.3907,x:214.75,y:203.75},0).wait(1).to({scaleX:0.9655,scaleY:0.9633,rotation:-90.6553,x:269.6,y:174.85},0).wait(1).to({rotation:-90.9185,x:268.25,y:175.5},0).wait(1).to({scaleX:0.9656,rotation:-91.1827,x:268.35,y:175.55},0).wait(1).to({regX:0,rotation:-91.4459,y:175.45},0).wait(1).to({regY:5,scaleX:0.9655,rotation:-91.7092,x:268.4},0).wait(1).to({regX:-0.1,scaleX:0.9656,rotation:-91.9726,x:268.45,y:175.5},0).wait(1).to({regY:4.9,rotation:-92.2368,x:268.35},0).wait(1).to({regX:0,scaleX:0.9655,rotation:-92.4994,y:175.4},0).wait(1).to({regY:5,rotation:-92.7628,x:268.45,y:175.45},0).wait(1).to({regX:-0.1,regY:4.9,scaleX:0.9656,rotation:-93.0264,x:268.35,y:175.5},0).wait(1).to({regX:0,scaleX:0.9655,rotation:-93.29,y:175.45},0).wait(1).to({regX:-0.1,rotation:-93.5537,x:268.3,y:175.5},0).wait(1).to({regX:0.1,scaleX:0.9656,rotation:-93.8174,x:268.35,y:175.35},0).wait(1).to({regX:-0.1,scaleX:0.9655,rotation:-94.0812,y:175.5},0).wait(1).to({regX:0,rotation:-94.3442,y:175.45},0).wait(1).to({regX:-0.1,rotation:-94.6082,y:175.5},0).wait(1).to({regX:0,regY:5,scaleX:0.9656,rotation:-94.8714,x:268.45,y:175.45},0).wait(1).to({regY:4.9,scaleX:0.9655,rotation:-95.1348,x:268.35},0).wait(1).to({regX:-0.1,rotation:-95.399,y:175.5},0).wait(1).to({regX:0,regY:5,scaleX:0.9656,rotation:-95.6625,x:268.45,y:175.35},0).wait(1).to({regY:4.9,scaleX:0.9655,rotation:-95.9253,x:268.35,y:175.4},0).wait(1).to({regX:-0.1,rotation:-96.1891,x:268.4,y:175.5},0).wait(1).to({rotation:-96.4529,x:268.35},0).wait(1).to({scaleX:0.9656,rotation:-96.716},0).wait(1).to({rotation:-96.9801},0).wait(1).to({regX:0,scaleX:0.9655,rotation:-97.2437,y:175.45},0).wait(1).to({scaleX:0.9656,rotation:-97.5072,x:268.4},0).wait(1).to({regX:-0.1,rotation:-97.7699,x:268.35,y:175.5},0).wait(1).to({regX:0,regY:5,scaleX:0.9655,rotation:-98.0338,x:268.4,y:175.4},0).wait(1).to({regX:-0.1,scaleX:0.9656,rotation:-98.2971,y:175.5},0).wait(1).to({rotation:-98.5603},0).wait(1).to({regX:0,regY:4.9,scaleX:0.9655,rotation:-98.8248,x:268.35,y:175.45},0).wait(1).to({regX:-0.1,rotation:-99.0875,y:175.5},0).wait(1).to({regX:0,regY:5,rotation:-99.3515,x:268.4,y:175.4},0).wait(1).to({regX:-0.1,rotation:-99.6154,x:268.45,y:175.5},0).wait(1).to({rotation:-99.8788,y:175.45},0).wait(1).to({scaleX:1.1843,scaleY:1.1816,rotation:-100.1427,x:241.2,y:124.5},0).wait(1).to({regY:4.9,scaleX:1.4031,scaleY:1.3998,rotation:-100.4065,x:213.85,y:73.65},0).wait(1).to({regX:0,scaleX:1.6218,scaleY:1.618,rotation:-100.6694,x:186.6,y:22.55},0).wait(1).to({scaleX:1.8406,scaleY:1.8363,rotation:-100.9331,x:159.35,y:-28.4},0).wait(1).to({scaleX:2.0594,scaleY:2.0545,rotation:-101.1969,x:132.1,y:-79.35},0).wait(1).to({scaleX:2.0593,rotation:-101.4599,x:131.3,y:-79.4},0).wait(1).to({rotation:-101.724,x:130.6},0).wait(1).to({rotation:-101.9875,x:129.85},0).wait(1).to({rotation:-102.2504,x:129.1},0).wait(1).to({rotation:-102.5145,x:128.35},0).wait(1).to({rotation:-102.7783,x:127.55,y:-79.45},0).wait(1).to({scaleX:2.0594,rotation:-103.0415,x:126.8,y:-79.35},0).wait(1).to({scaleX:2.0593,rotation:-103.3047,x:126.1},0).wait(1).to({rotation:-103.5681,x:125.3,y:-79.4},0).wait(1).to({rotation:-103.8317,x:124.55},0).wait(1).to({rotation:-104.0957,x:123.8,y:-79.35},0).wait(1).to({scaleX:2.0594,rotation:-104.3591,x:123.05,y:-79.4},0).wait(1).to({regX:0.1,rotation:-104.6227,x:122.3,y:-79.6},0).wait(1);
	var _tweenStr_10 = _tweenStr_9.to({regX:0,scaleX:2.0593,rotation:-104.8859,x:121.6,y:-79.4},0).wait(1).to({scaleX:2.0594,rotation:-105.1502,x:120.8},0).wait(1).to({scaleX:2.0593,rotation:-105.4133,x:120.05},0).wait(1).to({rotation:-105.6774,x:119.35,y:-79.35},0).wait(1).to({rotation:-105.9406,x:118.6},0).wait(1).to({rotation:-106.2035,x:117.8,y:-79.4},0).wait(1).to({rotation:-106.4679,x:117.05},0).wait(1).to({rotation:-106.7316,x:116.35},0).wait(1).to({scaleX:2.0594,rotation:-106.9947,x:115.6},0).wait(1).to({scaleX:2.0593,rotation:-107.2579,x:114.8},0).wait(1).to({rotation:-107.5219,x:114.05,y:-79.45},0).wait(1).to({rotation:-107.7855,x:113.3,y:-79.35},0).wait(1).to({rotation:-108.0487,x:112.55},0).wait(1).to({regX:0.1,rotation:-108.3124,x:111.75,y:-79.55},0).wait(1).to({regX:0,rotation:-108.5757,x:111.05,y:-79.4},0).wait(1).to({rotation:-108.8399,x:110.35},0).wait(1).to({regY:5,rotation:-109.1031,x:109.7,y:-79.45},0).wait(1).to({regY:4.9,scaleX:2.0594,rotation:-109.3663,x:108.8},0).wait(1).to({scaleX:2.0593,rotation:-109.6296,x:108.05,y:-79.4},0).wait(1).to({rotation:-109.8933,x:107.3},0).wait(1).to({rotation:-110.1567,x:106.55},0).wait(1).to({rotation:-110.4206,x:105.75},0).wait(1).to({rotation:-110.6839,x:106.85},0).wait(1).to({scaleX:2.0594,rotation:-110.9475,x:107.9},0).wait(1).to({scaleX:2.0593,rotation:-111.2113,x:109},0).wait(1).to({rotation:-111.4745,x:110.05,y:-79.45},0).wait(1).to({rotation:-111.7377,x:111.1,y:-79.4},0).wait(1).to({rotation:-112.0016,x:112.15},0).wait(1).to({rotation:-112.2652,x:113.2},0).wait(1).to({rotation:-112.5289,x:114.3},0).wait(1).to({regX:0.1,rotation:-112.7921,x:115.3,y:-79.6},0).wait(1).to({regX:0,rotation:-113.0562,x:116.45,y:-79.45},0).wait(1).to({rotation:-113.3193,x:117.5,y:-79.4},0).wait(1).to({rotation:-113.5829,x:118.55,y:-79.45},0).wait(1).to({rotation:-113.8463,x:119.65,y:-79.35},0).wait(1).to({rotation:-114.1105,x:120.7,y:-79.4},0).wait(1).to({scaleY:2.0544,rotation:-114.3743,x:121.7},0).wait(1).to({scaleY:2.0545,rotation:-114.6372,x:122.8},0).wait(1).to({rotation:-114.9008,x:123.9},0).wait(1).to({scaleY:2.0544,rotation:-115.1646,x:124.95,y:-79.45},0).wait(1).to({scaleY:2.0545,rotation:-115.4273,x:126,y:-79.35},0).wait(1).to({rotation:-115.6911,x:127.05,y:-79.4},0).wait(1).to({rotation:-115.9555,x:128.1},0).wait(1).to({rotation:-116.2183,x:129.25,y:-79.45},0).wait(1).to({rotation:-116.4815,x:130.3,y:-79.4},0).wait(1).to({rotation:-116.7457,x:131.35},0).wait(1).to({rotation:-117.0092,x:132.35},0).wait(1).to({rotation:-117.2726,x:133.5},0).wait(1).to({rotation:-117.5366,x:134.6},0).wait(1).to({rotation:-117.8001,x:135.6,y:-79.45},0).wait(1).to({rotation:-118.0633,x:136.7},0).wait(1).to({rotation:-118.3268,x:137.7,y:-79.4},0).wait(1).to({rotation:-118.5907,x:138.75},0).wait(1).to({rotation:-118.8539,x:139.85},0).wait(1).to({rotation:-119.1179,x:140.95},0).wait(1).to({rotation:-119.3812,x:142},0).wait(1).to({rotation:-119.6446,x:143.05},0).wait(1).to({rotation:-119.9083,x:144.15,y:-79.35},0).wait(1).to({regX:0.1,rotation:-120.1718,x:145.1,y:-79.6},0).wait(1).to({regX:0,rotation:-120.4352,x:146.25,y:-79.4},0).wait(1).to({scaleY:2.0544,rotation:-120.6985,x:147.35},0).wait(1).to({scaleY:2.0545,rotation:-120.9621,x:148.4},0).wait(1).to({scaleY:2.0544,rotation:-121.2255,x:149.4},0).wait(1).to({scaleY:2.0545,rotation:-121.4897,x:150.55,y:-79.45},0).wait(1).to({rotation:-121.7526,x:151.6,y:-79.4},0).wait(1).to({rotation:-122.0161,x:152.65,y:-79.45},0).wait(1).to({scaleX:2.0594,rotation:-122.2799,x:153.75},0).wait(1).to({scaleX:2.0593,rotation:-122.5434,x:154.75,y:-79.4},0).wait(1).to({rotation:-122.8073,x:155.8,y:-79.45},0).wait(1).to({scaleX:2.0594,rotation:-123.0706,x:156.9},0).wait(1).to({scaleX:2.0593,scaleY:2.0544,rotation:-123.3341,x:158,y:-79.4},0).wait(1).to({scaleY:2.0545,rotation:-123.5973,x:159},0).wait(1).to({rotation:-123.861,x:160.1,y:-79.45},0).wait(1).to({scaleY:2.0544,rotation:-124.1248,x:161.15,y:-79.4},0).wait(1).to({scaleY:2.0545,rotation:-124.388,x:162.25,y:-79.45},0).wait(1).to({rotation:-124.6518,x:163.3,y:-79.4},0).wait(1).to({rotation:-124.9153,x:164.35},0).wait(1).to({scaleY:2.0544,rotation:-125.1786,x:165.4},0).wait(1).to({scaleY:2.0545,rotation:-125.4422,x:166.45},0).wait(1).to({scaleY:2.0544,rotation:-125.7059,x:167.55,y:-79.45},0).wait(1).to({scaleY:2.0545,rotation:-125.9689,x:168.65,y:-79.4},0).wait(1).to({rotation:-126.233,x:169.65,y:-79.45},0).wait(1).to({rotation:-126.4969,x:170.8},0).wait(1).to({rotation:-126.7605,x:171.8,y:-79.4},0).wait(1).to({regX:0.1,rotation:-127.0239,x:172.8,y:-79.55},0).wait(1).to({regX:0,rotation:-127.2874,x:173.9,y:-79.45},0).wait(1).to({rotation:-127.5509,x:175.05},0).wait(1).to({scaleY:2.0544,rotation:-127.8142,x:176.1,y:-79.4},0).wait(1).to({scaleY:2.0545,rotation:-128.0778,x:177.05,y:-79.45},0).wait(1).to({rotation:-128.3417,x:178.25},0).wait(1).to({rotation:-128.6049,x:179.25,y:-79.4},0).wait(1).to({rotation:-128.8686,x:180.3},0).wait(1).to({rotation:-129.1323,x:181.4,y:-79.45},0).wait(1).to({rotation:-129.3952,x:182.5},0).wait(1).to({rotation:-129.6591,x:183.5,y:-79.4},0).wait(1).to({rotation:-129.9222,x:184.6,y:-79.45},0).wait(1).to({scaleY:2.0544,rotation:-130.1859,x:185.7,y:-79.4},0).wait(1).to({scaleY:2.0545,rotation:-130.4495,x:186.7,y:-79.45},0).wait(1).to({rotation:-130.7129,x:187.85,y:-79.4},0).wait(1).to({rotation:-130.9766,x:188.85,y:-79.45},0).wait(1).to({scaleY:2.0544,rotation:-131.2405,x:189.85},0).wait(1).to({scaleY:2.0545,rotation:-131.5037,x:190.95},0).wait(1).to({rotation:-131.7675},0).wait(1).to({rotation:-132.0306,y:-79.4},0).wait(1).to({rotation:-132.2942},0).wait(1).to({rotation:-132.5577,x:190.9},0).wait(1).to({rotation:-132.8212,x:190.95,y:-79.45},0).wait(1).to({rotation:-133.0853},0).wait(1).to({rotation:-133.3484,x:190.9},0).wait(1).to({scaleY:2.0544,rotation:-133.6121,x:190.95},0).wait(1).to({scaleY:2.0545,rotation:-133.8754},0).wait(1).to({scaleY:2.0544,rotation:-134.1394},0).wait(1).to({scaleY:2.0545,rotation:-134.403},0).wait(1).to({rotation:-134.666},0).wait(1).to({rotation:-134.9302,x:191,y:-79.4},0).wait(1).to({rotation:-135.1935,x:190.95,y:-79.45},0).wait(1).to({scaleY:2.0544,rotation:-135.4568,y:-79.4},0).wait(1).to({scaleY:2.0545,rotation:-135.7204,x:191},0).wait(1).to({rotation:-135.9834,x:190.95},0).wait(1).to({rotation:-136.247},0).wait(1).to({rotation:-136.511,x:191,y:-79.45},0).wait(1).to({rotation:-136.7744,x:190.95},0).wait(1).to({rotation:-137.0381,x:190.9,y:-79.4},0).wait(1).to({rotation:-137.3016,x:190.95,y:-79.45},0).wait(1).to({rotation:-137.5652},0).wait(1).to({rotation:-137.8287,y:-79.4},0).wait(1).to({rotation:-138.0927,x:190.9,y:-79.45},0).wait(1).to({rotation:-138.3564,x:190.95,y:-79.4},0).wait(1).to({rotation:-138.619,x:190.9},0).wait(1).to({rotation:-138.8828,x:190.95,y:-79.45},0).wait(1).to({rotation:-139.1468,y:-79.4},0).wait(1).to({scaleY:2.0544,rotation:-139.4099,x:190.9,y:-79.45},0).wait(1).to({scaleY:2.0545,rotation:-139.6734,x:190.85,y:-79.4},0).wait(1).to({rotation:-139.9373,x:190.9,y:-79.45},0).wait(1).to({rotation:-140.2007},0).wait(1).to({rotation:-140.4646,y:-79.4},0).wait(1).to({rotation:-140.7279,y:-79.45},0).wait(1).to({rotation:-140.9908,y:-79.4},0).wait(1).to({scaleX:1.8488,scaleY:1.8444,rotation:-141.2545,x:213.1,y:-9.85},0).wait(1).to({regX:-0.1,scaleX:1.6382,scaleY:1.6343,rotation:-141.5183,x:235.55,y:59.7},0).wait(1).to({regX:0,scaleX:1.4277,scaleY:1.4242,rotation:-141.782,x:257.6,y:129.05},0).wait(1).to({regX:-0.1,scaleX:1.2171,scaleY:1.2141,rotation:-142.0452,x:279.9,y:198.65},0).wait(1).to({scaleX:1.2209,scaleY:1.2179,rotation:-142.3084,x:279.75,y:198.6},0).wait(1).to({scaleX:1.2247,scaleY:1.2216,rotation:-142.572,x:279.65,y:198.55},0).wait(1).to({scaleX:1.2284,scaleY:1.2254,rotation:-142.837,x:279.6,y:198.4},0).wait(1).to({scaleX:1.2322,scaleY:1.2291,rotation:-143.0994,x:279.45,y:198.35},0).wait(1).to({scaleX:1.2359,scaleY:1.2329,rotation:-143.3633,x:279.35,y:198.2},0).wait(1).to({regX:0,scaleX:1.2397,scaleY:1.2366,rotation:-143.627,x:279.15,y:198},0).wait(1).to({regX:-0.1,scaleX:1.2434,scaleY:1.2404,rotation:-143.8897,x:279.2},0).wait(1).to({scaleX:1.2472,scaleY:1.2441,rotation:-144.154,x:279.05,y:197.9},0).wait(1).to({regX:0,scaleX:1.251,scaleY:1.2479,rotation:-144.4168,x:278.85,y:197.8},0).wait(1).to({regX:-0.1,scaleX:1.2547,scaleY:1.2516,rotation:-144.6808,x:278.9,y:197.7},0).wait(1).to({regX:0,scaleX:1.2585,scaleY:1.2554,rotation:-144.9444,x:278.7,y:197.6},0).wait(1).to({scaleX:1.2622,scaleY:1.2591,rotation:-145.2078,x:278.55,y:197.45},0).wait(1).to({scaleX:1.266,scaleY:1.2629,rotation:-145.4712,x:278.45,y:197.4},0).wait(1).to({scaleX:1.2698,scaleY:1.2666,rotation:-145.7348,x:278.4,y:197.25},0).wait(1).to({scaleX:1.2735,scaleY:1.2703,rotation:-145.9988,x:278.25,y:197.15},0).wait(1).to({regX:-0.1,scaleX:1.2772,scaleY:1.2741,rotation:-146.2622,y:197.1},0).wait(1).to({regX:0,scaleX:1.281,scaleY:1.2779,rotation:-146.5257,x:278.05,y:197},0).wait(1).to({scaleX:1.2847,scaleY:1.2816,rotation:-146.7896,x:278,y:196.9},0).wait(1).to({scaleX:1.2885,scaleY:1.2854,rotation:-147.0525,x:277.9,y:196.75},0).wait(1).to({scaleX:1.2923,scaleY:1.2891,rotation:-147.3167,x:277.75,y:196.7},0).wait(1).to({scaleX:1.296,scaleY:1.2929,rotation:-147.5802,x:277.7,y:196.55},0).wait(1).to({scaleX:1.2998,scaleY:1.2966,rotation:-147.8442,x:277.55,y:196.45},0).wait(1).to({regX:-0.1,scaleX:1.3035,scaleY:1.3003,rotation:-148.1071,x:277.5},0).wait(1).to({regX:0,scaleX:1.3073,scaleY:1.3041,rotation:-148.3696,x:277.35,y:196.25},0).wait(1).to({regX:-0.1,scaleX:1.311,scaleY:1.3078,rotation:-148.6335,x:277.3,y:196.2},0).wait(1).to({scaleX:1.3148,scaleY:1.3116,rotation:-148.8976,x:277.2,y:196.1},0).wait(1).to({regX:0,scaleX:1.3186,scaleY:1.3153,rotation:-149.1615,x:277,y:195.95},0).wait(1).to({regX:-0.1,scaleX:1.3223,scaleY:1.3191,rotation:-149.4245},0).wait(1).to({scaleX:1.3261,scaleY:1.3228,rotation:-149.6883,x:276.85,y:195.8},0).wait(1).to({regX:0,scaleX:1.3298,scaleY:1.3265,rotation:-149.9511,x:276.7,y:195.65},0).wait(1).to({regX:-0.1,scaleX:1.3336,scaleY:1.3303,rotation:-150.2159},0).wait(1).to({regX:0,scaleX:1.3374,scaleY:1.3341,rotation:-150.4782,x:276.5,y:195.5},0).wait(1).to({regX:-0.1,scaleX:1.3411,scaleY:1.3378,rotation:-150.7423,y:195.4},0).wait(1).to({scaleX:1.3449,scaleY:1.3416,rotation:-151.0054,x:276.4,y:195.3},0).wait(1).to({regX:0,scaleX:1.3486,scaleY:1.3453,rotation:-151.269,x:276.2,y:195.15},0).wait(1).to({regX:-0.1,scaleX:1.3524,scaleY:1.3491,rotation:-151.5325,y:195.1},0).wait(1).to({scaleX:1.3561,scaleY:1.3528,rotation:-151.796,x:276.15,y:195},0).wait(1).to({scaleX:1.3599,scaleY:1.3565,rotation:-152.0594,x:276},0).wait(1).to({regX:0,scaleX:1.3637,scaleY:1.3603,rotation:-152.3237,x:275.8,y:194.8},0).wait(1).to({regX:-0.1,scaleX:1.3674,scaleY:1.364,rotation:-152.5868,y:194.75},0).wait(1).to({regX:0,scaleX:1.3711,scaleY:1.3678,rotation:-152.8501,x:275.55,y:194.65},0).wait(1).to({scaleX:1.3749,scaleY:1.3715,rotation:-153.114,y:194.5},0).wait(1).to({regX:-0.1,scaleX:1.3786,scaleY:1.3753,rotation:-153.3778,x:275.45},0).wait(1).to({scaleX:1.3825,scaleY:1.379,rotation:-153.6414,x:275.35,y:194.35},0).wait(1).to({regX:0,scaleX:1.3862,scaleY:1.3828,rotation:-153.9049,x:275.2,y:194.25},0).wait(1).to({regX:-0.1,scaleX:1.3899,scaleY:1.3865,rotation:-154.1681,x:275.25,y:194.2},0).wait(1).to({scaleX:1.3937,scaleY:1.3903,rotation:-154.4322,x:275.1,y:194.1},0).wait(1).to({regX:0,scaleX:1.3974,scaleY:1.394,rotation:-154.6958,x:274.9,y:193.85},0).wait(1).to({scaleX:1.4012,scaleY:1.3978,rotation:-154.9588,x:274.8},0).wait(1).to({scaleX:1.405,scaleY:1.4015,rotation:-155.2223,x:274.7,y:193.7},0).wait(1).to({regX:-0.1,scaleX:1.4087,scaleY:1.4053,rotation:-155.4859,y:193.65},0).wait(1).to({regX:0,scaleX:1.4125,scaleY:1.409,rotation:-155.7498,x:274.5,y:193.5},0).wait(1).to({scaleX:1.4162,scaleY:1.4128,rotation:-156.0129,x:274.35,y:193.4},0).wait(1).to({scaleX:1.42,scaleY:1.4165,rotation:-156.2761,x:274.25,y:193.25},0).wait(1).to({regX:-0.1,scaleX:1.4237,scaleY:1.4202,rotation:-156.5407,x:274.3},0).wait(1).to({regX:0,scaleX:1.4275,scaleY:1.424,rotation:-156.8031,x:274.1,y:193.15},0).wait(1).to({regX:-0.1,scaleX:1.4312,scaleY:1.4277,rotation:-157.067,y:193.05},0).wait(1).to({scaleX:1.435,scaleY:1.4315,rotation:-157.3309,x:274,y:193},0).wait(1).to({scaleX:1.4388,scaleY:1.4352,rotation:-157.5943,x:273.95,y:192.9},0).wait(1).to({scaleX:1.4425,scaleY:1.439,rotation:-157.8581,x:273.8,y:192.75},0).wait(1).to({scaleX:1.4463,scaleY:1.4427,rotation:-158.1217,x:273.7,y:192.65},0).wait(1).to({scaleX:1.4501,scaleY:1.4465,rotation:-158.3851,x:273.6,y:192.55},0).wait(1).to({scaleX:1.4538,scaleY:1.4502,rotation:-158.6482,x:273.55,y:192.5},0).wait(1).to({scaleX:1.4576,scaleY:1.454,rotation:-158.9118,x:273.4,y:192.4},0).wait(1).to({regX:0,scaleX:1.4613,scaleY:1.4577,rotation:-159.1749,x:273.2,y:192.2},0).wait(1).to({regX:-0.1,scaleX:1.465,scaleY:1.4615,rotation:-159.4391},0).wait(1).to({scaleX:1.4688,scaleY:1.4652,rotation:-159.7028,x:273.1,y:192.05},0).wait(1).to({regX:0,scaleX:1.4726,scaleY:1.469,rotation:-159.966,x:272.85,y:191.95},0).wait(1).to({scaleX:1.4763,scaleY:1.4727,rotation:-160.2293,x:272.8,y:191.8},0).wait(1).to({regX:-0.1,scaleX:1.4801,scaleY:1.4765,rotation:-160.493},0).wait(1).to({scaleX:1.4839,scaleY:1.4802,rotation:-160.757,x:272.7,y:191.65},0).wait(1).to({scaleX:1.4876,scaleY:1.4839,rotation:-161.0195,x:272.6,y:191.55},0).wait(1).to({regX:0,scaleX:1.4914,scaleY:1.4877,rotation:-161.2839,x:272.4,y:191.45},0).wait(1).to({regX:-0.1,scaleX:1.4951,scaleY:1.4915,rotation:-161.5469,x:272.45,y:191.4},0).wait(1).to({regX:0,scaleX:1.4989,scaleY:1.4952,rotation:-161.8113,x:272.2,y:191.25},0).wait(1).to({regX:-0.1,scaleX:1.5026,scaleY:1.499,rotation:-162.0743,y:191.2},0).wait(1).to({regX:0,scaleX:1.5064,scaleY:1.5027,rotation:-162.3374,x:272,y:191.1},0).wait(1).to({regX:-0.1,scaleX:1.5101,scaleY:1.5064,rotation:-162.6018,y:191},0).wait(1).to({regX:0,scaleX:1.5139,scaleY:1.5102,rotation:-162.8646,x:271.8,y:190.85},0).wait(1).to({scaleX:1.5177,scaleY:1.514,rotation:-163.1288,x:271.65,y:190.75},0).wait(1).to({scaleX:1.5214,scaleY:1.5177,rotation:-163.3917,x:271.55,y:190.65},0).wait(1).to({scaleX:1.5252,scaleY:1.5215,rotation:-163.6552,x:271.4,y:190.5},0).wait(1).to({scaleX:1.5289,scaleY:1.5252,rotation:-163.9193,x:271.3,y:190.45},0).wait(1).to({regY:4.8,scaleX:1.5327,scaleY:1.5289,rotation:-164.183,x:271.2,y:190.5},0).wait(1).to({regX:-0.1,regY:4.9,scaleX:1.5364,scaleY:1.5327,rotation:-164.4465,x:271.25,y:190.3},0).wait(1).to({regX:0,scaleX:1.5402,scaleY:1.5365,rotation:-164.7104,x:271.05,y:190.15},0).wait(1).to({regX:-0.1,scaleX:1.5439,scaleY:1.5402,rotation:-164.9731,x:271.1},0).wait(1).to({regX:0,scaleX:1.5477,scaleY:1.5439,rotation:-165.2371,x:270.85,y:189.95},0).wait(1).to({scaleX:1.5515,scaleY:1.5477,rotation:-165.5003,x:270.7,y:189.85},0).wait(1).to({regX:-0.1,scaleX:1.5552,scaleY:1.5514,rotation:-165.7635,x:270.75,y:189.8},0).wait(1).to({regX:0,scaleX:1.5589,scaleY:1.5551,rotation:-166.0274,x:270.5,y:189.65},0).wait(1).to({scaleX:1.5627,scaleY:1.5589,rotation:-166.2909,x:270.4,y:189.6},0).wait(1).to({scaleX:1.5665,scaleY:1.5627,rotation:-166.554,x:270.3,y:189.45},0).wait(1).to({scaleX:1.5702,scaleY:1.5664,rotation:-166.8181,x:270.25,y:189.4},0).wait(1).to({scaleX:1.574,scaleY:1.5702,rotation:-167.081,x:270.1,y:189.25},0).wait(1).to({scaleX:1.5778,scaleY:1.5739,rotation:-167.3447,x:270.05,y:189.2},0).wait(1).to({regX:-0.1,scaleX:1.5815,scaleY:1.5776,rotation:-167.6091,y:189.1},0).wait(1).to({regX:0,scaleX:1.5853,scaleY:1.5814,rotation:-167.872,x:269.85,y:188.95},0).wait(1).to({scaleX:1.589,scaleY:1.5852,rotation:-168.1355,x:269.7,y:188.85},0).wait(1).to({scaleX:1.5928,scaleY:1.5889,rotation:-168.3995,x:269.6,y:188.75},0).wait(1).to({scaleX:1.5966,scaleY:1.5926,rotation:-168.6636,x:269.55,y:188.65},0).wait(1).to({scaleX:1.6003,scaleY:1.5964,rotation:-168.9259,x:269.4,y:188.55},0).wait(1).to({scaleX:1.6041,scaleY:1.6001,rotation:-169.1898,x:269.3,y:188.45},0).wait(1).to({scaleX:1.6078,scaleY:1.6039,rotation:-169.4539,x:269.2,y:188.35},0).wait(1).to({scaleX:1.6116,scaleY:1.6077,rotation:-169.7172,x:269.15,y:188.25},0).wait(1).to({scaleX:1.6153,scaleY:1.6114,rotation:-169.9811,x:268.95,y:188.1},0).wait(1).to({scaleX:1.6191,scaleY:1.6151,rotation:-170.2447,x:268.9,y:188},0).wait(1).to({regX:-0.1,scaleX:1.6228,scaleY:1.6189,rotation:-170.5079,y:188.05},0).wait(1).to({regX:0,scaleX:1.4045,scaleY:1.4011,rotation:-168.9824,x:279.2,y:177.7},0).wait(1).to({regX:-0.1,scaleX:1.1863,scaleY:1.1833,rotation:-167.4575,x:289.8,y:167.55},0).wait(1).to({scaleX:0.968,scaleY:0.9655,rotation:-165.9321,x:300.3,y:157.2},0).wait(1).to({regY:4.8,scaleX:0.7497,scaleY:0.7478,rotation:-164.4082,x:310.8,y:146.95},0).wait(1).to({regX:0,rotation:-162.8825,x:309.8},0).wait(1).to({regX:-0.1,regY:4.9,rotation:-161.3569,x:309.85},0).wait(1).to({rotation:-159.8323},0).wait(1).to({regX:0,rotation:-158.3076,x:309.8},0).wait(1).to({regX:-0.1,regY:4.8,rotation:-156.7831,y:147},0).wait(1).to({regY:4.9,rotation:-155.2558,x:309.85,y:146.9},0).wait(1).to({rotation:-153.7319,x:309.8,y:146.95},0).wait(1).to({regX:0,rotation:-152.2067,y:146.9},0).wait(1).to({regX:-0.1,rotation:-150.6821,x:309.85,y:146.95},0).wait(1).to({regX:0,rotation:-149.1571,y:146.9},0).wait(1).to({regX:-0.1,regY:4.8,rotation:-147.6317,x:309.8,y:147},0).wait(1).to({regY:4.9,rotation:-146.1069,x:309.85,y:146.95},0).wait(1).to({rotation:-144.5823},0).wait(1).to({regX:0,rotation:-143.0564,x:309.8,y:146.85},0).wait(1).to({regX:-0.1,rotation:-141.5312,x:309.85,y:147},0).wait(1).to({rotation:-140.0063},0).wait(1).to({rotation:-138.4818,x:309.95,y:146.95},0).wait(1).to({regX:0,rotation:-136.9572,x:309.85,y:146.9},0).wait(1).to({regX:-0.1,rotation:-135.4315,x:309.9,y:147},0).wait(1).to({rotation:-133.907,x:309.95,y:146.95},0).wait(1).to({rotation:-132.3809,x:309.9},0).wait(1).to({rotation:-130.8562},0).wait(1).to({regX:0,rotation:-129.331},0).wait(1).to({rotation:-127.806,x:309.85},0).wait(1).to({regX:-0.1,rotation:-126.2809,x:309.9},0).wait(1).to({rotation:-124.7563},0).wait(1).to({regX:0,rotation:-123.2309,x:309.85},0).wait(1).to({regX:-0.1,rotation:-121.7058,x:309.95,y:146.9},0).wait(1).to({regX:0,regY:5,rotation:-120.1809},0).wait(1).to({regX:-0.1,regY:4.9,rotation:-118.6559,x:309.9,y:146.95},0).wait(1).to({regX:0,rotation:-117.1308},0).wait(1).to({regX:-0.1,scaleX:0.9661,scaleY:0.9635,rotation:-115.6057,x:279.45,y:185.2},0).wait(1).to({scaleX:1.1825,scaleY:1.1793,rotation:-114.0804,x:248.95,y:223.3},0).wait(1).to({regX:0,scaleX:1.3989,scaleY:1.3951,rotation:-112.5558,x:218.35,y:261.4},0).wait(1).to({scaleX:1.6153,scaleY:1.6109,rotation:-111.031,x:187.9,y:299.5},0).wait(1).to({scaleX:1.8317,scaleY:1.8267,rotation:-109.5051,x:157.4,y:337.6},0).wait(1).to({scaleX:1.8314,scaleY:1.8264,rotation:-109.3903,y:337.4},0).wait(1).to({regX:-0.1,scaleX:1.8311,scaleY:1.8261,rotation:-109.2745,x:157.45,y:337.25},0).wait(1).to({regX:0,scaleX:1.8308,scaleY:1.8258,rotation:-109.1583,x:157.35,y:336.9},0).wait(1).to({regX:-0.1,scaleX:1.8306,scaleY:1.8255,rotation:-109.0432,x:157.45,y:336.8},0).wait(1).to({regX:0,scaleX:1.8303,scaleY:1.8253,rotation:-108.9266,x:157.35,y:336.45},0).wait(1).to({scaleX:1.83,scaleY:1.825,rotation:-108.8111,y:336.2},0).wait(1).to({scaleX:1.8298,scaleY:1.8248,rotation:-108.6957,y:336.05},0).wait(1).to({scaleX:1.8295,scaleY:1.8245,rotation:-108.5792,x:157.4,y:335.75},0).wait(1).to({scaleX:1.8292,scaleY:1.8242,rotation:-108.464,x:157.35,y:335.6},0).wait(1).to({scaleX:1.8289,scaleY:1.8239,rotation:-108.3478,x:157.45,y:335.35},0).wait(1).to({scaleX:1.8287,scaleY:1.8236,rotation:-108.233,y:335.15},0).wait(1).to({scaleX:1.8283,scaleY:1.8234,rotation:-108.1168,x:157.4,y:334.85},0).wait(1).to({scaleX:1.8281,scaleY:1.8231,rotation:-108.0012,y:334.65},0).wait(1).to({regX:-0.1,scaleX:1.8279,scaleY:1.8229,rotation:-107.8853,x:157.45,y:334.55},0).wait(1).to({regX:0,scaleX:1.8276,scaleY:1.8226,rotation:-107.7696,x:157.35,y:334.25},0).wait(1).to({scaleX:1.8273,scaleY:1.8223,rotation:-107.6541,y:333.95},0).wait(1).to({regX:-0.1,scaleX:1.827,scaleY:1.822,rotation:-107.5385,x:157.4,y:333.8},0).wait(1).to({scaleX:1.8268,scaleY:1.8217,rotation:-107.4228,x:157.35,y:333.7},0).wait(1).to({scaleX:1.8265,scaleY:1.8215,rotation:-110.1789,x:157.45,y:333.35},0).wait(1).to({scaleX:1.8262,scaleY:1.8212,rotation:-112.9366,x:157.4,y:333.15},0).wait(1).to({regX:0,scaleX:1.8259,scaleY:1.8209,rotation:-115.6928,x:157.35,y:332.8},0).wait(1).to({regX:-0.1,scaleX:1.8257,scaleY:1.8207,rotation:-118.4502,x:157.45,y:332.75},0).wait(1).to({scaleX:1.8254,scaleY:1.8204,rotation:-121.2071,x:157.5,y:332.5},0).wait(1).to({regX:0,scaleX:1.8251,scaleY:1.8201,rotation:-123.964,x:157.35,y:332.15},0).wait(1).to({scaleX:1.8248,scaleY:1.8198,rotation:-126.7213,y:331.9},0).wait(1).to({scaleX:1.8246,scaleY:1.8196,rotation:-129.4777,x:157.4,y:331.7},0).wait(1).to({scaleX:1.8243,scaleY:1.8193,rotation:-132.235,x:157.35,y:331.4},0).wait(1).to({scaleX:1.824,scaleY:1.819,rotation:-134.9918,x:157.3,y:331.25},0).wait(1).to({regX:-0.1,scaleX:1.8237,scaleY:1.8187,rotation:-137.7482,x:157.45,y:331.05},0).wait(1).to({regX:0,scaleX:1.8235,scaleY:1.8185,rotation:-140.5055,x:157.25,y:330.8},0).wait(1).to({scaleX:1.8232,scaleY:1.8182,rotation:-143.2628,y:330.55},0).wait(1).to({scaleX:1.8229,scaleY:1.8179,rotation:-146.02,x:157.3,y:330.3},0).wait(1).to({scaleX:1.8226,scaleY:1.8177,rotation:-148.7767,y:330.1},0).wait(1).to({scaleX:1.8224,scaleY:1.8174,rotation:-151.5339,x:157.25,y:329.85},0).wait(1).to({regX:-0.1,scaleX:1.8221,scaleY:1.8172,rotation:-154.2907,x:157.4,y:329.75},0).wait(1).to({regX:0,scaleX:1.8218,scaleY:1.8169,rotation:-157.0477,x:157.2,y:329.35},0).wait(1).to({regX:-0.1,scaleX:1.7629,scaleY:1.7582,rotation:-123.4334,x:211.8,y:280.65},0).wait(1).to({regX:0,scaleX:1.7041,scaleY:1.6995,rotation:-89.821,x:266.05,y:231.65},0).wait(1).to({scaleX:1.6451,scaleY:1.6408,rotation:-56.2066,x:320.35,y:182.75},0).wait(1).to({scaleX:1.5863,scaleY:1.5822,rotation:-22.5924,x:374.7,y:133.95},0).wait(1).to({scaleX:1.5274,scaleY:1.5236,rotation:11.0196,x:428.85,y:85},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:44.6337,x:483.15,y:36},0).wait(1).to({scaleY:1.4649,rotation:44.4016,y:36.1},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:44.1686,x:483.25,y:36.15},0).wait(1).to({rotation:43.936,x:483.2},0).wait(1).to({rotation:43.7034,x:483.25},0).wait(1).to({regX:0,scaleY:1.4649,rotation:43.47,x:483.1,y:36.05},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:43.239,x:483.25,y:36.15},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:43.006,x:483.1,y:36.05},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:42.7733,x:483.15},0).wait(1).to({regX:0.1,rotation:42.541,x:483.25,y:36.15},0).wait(1).to({regX:0,scaleY:1.4649,rotation:42.3078,x:483.15,y:36},0).wait(1).to({rotation:42.0758,y:36.05},0).wait(1).to({rotation:41.8429,x:483.1},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:41.6104,x:483.25,y:36.15},0).wait(1).to({rotation:42.6001,x:387.05,y:86.15},0).wait(1).to({scaleY:1.4649,rotation:43.5895,x:290.85,y:136.1},0).wait(1).to({scaleY:1.4648,rotation:44.5805,x:194.65,y:186.1},0).wait(1).to({regX:0,rotation:45.5697,x:98.35,y:236},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:46.56,x:2.25,y:286.1},0).wait(1).to({regX:0,scaleY:1.4648,rotation:47.5499,x:2.2,y:286},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:48.5396,x:2.25,y:286.1},0).wait(1).to({regX:0,scaleY:1.4648,rotation:49.5297,x:2.2,y:286},0).wait(1).to({rotation:50.5197,x:2.15},0).wait(1).to({regX:0.1,rotation:51.5094,x:2.3,y:286.05},0).wait(1).to({regX:0,rotation:52.4992,x:2.15,y:286},0).wait(1).to({regX:0.1,scaleX:1.4685,scaleY:1.4649,rotation:53.4892,x:2.25,y:286.05},0).wait(1).to({scaleX:1.4684,rotation:54.4787},0).wait(1).to({regX:0,scaleY:1.4648,rotation:55.469,x:2.15,y:285.95},0).wait(1).to({scaleY:1.4649,rotation:56.4589,y:286},0).wait(1).to({scaleY:1.4648,rotation:57.4482},0).wait(1).to({scaleY:1.4649,rotation:58.4385},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:59.4286,x:2.2,y:286.1},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:60.4188},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:61.4084,x:2.15,y:286},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:62.3985},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:27.5385,x:123.5,y:185.55},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:-7.3197,x:244.75,y:85},0).wait(1).to({regX:0,scaleY:1.4648,rotation:-42.1802,x:365.8,y:-15.45},0).wait(1).to({regX:0.1,rotation:-41.0857,x:365.9,y:-15.6},0).wait(1).to({regX:0,rotation:-39.9906,x:365.85,y:-15.45},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:-38.8953},0).wait(1).to({regX:0.1,rotation:-37.8009,x:365.9,y:-15.6},0).wait(1).to({rotation:-36.7058,x:365.95},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:-35.6114,x:365.85,y:-15.45},0).wait(1).to({regX:0.1,rotation:-34.5159,x:365.9,y:-15.6},0).wait(1).to({rotation:-33.4216,x:365.95,y:-15.55},0).wait(1).to({scaleY:1.4649,rotation:-32.327,x:365.9},0).wait(1).to({regX:0,scaleY:1.4648,rotation:-31.2315,x:365.8,y:-15.45},0).wait(1).to({regX:0.1,rotation:-30.1365,x:365.95,y:-15.5},0).wait(1).to({regX:0,scaleY:1.4649,rotation:-29.042,x:365.85,y:-15.45},0).wait(1).to({rotation:-27.9472,y:-15.4},0).wait(1).to({rotation:-26.8525,x:365.8,y:-15.45},0).wait(1).to({regX:0.1,rotation:-25.7574,x:365.95,y:-15.5},0).wait(1).to({regX:0,scaleX:1.4685,rotation:-24.6624,x:365.85,y:-15.45},0).wait(1).to({regX:0.1,scaleX:1.4684,rotation:-23.5676,x:365.95},0).wait(1).to({scaleX:1.4685,rotation:-22.473,x:366},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:-21.378,x:365.8,y:-15.4},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:-20.2835,x:366,y:-15.5},0).wait(1).to({scaleX:1.4685,rotation:-19.1884,x:365.95,y:-15.45},0).wait(1).to({scaleX:1.4684,rotation:-18.0935,y:-15.55},0).wait(1).to({regX:0,scaleX:1.4685,rotation:-16.9995,x:365.85,y:-15.45},0).wait(1).to({regX:0.1,rotation:-15.9042,x:365.95},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:-14.8094,x:365.85,y:-15.4},0).wait(1).to({regX:0.1,scaleX:1.4685,scaleY:1.4649,rotation:-13.7143,x:365.95,y:-15.5},0).wait(1).to({regX:0,scaleX:1.4684,rotation:-12.6191,x:365.8,y:-15.4},0).wait(1).to({scaleY:1.4648,rotation:-11.5254,x:365.85},0).wait(1).to({regX:0.1,scaleX:1.4685,scaleY:1.4649,rotation:-10.4297,x:365.95,y:-15.5},0).wait(1).to({rotation:-9.3351,x:365.9,y:-15.4},0).wait(1);
	var _tweenStr_11 = _tweenStr_10.to({regX:0,rotation:-8.2401,x:365.8},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:-7.1453,y:-15.45},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:-6.0505,y:-15.4},0).wait(1).to({rotation:-4.9557},0).wait(1).to({rotation:-3.8608,y:-15.45},0).wait(1).to({rotation:-2.7662},0).wait(1).to({regX:0.1,scaleX:1.4684,rotation:-1.6713,x:365.95},0).wait(1).to({regX:0,scaleX:1.4685,rotation:-0.5765,x:365.8,y:-15.4},0).wait(1).to({rotation:0.5175},0).wait(1).to({rotation:1.6122,y:-15.45},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:2.7064,x:365.75},0).wait(1).to({regX:0.1,scaleX:1.4685,scaleY:1.4649,rotation:3.801,x:365.9},0).wait(1).to({regX:0,rotation:4.8964,x:365.8,y:-15.4},0).wait(1).to({regX:0.1,rotation:5.9905,x:365.95,y:-15.45},0).wait(1).to({regX:0,scaleX:1.4684,rotation:7.0862,x:365.8},0).wait(1).to({scaleX:1.4685,rotation:8.181,y:-15.4},0).wait(1).to({regX:0.1,rotation:9.2752,x:365.9},0).wait(1).to({rotation:10.3702},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:11.465,x:365.75},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:12.5603,x:365.8},0).wait(1).to({regX:0.1,rotation:13.6542,x:365.9},0).wait(1).to({regX:0,scaleX:1.4684,rotation:14.7493,x:365.75},0).wait(1).to({regX:0.1,rotation:15.8441,x:365.9,y:-15.35},0).wait(1).to({regX:0,scaleX:1.4685,rotation:16.9396,x:365.75,y:-15.45},0).wait(1).to({scaleX:1.4684,rotation:18.0339,x:365.8,y:-15.4},0).wait(1).to({regX:0.1,rotation:19.1289,x:365.9,y:-15.35},0).wait(1).to({regX:0,scaleX:1.4685,rotation:20.2237,x:365.75,y:-15.4},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:21.3183,x:365.8,y:-15.35},0).wait(1).to({scaleY:1.4649,rotation:22.4136,x:365.75,y:-15.4},0).wait(1).to({regX:0.1,rotation:23.5083,x:365.9,y:-15.35},0).wait(1).to({regX:0,rotation:24.6034,x:365.75,y:-15.4},0).wait(1).to({rotation:25.6978,y:-15.45},0).wait(1).to({regX:-0.1,rotation:26.7922,x:365.6},0).wait(1).to({regX:0,scaleY:1.4648,rotation:27.8882,x:365.75,y:-15.4},0).wait(1).to({scaleY:1.4649,rotation:28.9829},0).wait(1).to({scaleY:1.4648,rotation:30.0771},0).wait(1).to({regY:4.8,rotation:31.1724,x:365.8,y:-15.55},0).wait(1).to({regY:4.9,scaleY:1.4649,rotation:32.2665,x:365.75,y:-15.4},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:33.3623,x:365.85,y:-15.3},0).wait(1).to({regX:0,rotation:34.4567,x:365.75,y:-15.4},0).wait(1).to({regY:4.8,rotation:35.5516,x:365.8,y:-15.55},0).wait(1).to({regY:4.9,rotation:36.6464,x:365.75,y:-15.45},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:37.7417,x:365.7,y:-15.4},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:38.8363,x:365.75},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:39.9313},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:41.0256,x:365.7,y:-15.45},0).wait(1).to({scaleY:1.4649,rotation:42.1206},0).wait(1).to({regX:-0.1,scaleY:1.4648,rotation:43.2158,x:365.6},0).wait(1).to({regX:0,scaleY:1.4649,rotation:44.31,x:365.7,y:-15.4},0).wait(1).to({scaleY:1.4648,rotation:45.4051},0).wait(1).to({scaleY:1.4649,rotation:46.5},0).wait(1).to({scaleY:1.4648,rotation:47.5951},0).wait(1).to({regX:-0.1,rotation:48.6898,x:365.55,y:-15.5},0).wait(1).to({rotation:49.7845},0).wait(1).to({regX:0,rotation:50.879,x:365.7,y:-15.4},0).wait(1).to({rotation:51.9738,x:365.65,y:-15.45},0).wait(1).to({regX:0.1,rotation:53.0687,x:365.75,y:-15.35},0).wait(1).to({regX:0,rotation:54.164,x:365.7,y:-15.45},0).wait(1).to({rotation:55.2584,y:-15.4},0).wait(1).to({rotation:56.3536,x:365.65},0).wait(1).to({rotation:57.4482},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:58.5435},0).wait(1).to({rotation:59.6378},0).wait(1).to({regX:-0.1,scaleY:1.4648,rotation:60.7333,y:-15.6},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4649,rotation:61.8277,y:-15.4},0).wait(1).to({regX:-0.1,rotation:62.9219,x:365.6,y:-15.55},0).wait(1).to({regX:0,scaleY:1.4648,rotation:64.0176,x:365.65,y:-15.45},0).wait(1).to({scaleY:1.4649,rotation:65.1122},0).wait(1).to({scaleY:1.4648,rotation:66.2074,x:365.7},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:67.3016,x:365.65},0).wait(1).to({rotation:68.3963},0).wait(1).to({scaleX:1.4684,rotation:69.4919},0).wait(1).to({regY:4.8,scaleX:1.4685,rotation:70.5864,x:365.75},0).wait(1).to({regY:4.9,rotation:71.6813,x:365.65},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:72.7757,y:-15.4},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:73.871,y:-15.45},0).wait(1).to({scaleY:1.4648,rotation:74.9658,x:365.6},0).wait(1).to({scaleX:1.4684,scaleY:1.4649,rotation:76.06,x:365.65},0).wait(1).to({scaleX:1.4685,rotation:77.1557,x:365.6},0).wait(1).to({regX:-0.1,rotation:78.2498,x:365.55,y:-15.6},0).wait(1).to({regX:0,scaleX:1.4684,rotation:79.3444,x:365.65,y:-15.45},0).wait(1).to({scaleX:1.4685,rotation:80.4399,x:365.6,y:-15.4},0).wait(1).to({rotation:81.5342,x:365.65,y:-15.45},0).wait(1).to({rotation:82.6292,y:-15.5},0).wait(1).to({regX:-0.1,rotation:83.7244,x:365.6,y:-15.55},0).wait(1).to({regX:0,rotation:84.8197,x:365.65,y:-15.45},0).wait(1).to({rotation:85.9143,x:365.6},0).wait(1).to({rotation:87.0091,x:365.65,y:-15.5},0).wait(1).to({rotation:88.1036,y:-15.4},0).wait(1).to({rotation:89.1984,x:365.6,y:-15.45},0).wait(1).to({rotation:90.2918,y:-15.5},0).wait(1).to({rotation:91.3866,y:-15.4},0).wait(1).to({regX:-0.1,rotation:92.4818,x:365.65,y:-15.6},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:93.5761,y:-15.45},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:94.6706,x:365.6,y:-15.5},0).wait(1).to({rotation:95.7655,y:-15.45},0).wait(1).to({regX:-0.1,rotation:96.8608,x:365.55,y:-15.6},0).wait(1).to({rotation:97.9556,x:365.6},0).wait(1).to({regX:0,scaleX:1.4684,rotation:99.0503,y:-15.5},0).wait(1).to({scaleX:1.4685,rotation:100.1452},0).wait(1).to({scaleX:1.4684,rotation:101.2398,x:365.65},0).wait(1).to({scaleY:1.4648,rotation:102.3347},0).wait(1).to({regX:-0.1,scaleY:1.4649,rotation:103.4296,y:-15.6},0).wait(1).to({regX:0,scaleX:1.4685,rotation:104.5242,x:365.6,y:-15.45},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:105.619,x:365.65,y:-15.5},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:106.7138},0).wait(1).to({rotation:107.8089,x:365.6},0).wait(1).to({regX:-0.1,scaleX:1.4684,rotation:108.9036,x:365.65,y:-15.65},0).wait(1).to({scaleX:1.4685,rotation:109.9984,y:-15.6},0).wait(1).to({rotation:111.0936,y:-15.65},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:112.1885,y:-15.45},0).wait(1).to({regX:-0.1,scaleX:1.4685,scaleY:1.4649,rotation:113.2835,y:-15.65},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:114.3777,x:365.6,y:-15.5},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:115.4725},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:116.5675,x:365.65},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:117.6629,x:365.6,y:-15.55},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:118.7572,y:-15.5},0).wait(1).to({scaleY:1.4649,rotation:119.8517},0).wait(1).to({scaleY:1.4648,rotation:120.9467},0).wait(1).to({regX:-0.1,rotation:122.0418,x:365.7,y:-15.6},0).wait(1).to({scaleY:1.4649,rotation:123.1364,y:-15.55},0).wait(1).to({regX:0,rotation:124.2319,x:365.6},0).wait(1).to({rotation:125.3266,y:-15.5},0).wait(1).to({scaleY:1.4648,rotation:126.4204},0).wait(1).to({regX:-0.1,rotation:127.5165,x:365.7,y:-15.6},0).wait(1).to({rotation:128.6112,y:-15.65},0).wait(1).to({regX:0,rotation:129.7054,x:365.65,y:-15.55},0).wait(1).to({scaleY:1.4649,rotation:130.8009,x:365.6},0).wait(1).to({scaleY:1.4648,rotation:131.8958},0).wait(1).to({rotation:132.9903,x:365.65,y:-15.6},0).wait(1).to({scaleY:1.4649,rotation:134.085},0).wait(1).to({regX:-0.1,scaleX:1.4685,rotation:135.1802,x:365.7,y:-15.65},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:136.275,y:-15.7},0).wait(1).to({regY:5,rotation:137.3695,x:365.65,y:-15.75},0).wait(1).to({regX:0,regY:4.9,rotation:138.4644,y:-15.55},0).wait(1).to({rotation:139.5593},0).wait(1).to({regX:-0.1,rotation:140.6533,x:365.7,y:-15.65},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:141.7485,y:-15.7},0).wait(1).to({rotation:142.8433},0).wait(1).to({rotation:143.9387},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:145.0337,x:365.65,y:-15.6},0).wait(1).to({rotation:146.1285,y:-15.55},0).wait(1).to({regX:-0.1,scaleY:1.4649,rotation:147.223,x:365.75,y:-15.7},0).wait(1).to({regX:0,scaleX:1.4685,rotation:148.3179,x:365.65,y:-15.6},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:149.4125,x:365.6,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:150.5073,y:-15.6},0).wait(1).to({scaleX:1.4685,rotation:151.602,x:365.65,y:-15.55},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:152.6969,x:365.6,y:-15.6},0).wait(1).to({scaleY:1.4649,rotation:153.7918},0).wait(1).to({regX:-0.1,scaleY:1.4648,rotation:154.8863,x:365.75,y:-15.65},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:155.9816,x:365.65,y:-15.6},0).wait(1).to({regX:-0.1,scaleX:1.4684,scaleY:1.4648,rotation:157.0767,x:365.75,y:-15.65},0).wait(1).to({regX:0,scaleX:1.4685,rotation:158.1719,x:365.65,y:-15.6},0).wait(1).to({regX:-0.1,scaleX:1.4684,scaleY:1.4649,rotation:159.2666,x:365.75,y:-15.65},0).wait(1).to({regX:0,rotation:160.361,x:365.65,y:-15.6},0).wait(1).to({scaleX:1.4685,rotation:161.4558,x:365.6},0).wait(1).to({regX:-0.1,scaleX:1.4684,scaleY:1.4648,rotation:162.5507,x:365.75,y:-15.65},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:163.6455,x:365.65,y:-15.6},0).wait(1).to({rotation:164.7402,y:-15.55},0).wait(1).to({scaleX:1.4684,rotation:165.8349,y:-15.65},0).wait(1).to({rotation:166.9305,y:-15.6},0).wait(1).to({regX:-0.1,scaleX:1.4685,rotation:168.0248,x:365.75,y:-15.65},0).wait(1).to({regX:0,rotation:169.1195,x:365.65},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:170.2147,y:-15.6},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:171.3092},0).wait(1).to({regX:-0.1,rotation:172.404,x:365.75},0).wait(1).to({regX:0,rotation:173.4992,x:365.65,y:-15.65},0).wait(1).to({rotation:174.5937,x:365.6},0).wait(1).to({regX:-0.1,rotation:175.6886,x:365.8},0).wait(1).to({rotation:176.7838},0).wait(1).to({regX:0,rotation:177.8778,x:365.7,y:-15.6},0).wait(1).to({rotation:178.9728,x:365.65,y:-15.65},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:180.0662},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:181.1615},0).wait(1).to({rotation:182.256,x:365.7,y:-15.6},0).wait(1).to({regX:-0.1,rotation:183.3507,x:365.75},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:184.4454,x:365.65},0).wait(1).to({scaleY:1.4649,rotation:185.5406,x:365.7,y:-15.65},0).wait(1).to({rotation:186.6355,x:365.65},0).wait(1).to({scaleX:1.4685,rotation:187.7308,y:-15.6},0).wait(1).to({scaleX:1.4684,rotation:188.8254,y:-15.65},0).wait(1).to({regX:-0.1,scaleX:1.4685,rotation:189.9197,x:365.8,y:-15.6},0).wait(1).to({regX:0,rotation:191.0147,x:365.65,y:-15.65},0).wait(1).to({regX:-0.1,scaleX:1.4684,rotation:192.1089,x:365.8,y:-15.55},0).wait(1).to({regX:0,scaleY:1.4648,rotation:193.2043,x:365.7,y:-15.65},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:194.2993,x:365.65},0).wait(1).to({rotation:195.3941,x:365.7,y:-15.6},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:196.4891,y:-15.65},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:197.5833,x:365.65},0).wait(1).to({rotation:198.679,x:365.7},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:199.7734},0).wait(1).to({regY:5,scaleX:1.4685,scaleY:1.4649,rotation:200.8683,x:365.75,y:-15.75},0).wait(1).to({regY:4.9,scaleX:1.4684,rotation:201.9631,x:365.7,y:-15.65},0).wait(1).to({regY:5,scaleX:1.4685,rotation:203.0578,x:365.75,y:-15.75},0).wait(1).to({regY:4.9,scaleX:1.4684,rotation:204.1525,x:365.7,y:-15.6},0).wait(1).to({rotation:205.2475,y:-15.65},0).wait(1).to({rotation:206.3419},0).wait(1).to({rotation:207.4368,y:-15.6},0).wait(1).to({rotation:208.5318,y:-15.65},0).wait(1).to({regX:-0.1,scaleY:1.4648,rotation:209.6272,x:365.85,y:-15.6},0).wait(1).to({regX:0,rotation:210.7213,x:365.7},0).wait(1).to({rotation:211.8164,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:212.9112},0).wait(1).to({scaleY:1.4648,rotation:214.0061,x:365.65},0).wait(1).to({rotation:215.1009,x:365.75,y:-15.6},0).wait(1).to({scaleY:1.4649,rotation:216.1958,x:365.7,y:-15.65},0).wait(1).to({scaleY:1.4648,rotation:217.2904},0).wait(1).to({rotation:218.3853},0).wait(1).to({regX:-0.1,rotation:219.4803,x:365.8,y:-15.55},0).wait(1).to({regX:0,rotation:220.5753,x:365.7,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:221.6705,x:365.75},0).wait(1).to({scaleY:1.4648,rotation:222.7652,x:365.7},0).wait(1).to({rotation:223.86,x:365.75,y:-15.7},0).wait(1).to({regX:-0.1,rotation:224.9548,x:365.85,y:-15.55},0).wait(1).to({regX:0,rotation:226.0492,x:365.75,y:-15.7},0).wait(1).to({rotation:227.1444,x:365.8,y:-15.65},0).wait(1).to({regY:5,scaleY:1.4649,rotation:228.239,x:365.85,y:-15.75},0).wait(1).to({regY:4.9,scaleY:1.4648,rotation:229.3345,x:365.8,y:-15.65},0).wait(1).to({rotation:230.429,y:-15.6},0).wait(1).to({rotation:231.5233,x:365.75},0).wait(1).to({rotation:232.6184,x:365.8,y:-15.65},0).wait(1).to({rotation:233.7132},0).wait(1).to({rotation:234.8084,x:365.75},0).wait(1).to({scaleY:1.4649,rotation:235.9027,x:365.8,y:-15.6},0).wait(1).to({rotation:236.9982,y:-15.65},0).wait(1).to({rotation:238.0925},0).wait(1).to({rotation:239.1877,x:365.75},0).wait(1).to({scaleX:1.4685,rotation:240.2822,x:365.8},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:241.3772},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:242.4724,y:-15.6},0).wait(1).to({scaleY:1.4648,rotation:243.5673,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:244.6617},0).wait(1).to({rotation:245.7569},0).wait(1).to({regY:5,scaleX:1.4684,rotation:246.8516,x:365.95,y:-15.7},0).wait(1).to({regY:4.9,scaleY:1.4648,rotation:247.9461,x:365.8,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:249.0412,y:-15.6},0).wait(1).to({regX:0.1,rotation:250.1354,x:365.75,y:-15.75},0).wait(1).to({regX:0,scaleX:1.4685,rotation:251.2306,x:365.8,y:-15.65},0).wait(1).to({regX:0.1,rotation:252.3259,y:-15.75},0).wait(1).to({regX:0,scaleX:1.4684,rotation:253.4202,y:-15.6},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:254.5153,x:365.75,y:-15.75},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:255.6101,x:365.8,y:-15.6},0).wait(1).to({scaleX:1.4684,rotation:256.7049,y:-15.65},0).wait(1).to({scaleX:1.4685,rotation:257.7995,y:-15.6},0).wait(1).to({rotation:258.8953,y:-15.65},0).wait(1).to({rotation:259.99,x:365.85,y:-15.6},0).wait(1).to({regX:0.1,scaleX:1.4684,scaleY:1.4648,rotation:261.0845,y:-15.75},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:262.1794,x:365.8,y:-15.65},0).wait(1).to({regX:0.1,rotation:263.2738,y:-15.75},0).wait(1).to({rotation:264.3688,x:365.85},0).wait(1).to({regX:0,scaleX:1.4684,rotation:265.4636,y:-15.6},0).wait(1).to({scaleX:1.4685,rotation:266.5578,x:365.8},0).wait(1).to({scaleX:1.4684,rotation:267.6532},0).wait(1).to({regX:0.1,scaleX:1.4685,rotation:268.7484,x:365.9,y:-15.75},0).wait(1).to({regX:0,rotation:269.843,x:365.85,y:-15.6},0).wait(1).to({rotation:270.9359,y:-15.65},0).wait(1).to({regX:0.1,rotation:272.0308,x:365.8,y:-15.75},0).wait(1).to({regX:0,rotation:273.1259,y:-15.6},0).wait(1).to({rotation:274.221,x:365.85,y:-15.55},0).wait(1).to({rotation:275.3146,x:365.8,y:-15.6},0).wait(1).to({regX:0.1,rotation:276.4101,x:365.85,y:-15.75},0).wait(1).to({rotation:277.5051,x:365.8,y:-15.7},0).wait(1).to({regX:0,rotation:278.5996,y:-15.6},0).wait(1).to({regX:0.1,scaleX:1.4684,scaleY:1.4648,rotation:279.6946,x:365.85,y:-15.75},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:280.7898,x:365.9,y:-15.7},0).wait(1).to({regX:0,rotation:281.8849,x:365.8,y:-15.55},0).wait(1).to({rotation:282.9789,x:365.85,y:-15.6},0).wait(1).to({regX:0.1,scaleX:1.4684,rotation:284.074,x:365.9,y:-15.75},0).wait(1).to({regX:0,scaleX:1.4685,rotation:285.1689,x:365.85,y:-15.55},0).wait(1).to({rotation:286.2638,x:365.8,y:-15.6},0).wait(1).to({scaleX:1.4684,rotation:287.3585,x:365.85},0).wait(1).to({scaleX:1.4685,rotation:288.4531},0).wait(1).to({regX:0.1,rotation:289.5478,y:-15.7},0).wait(1).to({regX:0,scaleX:1.4684,rotation:290.6425,y:-15.55},0).wait(1).to({scaleX:1.4685,rotation:291.7379,x:365.8,y:-15.6},0).wait(1).to({scaleX:1.4684,rotation:292.8332,x:365.85,y:-15.55},0).wait(1).to({regX:0.1,scaleX:1.4685,rotation:293.9276,y:-15.7},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:295.0227,y:-15.55},0).wait(1).to({regX:0.1,scaleX:1.4685,scaleY:1.4649,rotation:296.1169,x:365.9,y:-15.75},0).wait(1).to({regX:0,scaleX:1.4684,rotation:297.2115,x:365.85,y:-15.55},0).wait(1).to({scaleX:1.4685,rotation:298.3069,y:-15.6},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:299.4016},0).wait(1).to({scaleY:1.4649,rotation:300.496,x:365.9,y:-15.55},0).wait(1).to({scaleY:1.4648,rotation:301.5913,x:365.85,y:-15.6},0).wait(1).to({scaleY:1.4649,rotation:302.6862,y:-15.5},0).wait(1).to({regX:0.1,rotation:303.7808,x:365.9,y:-15.6},0).wait(1).to({rotation:304.8758,x:365.95,y:-15.65},0).wait(1).to({scaleX:1.4685,rotation:305.9707},0).wait(1).to({scaleX:1.4684,rotation:307.0652,y:-15.6},0).wait(1).to({scaleY:1.4648,rotation:308.1605},0).wait(1).to({regX:0,rotation:309.2551,x:365.85,y:-15.5},0).wait(1).to({regX:0.1,scaleX:1.4685,scaleY:1.4649,rotation:310.3493,x:365.9,y:-15.65},0).wait(1).to({scaleX:1.4684,rotation:311.4448,x:365.95,y:-15.6},0).wait(1).to({regX:0,rotation:312.5401,x:365.85,y:-15.5},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:313.6338,x:365.95,y:-15.6},0).wait(1).to({regX:0,scaleY:1.4649,rotation:314.7291,x:365.85,y:-15.45},0).wait(1).to({rotation:315.8242},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:316.9184,x:365.9,y:-15.55},0).wait(1).to({scaleY:1.4649,rotation:318.0138,y:-15.6},0).wait(1).to({regX:0,rotation:319.1089,x:365.85,y:-15.45},0).wait(1).to({regX:0.1,rotation:320.2031,x:365.95,y:-15.6},0).wait(1).to({rotation:321.2986,y:-15.55},0).wait(1).to({rotation:322.3932},0).wait(1).to({regX:0,scaleX:1.4685,rotation:323.4878,x:365.8,y:-15.5},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:324.5828,x:365.85},0).wait(1).to({regX:0.1,rotation:325.6778,x:365.9},0).wait(1).to({rotation:326.7723,x:365.95,y:-15.55},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:327.8681,x:365.9},0).wait(1).to({regX:0,scaleX:1.4684,rotation:328.962,x:365.8,y:-15.45},0).wait(1).to({scaleX:1.4685,rotation:330.0574,x:365.85},0).wait(1).to({regX:0.1,scaleX:1.4684,scaleY:1.4648,rotation:331.1517,x:365.95,y:-15.5},0).wait(1).to({regX:0,scaleY:1.4649,rotation:332.246,x:365.85,y:-15.45},0).wait(1).to({rotation:333.3415,x:365.8},0).wait(1).to({regX:0.1,rotation:334.4372,x:365.95,y:-15.5},0).wait(1).to({scaleY:1.4648,rotation:335.5307,y:-15.45},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:336.6262,x:366},0).wait(1).to({rotation:337.7207,x:365.95,y:-15.5},0).wait(1).to({regX:0,rotation:338.8157,x:365.85,y:-15.45},0).wait(1).to({regX:0.1,rotation:339.9106,x:365.95},0).wait(1).to({scaleX:1.4684,rotation:341.0051,y:-15.5},0).wait(1).to({regX:0,scaleX:1.4685,rotation:342.1001,x:365.8,y:-15.4},0).wait(1).to({rotation:343.1959,x:365.85,y:-15.45},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:344.2899,x:365.8},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:345.384,y:-15.4},0).wait(1).to({rotation:346.4797,x:365.85},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:347.5741,x:365.8,y:-15.45},0).wait(1).to({scaleY:1.4649,rotation:348.6695,y:-15.4},0).wait(1).to({scaleX:1.4685,rotation:349.7643,x:365.85,y:-15.45},0).wait(1).to({rotation:350.8584},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:351.954,x:365.8,y:-15.4},0).wait(1).to({regX:0.1,scaleX:1.4685,scaleY:1.4649,rotation:353.0485,x:365.95},0).wait(1).to({regX:0,rotation:354.1438,x:365.85},0).wait(1).to({rotation:355.2378,x:365.8,y:-15.45},0).wait(1).to({regX:0.1,scaleX:1.4684,rotation:356.333,x:365.95,y:-15.4},0).wait(1).to({regX:0,rotation:357.428,x:365.8},0).wait(1).to({scaleX:1.4685,rotation:358.5227},0).wait(1).to({regX:0.1,rotation:359.6174,x:365.95},0).wait(1).to({rotation:360.7102,x:365.9},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:361.8051,x:365.75,y:-15.45},0).wait(1).to({scaleX:1.4685,rotation:362.9007,x:365.8},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:363.9954,x:365.95},0).wait(1).to({regX:0,rotation:365.0899,x:365.8,y:-15.4},0).wait(1).to({rotation:366.185},0).wait(1).to({rotation:367.28,y:-15.45},0).wait(1).to({regX:0.1,rotation:368.3745,x:365.95},0).wait(1).to({regX:0,scaleX:1.4684,rotation:369.4694,x:365.8,y:-15.4},0).wait(1).to({regX:0.1,regY:4.8,rotation:370.5644,x:365.95,y:-15.5},0).wait(1).to({regX:0,regY:4.9,rotation:371.6587,x:365.8,y:-15.4},0).wait(1).to({scaleX:1.4685,rotation:372.7538,x:365.75},0).wait(1).to({rotation:373.8489,x:365.8},0).wait(1).to({regX:0.1,scaleX:1.4684,rotation:374.9439,x:365.9,y:-15.35},0).wait(1).to({regX:0,rotation:376.039,x:365.75,y:-15.4},0).wait(1).to({scaleX:1.4685,rotation:377.1337,x:365.8},0).wait(1).to({scaleX:1.4684,rotation:378.2279,x:365.75},0).wait(1).to({scaleX:1.4685,rotation:379.3224,x:365.8},0).wait(1).to({regX:0.1,rotation:380.4178,x:365.9,y:-15.35},0).wait(1).to({regX:0,rotation:381.512,x:365.75,y:-15.4},0).wait(1).to({rotation:382.6074},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:383.702},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:384.797},0).wait(1).to({regX:-0.1,scaleX:1.4684,scaleY:1.4648,rotation:385.8919,x:365.6,y:-15.45},0).wait(1).to({regX:0,rotation:386.9865,x:365.75,y:-15.4},0).wait(1).to({scaleY:1.4649,rotation:388.0821},0).wait(1).to({rotation:389.1769},0).wait(1).to({scaleY:1.4648,rotation:390.2713},0).wait(1).to({regY:4.8,rotation:391.3662,x:365.8,y:-15.55},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:392.4616,x:365.85,y:-15.5},0).wait(1).to({regY:4.9,scaleX:1.4684,rotation:393.5562,x:365.75,y:-15.35},0).wait(1).to({scaleY:1.4648,rotation:394.6507,x:365.7,y:-15.45},0).wait(1).to({scaleY:1.4649,rotation:395.7454,x:365.75,y:-15.4},0).wait(1).to({scaleY:1.4648,rotation:396.8404,x:365.7},0).wait(1).to({regX:0.1,rotation:397.9352,x:365.85,y:-15.35},0).wait(1).to({rotation:399.0298,y:-15.3},0).wait(1).to({regX:0,rotation:400.1253,x:365.7,y:-15.4},0).wait(1).to({rotation:401.2193},0).wait(1).to({rotation:402.3141,x:365.65},0).wait(1).to({rotation:403.4092},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:404.5041,x:365.75,y:-15.35},0).wait(1).to({regX:0,scaleY:1.4648,rotation:405.5993,x:365.65,y:-15.45},0).wait(1).to({scaleY:1.4649,rotation:406.6942,x:365.7},0).wait(1).to({scaleY:1.4648,rotation:407.7885},0).wait(1).to({regY:4.8,rotation:408.8843,x:365.75,y:-15.5},0).wait(1).to({regY:4.9,rotation:409.9786,x:365.7,y:-15.45},0).wait(1).to({scaleY:1.4649,rotation:411.0729,x:365.65},0).wait(1).to({scaleX:1.4685,rotation:412.1681,x:365.7,y:-15.4},0).wait(1).to({scaleX:1.4684,rotation:413.2622,y:-15.45},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:414.3576,y:-15.3},0).wait(1).to({regX:0,rotation:415.4531,x:365.65,y:-15.4},0).wait(1).to({scaleY:1.4649,rotation:416.5476},0).wait(1).to({scaleX:1.4685,rotation:417.6422,x:365.7},0).wait(1).to({regX:-0.1,scaleX:1.4684,scaleY:1.4648,rotation:418.7369,x:365.55,y:-15.55},0).wait(1).to({regX:0,scaleY:1.4649,rotation:419.832,x:365.7,y:-15.45},0).wait(1).to({scaleX:1.4685,rotation:420.9266,x:365.65},0).wait(1).to({regY:4.8,scaleX:1.4684,scaleY:1.4648,rotation:422.0221,x:365.75,y:-15.5},0).wait(1).to({regY:4.9,scaleX:1.4685,scaleY:1.4649,rotation:423.1168,x:365.65,y:-15.45},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:424.2109},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:425.3061},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:426.4009,x:365.6},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:427.4959},0).wait(1);
	var _tweenStr_12 = _tweenStr_11.to({scaleX:1.4684,rotation:428.59},0).wait(1).to({rotation:429.6859},0).wait(1).to({scaleX:1.4685,rotation:430.7801,x:365.65},0).wait(1).to({regX:0.1,scaleX:1.4684,scaleY:1.4648,rotation:431.8748,x:365.7,y:-15.3},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:432.9701,x:365.65,y:-15.45},0).wait(1).to({rotation:434.0649},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:435.1592,x:365.6},0).wait(1).to({scaleY:1.4649,rotation:436.2549,x:365.7},0).wait(1).to({scaleX:1.4685,rotation:437.3492,x:365.65},0).wait(1).to({regX:-0.1,scaleX:1.4684,rotation:438.4437,x:365.6,y:-15.55},0).wait(1).to({regX:0,rotation:439.5393,y:-15.45},0).wait(1).to({regX:-0.1,scaleX:1.4685,rotation:440.6335,y:-15.6},0).wait(1).to({regX:0,rotation:441.7292,x:365.65,y:-15.45},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:442.8229,x:365.6},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:443.9183,y:-15.5},0).wait(1).to({rotation:445.0132},0).wait(1).to({regX:-0.1,regY:4.8,rotation:446.1075,x:365.75,y:-15.55},0).wait(1).to({regY:4.9,rotation:447.2022,x:365.65,y:-15.6},0).wait(1).to({rotation:448.2982},0).wait(1).to({regX:0,rotation:449.393,x:365.6,y:-15.45},0).wait(1).to({regX:-0.1,rotation:450.4858,y:-15.55},0).wait(1).to({regX:0,rotation:451.5806,x:365.65,y:-15.45},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:452.6748,x:365.6},0).wait(1).to({regY:4.8,scaleX:1.4685,scaleY:1.4649,rotation:453.7704,x:365.75,y:-15.4},0).wait(1).to({regY:4.9,rotation:454.8647,x:365.6,y:-15.45},0).wait(1).to({rotation:455.9599},0).wait(1).to({scaleX:1.4684,rotation:457.0544,x:365.65},0).wait(1).to({regX:-0.1,scaleX:1.4685,rotation:458.149,x:365.6,y:-15.6},0).wait(1).to({regX:0,rotation:459.2431,y:-15.45},0).wait(1).to({rotation:460.3387,x:365.65},0).wait(1).to({scaleX:1.4684,rotation:461.4339,x:365.6,y:-15.4},0).wait(1).to({scaleX:1.4685,rotation:462.5291,y:-15.5},0).wait(1).to({rotation:463.6241},0).wait(1).to({rotation:464.7185,y:-15.45},0).wait(1).to({regX:-0.1,scaleX:1.4684,rotation:465.8137,x:365.7,y:-15.6},0).wait(1).to({scaleX:1.4685,rotation:466.9079},0).wait(1).to({rotation:468.0026,x:365.65},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:469.0976,x:365.6,y:-15.45},0).wait(1).to({regX:-0.1,scaleX:1.4685,scaleY:1.4649,rotation:470.1931,x:365.65,y:-15.65},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:471.2875,x:365.55,y:-15.45},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:472.3821,x:365.6,y:-15.5},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:473.4767,y:-15.45},0).wait(1).to({regX:-0.1,rotation:474.5719,x:365.65,y:-15.65},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:475.6666,y:-15.45},0).wait(1).to({scaleX:1.4684,rotation:476.761,x:365.6,y:-15.5},0).wait(1).to({regX:-0.1,rotation:477.8565,x:365.65,y:-15.65},0).wait(1).to({regX:0,rotation:478.9517,x:365.6,y:-15.5},0).wait(1).to({regX:-0.1,scaleY:1.4648,rotation:480.0456,x:365.7,y:-15.65},0).wait(1).to({regX:0,rotation:481.141,x:365.6,y:-15.5},0).wait(1).to({regX:-0.1,scaleY:1.4649,rotation:482.2357,x:365.75,y:-15.6},0).wait(1).to({scaleX:1.4685,scaleY:1.4648,rotation:483.3304,x:365.7,y:-15.65},0).wait(1).to({scaleX:1.4684,scaleY:1.4649,rotation:484.425,y:-15.6},0).wait(1).to({regX:0,scaleX:1.4685,rotation:485.5205,x:365.6,y:-15.5},0).wait(1).to({regX:-0.1,scaleX:1.4684,rotation:486.6158,x:365.75,y:-15.65},0).wait(1).to({regX:0,scaleY:1.4648,rotation:487.7101,x:365.6,y:-15.55},0).wait(1).to({regX:-0.1,rotation:488.8045,x:365.7,y:-15.65},0).wait(1).to({regX:0,scaleY:1.4649,rotation:489.8995,x:365.65,y:-15.5},0).wait(1).to({regX:-0.1,scaleY:1.4648,rotation:490.9942,x:365.7,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:492.0898},0).wait(1).to({regX:0,rotation:493.1842,x:365.55,y:-15.55},0).wait(1).to({regX:-0.1,rotation:494.2787,x:365.7,y:-15.65},0).wait(1).to({scaleY:1.4648,rotation:495.3739,y:-15.7},0).wait(1).to({regX:0,scaleY:1.4649,rotation:496.4684,x:365.65,y:-15.6},0).wait(1).to({rotation:497.5638,x:365.6,y:-15.55},0).wait(1).to({rotation:498.6588,x:365.65,y:-15.6},0).wait(1).to({regX:-0.1,scaleY:1.4648,rotation:499.7532,x:365.7,y:-15.7},0).wait(1).to({rotation:500.848},0).wait(1).to({regX:0,rotation:501.9428,x:365.6,y:-15.6},0).wait(1).to({scaleY:1.4649,rotation:503.038,x:365.65},0).wait(1).to({scaleY:1.4648,rotation:504.1323,y:-15.55},0).wait(1).to({regX:-0.1,scaleY:1.4649,rotation:505.2275,x:365.7,y:-15.7},0).wait(1).to({rotation:506.3222,y:-15.65},0).wait(1).to({scaleY:1.4648,rotation:507.4171,y:-15.7},0).wait(1).to({regX:0,scaleY:1.4649,rotation:508.5114,x:365.65,y:-15.55},0).wait(1).to({rotation:509.6065,x:365.6,y:-15.6},0).wait(1).to({scaleY:1.4648,rotation:510.7018,x:365.65},0).wait(1).to({scaleY:1.4649,rotation:511.7959,x:365.6},0).wait(1).to({rotation:512.8918,x:365.65},0).wait(1).to({regX:-0.1,rotation:513.9867,x:365.75,y:-15.65},0).wait(1).to({regX:0,rotation:515.0807,x:365.65,y:-15.6},0).wait(1).to({rotation:516.1756},0).wait(1).to({scaleX:1.4685,rotation:517.2704},0).wait(1).to({regX:-0.1,rotation:518.3655,x:365.75,y:-15.65},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:519.4598,x:365.65,y:-15.6},0).wait(1).to({scaleY:1.4649,rotation:520.5547,x:365.6},0).wait(1).to({scaleX:1.4685,rotation:521.65,x:365.65},0).wait(1).to({rotation:522.7445,y:-15.65},0).wait(1).to({regX:-0.1,rotation:523.8395,x:365.8,y:-15.7},0).wait(1).to({rotation:524.9338},0).wait(1).to({scaleX:1.4684,rotation:526.0293,x:365.75,y:-15.65},0).wait(1).to({rotation:527.1245,x:365.8,y:-15.7},0).wait(1).to({regX:0,scaleX:1.4685,rotation:528.2188,x:365.65,y:-15.65},0).wait(1).to({rotation:529.3135,x:365.6,y:-15.6},0).wait(1).to({regX:-0.1,rotation:530.4084,x:365.8,y:-15.65},0).wait(1).to({regX:0,rotation:531.5035,x:365.65},0).wait(1).to({rotation:532.5985,y:-15.6},0).wait(1).to({rotation:533.6932,y:-15.65},0).wait(1).to({scaleX:1.4684,rotation:534.7878},0).wait(1).to({regX:-0.1,scaleX:1.4685,rotation:535.8825,x:365.8,y:-15.6},0).wait(1).to({rotation:536.9775,x:365.75},0).wait(1).to({rotation:538.0725,x:365.8},0).wait(1).to({regX:0,rotation:539.1674,x:365.65,y:-15.65},0).wait(1).to({rotation:540.2602},0).wait(1).to({rotation:541.3549},0).wait(1).to({rotation:542.4501,y:-15.6},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:543.545,x:365.7},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:544.64,x:365.65},0).wait(1).to({rotation:545.7349,x:365.6,y:-15.65},0).wait(1).to({regX:-0.1,scaleX:1.4684,rotation:546.829,x:365.8},0).wait(1).to({regX:0,scaleX:1.4685,rotation:547.9242,x:365.7},0).wait(1).to({regX:-0.1,rotation:549.0188,x:365.8},0).wait(1).to({rotation:550.1143,y:-15.6},0).wait(1).to({regX:0,rotation:551.2088,x:365.65},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:552.3031,x:365.7},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:553.398,x:365.65,y:-15.65},0).wait(1).to({rotation:554.4934,y:-15.6},0).wait(1).to({scaleX:1.4684,rotation:555.5879,x:365.7,y:-15.65},0).wait(1).to({rotation:556.6827,x:365.65},0).wait(1).to({scaleX:1.4685,rotation:557.778},0).wait(1).to({regX:-0.1,rotation:558.8728,x:365.8,y:-15.6},0).wait(1).to({regX:0,rotation:559.9675,x:365.7,y:-15.65},0).wait(1).to({rotation:561.0617},0).wait(1).to({regX:-0.1,scaleX:1.4684,rotation:562.1573,x:365.8,y:-15.6},0).wait(1).to({regX:0,regY:5,rotation:563.2524,x:365.75,y:-15.8},0).wait(1).to({regY:4.9,scaleY:1.4648,rotation:564.3473,x:365.7,y:-15.65},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:565.4416},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:566.536},0).wait(1).to({scaleY:1.4649,rotation:567.6311,x:365.75},0).wait(1).to({scaleY:1.4648,rotation:568.7259,x:365.7},0).wait(1).to({regX:-0.1,scaleY:1.4649,rotation:569.821,x:365.8,y:-15.6},0).wait(1).to({regX:0.1,rotation:570.9159,x:365.6,y:-15.75},0).wait(1).to({regX:-0.1,scaleY:1.4648,rotation:572.0107,x:365.8,y:-15.55},0).wait(1).to({regX:0,scaleY:1.4649,rotation:573.1049,x:365.7,y:-15.65},0).wait(1).to({scaleX:1.4685,rotation:574.2004},0).wait(1).to({scaleX:1.4684,rotation:575.2958},0).wait(1).to({regY:5,rotation:576.3897,x:365.8,y:-15.75},0).wait(1).to({regY:4.9,scaleY:1.4648,rotation:577.4855,x:365.7,y:-15.65},0).wait(1).to({regY:5,scaleY:1.4649,rotation:578.5795,x:365.8,y:-15.75},0).wait(1).to({regY:4.9,scaleY:1.4648,rotation:579.6744,x:365.75,y:-15.6},0).wait(1).to({rotation:580.7692,x:365.7,y:-15.65},0).wait(1).to({rotation:581.8641,x:365.75},0).wait(1).to({rotation:582.9595,x:365.8},0).wait(1).to({scaleY:1.4649,rotation:584.0542},0).wait(1).to({rotation:585.149},0).wait(1).to({scaleY:1.4648,rotation:586.2438,y:-15.6},0).wait(1).to({regX:0.1,rotation:587.3386,x:365.7,y:-15.7},0).wait(1).to({rotation:588.4331},0).wait(1).to({regX:0,rotation:589.528,x:365.75,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:590.6227,x:365.8},0).wait(1).to({scaleY:1.4648,rotation:591.7175,y:-15.6},0).wait(1).to({rotation:592.8122,x:365.75,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:593.9076},0).wait(1).to({scaleX:1.4685,rotation:595.002,x:365.8,y:-15.6},0).wait(1).to({regX:0.1,scaleX:1.4684,scaleY:1.4648,rotation:596.0971,x:365.7,y:-15.75},0).wait(1).to({regX:0,scaleY:1.4649,rotation:597.1919,x:365.8,y:-15.65},0).wait(1).to({scaleX:1.4685,scaleY:1.4648,rotation:598.2868,y:-15.6},0).wait(1).to({scaleX:1.4684,rotation:599.3812,x:365.85,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:600.4768,x:365.8},0).wait(1).to({scaleY:1.4648,rotation:601.5713,x:365.75},0).wait(1).to({scaleY:1.4649,rotation:602.6662,x:365.85},0).wait(1).to({scaleX:1.4685,rotation:603.7606},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:604.8559,x:365.8},0).wait(1).to({regY:5,scaleX:1.4685,scaleY:1.4649,rotation:605.9503,x:365.95,y:-15.7},0).wait(1).to({regY:4.9,scaleX:1.4684,rotation:607.0451,x:365.8,y:-15.65},0).wait(1).to({scaleX:1.4685,rotation:608.1405,y:-15.6},0).wait(1).to({regX:0.1,rotation:609.2347,x:365.75,y:-15.75},0).wait(1).to({regX:0,rotation:610.3301,x:365.8,y:-15.6},0).wait(1).to({rotation:611.4241,y:-15.65},0).wait(1).to({scaleX:1.4684,rotation:612.5195,y:-15.6},0).wait(1).to({scaleX:1.4685,rotation:613.6144},0).wait(1).to({scaleX:1.4684,rotation:614.7092,y:-15.65},0).wait(1).to({regX:0.1,scaleX:1.4685,rotation:615.8041,x:365.75,y:-15.75},0).wait(1).to({regX:0,rotation:616.8993,x:365.85,y:-15.65},0).wait(1).to({rotation:617.9937,x:365.8},0).wait(1).to({rotation:619.0881,x:365.85,y:-15.6},0).wait(1).to({scaleX:1.4684,rotation:620.1832,x:365.8},0).wait(1).to({rotation:621.2784,x:365.85},0).wait(1).to({scaleX:1.4685,rotation:622.3734,x:365.8},0).wait(1).to({regX:0.1,rotation:623.4679,x:365.85,y:-15.7},0).wait(1).to({regX:0,scaleX:1.4684,rotation:624.5632,y:-15.6},0).wait(1).to({rotation:625.6569},0).wait(1).to({regX:0.1,scaleX:1.4685,rotation:626.7527,x:365.8,y:-15.75},0).wait(1).to({regX:0,rotation:627.8473,y:-15.55},0).wait(1).to({rotation:628.9424,x:365.85,y:-15.65},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:630.0352},0).wait(1).to({regX:0.1,scaleX:1.4685,scaleY:1.4649,rotation:631.1299,y:-15.7},0).wait(1).to({regX:0,rotation:632.2249,x:365.8,y:-15.6},0).wait(1).to({rotation:633.319},0).wait(1).to({scaleX:1.4684,rotation:634.4149,x:365.85},0).wait(1).to({scaleX:1.4685,rotation:635.5088},0).wait(1).to({rotation:636.6047,y:-15.55},0).wait(1).to({rotation:637.6989,x:365.8,y:-15.6},0).wait(1).to({regX:0.1,rotation:638.7935,x:365.85,y:-15.75},0).wait(1).to({rotation:639.8888,y:-15.7},0).wait(1).to({rotation:640.9837,x:365.9,y:-15.75},0).wait(1).to({rotation:642.0788,x:365.85,y:-15.7},0).wait(1).to({scaleX:1.4684,rotation:643.1736,x:365.9,y:-15.75},0).wait(1).to({regX:0,scaleX:1.4685,rotation:644.2678,x:365.85,y:-15.6},0).wait(1).to({regX:0.1,rotation:645.363,x:365.9,y:-15.75},0).wait(1).to({scaleX:1.4684,rotation:646.4579,y:-15.7},0).wait(1).to({scaleX:1.4685,rotation:647.552,y:-15.75},0).wait(1).to({regX:0,rotation:648.6477,x:365.85,y:-15.6},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:649.7417},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:650.8367,y:-15.7},0).wait(1).to({regX:0,rotation:651.9323,y:-15.55},0).wait(1).to({regX:0.1,rotation:653.0268,x:365.9,y:-15.7},0).wait(1).to({regX:0,scaleX:1.4685,rotation:654.121,x:365.8,y:-15.55},0).wait(1).to({regX:0.1,scaleX:1.4684,scaleY:1.4648,rotation:655.2165,x:365.85,y:-15.7},0).wait(1).to({regX:0,scaleY:1.4649,rotation:656.3107,y:-15.55},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:657.4058,x:365.9,y:-15.7},0).wait(1).to({regX:0,scaleX:1.4685,rotation:658.5005,x:365.85,y:-15.6},0).wait(1).to({scaleY:1.4649,rotation:659.5962,y:-15.5},0).wait(1).to({regX:0.1,scaleX:1.4684,scaleY:1.4648,rotation:660.6903,x:365.9,y:-15.7},0).wait(1).to({scaleY:1.4649,rotation:661.7853,y:-15.65},0).wait(1).to({regX:0,rotation:662.8801,y:-15.55},0).wait(1).to({scaleY:1.4648,rotation:663.9746,x:365.85},0).wait(1).to({rotation:665.0699,x:365.8},0).wait(1).to({rotation:666.165,x:365.85},0).wait(1).to({scaleY:1.4649,rotation:667.2594},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:668.3543,x:365.95,y:-15.65},0).wait(1).to({regX:0,scaleY:1.4649,rotation:669.4489,x:365.85,y:-15.55},0).wait(1).to({regX:0.1,scaleX:1.4685,rotation:670.5436,x:365.9,y:-15.65},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:671.6388,x:365.8,y:-15.55},0).wait(1).to({rotation:672.7336,x:365.85,y:-15.5},0).wait(1).to({scaleY:1.4649,rotation:673.8284,x:365.9},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:674.9232,x:365.95,y:-15.6},0).wait(1).to({scaleY:1.4649,rotation:676.0184},0).wait(1).to({rotation:677.1135},0).wait(1).to({regX:0,scaleY:1.4648,rotation:678.2078,x:365.9,y:-15.45},0).wait(1).to({regX:0.1,rotation:679.3032,x:365.95,y:-15.55},0).wait(1).to({rotation:680.3976},0).wait(1).to({regX:0,rotation:681.4928,x:365.8,y:-15.5},0).wait(1).to({regX:0.1,rotation:682.5873,x:365.9,y:-15.6},0).wait(1).to({regX:0,rotation:683.6825,x:365.85,y:-15.45},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:684.7771,x:365.95,y:-15.55},0).wait(1).to({scaleY:1.4648,rotation:685.8719},0).wait(1).to({regX:0,scaleY:1.4649,rotation:686.9671,x:365.85,y:-15.45},0).wait(1).to({scaleY:1.4648,rotation:688.0614},0).wait(1).to({scaleY:1.4649,rotation:689.1567},0).wait(1).to({rotation:690.2507,y:-15.4},0).wait(1).to({scaleY:1.4648,rotation:691.3459,x:365.8,y:-15.45},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:692.4407},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:693.5361,x:365.85,y:-15.4},0).wait(1).to({scaleY:1.4649,rotation:694.6303,x:365.9,y:-15.45},0).wait(1).to({scaleX:1.4685,rotation:695.7248,x:365.85},0).wait(1).to({rotation:696.8205},0).wait(1).to({scaleX:1.4684,rotation:697.9153},0).wait(1).to({scaleX:1.4685,rotation:699.0091,x:365.8},0).wait(1).to({scaleX:1.4684,rotation:700.1049},0).wait(1).to({regX:0.1,scaleX:1.4685,rotation:701.1993,x:365.95},0).wait(1).to({regX:0,rotation:702.2945,x:365.85},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:703.3889,y:-15.4},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:704.4839,x:365.8,y:-15.45},0).wait(1).to({rotation:705.5786,x:365.85},0).wait(1).to({regX:0.1,rotation:706.6736,x:365.95},0).wait(1).to({rotation:707.7685,y:-15.5},0).wait(1).to({regX:0,rotation:708.8631,x:365.8,y:-15.4},0).wait(1).to({regX:0.1,rotation:709.9577,x:365.95,y:-15.5},0).wait(1).to({scaleX:1.4684,rotation:711.0537,y:-15.4},0).wait(1).to({scaleX:1.4685,rotation:712.1475,y:-15.45},0).wait(1).to({regX:0,rotation:713.2426,x:365.85,y:-15.4},0).wait(1).to({regX:0.1,rotation:714.3371,x:365.95},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:715.4324,x:365.9,y:-15.45},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:716.5273,x:365.85},0).wait(1).to({rotation:717.6216},0).wait(1).to({rotation:718.7167,x:365.8,y:-15.4},0).wait(1).to({rotation:719.8114},0).wait(1).to({regX:0.1,scaleX:1.4684,rotation:720.9042,x:365.95},0).wait(1).to({scaleX:1.4685,rotation:721.9992,y:-15.45},0).wait(1).to({regX:0,rotation:723.0943,x:365.75,y:-15.4},0).wait(1).to({rotation:724.1893,x:365.85,y:-15.45},0).wait(1).to({rotation:725.284,x:365.8,y:-15.4},0).wait(1).to({regX:0.1,rotation:726.3795,x:365.9},0).wait(1).to({regX:0,rotation:727.4737,x:365.8},0).wait(1).to({rotation:728.5689},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:729.6637},0).wait(1).to({rotation:730.759,y:-15.45},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:731.8537,y:-15.4},0).wait(1).to({regX:0.1,rotation:732.9482,x:365.95,y:-15.35},0).wait(1).to({regX:0,scaleX:1.4684,scaleY:1.4648,rotation:734.0426,x:365.75,y:-15.4},0).wait(1).to({regX:0.1,scaleX:1.4685,scaleY:1.4649,rotation:735.1374,x:365.95,y:-15.3},0).wait(1).to({regX:0,rotation:736.2327,x:365.75,y:-15.4},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:737.3274},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:738.4217,x:365.8},0).wait(1).to({rotation:739.5172},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:740.6121,x:365.75,y:-15.45},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:741.7065,x:365.8},0).wait(1).to({regX:0.1,scaleX:1.4684,scaleY:1.4648,rotation:742.8016,x:365.85,y:-15.4},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:743.8955,x:365.8,y:-15.45},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:744.9906,x:365.75},0).wait(1).to({rotation:746.0859,y:-15.4},0).wait(1).to({scaleY:1.4649,rotation:747.1814},0).wait(1).to({rotation:748.2754,y:-15.45},0).wait(1).to({scaleY:1.4648,rotation:749.3701,x:365.8,y:-15.4},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:750.4655,x:365.85,y:-15.35},0).wait(1).to({scaleY:1.4648,rotation:751.5602,x:365.9},0).wait(1).to({rotation:752.6554,x:365.85,y:-15.3},0).wait(1).to({regX:0,scaleY:1.4649,rotation:753.7493,x:365.75,y:-15.4},0).wait(1).to({scaleX:1.4685,rotation:754.8446},0).wait(1).to({regX:0.1,scaleX:1.4684,rotation:755.9395,x:365.85,y:-15.35},0).wait(1).to({rotation:757.0349,y:-15.3},0).wait(1).to({regX:0,scaleY:1.4648,rotation:758.1294,x:365.7,y:-15.4},0).wait(1).to({rotation:759.2242},0).wait(1).to({scaleY:1.4649,rotation:760.3184,x:365.75,y:-15.45},0).wait(1).to({scaleY:1.4648,rotation:761.4138,x:365.7,y:-15.4},0).wait(1).to({rotation:762.5084,x:365.65},0).wait(1).to({rotation:763.603,x:365.7},0).wait(1).to({scaleY:1.4649,rotation:764.6983,x:365.65},0).wait(1).to({scaleY:1.4648,rotation:765.7926},0).wait(1).to({rotation:766.8876,y:-15.45},0).wait(1).to({regX:0.1,rotation:767.9829,x:365.75,y:-15.35},0).wait(1).to({regX:0,rotation:769.0772,x:365.7,y:-15.4},0).wait(1).to({regX:0.1,rotation:770.1722,x:365.8,y:-15.35},0).wait(1).to({regX:0,rotation:771.2668,x:365.65,y:-15.4},0).wait(1).to({rotation:772.3622},0).wait(1).to({regX:-0.1,scaleX:1.4685,scaleY:1.4649,rotation:773.4567,x:365.6,y:-15.5},0).wait(1).to({regX:0,rotation:774.5524,x:365.65,y:-15.45},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:775.6468,y:-15.4},0).wait(1).to({regX:-0.1,rotation:776.7411,x:365.55,y:-15.5},0).wait(1).to({regX:0,scaleY:1.4649,rotation:777.837,x:365.65,y:-15.45},0).wait(1).to({rotation:778.931},0).wait(1).to({scaleY:1.4648,rotation:780.0264,y:-15.4},0).wait(1).to({rotation:781.121,x:365.6,y:-15.45},0).wait(1).to({regX:0.1,scaleX:1.4685,scaleY:1.4649,rotation:782.2159,x:365.7,y:-15.3},0).wait(1).to({regX:-0.1,rotation:783.3106,x:365.6,y:-15.6},0).wait(1).to({regX:0,scaleX:1.4684,rotation:784.4049,x:365.7,y:-15.4},0).wait(1).to({scaleX:1.4685,scaleY:1.4648,rotation:785.5005,x:365.6},0).wait(1).to({scaleY:1.4649,rotation:786.5951,x:365.65},0).wait(1).to({regY:4.8,rotation:787.6894,x:365.8,y:-15.5},0).wait(1).to({regY:4.9,rotation:788.7843,x:365.65,y:-15.45},0).wait(1).to({rotation:789.8794},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:790.9745,x:365.6,y:-15.4},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:792.069,y:-15.45},0).wait(1).to({regX:-0.1,rotation:793.1633,x:365.65,y:-15.55},0).wait(1).to({regX:0,scaleX:1.4684,rotation:794.2585,x:365.6,y:-15.4},0).wait(1).to({regX:-0.1,scaleX:1.4685,rotation:795.3535,y:-15.6},0).wait(1).to({rotation:796.4484,x:365.55,y:-15.55},0).wait(1).to({regX:0,rotation:797.5436,x:365.65,y:-15.45},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:798.6384,x:365.6},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:799.7328,x:365.65},0).wait(1).to({regX:-0.1,rotation:800.8276,y:-15.6},0).wait(1).to({regX:0,scaleX:1.4684,rotation:801.9221,x:365.6,y:-15.45},0).wait(1).to({rotation:803.0177,x:365.65},0).wait(1).to({scaleX:1.4685,rotation:804.1121,x:365.6,y:-15.4},0).wait(1).to({regX:-0.1,rotation:805.2073,y:-15.6},0).wait(1).to({scaleX:1.4684,rotation:806.3025,x:365.65},0).wait(1).to({regX:0,scaleX:1.4685,rotation:807.3969,y:-15.45},0).wait(1).to({regX:-0.1,rotation:808.4911,x:365.6,y:-15.6},0).wait(1).to({rotation:809.587},0).wait(1).to({regX:0,rotation:810.6798,y:-15.45},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:811.7746,x:365.65},0).wait(1).to({regX:-0.1,scaleX:1.4685,scaleY:1.4649,rotation:812.869,y:-15.6},0).wait(1).to({regX:0,rotation:813.9643,y:-15.45},0).wait(1).to({rotation:815.0587},0).wait(1).to({regX:-0.1,scaleX:1.4684,rotation:816.1543,x:365.6,y:-15.6},0).wait(1).to({regX:0,rotation:817.248,x:365.65,y:-15.5},0).wait(1).to({scaleX:1.4685,rotation:818.3432,x:365.6,y:-15.45},0).wait(1).to({rotation:819.4385,y:-15.5},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:820.5324,x:365.65,y:-15.45},0).wait(1).to({scaleY:1.4649,rotation:821.6277,x:365.6},0).wait(1).to({scaleX:1.4685,rotation:822.7225,y:-15.5},0).wait(1).to({rotation:823.8175,x:365.65},0).wait(1).to({regX:-0.1,scaleX:1.4684,scaleY:1.4648,rotation:824.9119,x:365.6,y:-15.6},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:826.0067,x:365.65,y:-15.65},0).wait(1).to({rotation:827.1026,x:365.7,y:-15.6},0).wait(1).to({regX:0,scaleX:1.4684,rotation:828.1971,x:365.6,y:-15.5},0).wait(1).to({rotation:829.2922,y:-15.45},0).wait(1).to({regX:-0.1,rotation:830.3866,y:-15.65},0).wait(1).to({scaleY:1.4648,rotation:831.4812,x:365.65},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:832.5763,x:365.6,y:-15.5},0).wait(1).to({regX:-0.1,scaleX:1.4684,scaleY:1.4648,rotation:833.6713,x:365.65,y:-15.65},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:834.7661,x:365.6,y:-15.5},0).wait(1).to({regX:-0.1,scaleX:1.4684,scaleY:1.4648,rotation:835.8609,x:365.65,y:-15.65},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:836.9558},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:838.0506},0).wait(1).to({scaleY:1.4649,rotation:839.1453},0).wait(1).to({regX:0,scaleY:1.4648,rotation:840.2403,x:365.6,y:-15.5},0).wait(1).to({rotation:841.3352},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:842.4294},0).wait(1).to({regX:-0.1,scaleX:1.4684,scaleY:1.4648,rotation:843.5245,x:365.7,y:-15.55},0).wait(1).to({scaleY:1.4649,rotation:844.6194,x:365.75,y:-15.6},0).wait(1).to({regX:0,rotation:845.7142,x:365.55,y:-15.55},0).wait(1).to({rotation:846.809,x:365.6},0).wait(1).to({scaleY:1.4648,rotation:847.9041,y:-15.5},0).wait(1).to({regX:-0.1,rotation:848.9993,x:365.7,y:-15.6},0).wait(1).to({regX:0,rotation:850.0934,x:365.6,y:-15.5},0).wait(1).to({rotation:851.1893,y:-15.6},0).wait(1).to({scaleY:1.4649,rotation:852.2829,x:365.65},0).wait(1).to({scaleY:1.4648,rotation:853.3784},0).wait(1).to({rotation:854.4729},0).wait(1).to({rotation:855.5672},0).wait(1).to({rotation:856.6626,x:365.6,y:-15.55},0).wait(1).to({regX:-0.1,rotation:857.7573,x:365.7,y:-15.65},0).wait(1).to({regX:0,rotation:858.8526,x:365.65,y:-15.6},0).wait(1).to({scaleX:1.4685,rotation:859.9468},0).wait(1).to({scaleX:1.4684,rotation:861.0423},0).wait(1).to({scaleY:1.4649,rotation:862.1371,y:-15.55},0).wait(1).to({regX:-0.1,rotation:863.2319,x:365.7,y:-15.7},0).wait(1).to({regX:0,scaleY:1.4648,rotation:864.3268,x:365.6,y:-15.6},0).wait(1);
	this.timeline.addTween(_tweenStr_12.to({rotation:865.421,x:365.65},0).wait(1).to({regX:-0.1,scaleY:1.4649,rotation:866.5159,x:365.7,y:-15.7},0).wait(1).to({regX:0,scaleX:1.4685,rotation:867.6111,x:365.6,y:-15.6},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:868.7064,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:869.801,x:365.65,y:-15.6},0).wait(1).to({scaleY:1.4648,rotation:870.8953},0).wait(1).to({rotation:871.9903,y:-15.65},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:873.0856,y:-15.6},0).wait(1).to({regX:-0.1,scaleX:1.4684,rotation:874.1799,x:365.75,y:-15.65},0).wait(1).to({regX:0,rotation:875.2751,x:365.65,y:-15.6},0).wait(1).to({regX:-0.1,scaleY:1.4648,rotation:876.3698,x:365.75,y:-15.7},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:877.4643,x:365.65,y:-15.6},0).wait(1).to({regX:-0.1,rotation:878.5592,x:365.8,y:-15.7},0).wait(1).to({regX:0,rotation:879.6544,x:365.6,y:-15.65},0).wait(1).to({regX:-0.1,rotation:880.7491,x:365.75},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:881.8434},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:882.9386,x:365.8},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:884.0335},0).wait(1).to({rotation:885.1289,y:-15.7},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:886.223,y:-15.65},0).wait(1).to({regX:0,rotation:887.318,x:365.6},0).wait(1).to({regX:-0.1,rotation:888.4127,x:365.75,y:-15.7},0).wait(1).to({regX:0,rotation:889.5072,x:365.65,y:-15.65},0).wait(1).to({regX:-0.1,rotation:890.6027,x:365.8},0).wait(1).to({regX:0,rotation:891.6972,x:365.65,y:-15.6},0).wait(1).to({rotation:892.7923},0).wait(1).to({regX:-0.1,rotation:893.8871,x:365.8},0).wait(1).to({regX:0,rotation:894.9814,x:365.6,y:-15.65},0).wait(1).to({regY:5,rotation:896.077,x:365.65,y:-15.75},0).wait(1).to({regX:-0.1,regY:4.9,scaleX:1.4684,rotation:897.1717,x:365.8,y:-15.6},0).wait(1).to({regX:0,scaleY:1.4648,rotation:898.2665,x:365.65},0).wait(1).to({regX:-0.1,scaleX:1.4685,scaleY:1.4649,rotation:899.3614,x:365.75,y:-15.65},0).wait(1).to({rotation:900.4542},0).wait(1).to({regX:0,rotation:901.5489,x:365.65},0).wait(1).to({rotation:902.6443,y:-15.6},0).wait(1).to({scaleX:1.4684,rotation:903.7388},0).wait(1).to({regX:-0.1,regY:5,scaleX:1.4685,rotation:904.8341,x:365.8,y:-15.75},0).wait(1).to({regX:0,regY:4.9,rotation:905.9281,x:365.65,y:-15.65},0).wait(1).to({regX:-0.1,rotation:907.0237,x:365.8},0).wait(1).to({regX:0,rotation:908.1183,x:365.65},0).wait(1).to({rotation:909.2129,x:365.7},0).wait(1).to({rotation:910.3077,y:-15.6},0).wait(1).to({scaleX:1.4684,rotation:911.4029,x:365.65,y:-15.65},0).wait(1).to({scaleY:1.4648,rotation:912.4975,y:-15.6},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:913.5927,x:365.7,y:-15.7},0).wait(1).to({regX:-0.1,scaleX:1.4684,rotation:914.6871,x:365.8,y:-15.6},0).wait(1).to({regX:0,rotation:915.7825,x:365.65,y:-15.65},0).wait(1).to({rotation:916.8766,x:365.7,y:-15.6},0).wait(1).to({rotation:917.9712,y:-15.65},0).wait(1).to({rotation:919.0659,x:365.65},0).wait(1).to({scaleX:1.4685,rotation:920.1612,x:365.7},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:921.2556},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:922.3508,x:365.75},0).wait(1).to({regX:-0.1,scaleX:1.4684,scaleY:1.4648,rotation:923.446,x:365.8},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:924.5409,x:365.7},0).wait(1).to({scaleX:1.4684,rotation:925.6356},0).wait(1).to({scaleX:1.4685,rotation:926.7305,x:365.75},0).wait(1).to({regX:-0.1,scaleX:1.4684,rotation:927.8247,x:365.85,y:-15.6},0).wait(1).to({regX:0,rotation:928.9196,x:365.7,y:-15.65},0).wait(1).to({scaleY:1.4648,rotation:930.0148,y:-15.6},0).wait(1).to({scaleY:1.4649,rotation:931.1094,y:-15.65},0).wait(1).to({rotation:932.2046,y:-15.6},0).wait(1).to({scaleY:1.4648,rotation:933.2997,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:934.3941},0).wait(1).to({scaleY:1.4648,rotation:935.489},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:936.5838},0).wait(1).to({regX:-0.1,regY:5,scaleX:1.4684,rotation:937.6783,x:365.9},0).wait(1).to({regX:0.1,regY:4.9,rotation:938.7735,x:365.65,y:-15.75},0).wait(1).to({regX:0,rotation:939.8682,x:365.7,y:-15.6},0).wait(1).to({scaleY:1.4648,rotation:940.963,x:365.8},0).wait(1).to({regX:0.1,rotation:942.0581,x:365.7,y:-15.75},0).wait(1).to({regX:0,rotation:943.1533,x:365.75,y:-15.65},0).wait(1).to({rotation:944.2475},0).wait(1).to({regX:-0.1,scaleY:1.4649,rotation:945.3427,x:365.85,y:-15.55},0).wait(1).to({regX:0,scaleY:1.4648,rotation:946.438,x:365.8,y:-15.65},0).wait(1).to({scaleY:1.4649,rotation:947.5325,x:365.75},0).wait(1).to({rotation:948.6272,x:365.8},0).wait(1).to({scaleY:1.4648,rotation:949.7223,x:365.85},0).wait(1).to({rotation:950.8171,x:365.8},0).wait(1).to({scaleY:1.4649,rotation:951.9118},0).wait(1).to({scaleY:1.4648,rotation:953.0069},0).wait(1).to({scaleY:1.4649,rotation:954.1012,y:-15.6},0).wait(1).to({regX:-0.1,rotation:955.1957,x:365.85,y:-15.55},0).wait(1).to({regX:0,scaleX:1.4685,rotation:956.2911,x:365.75,y:-15.65},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:957.3859,x:365.8,y:-15.6},0).wait(1).to({rotation:958.4802,y:-15.65},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:959.576},0).wait(1).to({scaleX:1.4684,rotation:960.67,y:-15.6},0).wait(1).to({scaleX:1.4685,rotation:961.7655,y:-15.65},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:962.8597,x:365.85,y:-15.6},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:963.9552,x:365.75,y:-15.75},0).wait(1).to({rotation:965.0497,y:-15.8},0).wait(1).to({regX:0,rotation:966.144,x:365.8,y:-15.65},0).wait(1).to({scaleY:1.4648,rotation:967.2393,x:365.75},0).wait(1).to({scaleY:1.4649,rotation:968.3345,x:365.8},0).wait(1).to({scaleY:1.4648,rotation:969.4294,y:-15.6},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:970.5232,y:-15.65},0).wait(1).to({regY:5,rotation:971.6187,x:365.95},0).wait(1).to({regY:4.9,scaleX:1.4684,scaleY:1.4648,rotation:972.7138,x:365.8},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:973.8083,x:365.85,y:-15.6},0).wait(1).to({regX:0.1,rotation:974.9034,x:365.8,y:-15.75},0).wait(1).to({scaleX:1.4684,rotation:975.9979,x:365.75},0).wait(1).to({regX:0,scaleX:1.4685,rotation:977.0926,x:365.8,y:-15.65},0).wait(1).to({rotation:978.1877,y:-15.6},0).wait(1).to({rotation:979.2825},0).wait(1).to({regX:0.1,scaleX:1.4684,scaleY:1.4648,rotation:980.3773,x:365.85,y:-15.75},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:981.4716,y:-15.6},0).wait(1).to({rotation:982.5678,x:365.8},0).wait(1).to({regX:0.1,scaleX:1.4684,rotation:983.6619,x:365.85,y:-15.75},0).wait(1).to({scaleX:1.4685,rotation:984.7567},0).wait(1).to({regX:0,rotation:985.852,x:365.8,y:-15.6},0).wait(1).to({rotation:986.9458,y:-15.65},0).wait(1).to({regX:0.1,rotation:988.0408,y:-15.75},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:989.1358,x:365.85,y:-15.7},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:990.2292,y:-15.6},0).wait(1).to({rotation:991.3239,y:-15.65},0).wait(1).to({rotation:992.4185,x:365.8,y:-15.6},0).wait(1).to({regX:0.1,scaleX:1.4684,scaleY:1.4648,rotation:993.5139,y:-15.75},0).wait(1).to({regX:0,scaleX:1.4685,scaleY:1.4649,rotation:994.6083,x:365.85,y:-15.6},0).wait(1).to({rotation:995.7031},0).wait(1).to({regX:0.1,rotation:996.7983,y:-15.75},0).wait(1).to({regX:0,rotation:997.8928,x:365.8,y:-15.6},0).wait(1).to({rotation:998.9879,x:365.85},0).wait(1).to({regX:0.1,rotation:1000.0828,y:-15.75},0).wait(1).to({regX:0,rotation:1001.1772,y:-15.6},0).wait(1).to({scaleX:1.4684,scaleY:1.4648,rotation:1002.2719,y:-15.55},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:1003.3668,x:365.9,y:-15.7},0).wait(1).to({scaleX:1.4685,rotation:1004.462},0).wait(1).to({regX:0,scaleX:1.4684,rotation:1005.5576,x:365.85,y:-15.55},0).wait(1).to({rotation:1006.6521,y:-15.6},0).wait(1).to({scaleX:1.4685,rotation:1007.7466,y:-15.55},0).wait(1).to({rotation:1008.8411,y:-15.6},0).wait(1).to({regX:0.1,scaleX:1.4684,rotation:1009.9357,x:365.9,y:-15.7},0).wait(1).to({regX:0,scaleX:1.4685,rotation:1011.0309,x:365.85,y:-15.55},0).wait(1).to({regX:0.1,scaleX:1.4684,scaleY:1.4648,rotation:1012.1259,x:365.9,y:-15.75},0).wait(1).to({regX:0,scaleY:1.4649,rotation:1013.2206,x:365.85,y:-15.55},0).wait(1).to({rotation:1014.3152},0).wait(1).to({rotation:1015.41,x:365.9},0).wait(1).to({scaleY:1.4648,rotation:1016.5053,x:365.8},0).wait(1).to({scaleX:1.4685,scaleY:1.4649,rotation:1017.5994,x:365.85,y:-15.5},0).wait(1).to({regX:0.1,scaleX:1.4684,rotation:1018.6952,x:365.9,y:-15.7},0).wait(1).to({scaleY:1.4648,rotation:1019.7894,x:365.95},0).wait(1).to({regX:0,rotation:1020.8845,x:365.85,y:-15.55},0).wait(1).to({scaleY:1.4649,rotation:1021.9796,y:-15.6},0).wait(1).to({scaleY:1.4648,rotation:1023.0741,x:365.8},0).wait(1).to({rotation:1024.1693,x:365.85,y:-15.5},0).wait(1).to({scaleY:1.4649,rotation:1025.2636},0).wait(1).to({scaleY:1.4648,rotation:1026.3589,x:365.9,y:-15.55},0).wait(1).to({regX:0.1,rotation:1027.4535,y:-15.65},0).wait(1).to({rotation:1028.5484},0).wait(1).to({rotation:1029.6435,x:365.95,y:-15.6},0).wait(1).to({regX:0,rotation:1030.7378,x:365.85,y:-15.55},0).wait(1).to({regX:0.1,rotation:1031.8328,x:365.95},0).wait(1).to({regX:0,scaleY:1.4649,rotation:1032.9274,x:365.85,y:-15.5},0).wait(1).to({regX:0.1,scaleY:1.4648,rotation:1034.0225,x:365.95,y:-15.55},0).wait(1).to({rotation:1035.1173,y:-15.6},0).wait(1).to({rotation:1036.2121,x:365.9,y:-15.55},0).wait(1).to({rotation:1037.3074,x:365.95,y:-15.5},0).wait(1).to({regX:0,rotation:1038.4018,x:365.8},0).wait(1).to({scaleY:1.4649,rotation:1039.4961},0).wait(1).to({rotation:1040.5913,x:365.85,y:-15.45},0).wait(1).to({rotation:1041.6856},0).wait(1).to({rotation:1042.7811,y:-15.5},0).wait(1).to({rotation:1043.8764,y:-15.45},0).wait(1).to({scaleY:1.4648,rotation:1044.9703,x:365.8,y:-15.4},0).wait(1).to({rotation:1046.0653,x:365.85,y:-15.45},0).wait(1).to({regX:0.1,scaleY:1.4649,rotation:1047.1605,x:365.9,y:-15.55},0).wait(1).to({regX:0,scaleY:1.4648,rotation:1048.2556,x:365.85,y:-15.5},0).wait(1).to({regX:0.1,rotation:1049.3502,x:365.95,y:-15.45},0).to({_off:true},1).wait(35));

	// Layer_9
	this.instance_5 = new lib.whitebg("synched",0);
	this.instance_5.setTransform(278.8,199.65);
	this.instance_5._off = true;
	var instance_5Filter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance_5.filters = [instance_5Filter_1];
	this.instance_5.cache(-294,-211,589,422);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(247).to({_off:false},0).to({alpha:0.1992},14).wait(142).to({alpha:0.1094},0).to({startPosition:0},152).to({alpha:0.6211},4).to({startPosition:0},92).wait(95).to({startPosition:0},0).to({startPosition:0},40).to({_off:true},998).wait(35));
	this.timeline.addTween(cjs.Tween.get(instance_5Filter_1).wait(247).to(new cjs.ColorFilter(0.55859375,0.91015625,1,1,0,0,0,0), 14).wait(142).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).wait(152).to(new cjs.ColorFilter(0.12890625,0,1,1,0,0,255,0), 4).wait(187).to(new cjs.ColorFilter(0.6015625,0.16015625,0.26953125,1,0,29,56,0), 40).wait(35));

	// Layer_1
	this.instance_6 = new lib.sky();
	this.instance_6.setTransform(412.85,299.8,0.55,0.7144,180,0,0,2.8,-0.7);

	this.instance_7 = new lib.sky();
	this.instance_7.setTransform(138.9,299.8,0.55,0.7144,0,180,0,2.8,-0.7);

	this.instance_8 = new lib.sky();
	this.instance_8.setTransform(412.5,100.2,0.55,0.7144,0,0,180,2.8,-0.7);

	this.instance_9 = new lib.sky();
	this.instance_9.setTransform(138.8,100.2,0.55,0.7143,0,0,0,2.6,-0.7);

	this.instance_10 = new lib.sky();
	this.instance_10.setTransform(188.15,99.25,0.4101,0.739,-90,0,0,2.6,-0.2);

	this.instance_11 = new lib.sky();
	this.instance_11.setTransform(187.85,304.95,0.4101,0.739,0,-90,90,3.1,-0.2);

	this.instance_12 = new lib.sky();
	this.instance_12.setTransform(394.5,99,0.4101,0.739,0,90,-90,2.3,-0.8);

	this.instance_13 = new lib.sky();
	this.instance_13.setTransform(394.05,304.95,0.4101,0.7389,90,0,0,3,-0.7);

	this.instance_14 = new lib.darksky();
	this.instance_14.setTransform(270.45,314.25,1.1849,0.7694,0,180,0,-1.4,-2.5);

	this.instance_15 = new lib.darksky();
	this.instance_15.setTransform(270.95,98.7,1.1851,0.7694,0,0,0,-1.4,-1.4);

	this.instance_16 = new lib.skylong();
	this.instance_16.setTransform(138.2,-4,0.8174,0.9871,0,-90,90,1.7,-1);

	this.instance_17 = new lib.skylong();
	this.instance_17.setTransform(411.65,-4,0.8174,0.9871,90,0,0,1.7,-0.8);

	this.instance_18 = new lib.skylong();
	this.instance_18.setTransform(411.85,403.25,0.8174,0.9871,0,90,-90,1.7,-1);

	this.instance_19 = new lib.skylong();
	this.instance_19.setTransform(138.4,403.25,0.8174,0.9871,-90,0,0,1.7,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9,p:{regX:2.6,regY:-0.7,scaleX:0.55,scaleY:0.7143,rotation:0,x:138.8,y:100.2,skewX:0,skewY:0}},{t:this.instance_8,p:{regX:2.8,regY:-0.7,scaleX:0.55,scaleY:0.7144,skewX:0,skewY:180,x:412.5,y:100.2,rotation:0}},{t:this.instance_7,p:{regY:-0.7,scaleX:0.55,scaleY:0.7144,skewX:180,skewY:0,x:138.9,y:299.8,regX:2.8,rotation:0}},{t:this.instance_6,p:{regX:2.8,regY:-0.7,scaleX:0.55,scaleY:0.7144,rotation:180,x:412.85,y:299.8,skewX:0,skewY:0}}]},247).to({state:[{t:this.instance_9,p:{regX:3.1,regY:0.1,scaleX:0.8991,scaleY:1.1677,rotation:-31.9475,x:9.5,y:182.5,skewX:0,skewY:0}},{t:this.instance_8,p:{regX:2.4,regY:0.2,scaleX:0.8991,scaleY:1.1679,skewX:-31.9479,skewY:148.0534,x:389.35,y:-54.4,rotation:0}},{t:this.instance_7,p:{regY:-1.5,scaleX:0.8991,scaleY:1.1679,skewX:148.0521,skewY:-31.9466,x:182.2,y:459.45,regX:2.8,rotation:0}},{t:this.instance_6,p:{regX:2.5,regY:-1.4,scaleX:0.899,scaleY:1.1679,rotation:148.0521,x:562.35,y:222.2,skewX:0,skewY:0}}]},156).to({state:[{t:this.instance_13,p:{y:304.95,regX:3,regY:-0.7,scaleX:0.4101,scaleY:0.7389,rotation:90,x:394.05,skewX:0,skewY:0}},{t:this.instance_12,p:{y:99,regX:2.3,regY:-0.8,scaleX:0.4101,scaleY:0.739,skewX:90,skewY:-90,x:394.5}},{t:this.instance_11,p:{y:304.95,regX:3.1,regY:-0.2,scaleX:0.4101,scaleY:0.739,skewX:-90,skewY:90,x:187.85}},{t:this.instance_10,p:{y:99.25,regX:2.6,regY:-0.2,scaleX:0.4101,scaleY:0.739,rotation:-90,x:188.15,skewX:0,skewY:0}},{t:this.instance_9,p:{regX:2.5,regY:-0.6,scaleX:0.4101,scaleY:0.7371,rotation:0,x:-18.8,y:98.85,skewX:90,skewY:-90}},{t:this.instance_8,p:{regX:3.1,regY:-0.6,scaleX:0.4101,scaleY:0.7358,skewX:0,skewY:0,x:-18.95,y:304.5,rotation:90}},{t:this.instance_7,p:{regY:-0.1,scaleX:0.4101,scaleY:0.7327,skewX:0,skewY:0,x:601.3,y:98.9,regX:2.3,rotation:-90}},{t:this.instance_6,p:{regX:3,regY:-0.2,scaleX:0.4101,scaleY:0.7326,rotation:0,x:600.95,y:304.4,skewX:-90,skewY:90}}]},1).to({state:[{t:this.instance_13,p:{y:306.25,regX:3,regY:-0.7,scaleX:0.4101,scaleY:0.7389,rotation:90,x:394.05,skewX:0,skewY:0}},{t:this.instance_12,p:{y:100.3,regX:2.3,regY:-0.8,scaleX:0.4101,scaleY:0.739,skewX:90,skewY:-90,x:394.5}},{t:this.instance_11,p:{y:306.25,regX:3.1,regY:-0.2,scaleX:0.4101,scaleY:0.739,skewX:-90,skewY:90,x:187.85}},{t:this.instance_10,p:{y:100.55,regX:2.6,regY:-0.2,scaleX:0.4101,scaleY:0.739,rotation:-90,x:188.15,skewX:0,skewY:0}},{t:this.instance_9,p:{regX:2.5,regY:-0.6,scaleX:0.4101,scaleY:0.7371,rotation:0,x:-18.8,y:100.15,skewX:90,skewY:-90}},{t:this.instance_8,p:{regX:3.1,regY:-0.6,scaleX:0.4101,scaleY:0.7358,skewX:0,skewY:0,x:-18.95,y:305.8,rotation:90}},{t:this.instance_7,p:{regY:-0.1,scaleX:0.4101,scaleY:0.7327,skewX:0,skewY:0,x:601.3,y:100.2,regX:2.3,rotation:-90}},{t:this.instance_6,p:{regX:3,regY:-0.2,scaleX:0.4101,scaleY:0.7326,rotation:0,x:600.95,y:305.7,skewX:-90,skewY:90}}]},1).to({state:[{t:this.instance_13,p:{y:302.35,regX:3,regY:-0.7,scaleX:0.4101,scaleY:0.7389,rotation:90,x:394.05,skewX:0,skewY:0}},{t:this.instance_12,p:{y:96.4,regX:2.3,regY:-0.8,scaleX:0.4101,scaleY:0.739,skewX:90,skewY:-90,x:394.5}},{t:this.instance_11,p:{y:302.35,regX:3.1,regY:-0.2,scaleX:0.4101,scaleY:0.739,skewX:-90,skewY:90,x:187.85}},{t:this.instance_10,p:{y:96.65,regX:2.6,regY:-0.2,scaleX:0.4101,scaleY:0.739,rotation:-90,x:188.15,skewX:0,skewY:0}},{t:this.instance_9,p:{regX:2.5,regY:-0.6,scaleX:0.4101,scaleY:0.7371,rotation:0,x:-18.8,y:96.25,skewX:90,skewY:-90}},{t:this.instance_8,p:{regX:3.1,regY:-0.6,scaleX:0.4101,scaleY:0.7358,skewX:0,skewY:0,x:-18.95,y:301.9,rotation:90}},{t:this.instance_7,p:{regY:-0.1,scaleX:0.4101,scaleY:0.7327,skewX:0,skewY:0,x:601.3,y:96.3,regX:2.3,rotation:-90}},{t:this.instance_6,p:{regX:3,regY:-0.2,scaleX:0.4101,scaleY:0.7326,rotation:0,x:600.95,y:301.8,skewX:-90,skewY:90}}]},1).to({state:[{t:this.instance_13,p:{y:249.45,regX:3.4,regY:-0.6,scaleX:0.6274,scaleY:1.1302,rotation:63.0399,x:487.65,skewX:0,skewY:0}},{t:this.instance_12,p:{y:-31.6,regX:1.6,regY:-0.6,scaleX:0.6274,scaleY:1.1303,skewX:63.0375,skewY:-116.9595,x:345.2}},{t:this.instance_11,p:{y:392.9,regX:3.9,regY:-0.7,scaleX:0.6274,scaleY:1.1303,skewX:-116.9625,skewY:63.0405,x:206.25}},{t:this.instance_10,p:{y:112.05,regX:1.9,regY:-0.7,scaleX:0.6274,scaleY:1.1303,rotation:-116.9625,x:63.9,skewX:0,skewY:0}},{t:this.instance_9,p:{regX:2,regY:-0.8,scaleX:0.6274,scaleY:1.1275,rotation:0,x:-218.35,y:255.05,skewX:63.0368,skewY:-116.9577}},{t:this.instance_8,p:{regX:3.6,regY:-1.1,scaleX:0.6274,scaleY:1.1255,skewX:0,skewY:0,x:-75.7,y:535.55,rotation:63.0382}},{t:this.instance_7,p:{regY:-0.1,scaleX:0.6274,scaleY:1.1206,skewX:0,skewY:0,x:627.2,y:-175.25,regX:2.2,rotation:-116.9617}},{t:this.instance_6,p:{regX:3.8,regY:-0.1,scaleX:0.6274,scaleY:1.1205,rotation:0,x:769.5,y:105.25,skewX:-116.9607,skewY:63.0392}}]},151).to({state:[{t:this.instance_13,p:{y:400.85,regX:2.5,regY:-0.2,scaleX:0.8539,scaleY:1.2355,rotation:0,x:469.2,skewX:2.0631,skewY:3.5767}},{t:this.instance_12,p:{y:373.55,regX:2.7,regY:-0.2,scaleX:0.8539,scaleY:1.2357,skewX:2.0629,skewY:-176.4214,x:41.3}},{t:this.instance_11,p:{y:745.65,regX:2.9,regY:-0.8,scaleX:0.8539,scaleY:1.2357,skewX:-177.9371,skewY:3.5786,x:456.95}},{t:this.instance_10,p:{y:718.5,regX:2.8,regY:-1,scaleX:0.8538,scaleY:1.2357,rotation:0,x:29.6,skewX:-177.9371,skewY:-176.4218}},{t:this.instance_9,p:{regX:2.8,regY:-0.6,scaleX:0.8538,scaleY:1.2325,rotation:0,x:16.35,y:1064.05,skewX:2.0632,skewY:-176.4218}},{t:this.instance_8,p:{regX:2.9,regY:-0.7,scaleX:0.8539,scaleY:1.2304,skewX:2.0625,skewY:3.5786,x:443.65,y:1091,rotation:0}},{t:this.instance_7,p:{regY:-0.4,scaleX:0.8539,scaleY:1.2251,skewX:-177.9364,skewY:-176.4214,x:53.55,y:28,regX:2.9,rotation:0}},{t:this.instance_6,p:{regX:2.6,regY:-0.3,scaleX:0.8539,scaleY:1.225,rotation:0,x:480.6,y:55,skewX:-177.9347,skewY:3.5767}}]},1).to({state:[{t:this.instance_15,p:{regX:-1.4,regY:-1.4,scaleX:1.1851,scaleY:0.7694,rotation:0,x:270.95,y:98.7}},{t:this.instance_14,p:{regX:-1.4,regY:-2.5,scaleX:1.1849,scaleY:0.7694,skewX:180,skewY:0,x:270.45,y:314.25}}]},1).to({state:[{t:this.instance_15,p:{regX:-3,regY:-1.8,scaleX:1.4624,scaleY:1.761,rotation:-146.159,x:147.85,y:428.75}},{t:this.instance_14,p:{regX:-3.1,regY:-2,scaleX:1.4621,scaleY:1.761,skewX:33.841,skewY:-146.1607,x:422.95,y:19.65}}]},111).to({state:[{t:this.instance_19,p:{y:403.25,scaleY:0.9871,x:138.4}},{t:this.instance_18,p:{y:403.25,scaleY:0.9871,x:411.85,regY:-1}},{t:this.instance_17,p:{y:-4,scaleY:0.9871,x:411.65}},{t:this.instance_16,p:{y:-4,regY:-1,scaleY:0.9871,x:138.2}}]},1).to({state:[{t:this.instance_19,p:{y:415.75,scaleY:0.9871,x:138.4}},{t:this.instance_18,p:{y:415.75,scaleY:0.9871,x:411.85,regY:-1}},{t:this.instance_17,p:{y:8.5,scaleY:0.9871,x:411.65}},{t:this.instance_16,p:{y:8.5,regY:-1,scaleY:0.9871,x:138.2}}]},1).to({state:[{t:this.instance_19,p:{y:405.65,scaleY:0.9871,x:138.4}},{t:this.instance_18,p:{y:405.65,scaleY:0.9871,x:411.85,regY:-1}},{t:this.instance_17,p:{y:-1.6,scaleY:0.9871,x:411.65}},{t:this.instance_16,p:{y:-1.6,regY:-1,scaleY:0.9871,x:138.2}}]},1).to({state:[{t:this.instance_19,p:{y:408.25,scaleY:2.4479,x:-63.65}},{t:this.instance_18,p:{y:408.25,scaleY:2.4479,x:614.35,regY:-1}},{t:this.instance_17,p:{y:1,scaleY:2.4479,x:613.85}},{t:this.instance_16,p:{y:1,regY:-1.1,scaleY:2.4479,x:-64.4}}]},35).to({state:[{t:this.instance_19,p:{y:408.25,scaleY:2.683,x:-96.15}},{t:this.instance_18,p:{y:408.25,scaleY:2.683,x:646.95,regY:-1}},{t:this.instance_17,p:{y:1,scaleY:2.683,x:646.4}},{t:this.instance_16,p:{y:1,regY:-1.1,scaleY:2.683,x:-96.95}}]},1).to({state:[{t:this.instance_19,p:{y:408.25,scaleY:2.6277,x:-88.45}},{t:this.instance_18,p:{y:408.25,scaleY:2.6277,x:639.55,regY:-1.1}},{t:this.instance_17,p:{y:1,scaleY:2.6277,x:638.75}},{t:this.instance_16,p:{y:1,regY:-1.1,scaleY:2.6277,x:-89.25}}]},1).to({state:[]},1074).wait(35));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance_5, startFrame:247, endFrame:247, x:-294, y:-211, w:589, h:422});
	this.filterCacheList.push({instance: this.instance_5, startFrame:248, endFrame:261, x:-294, y:-211, w:589, h:422});
	this.filterCacheList.push({instance: this.instance_5, startFrame:403, endFrame:403, x:-294, y:-211, w:589, h:422});
	this.filterCacheList.push({instance: this.instance_5, startFrame:556, endFrame:559, x:-294, y:-211, w:589, h:422});
	this.filterCacheList.push({instance: this.instance_5, startFrame:747, endFrame:786, x:-294, y:-211, w:589, h:422});
	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-197.3,-267,1219.9,1543.1);
// library properties:
lib.properties = {
	id: '70CB23A2DDADF547AEEDC97C3F006CD3',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/frame_00_delay015s.png", id:"frame_00_delay015s"},
		{src:"images/frame_01_delay015s.png", id:"frame_01_delay015s"},
		{src:"images/frame_02_delay015s.png", id:"frame_02_delay015s"},
		{src:"images/frame_03_delay015s.png", id:"frame_03_delay015s"},
		{src:"images/frame_04_delay015s.png", id:"frame_04_delay015s"},
		{src:"images/frame_05_delay015s.png", id:"frame_05_delay015s"},
		{src:"images/frame_06_delay015s.png", id:"frame_06_delay015s"},
		{src:"images/frame_07_delay015s.png", id:"frame_07_delay015s"},
		{src:"images/frame_08_delay015s.png", id:"frame_08_delay015s"},
		{src:"images/frame_09_delay015s.png", id:"frame_09_delay015s"},
		{src:"images/loadinguibar.png", id:"loadinguibar"},
		{src:"images/loadinguibox.png", id:"loadinguibox"},
		{src:"images/play.png", id:"play"},
		{src:"images/smallbox.png", id:"smallbox"},
		{src:"sounds/sburban.mp3", id:"sburban"}
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
an.compositions['70CB23A2DDADF547AEEDC97C3F006CD3'] = {
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