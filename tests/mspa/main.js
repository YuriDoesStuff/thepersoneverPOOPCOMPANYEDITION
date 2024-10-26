let glojson;
let searchnum;
let adventure;
let nextnum;
let params = new URLSearchParams(location.search);

var maindiv = document.getElementById("holddiv");

var title = document.getElementById("title");

var text = document.getElementById("page");
var image = document.getElementById("panel");

var next = document.getElementById("nextlink");
var linkdiv = document.getElementById("link");

var controls = document.getElementById("controlsdiv");
var when = document.getElementById("when");

if (params.get("pg") != null && params.get("a") != null){
   fetch(`a/`+ params.get('a') +`.json`, {cache: "no-cache"})
    .then((response) => response.json())
    .then((json) => glojson = json)
    .then((json) => pages = json.pages)
    .then((pages) => getwhere(pages));
}

else if (params.get("log") != null){
fetch(`a/`+ params.get('log') +`.json`, {cache: "no-cache"})
    .then((response) => response.json())
    .then((json) => glojson = json)
    .then((json) => pages = json.pages)
    .then((pages) => logs(pages));
}

else{
 title.style = "display: none;";
 maindiv.innerHTML = `<h1>hi!</h1>
 <p>this is a test to see if i can make an mspa viewer in javascript :D 
 <br><a href=?a=yup&pg=1>test adventure</a> <a href=?log=yup>test adventure log</a></p>
 <br><br>
 `;
}

function getwhere(pages) {
adventure = params.get("a");
searchnum = params.get("pg") - 1;
nextnum = params.get("pg");
searchnum = searchnum.toString();
 title.innerHTML = pages[searchnum].title;
 image.innerHTML = pages[searchnum].image;
 text.innerHTML = pages[searchnum].text;
 when.innerHTML =`<a href=javascript:void(0); onclick=credits(); class=small>credits</a> <br>`+ glojson.title+"- page "+nextnum+" - "+pages[searchnum].date ; 
 
var yeah = (parseInt(nextnum, 10));
 
var nextvalue = yeah +1; 

if (pages[nextnum] != null){
 next.innerHTML = pages[nextnum].title;
 next.href = "?a="+params.get('a')+"&pg="+nextvalue;
linkdiv.style.display = "block";
}  
  
  if (searchnum != 0){
  controls.innerHTML = "<a class=small href='?a="+adventure +"&pg=1'>restart</a> <a class=small>&nbsp;</a> <a class=small href=?a="+adventure+"&pg="+searchnum+">go back</a> <a class=small><br></a> &nbsp;<a class=small href=javascript:void(0); onclick=savegame();>save game</a><a class=small>&nbsp;</a> <a class=small href=javascript:void(0); onclick=loadgame();>load game</a><a class=small>&nbsp;</a> <a class=small href=javascript:void(0); onclick=deletegame();>delete save</a>";
  }
  
else if (searchnum == 0){
  controls.innerHTML="&nbsp;<a class=small href=javascript:void(0); onclick=savegame();>save game</a><a class=small>&nbsp;</a> <a class=small href=javascript:void(0); onclick=loadgame();>load game</a><a class=small>&nbsp;</a> <a class=small href=javascript:void(0); onclick=deletegame();>delete save</a>";
}
}
  
function logs(pages){
  title.innerHTML = glojson.title+" adventure log";
  
  var currentnum = (pages.length -1);
  text.style = "text-align: left;"
  
  while (currentnum > 0){
    addlog(currentnum, pages);
    currentnum -= 1;
  }
 addlog(0, pages);
 }


function addlog(currentnum, pages){
  var wrapperlink = document.createElement("a");
  var newlink = document.createElement("a");
  var small = document.createElement("small")
  newlink.innerHTML = pages[currentnum].title;
  wrapperlink.appendChild(newlink);
  small.innerHTML = " page "+(currentnum+1)+", "+pages[currentnum].date;
  small.style = "color: #a3a3a3;"
  wrapperlink.appendChild(small);
  wrapperlink.style = "display: block;";
  newlink.href = "?a="+params.get("log")+"&pg="+(currentnum+1);
  
  text.appendChild(wrapperlink);
}

function savegame(){
localStorage.setItem("page", nextnum);
localStorage.setItem("adventure", adventure);
}

function loadgame(){
  window.location.href="?a="+localStorage.getItem("adventure")+"&pg="+localStorage.getItem("page");
}

function deletegame(){
  
  if (confirm("deleting your saved game!") == true) {
  localStorage.removeItem("adventure");
  localstorage.removeItem("page");
  }
  
}

function credits(){
  alert(pages[searchnum].cred);
}