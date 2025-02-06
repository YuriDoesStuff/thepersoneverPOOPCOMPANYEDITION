var jade = document.createElement("img");
var turnl = document.createElement("img");
var turnr = document.createElement("img");

var checkdesk = document.createElement("img");
var questionmark = document.createElement("img");
var pepper = document.createElement("img");
var cdpic = document.createElement("img");
var crt = document.createElement("img");
var downstairs = document.createElement("img");
var upstairs = document.createElement("img");
var forward = document.createElement("img");
var back = document.createElement("img");
var weirdboxes = document.createElement("img");
var neocities = document.createElement("img");

var temp = document.createElement("img");
var temp2 = document.createElement("img");
var temp3 = document.createElement("img");
var temp4 = document.createElement("img");
  checkdesk.src = "images/checkdesk.png";
  cdpic.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/CD_icon_test.svg/1200px-CD_icon_test.svg.png.png";
  turnl.src = "images/icons/turnl.png";
  turnr.src = "images/icons/turnr.png";
  downstairs.src = "images/icons/downstairs.png";
  upstairs.src = "images/icons/upstairs.png";
  forward.src = "images/icons/forward.png";
  back.src = "images/icons/back.png";
  crt.src = "images/crt.png";
  weirdboxes.src = "images/weirdboxes.png";
  neocities.src = "images/neocities.png";
  temp.src = "/randomerjunk/images/temp300.png";
  temp2.src = "/randomerjunk/images/temp300.png";
  temp3.src = "/randomerjunk/images/temp300.png";
  temp4.src = "/randomerjunk/images/temp300.png";



var audio = document.getElementById("audio");
var room = document.getElementById("room");

var playing = document.getElementById("playing");
var noplaying = document.getElementById("none");
var info = document.getElementById("info");

var textbox = document.getElementById("textbox");
var textext = document.getElementById("textext");
var startb = document.getElementById("startb");
var hell = document.getElementById("hell");

let timeouter;
var muteis = false;
var comingfrom2 = false;
var comingfromstairs = false;

function hidebuttons(){
startb.style.display = "none";
}

function hidetb(){
  textext.innerHTML = "";
textbox.style = "background-color: white;border-style: groove; border: 3px solid; width:110vh; display:none;";
}

function mute(){
  playing.style.display = 'none';
  noplaying.style.display = 'inline';
  audio.pause();
  muteis = true;
}

function play(){
  playing.style.display = 'inline';
  noplaying.style.display = 'none';
  audio.play();
  muteis = false;
}

function stop(){
  audio.pause();
  audio.currentTime = 0;
}

function showtb() {
textbox.style = "background-color: white;border-style: groove; border: 3px solid; width:110vh; display:block;";
}

// info

function jadepqinfo(){
textbox.style = "background-color: white;border-style: groove; border: 3px solid; width:110vh; display:block;";
textext.innerHTML = "audio is jade&apos;s theme &quotCarefree Victory (REMIX) ft. Spell-n-Speak&quot;, from pesterquest <br> by James Roach<br> <a href=#hidetb onclick=hidetb();>close info</a>";
}

function grassyinfo() {
    textbox.style = "background-color: white;border-style: groove; border: 3px solid; width:110vh; display:block;";
    textext.innerHTML = "audio is grassy grotto from pikmin 2 <br> by Hajime Wakai <br> <a href=#hidetb onclick=hidetb();>close info</a>";
}

function bm64info() {
    textbox.style = "background-color: white;border-style: groove; border: 3px solid; width:110vh; display:block;";
    textext.innerHTML = "audio is some bomerman 64 loop <br> by xDx3xP (me) over a year ago why am i adding this whu <br> <a href=#hidetb onclick=hidetb();>close info</a>";
}

// start

function slide() {
hell.style = "display: none;";
room.style = "width:110vh; height:70vh; background-color: white; background-image: url(https://i.imgur.com/LWf6mWt.jpg); background-size: cover; repeat: no-repeat;";
jade.src = "images/start1.png";
jade.style = "position:relative; top: -10px; left:210px;";
hidebuttons();
document.getElementById("room").appendChild(jade);
setTimeout(slide2, 12);
}

function slide2() {
jade.style = "position:relative; top: 0px; right:50px;";
setTimeout(slide3, 12);
}

function slide3() {
jade.style = "position:relative; top: 0px; left:120px;";
setTimeout(slide4, 12);
}

function slide4() {
jade.style = "position:relative; top: 0px; left:180px;";
setTimeout(slide5, 12);
}

function slide5() {
jade.style = "position:relative; top: 0px; left:260px;";
setTimeout(slide6, 24);
}

function slide6() {
jade.style = "position:relative; top: 0px; left:280px;";
setTimeout(slide7, 32);
}

function slide7() {
jade.style = "position:relative; top: 0px; left:290px;";
setTimeout(slide8, 64);
}

function slide8() {
jade.style = "position:relative; top: 0px; left:250px;";
setTimeout(slide9, 42);
}

function slide9() {
jade.style = "position:relative; top: 0px; left:190px;";
setTimeout(slide10, 42);
}

function slide10() {
jade.style = "position:relative; top: 0px; left:200px;";
setTimeout(slide11, 64);
}

function slide11() {
jade.style = "position:relative; top: 0px; left:220px;";
setTimeout(slide12, 500);
}

function slide12() {
jade.src = "images/start2.png";
jade.onload = slide13();
}

function slide13(){
textext.innerHTML = "hi? <br><br> <a href=#load1 onclick=load1();>--></a>";
textbox.style.display = "block";
}

function load1(){
jade.src = "images/start3.png";
jade.onload = slide14();
}

function slide14(){
jade.src = "images/start3.png";
textext.innerHTML = "welcome to my room i guess??? <br><br> <a href=#load2 onclick=load2();>--></a>";
textbox.style.display = "block";
}

function load2(){
jade.src = "images/start4.png";
jade.onload = slide15();
}

function slide15(){
jade.src = "images/start4.png";
textext.innerHTML = "i mean your already here so i guess you can stay and look around... <br><br> <a href=#load3 onclick=load3();>--></a>";
textbox.style.display = "block";
}

function load3(){
jade.src = "images/start5.png";
jade.onload = slide16();
}

function slide16(){
textext.innerHTML = "bleg!!!!!!! <br><br> <a href=#room1 onclick=loadbed1();>--></a>";
textbox.style.display = "block";
timeouter = startshake1();
}

function startshake1(){
jade.style = "position:relative; top: 0px; left:200px;";
timeouter = setTimeout(startshake2, 16);
}

function startshake2(){
jade.style = "position:relative; top: 0px; left:170px;";
timeouter = setTimeout(startshake3, 16);
}

function startshake3(){
  jade.style = "position:relative; top: 0px; left:240px;";
timeouter = setTimeout(startshake4, 16);
}

function startshake4(){
  jade.style = "position:relative; top: 0px; left:80px;";
timeouter = setTimeout(startshake5, 16);
}

function startshake5(){
jade.style = "position:relative; top: 0px; left:210px;";
timeouter =setTimeout(startshake1, 16);
}

// bedroom 1 

function loadbed1(){
clearTimeout(timeouter);
room.style = "width:110vh; height:70vh; background-color: white; background-image: url(https://i.imgur.com/LWf6mWt.jpg); background-size: cover; repeat: no-repeat;";

jade.src = "images/look.png";
jade.style = "position:absolute; top: 27px; right:340px; z-index: 2;";
startb.style.display = "none";

document.getElementById("room").appendChild(jade);
  
info.style.display = "inline";
  info.setAttribute('onclick', 'jadepqinfo()');

  checkdesk.style = "width:25vh; position: absolute; top: 330px; left:530px;";
  checkdesk.setAttribute('onclick', 'loadcd1()');

  turnl.style = "width: 150px;position: absolute; top: 427px; left: 350px; ";
  turnl.setAttribute('onclick', 'loadbed2()');
  
  questionmark.src = "images/questionmark.png";
  questionmark.style = "width:100px; position: absolute; top: 350px; left:370px;";
  questionmark.setAttribute('onclick', 'loadcb1()');

  downstairs.style = "width:100px; position: absolute; top: 200px; right:370px; z-index: 3;";
  downstairs.setAttribute('onclick', 'loaddownstairs1()');

  temp.style = "display: none;";
  upstairs.style = "display: none;";
  turnr.style = "display: none;";
  temp3.style = "display: none;";
  pepper.style = "display: none;";
  cdpic.style = "display: none;";
  forward.style = "display: none;";
  crt.style = "display: none;";

document.getElementById("room").appendChild(turnl);
document.getElementById("room").appendChild(checkdesk);
document.getElementById("room").appendChild(questionmark);
document.getElementById("room").appendChild(downstairs);

if (comingfrom2 == false && muteis == false) {
audio.src = "audio/pqjade.mp3";
audio.play(); 
playing.style = "display: inline;";
comingfrom2 = false
}
else if (mute == true){
comingfrom2 = false
audio.src = "audio/pqjade.mp3";
}
else {
comingfrom2 = false
}
hidetb();
}

function returnbed1() {
    hidetb();
  jade.src = "images/look.png";
  jade.style = "position:absolute; top: 27px; right:340px; z-index: 2;";
  info.style.display = "inline";
  info.setAttribute('onclick', 'jadepqinfo()');
}

// checkdesk

function loadcd1(){
jade.src = "images/oh1.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = checkdesk1();
}

function checkdesk1(){
  showtb();
info.style.display = "none";
  textext.innerHTML = "oh my desk!! <br><br> <a href=#cd1 onclick=loadcd2();>--></a>";
}

function loadcd2(){
jade.src = "images/colonP.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = checkdesk2();
}

function checkdesk2(){
  showtb();
  textext.innerHTML = "this is where i usually draw physical drawings at home... <br> most of my physical drawings are drawn at school, though <br> <a href=#cd2 onclick=loadcd3();>--></a>";
}

function loadcd3(){
jade.src = "images/Ccolon.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = checkdesk3();
}

function checkdesk3(){
  showtb();
  textext.innerHTML = "do you wanna see em? <br><br> <a href=/randomerjunk/art target=_blank();>> uh sure!</a> <br> <a href=#cd3 onclick=loadcd4();>> nah</a>";
}

function loadcd4(){
  jade.src = "images/smile.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = checkdesk4();
}

function checkdesk4(){
  showtb();
  textext.innerHTML = "alright! you can always check em out later :) <br><br> <a href=#bed1 onclick=returnbed1();>--></a>";
}

// compbed

function loadcb1(){
jade.src = "images/oh1.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = compbed1();
}

function compbed1(){
  showtb();
info.style.display = "none";
  textext.innerHTML = "oh that? <br><br> <a href=#cb2 onclick=loadcb2();>--></a>";
}

function loadcb2(){
jade.src = "images/standard.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = compbed2();
}

function compbed2(){
  showtb();
  textext.innerHTML = "thats just some computer parts. i was gonna build a computer up here using parts i already had, but i didnt have enough power cords to actually do that <br> <a href=#cb3 onclick=loadcb3();>--></a>";
}

function loadcb3(){
jade.src = "images/standard.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = compbed3();
}

function compbed3(){
  showtb();
  textext.innerHTML = "instead, i had to simply set up my old mini pc up here <br><br> <a href=#cb4 onclick=loadcb4();>--></a>";
}

function loadcb4(){
jade.src = "images/standard.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = compbed4();
}

function compbed4(){
  showtb();
  textext.innerHTML = "my god that computer has a weak cpu <br><br> <a href=#bed1 onclick=returnbed1();>--></a>";
}


// bedroom 2

function loadbed2(){
clearTimeout(timeouter);
room.style = "width:110vh; height:70vh; background-color: white; background-image: url(https://i.imgur.com/9slWHfx.jpg); background-size: cover; repeat: no-repeat;";

jade.src = "images/blehg.png";
jade.style = "position:absolute; top: 27px; right:300px;";
startb.style.display = "none";

info.style.display = "none";
info.setAttribute('onclick', 'jadepqinfo()');

  turnl.style = "display: none;";
  checkdesk.style = "display: none;";
  temp.style = "display: none;";
  questionmark.style = "display: none;";
  temp2.style = "display: none;";
  downstairs.style = "display: none;";

cdpic.style = "width: 100px;position: absolute; top: 380px; left:430px;";
cdpic.setAttribute('onclick', 'loadcds1()');  
  
turnr.style = "width: 100px;position: absolute; top: 440px; right:340px; z-index: 5;";
turnr.setAttribute('onclick', 'loadbed1()');

pepper.style = "width: 100px;position: absolute; top: 250px; left: 450px;";
pepper.setAttribute('onclick', 'loadshelf1()');
pepper.src = "images/pepper.png";

document.getElementById("room").appendChild(turnr);
document.getElementById("room").appendChild(pepper);
document.getElementById("room").appendChild(cdpic);

comingfrom2 = true;
comingfromstairs = true;

hidetb();
}

function returnbed2() {
  hidetb();
jade.src = "images/blehg.png";
 jade.style = "position:absolute; top: 27px; right:300px;";
  
info.style.display = "inline";
info.setAttribute('onclick', 'jadepqinfo()');
}

// cds

function loadcds1(){
info.style.display = "none";
jade.src = "images/oh3.png";
jade.style = "position:absolute; top: 27px; right:300px; z-index: 10;";
jade.onload = cds1();
}

function cds1(){
  showtb();
info.style.display = "none";
  textext.innerHTML = "oh yeah my shelf! <br><br> <a href=#cds2 onclick=loadcds2();>--></a>";
}

function loadcds2(){
jade.src = "images/standard.png";
jade.style = "position:absolute; top: 27px; right:300px; z-index: 10;";
jade.onload = cds2();
}

function cds2(){
  showtb();
  textext.innerHTML = "its got some ds games, and cds... as you can see <br><br> <a href=#cds3 onclick=loadcds3();>--></a>";
}

function loadcds3(){
jade.src = "images/hunch1.png";
jade.style = "position:absolute; top: 27px; right:300px; z-index: 10;";
jade.onload = cds3();
}

function cds3(){
  showtb();
  textext.innerHTML = "here&apos;s damn skippy, view-monster... <br><br> <a href=#cds4 onclick=loadcds4();>--></a>";
}

function loadcds4(){
jade.style = "position:absolute; top: 27px; right:300px; z-index: 10;";
jade.onload = cds4();
}

function cds4(){
  showtb();
  textext.innerHTML = "bad hair day, oh wait i should show you things other than cds too!! <br> here&apos;s mariokart 7, psmd, oh heres my copy of explorers of darkness :D <br> <a href=#cds5 onclick=loadcds5();>--></a>";
}

function loadcds5(){
jade.onload = cds5();
}

function cds5(){
  showtb();
  textext.innerHTML = "<a>the weird cat-blob-thing rambles at you for like a half hour about her belongings, before realizing you dont actually care about any of this</a> <p></p> <a href=#bed2 onclick=returnbed2();>--></a>";
}

// shelf

function loadshelf1(){
info.style.display = "none";
jade.src = "images/Ccolon.png";
jade.style = "position:absolute; top: 27px; right:300px; z-index: 10;";
jade.onload = shelf1();
}

function shelf1(){
  showtb();
  info.style.display = "none";
  textext.innerHTML = "heh yeah i have shelves!!!! <br><br> <a href=#bed2 onclick=loadshelf2();>--></a>";
}

function loadshelf2(){
jade.src = "images/oh1.png";
jade.style = "position:absolute; top: 27px; right:300px; z-index: 10;";
jade.onload = shelf2();
}

function shelf2(){
  showtb();
  textext.innerHTML = "im sorry theyre a little messy... i wasnt expecting you to just. <br><br> <a href=#bed2 onclick=loadshelf3();>--></a>";
}

function loadshelf3(){
jade.src = "images/popin.png";
jade.style = "position:absolute; top: 27px; right:300px; z-index: 10;";
jade.onload = shelf3();
}

function shelf3(){
  showtb();
  textext.innerHTML = "pop in there. :/ <br><br> <a href=#bed2 onclick=returnbed2();>--></a>";
}

// downstairs 1

function loaddownstairs1(){
room.style = "width:110vh; height:70vh; background-color: white; background-image: url(https://i.imgur.com/4B4oOpg.jpg); background-size: cover; repeat: no-repeat;";
jade.src = "images/hunchlook.png";
jade.style = "position:absolute; top: 27px; left:500px; z-index: 2;";

info.style.display = "inline";
info.setAttribute('onclick', 'grassyinfo()');

  checkdesk.style = "display: none;";
  downstairs.style = "display: none;";
  questionmark.style = "display: none;";
  back.style = "display: none;";
  weirdboxes.style = "display: none;";
  neocities.style = "display: none;";
    
  crt.style = "position:absolute; width: 150px;top: 340px; left:500px; z-index: 3;";
  crt.setAttribute('onclick', 'loadcrt1()');
  
  upstairs.style = "width:100px; position: absolute; top: 25px; right:550px; z-index: 3;";
  upstairs.setAttribute('onclick', 'loadbed1()');
  
  forward.style = "width:150px; position: absolute; top: 330px; right:370px; z-index: 3;";
  forward.setAttribute('onclick', 'loadcomproom()');
  
  turnl.style = "width: 150px;position: absolute; top: 427px; left: 350px;";
  turnl.setAttribute('onclick', 'loaddownstairs2()');
  
  document.getElementById("room").appendChild(forward);
  document.getElementById("room").appendChild(crt);
  document.getElementById("room").appendChild(upstairs);

if (comingfrom2 == false && muteis == false) {
 audio.src = "audio/grassygrotto.mp3";
 audio.play(); 
 playing.style = "display: inline;";
comingfrom2 = false
}
else if (mute == true){
audio.src = "audio/grassygrotto.mp3";
comingfrom2 = false
}
else {
comingfrom2 = false
}

hidetb();
}

function returndownstairs1() {
  hidetb();
jade.src = "images/hunchlook.png";
jade.style = "position:absolute; top: 27px; left:500px; z-index: 2;";

  
info.style.display = "inline";
info.setAttribute('onclick', 'grassyinfo()');
}

// crt

function loadcrt1(){
info.style.display = "none";
jade.src = "images/standard.png";
jade.style = "position:relative; top: -7vh; right:46vh; z-index: 10;";
jade.onload = crtslide1();
}

function crtslide1() {
jade.style = "position:relative; top: -7vh; right:43vh; z-index: 10;";
setTimeout(crtslide2, 12);
}

function crtslide2() {
jade.style = "position:relative; top: -7vh; right:38vh; z-index: 10;";
setTimeout(crtslide3, 12);
}

function crtslide3() {
jade.style = "position:relative; top: -7vh; right:10vh; z-index: 10;";
setTimeout(crtslide4, 12);
}

function crtslide4() {
jade.style = "position:relative; top: -7vh; left:10vh; z-index: 10;";
setTimeout(crtslide4, 12);
}

function crtslide4() {
jade.style = "position:relative; top: -7vh; left:30vh; z-index: 10;";
setTimeout(crtslide5, 24);
}

function crtslide5() {
jade.style = "position:relative; top: -7vh; left:34vh; z-index: 10;";
setTimeout(crtslide6, 24);
}

function crtslide6() {
jade.style = "position:relative; top: -7vh; left:36vh; z-index: 10;";
setTimeout(crtslide7, 24);
}

function crtslide7() {
jade.style = "position:relative; top: -7vh; left:37vh; z-index: 10;";
setTimeout(crtslide8, 46);
}

function crtslide8() {
jade.style = "position:relative; top: -7vh; left:39vh; z-index: 10;";
setTimeout(crtslide9, 64);
}

function crtslide9() {
jade.style = "position:relative; top: -7vh; left:40vh; z-index: 10;";
setTimeout(crtslide10, 128);
}

function crtslide10() {
jade.style = "position:relative; top: -7vh; left:39vh; z-index: 10;";
setTimeout(crtslide11, 64);
}

function crtslide11() {
jade.style = "position:relative; top: -7vh; left:38vh; z-index: 10;";
setTimeout(crt1(), 128); 
}

function crt1(){
  showtb();
info.style.display = "none";
textext.innerHTML = "thats a crt!! <br><br> <a href=#crt2 onclick=loadcrt2();>--></a>";
}

function loadcrt2(){
jade.src = "images/oh1.png";
jade.onload = crt2();
}

function crt2(){
info.style.display = "none";
textext.innerHTML = "i have this set up here so i can play pikmin without wanting to cry... <br><br> <a href=#crt3 onclick=loadcrt3();>--></a>";
}

function loadcrt3(){
jade.src = "images/oh3.png";
jade.onload = crt3();
}

function crt3(){
info.style.display = "none";
textext.innerHTML = "i have an av splitter that feeds into my radio, which has better audio quality than this tv... i also have the video portion of the av splitter plugged into a AV to COAX<br>converter <br> <a href=#crt4 onclick=loadcrt4();>--></a>";
}

function loadcrt4(){
jade.src = "images/colonP.png";
jade.onload = crt4();
}

function crt4(){
info.style.display = "none";
textext.innerHTML = "id call it smart, but its not<br><br> <a href=#ds1 onclick=returndownstairs1();>--></a>";
}

// downstairs 2

function loaddownstairs2(){
room.style = "width:110vh; height:70vh; background-color: white; background-image: url(https://i.imgur.com/ZdpGahh.jpg); background-size: cover; repeat: no-repeat;";
jade.src = "images/blah.png";
jade.style = "position:absolute; top: 27px; right:320px; z-index: 2;";

info.style.display = "inline";
info.setAttribute('onclick', 'grassyinfo()');
  
  weirdboxes.style = "position:absolute; width: 150px;top: 300px; left:650px; z-index: 3;";
  weirdboxes.setAttribute('onclick', 'loadgames1()');
  
  upstairs.style = "display: none;";
  forward.style = "display: none;";
  crt.style = "display: none;";

  turnl.style = "width: 150px;position: absolute; top: 427px; left: 350px;";
  turnl.setAttribute('onclick', 'loaddownstairs1()');

  comingfrom2 = true;

  document.getElementById("room").appendChild(weirdboxes);

hidetb();
}

function returndownstairs2() {
  hidetb();
jade.src = "images/blah.png";
jade.style = "position:absolute; top: 27px; right:320px; z-index: 2;";
  
info.style.display = "inline";
info.setAttribute('onclick', 'grassyinfo()');
}

// games

function loadgames1(){
info.style.display = "none";
jade.src = "images/smile2.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = games1();
}

function games1(){
showtb();
textext.innerHTML = "oh haha thats my games collection <br><br> <a href=#games2 onclick=loadgames2();>--></a>";
}

function loadgames2(){
jade.src = "images/oh2.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = games2();
}

function games2(){
textext.innerHTML = "there are... a lot of games here <br><br> <a href=#loadgames3 onclick=loadgames3();>--></a>";
}

function loadgames3(){
jade.src = "images/standard.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = games3();
}

function games3(){
textext.innerHTML = "would you like me to show you them? <br><br> <a href=/randomerjunk/games target=_blank();>> YES PLEASE INFODUMP ME</a> <br> <a href=#games4 onclick=loadgames4();>> no thank you!</a>";
}

function loadgames4(){
jade.src = "images/colonP.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = games4();
}

function games4(){
textext.innerHTML = "ah alright <br that&apos;s fair><br> <a href=#downstairs2 onclick=returndownstairs2();>--></a>";
}

// comproom 

function loadcomproom(){
room.style = "width:110vh; height:70vh; background-color: white; background-image: url(https://i.imgur.com/UZww6Y1.jpg); background-size: cover; repeat: no-repeat;";
stop();
jade.src = "images/autism.png";
jade.style = "position:absolute; top: 27px; right:350px; z-index: 2;";

info.style.display = "inline";
info.setAttribute('onclick', 'bm64info()');

  neocities.style = "position:absolute; width: 150px;top: 200px; left:480px; z-index: 3;";
  neocities.setAttribute('onclick', 'loadpc1()');
  
  back.style = "width: 150px;position: absolute; top: 420px; left: 350px;";
  back.setAttribute('onclick', 'loaddownstairs1()');

  upstairs.style = "display: none;";
  forward.style = "display: none;";
  turnl.style = "display: none;";
  crt.style = "display: none;";

if (comingfrom2 == false && muteis == false) {
    audio.src = "https://downloads.thepersonever.net/xdx3xp/lmms/bm64loop.mp3";
    audio.play();
    playing.style = "display: inline;";
    comingfrom2 = false
}
else if (mute == true) {
    comingfrom2 = false
    audio.src = "https://downloads.thepersonever.net/xdx3xp/lmms/bm64loop.mp3";
}
else {
    comingfrom2 = false
}

  document.getElementById("room").appendChild(back);
  document.getElementById("room").appendChild(neocities);
hidetb();
}

function returncomproom() {
  hidetb();
jade.src = "images/standard.png";
jade.style = "position:absolute; top: 27px; right:300px; z-index: 2;";
  
info.style.display = "inline";
info.setAttribute('onclick', 'bm64info()');
}

// computer

function loadpc1(){
info.style.display = "none";
jade.src = "images/standard.png";
jade.style = "position:absolute; top: 27px; right:250px; z-index: 10;";
jade.onload = pc1();
}

function pc1(){
showtb();
textext.innerHTML = "those? <br><br> <a href=#notpc1 onclick=notloadpc1();>--></a>";
}

function notloadpc1() {
    info.style.display = "none";
    jade.src = "images/YAY.png";
    jade.style = "position:absolute; top: 27px; right:300px; z-index: 10;";
    jade.onload = notpc1();
}

function notpc1() {
    showtb();
    textext.innerHTML = "those are monitors for THE GREATEST COMPUTER EVER <br><br> <a href=#pc2 onclick=loadpc2();>--></a>";
}

function loadpc2(){
jade.src = "images/pootar.png";
jade.style = "position:absolute; top: 27px; right:300px; z-index: 10;";
jade.onload = pc2();
}

function pc2(){
textext.innerHTML = "its got 16 gigs of ram, a quad-channel motherboard that doesnt allow for dual channel access, an intel i7-3770, a nvidea quadro 2200k, and a STOCK LENOVO PSU AND CASE<br> <a href=#pc3 onclick=loadpc3();>--></a>";
}

function loadpc3(){
jade.src = "images/oh1.png";
jade.style = "position:absolute; top: 27px; right:270px; z-index: 10;";
jade.onload = pc3();
}

function pc3(){
textext.innerHTML = "ok but legitimately its the best computer in this house<br><br> <a href=#pc4 onclick=loadpc4();>--></a>";
}

function loadpc4(){
jade.src = "images/standard.png";
jade.style = "position:absolute; top: 27px; right:270px; z-index: 10;";
jade.onload = pc4();
}

function pc4(){
textext.innerHTML = "... <br><br> <a href=#pc5 onclick=loadpc5();>--></a>";
}

function loadpc5(){
jade.src = "images/hunch1.png";
jade.style = "position:absolute; top: 27px; right:270px; z-index: 10;";
jade.onload = pc5();
}

function pc5(){
textext.innerHTML = "hold on let me make a webpage just for this computer <br><br> <a href=#comproom onclick=returncomproom();>--></a>";
}