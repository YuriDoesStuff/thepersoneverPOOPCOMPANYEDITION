var img = document.getElementById("img");
var div = document.getElementById("imgdiv");
var audio = document.getElementById("audio");
const bgstyle = document.body.style;

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

function pregame(){
img.src = "/homestuck/hscrop/pregamerose.gif";
div.style = "display: inline;";
bgstyle.backgroundImage = "url(/homestuck/hscrop/pregamerosebg.gif)";
bgstyle.backgroundPosition = "center top";
audio.src = "/homestuck/audio/aggrieveviolin.mp3";

onloadhaha();
}

function dream(){
img.src = "/homestuck/hscrop/dreamrose.gif";
div.style = "display: inline;";
bgstyle.backgroundImage = "url(/homestuck/hscrop/rosedersebg.gif)";
bgstyle.backgroundPosition = "center bottom";
audio.src = "/homestuck/audio/dersedreamers.mp3";

onloadhaha();
}

function firstalc(){
img.src = "/homestuck/hscrop/rosealcsesh.gif";
div.style = "display: inline;";
bgstyle.backgroundImage = "url(/homestuck/hscrop/lolar.gif)";
bgstyle.backgroundPosition = "center center";
audio.src = "/homestuck/audio/thenewextreme.mp3"; //replace later probably?
onloadhaha();
}


function hide(){
div.style = "display: none;";
bgstyle.backgroundImage = "url(/homestuck/hscrop/lalondebg.gif)";
bgstyle.backgroundPosition = "center top";
audio.src = "";
}