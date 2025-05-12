function define(){
var title = document.getElementById("title");
var pedia = document.getElementById("pikpedia");
var imagebleh = document.getElementById("image");
var para = document.getElementById("para"); 
}

function larva(){
define();
document.getElementById('title').innerHTML = '<span>armored cannon larva</span>'; 
document.getElementById('image').src='/pikmin/enemies/images/armoredcannonlarva.jpg';
document.getElementById("para").innerHTML = 'THIS GUY is. fine. he shoots a rock that can crush lots of pikmin at once, but! hes not the worst person ive ever met.';
document.getElementById("pikpedia").style.height = '350px';
}

function decor(){
title.innerHTML = '<span>decorated cannon beetle</span>'; 
imagebleh.src='/pikmin/enemies/images/decoratedcannonbeetle.jpeg';
para.innerHTML = 'this horrible person is also alright i guess. he has magnetic rocks that home in on your space suit (???) but that means you can run his rocks back into him.';
     
pedia.style.height = '370px'; 
}