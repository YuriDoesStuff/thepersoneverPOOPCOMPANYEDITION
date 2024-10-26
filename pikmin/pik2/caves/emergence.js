function sub1(){
document.getElementById("title").innerHTML = "<span>sublevel 1</span>";
document.getElementById("para").innerHTML = "<span>sublevel one has a bottle cap and an orange for treasures, and dwarf snow bulborbs for enemies. it is also incredibly small</span>";
document.getElementById("sub1b").style="display: none;";
document.getElementById("sub2b").style="display: inline; float: right;";
document.body.style.backgroundImage = 'url(images/emergence/1.png)';
}

function sub2(){
document.getElementById("title").innerHTML = "<span>sublevel 2</span>";
document.getElementById("para").innerHTML = "<span>sublevel two has the spherical atlas, 15 pikmin worth of violet candypop buds, and lots of dwarf snow bulborbs. yeah. <br> also, just as a warning... in the future, the final sublevel on each page will always have a boss. if you dont wanna be spoiled, dont click on the last button!</span>";
document.getElementById("sub1b").style="display: inline;";
document.getElementById("sub2b").style="display: none;";
document.body.style.backgroundImage = 'url(images/emergence/2.png)';
}