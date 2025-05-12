var title = document.getElementById("title");
var selectdiv = document.getElementById("selectdiv");
var ssbutton = document.getElementById("showselectionbutton");
var arraydiv = document.getElementById("arraydiv");
var stackdiv = document.getElementById("stackdiv");
var queuediv = document.getElementById("queuediv");
var treediv = document.getElementById("treediv");
var hashdiv = document.getElementById("hashdiv");
var memorydiv = document.getElementById("memorydiv");
var jengadiv = document.getElementById("jengadiv");
var pictodiv = document.getElementById("pictodiv");

const hide = "display: none;";
const show = "display: inline;";

function selection(){
title.innerHTML = "-- various types of moduses --";
selectdiv.style = show;
ssbutton.style = hide;
arraydiv.style = hide;
stackdiv.style = hide;
queuediv.style = hide;
treediv.style = hide;
hashdiv.style = hide;
memorydiv.style = hide;
jengadiv.style = hide;
pictodiv.style = hide;
}

function standard(){
selectdiv.style = hide;
ssbutton.style = show;
}

function stack(){
title.innerHTML = "-- stack modus --";
stackdiv.style = show;
standard();
}

function queue(){
title.innerHTML = "-- queue modus --";
queuediv.style = show;
standard();
}

function array(){
title.innerHTML = "-- array modus --";
arraydiv.style = show;
standard();
}

function tree(){
title.innerHTML = "-- tree modus --";
treediv.style = show;
standard();
}

function hash(){
title.innerHTML = "-- hashmap modus --";
hashdiv.style = show;
standard();
}

function memory(){
title.innerHTML = "-- memory modus --";
memorydiv.style = show;
standard();
}

function jenga(){
title.innerHTML = "-- jenga modus --";
jengadiv.style = show;
standard();
}

function picto(){
title.innerHTML = "-- pictionary modus --";
pictodiv.style = show;
standard();
}