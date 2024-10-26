let params = new URLSearchParams(location.search);
let audio = document.getElementById("audio");
let playb = document.getElementById("playbutton");
let pauseb = document.getElementById("pausebutton");
let timer = document.getElementById("htmltime");

var audiovol = 1;
var audiotime = audio.currentTime;
var durmin = '2:47' ;

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

if (params.get("s") != null){
var song;
song = params.get("s");

  if (song == "stjones"){
    stjones();
  }
  else if (song == "sunsmasher"){
  sunsmasher();
  }
  else if (song == "threesidedcoin"){
  threesidedcoin();
  }
  else if (song == "dreamfuldoom"){
  dreamfuldoom();
  }
  else if (song == "sleeve"){
  sleeve();
  }
  else if (song == "amputate"){
  amputate();
  }
  else if (song == "twizzerly"){
  twizzerly();
  }
  else if (song == "rushrawr"){
  rushrawr();
  }
  else if (song == "justnotcaring"){
  justnotcaring();
  }
  else if (song == "hocotatians"){
  hocotatians();
  }
  else if (song == "extrastupid"){
  extrastupid();
  }
  else if (song == "stereoadventures"){
  stereoadventures();
  }
  else if (song == "hocotatians"){
  hocotatians();
  }
  else if (song == "augh"){
  augh();
  }
  else if (song == "welcome"){
  welcome();
  }
}

function stjones(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/fls2/stjones.mp3';
  document.getElementById("img").src = '/xdx3xp/art/stjones.png';
  document.getElementById("title").innerHTML = 'the burglary of st. jones';
  stop();
  durmin = '2:27';
  changeurl("stjones");
}

function sunsmasher(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/fls2/sunsmasher.mp3';
  document.getElementById("img").src = '/xdx3xp/art/sunsmasher.png';
  document.getElementById("title").innerHTML = 'sunsmasher (sunslammer cover)';
  stop();
  durmin = '3:02';
  changeurl("sunsmasher");
}

function threesidedcoin(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/fls/threesidedcoin.mp3';
  document.getElementById("img").src = '/xdx3xp/art/threesidedcoin.png';
  document.getElementById("title").innerHTML = 'three-sided coin';
  stop();
  durmin = '2:47';
  changeurl("threesidedcoin");
}

function dreamfuldoom(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/fls/hoaddbeta2.mp3';
  document.getElementById("img").src = '/xdx3xp/art/hoadd.png';
  document.getElementById("title").innerHTML = 'Harbinger of a Dreamful Doom (beta mix) </h1> <a href=https://www.youtube.com/watch?v=wJhKvIuhsgE target=_blank><small>((alpha here))</small></a>';
  stop();
  durmin = '3:35';
  changeurl("dreamfuldoom");
}

function sleeve(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/fls/sleeve.mp3';
  document.getElementById("img").src = '/xdx3xp/art/sleeve.png';
  document.getElementById("title").innerHTML = 'on ya sleeve';
  stop();
  durmin = '2:01';
  changeurl("sleeve");
}

function amputate(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/fls/amputate.mp3';
  document.getElementById("img").src = '/xdx3xp/art/bricks.png';
  document.getElementById("title").innerHTML = 'sorry! we had to amputate your arm';
  stop();
  durmin = '1:44';
  changeurl("amputate");
}

function twizzerly(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/fls/twizzerly.mp3';
  document.getElementById("img").src = '/xdx3xp/art/bricks.png';
  document.getElementById("title").innerHTML = 'twizzerly';
  stop();
  durmin = '2:19';
  changeurl("twizzerly");
}

function rushrawr(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/lmms/rushrawr.mp3';
  document.getElementById("img").src = '/xdx3xp/art/bricks.png';
  document.getElementById("title").innerHTML = 'rush-RAWR';
  stop();
  durmin = '1:10';
  changeurl("rushrawr");
}

function justnotcaring(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/lmms/justnotcaring.mp3';
  document.getElementById("img").src = '/xdx3xp/art/bricks.png';
  document.getElementById("title").innerHTML = '<span>adventures in just <em>not caring anymore</em></span>';
  stop();
  durmin = '1:40';
  changeurl("justnotcaring");
}

function hocotatians(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/lmms/hocotatians.mp3';
  document.getElementById("img").src = '/xdx3xp/art/bricks.png';
  document.getElementById("title").innerHTML = '<span>hocotatians...</span>';
  stop();
  durmin = '1:17';
  changeurl("hocotatians");
}

function extrastupid(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/lmms/extrastupid.mp3';
  document.getElementById("img").src = '/images/stupid.jpg';
  document.getElementById("title").innerHTML = '<span>extra stupid</span>';
  stop();
  durmin = '1:33';
  changeurl("extrastupid");
}

function stereoadventures(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/lmms/stereoadventures.mp3';
  document.getElementById("img").src = '/images/stereo.jpg';
  document.getElementById("title").innerHTML = '<span>stereo adventures</span>';
  stop();
  durmin = '2:57';
  changeurl("stereoadventures");
}

function augh(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/lmms/augh.mp3';
  document.getElementById("img").src = '/images/augh.jpg';
  document.getElementById("title").innerHTML = '<span>augh</span>';
  stop();
  durmin = '1:16';
  changeurl("augh");
}

function welcome(){
  document.getElementById("audio").src = 'https://roseycatttttt.github.io/tperesources/xdx3xp/lmms/welcome.mp3';
  document.getElementById("img").src = '/images/welcome.jpg';
  document.getElementById("title").innerHTML = '<span>welcome!!</span>';
  stop();
  durmin = '2:19';
  changeurl("welcome");
}