var print = document.getElementById("printer");
var hider = document.getElementById("hider");
var finished = false; 
var playing = false;

function playHAHA(){
  if (finished == false && playing == false){
  print.play(); 
  hider.currentTime = 0;
  finished = true;
  playing = true;
  print.style.display = "inline";
  hider.style.display = "none";  
  print.style.cursor = "auto";
  }
  else if (playing == false){
    finished = false;
    playing = true;
    print.currentTime = 0;
    hider.play();
  print.style.display = "none";
  hider.style.display = "inline";  
  hider.style.cursor = "auto";
  }
}

print.addEventListener('ended',myHandler,false);
hider.addEventListener('ended',myHandler,false);

    function myHandler(e) {
      playing = false;
      hider.style.cursor = "pointer";
      print.style.cursor = "pointer";
    }