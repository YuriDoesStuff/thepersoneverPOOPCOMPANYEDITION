var div = document.getElementById("maindiv");
var mframe = document.getElementById("mframe");
var mp3 = document.getElementById("mp3");

var title = document.getElementById("title");
var image = document.getElementById("image");
var text = document.getElementById("text");
var bdiv = document.getElementById("buttondiv");

let currentindex;

var glojson;
var indexcurrent;

function showdiv(json){
bdiv.innerHTML = "";
div.style = "width: 120vh; height: 65vh; background-color: white; overflow-y: scroll;";
mframe.src = "none";
mp3.pause(); 
mp3.currentTime = 0;
currentindex = 0;
addbutrepeat(json);
contentchange(json[0].name, json[0].image, json[0].text, "dummy");
}

function contentchange(titleparam, imageparam, textparam, w){
  title.innerHTML = titleparam;
  image.src = imageparam;
  text.innerHTML = textparam;
}

function addbutton(json){
var nbutton = document.createElement("button");
nbutton.innerHTML = json.name;
nbutton.onclick = contentchange.bind("dummy", json.name, json.image, json.text);
  
bdiv.appendChild(nbutton);
}

function addbutrepeat(json){
  if (currentindex != (json.length -1) ){
    addbutton(json[currentindex]);
      currentindex =+1; 
      addbutrepeat(json);
  }
  else{
  addbutton(json[(json.length - 1)]);
  console.log("ok done");
  }
}


fetch ("enemy.json", {cache: "no-cache"})
    .then((response) => response.json())
    .then((json) => glojson = json)
    .then((json) => showdiv(glojson.contents[0].test));

function test(json){
}