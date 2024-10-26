var img = document.getElementById("img");
var div = document.getElementById("imgdiv");
var audio = document.getElementById("audio");
var windyaudio = document.getElementById("windythingaudio");
var johnplay = document.getElementById("johnplay");
var johnpause = document.getElementById("johnpause");

var otherplaying = 0;

const bgstyle = document.body.style;
const johnogstyle = "float: right; border: 3px solid black;";

// cookie garbage. ignore

function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function playaudio() {
  let canplay = getCookie("canplay");
  if (canplay == "yes") {
    audio.play();
  } 
}

function yes(){
  let canplay = getCookie("canplay");
       setCookie("canplay", "yes", 30);
      
}

function no(){
  let canplay = getCookie("canplay");
   setCookie("canplay", "no", 30);  
}

function clearcookie(){
  let canplay = getCookie("canplay");
   setCookie("canplay", "DAMNIT", 30);  
}

function onloadhaha(){
  let canplay = getCookie("canplay");
 if (canplay == "yes" && audio.src !="none") {
   audio.play();
}
if (canplay == "no"){
}
 if (canplay !="yes" && canplay !="no"){
     let text;
  if (confirm("hey! can this site autoplay music? (music is spoiler-worthy)\npress ok for yes, and cancel for no \nnot all pages have autoplay... the links page always will, though") == true) {
  console.log("user said yes");
  yes();
  audio.play();
  } else {
   console.log("user said no");
   no();
  }
 }
}

 function whatsmycookie(){
   let canplay = getCookie("canplay");
   alert(`your cookie is currently set to ${canplay}`);
 }

// stuff

function windythingplay(){
  if (otherplaying == 0){
  windyaudio.play();
  johnplay.style = "display: none;";
  johnpause.style = johnogstyle;
  }
}

function windystop(){
  if (windyaudio.duration >= windyaudio.currentTime){
  windyaudio.pause();
  windyaudio.currentTime = 0;
  johnpause.style = "display: none;";
  johnplay.style = johnogstyle;
  }
  else{
    windythingplay();
  }
}

function pregame(){
windystop();
img.src = "/homestuck/hscrop/pregamejohn.gif";
div.style = "display: inline;";
bgstyle.backgroundImage = "url(/homestuck/hscrop/johnroom2.gif)";
bgstyle.backgroundPosition = "center top";
audio.src = "/homestuck/audio/showtimepiano.mp3";
otherplaying = 1;
onloadhaha();
}

function firstalc(){
windystop();
img.src = "/homestuck/hscrop/wiseguyslimesuit.gif";
div.style = "display: inline;";
bgstyle.backgroundImage = "url(/homestuck/hscrop/lowasbg.gif)";
bgstyle.backgroundPosition = "center bottom";
audio.src = "/homestuck/audio/doctorog.mp3";
otherplaying = 1;
onloadhaha();
}

function hide(){
windystop();
div.style = "display: none;";
bgstyle.backgroundImage = "url(/homestuck/hscrop/introbg.gif)";
bgstyle.backgroundPosition = "center top";
audio.src = "";
otherplaying = 0;
}