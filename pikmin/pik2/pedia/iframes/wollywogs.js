var title = document.getElementById("title");
var image = document.getElementById("image");
var text = document.getElementById("text");

function cave(){
title.innerHTML = "wollywog"; 
image.src= "/pikmin/enemies/images/cavewollywog.png";
text.innerHTML = "these wollywogs are typically found in caves, and thus have a darker... flesh tone? than yellow wollywogs, and are stouter than their sunlight-eating cousins. wow okay <br> they hop up, then slam down in an attempt to kill your pikmin... you can throw pikmin on it until you're sure your pikmin wont make it onto the wog, and then wait till it&apos;s preparing to hit the ground before whistling. in pikmin one, the amount of pikmin they could crush was uncapped... in two however, they can only kill up to 5-6 pikmin at a time.";
}

function yellow(){
title.innerHTML = "yellow wollywog"; 
image.src= "/pikmin/enemies/images/yellowwollywog.jpeg";
text.innerHTML = "these wollywogs live on the surface of earth, and thus are taller and more pigmented than their cave-dwelling cousins. other than that, they are exactly the same gameplay-wise. thanks nintendo";
// wollywogs that dont spend all day in caves... other than that, they&apos;re exactly the same";
}

function pole(){
title.innerHTML = "wogpole"; 
image.src= "/pikmin/enemies/images/wogpole.png";
text.innerHTML = "wogpoles are. fine. they're basically baby wollywogs... but since they can&apos;t jump, they can&apos;t kill anything. you can just throw pikmin around &apos;till they eventually kill the wogpoles!";
}

function cannonlarve(){
title.innerHTML = "cannon beetle larve"; 
image.src= "/pikmin/enemies/images/armoredcannonlarva.jpg";
text.innerHTML = "";
}