(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"psihouse_atlas_1", frames: [[0,0,248,78]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["psihouse_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
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


(lib.NewSymbol = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-61.8,-19.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.NewSymbol, new cjs.Rectangle(-61.8,-19.4,124,39), null);


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
	this.New_Symbol = new lib.NewSymbol();
	this.New_Symbol.name = "New_Symbol";
	this.New_Symbol.setTransform(0.1,0,1,1,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.New_Symbol).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.triange, new cjs.Rectangle(-61.8,-19.4,124,39), null);


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
p.nominalBounds = new cjs.Rectangle(-61.8,-23.3,124,46.900000000000006);


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
	this.instance = new lib.psitriangle("synched",0);
	this.instance.setTransform(62.2,23.9,1,1,0,0,0,0.1,0);

	this.psileft = new lib.psileft();
	this.psileft.name = "psileft";
	this.psileft.setTransform(30.45,121.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.psileft},{t:this.instance}]}).wait(55));

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

	this.timeline.addTween(cjs.Tween.get(this.psirightthrobber_1).wait(8).to({scaleX:0.9825,scaleY:1.0009,rotation:7.4995,x:83.725,y:168.775},0).to({_off:true},1).wait(16).to({_off:false,rotation:7.4986,x:87.7,y:165.3},0).wait(2).to({scaleY:1.0008,rotation:-112.4988,x:87.75,y:165.25},0).wait(2).to({scaleX:0.9824,rotation:-232.501,x:87.65},0).wait(3).to({rotation:-262.501,x:87.6},0).wait(7).to({scaleX:1,scaleY:1,rotation:-360,x:79.25,y:172.5},0).wait(1).to({x:77.65,y:174.2},0).wait(1).to({x:79.15,y:172.8},0).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0.6,124.7,189.6);


// stage content:
(lib.psihouse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var videoElement = parent.document.getElementById('video');
		var preloader = parent.document.getElementById('preloader');
		videoElement.addEventListener('loadeddata', (e) => {
		   //Video should now be loaded but we can add a second check
		
		   if(videoElement.readyState >= 3){
		       console.log("video's done loading");
			   preloader.style.display = 'none'
		   }
		
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(55));

	// psihouse_ai
	this.instance = new lib.psihouseai("synched",0);
	this.instance.setTransform(271.35,196.85,1,1,0,0,0,62.6,95.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(484.1,302.3,-149.5,-10.300000000000011);
// library properties:
lib.properties = {
	id: '0ACCB4DDD0F0574D84DE84879AB9D957',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/psihouse_atlas_1.png", id:"psihouse_atlas_1"}
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
an.compositions['0ACCB4DDD0F0574D84DE84879AB9D957'] = {
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