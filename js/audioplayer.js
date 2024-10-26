let audio = document.getElementById("audio");
let playb = document.getElementById("playbutton");
let pauseb = document.getElementById("pausebutton");
let timer = document.getElementById("htmltime");

var audiovol = 0.5;
var audiotime = audio.currentTime;
var durmin = '1:44' ;

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