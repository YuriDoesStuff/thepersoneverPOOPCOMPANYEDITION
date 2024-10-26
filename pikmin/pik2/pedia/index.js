var iframe = document.getElementById("iframe");
var mframe = document.getElementById("mframe");
var mp3 = document.getElementById("mp3");

function showiframe(){
iframe.style = "width: 120vh; height: 65vh;";
mframe.src = "none";
mp3.pause(); 
mp3.currentTime = 0;
}

function testone(){
iframe.src = "iframe.html";
document.body.style = "background-image: url(https://i.imgur.com/LWf6mWt.jpg); background-size: cover; repeat: no-repeat;";
showiframe();
mframe.src = "https://vocaroo.com/embed/16XeKtOFaM6k?autoplay=1";
}

function testtwo(){
iframe.src = "iframes/test.html";
document.body.style = "background-image: url(/pikmin/enemies/images/ughbg.jpg); background-size: cover; repeat: no-repeat;";
showiframe();
mp3.src = "https://roseycatttttt.github.io/tperesources/xdx3xp/fls/sleeve.mp3";
mp3.play(); 
}

function pikmin(){
iframe.src = "iframes/pikmin";
document.body.style = "background-image: url(/pikmin/enemies/images/pikibg.png); background-size: cover; repeat: no-repeat;";
showiframe();
mframe.src = "https://vocaroo.com/embed/16dVb7Hkvfxn?autoplay=1";
}

function grubdogs(){
iframe.src = "iframes/grubdogs";
document.body.style = "background-image: url(/pikmin/enemies/images/bulborbbg.png); background-size: cover; repeat: no-repeat;";
showiframe();
mframe.src = "https://vocaroo.com/embed/133P32R4R91V?autoplay=1";
}

function breadbugs(){
iframe.src = "iframes/breadbugs";
document.body.style = "background-image: url(/pikmin/enemies/images/toy.jpg); background-size: cover; repeat: no-repeat;";
showiframe();
mframe.src = "https://vocaroo.com/embed/1k4nuIVKoF8k?autoplay=1";
}

function wollywogs(){
iframe.src = "iframes/wollywogs";
document.body.style = "background-image: url(/pikmin/enemies/images/wollybg.png); background-size: cover; repeat: no-repeat;";
showiframe();
mframe.src = "https://vocaroo.com/embed/16XeKtOFaM6k?autoplay=1";
}

function arachnorbs(){
iframe.src = "iframes/arachnorbs";
document.body.style = "background-image: url(/pikmin/enemies/images/longl.jpg); background-size: cover; repeat: no-repeat;";
showiframe();
mframe.src = "https://vocaroo.com/embed/1gQH4HYdln9C?autoplay=1";
}