let params = new URLSearchParams(location.search);
let audio = document.getElementById("audio");
let playb = document.getElementById("playbutton");
let pauseb = document.getElementById("pausebutton");
let timer = document.getElementById("htmltime");
let links = document.getElementById("trackselector");
let descblock = document.getElementById("DESGARGLE");
let currentindex;
let songs;

var audiovol = 1;
var audiotime = audio.currentTime;
var durmin = '3:09';

function changeurl(get)
{
  var stateObj = { foo: "bar" };
   history.pushState(stateObj, "page 2", "tracks?s=" + get);
}

function play(){
  playb.style.display = 'none';
  pauseb.style.display = 'inline';
  playing = true;
  audio.play();
}

function pause(){
  pauseb.style.display = 'none';
  playb.style.display = 'inline';
  playing = false;
  audio.pause();
  var audiotime = audio.currentTime;
}

function stop(){
  audio.pause();
  audio.currentTime = 0;
  pauseb.style.display = 'none';
  playb.style.display = 'inline';
}

function onkey(){
  if (event.keyCode == 38) { // up
    audiovol += 0.1;
    audio.volume = audiovol;
    console.log(`audio is at ${audiovol}`);

  }
  else if(event.keyCode == 40){ // down
    audiovol -= 0.1;
    audio.volume = audiovol;
    console.log(`audio is at ${audiovol}`);
  }
  else if(event.keyCode == 37){ // left (back)
  audio.currentTime -= 4.5;
  console.log(`skipping back to ${audio.currentTime}`);
  timeslap();
  }
  else if(event.keyCode == 39){ // right (forward)
  audio.currentTime += 3.0;
  console.log(`skipping to ${audio.currentTime}`);
  timeslap();
  }
  else if(event.keyCode == 32 && playing == true || event.keyCode == 75 && playing == true){ // space (pause)
    pause();
    console.log(`time is at ${audio.currentTime}!`);
    timeslap();
  }
    else if(event.keyCode == 32 && playing == false || event.keyCode == 75 && playing == false){ // space (play)
    play();
  }
}

function timeslap(){
var timehell = Math.round(audio.currentTime);
var durhell = Math.round(audio.duration);
// console.log(`time is at ${timehell}/${durhell}!`);
timer.innerHTML=(`time: ${timehell}/${durhell} seconds (${durmin})`);

    setTimeout(timeslap, 1000);
}

timeslap();

document.querySelector("html").addEventListener("keydown", onkey);

document.addEventListener("keydown", function (e) {
  if([37,38,39,40].indexOf(e.keyCode) > -1){
    e.preventDefault();
  }
}, false);

  fetch("/xdx3xp/js/songs.json", {cache: "no-cache"})
    .then((response) => response.json())
    .then((json) => glojson = json)
    .then((json) => songs = json.songs)
    .then((json) => currentindex = json.length -1)
    .then((pages) => start(true));

function start(firstrun){
 
 if (firstrun == true){
   const index = songs.findIndex(e => e.url === params.get("song"));
   if (index > -1) {
   changesong(index);
   }
   else{
     changesong(currentindex);
   } 
 firstrun = false;
 }
  
  if (currentindex !=0){
  addlink(currentindex);
  currentindex -= 1;
  start();
  }
  else{
  addlink(0);
  } 
}

function addlink(currentnum){
var newlink = document.createElement("a");
var a = document.createElement("a");
a.innerHTML = `&nbsp;`;
newlink.innerHTML =  `<span>`+songs[currentnum].title+`</span>`;
newlink.href = "javascript:void(0);";
newlink.onclick = changesong.bind(newlink, currentnum);

links.appendChild(newlink);
  if(currentnum != 0){
  links.appendChild(a);
  }
}

function changesong(inputnum){
  document.getElementById("title").innerHTML = songs[inputnum].title;
  document.getElementById("audio").src = songs[inputnum].songsrc;
  document.getElementById("img").src = songs[inputnum].coversrc;
  stop();
  durmin = songs[inputnum].durmin;
  changeurl(songs[inputnum].url);
  
  if (songs[inputnum].hasOwnProperty("desc")){
    descblock.innerHTML = songs[inputnum].desc;
  }
  else{
    descblock.innerHTML = `songs are in reverse chronological order -
  <br>newest to oldest
  <br>controls:
  <br>up and down arrows change volume
  <br>left and right arrows let you skip
  <br>space and k pause`;
  }
  
}

function changeurl(get){
var stateObj = { foo: "bar" };
   history.pushState(stateObj, "page 2", "tracks?song=" + get);
}