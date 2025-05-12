console.log("hello mario");
var overviewdiv = document.getElementById('overview');
var buttondiv = document.getElementById('buttons');
var returnbutton = document.getElementById('return');
var appender = document.getElementById('javaappend');
var maindiv = document.getElementById('maindiv');
var aphtml = appender.innerHTML;

returnbutton.onclick = buttonreturn;
returnbutton.style = "display: none;";

let overviewbutton = document.createElement("button");
overviewbutton.style.display= "none";
overviewbutton.innerHTML = "overview";
overviewbutton.onclick=ovfunc;
buttondiv.appendChild(overviewbutton);

let brbutton = document.createElement("button");
brbutton.style.display= "inline";
brbutton.innerHTML = "background";
brbutton.onclick=brfunc;

buttondiv.appendChild(overviewbutton);
buttondiv.appendChild(brbutton);

buttondiv.appendChild(document.createElement("br"));

function makeimgbutton(name, src, onclickie){
var newdiv = document.createElement("div");
var text = document.createElement("p");
var button = document.createElement("img");

  newdiv.onclick = onclickie;
  newdiv.style = "float: left; width: 24%; background-color: #F5F3F3; border: #EBEBEB solid 2px; margin: 1px; cursor: pointer;";
  newdiv.innerHTML = `<img src=`+src+`> <p style="font-family: Verdana; color: #999999;"><strong>`+name+`</strong></p>`;
  
 buttondiv.appendChild(newdiv);
}

makeimgbutton("select<br>&nbsp;", "buttons/select.png", selectfunc);

makeimgbutton("revise<br>&nbsp", "buttons/revise.png", revisefunc);

makeimgbutton("deploy<br>&nbsp", "buttons/deploy.png", deployfunc);

makeimgbutton("phernalia registry", "buttons/phernaliaregistry.png", regfunc);

makeimgbutton("grist cache<br>&nbsp;", "buttons/gristcache.png", gristfunc);

makeimgbutton("atheneum <br>&nbsp;", "buttons/atheneum.png", anthfunc);

makeimgbutton("alchemy excursus", "buttons/alchemyexursus.png", alchfunc);

function buttonreturn(){
overviewdiv.style.display = "none";
returnbutton.style.display = "none";
overviewbutton.style.display = "inline";
appender.style.display = "none";
buttondiv.style.display = "block";
}

function ovfunc(){
hidemost();
appender.style.display = "none";
overviewdiv.style.display = "block";
console.log("it'sa mee!");
}

function hidemost(){
overviewdiv.style.display = "none";
buttondiv.style.display = "none";
returnbutton.style.display = "inline";
appender.style.display = "block";
maindiv.scrollTop = 0;
}