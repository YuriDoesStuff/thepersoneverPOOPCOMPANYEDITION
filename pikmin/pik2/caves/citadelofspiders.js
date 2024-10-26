function showboss(){
  document.getElementById("boss").style="display: inline;";
  document.getElementById("hideboss").style="display: inline;";
  document.getElementById("showboss").style="display: none;";
}

function hideboss(){
  document.getElementById("boss").style="display: none;";
  document.getElementById("hideboss").style="display: none;";
  document.getElementById("showboss").style="display: inline;";
}

function sub1(){
document.getElementById("title").innerHTML = "<span>sublevel 1</span>";
document.getElementById("para").innerHTML = "<span>sublevel one has skitterleaves, shearwigs, eggs, and a tomato! do YOU have a tomato???</span>";
document.getElementById("sub1b").style="display: none;";
document.getElementById("sub3b").style="display: none;";
document.getElementById("sub2b").style="display: inline; float: right;";
document.body.style.backgroundImage = 'url(images/citadelofspiders/1.png)';
}

function sub2(){
document.getElementById("title").innerHTML = "<span>sublevel 2</span>";
document.getElementById("para").innerHTML = "<span>sublevel two has fire geysers, fire dweevils, and wollywogs... one of the wollywogs holds a rc cola cap? ive never had rc cola what the hell is rc cola</span>";
document.getElementById("sub2b").style="display: none;";
document.getElementById("sub2back").style="display: none;";
document.getElementById("sub4b").style="display: none;";
document.getElementById("sub1b").style="display: inline;";
document.getElementById("sub3b").style="display: inline; float: right;";
document.body.style.backgroundImage = 'url(images/citadelofspiders/2.png)';
}

function sub3(){
document.getElementById("title").innerHTML = "<span>sublevel 3</span>";
document.getElementById("para").innerHTML = "<span>sublevel three has a bunch of anode beetles, swooping snitchbugs, eggs, and water chestnuts???? what????? also a burried half clamshell... remember to always bring 15 white pikmin with you on expeditions</span>";
document.getElementById("sub1b").style="display: none;";
document.getElementById("sub2b").style="display: none;";
document.getElementById("sub3b").style="display: none;";
document.getElementById("sub3back").style="display: none;";
document.getElementById("sub5b").style="display: none;";
document.getElementById("sub2back").style="display: inline;";
document.getElementById("sub4b").style="display: inline; float: right;";
document.body.style.backgroundImage = 'url(images/citadelofspiders/3.png)';
}

function sub4(){
document.getElementById("title").innerHTML = "<span>sublevel 4</span>";
document.getElementById("para").innerHTML = "<span>sublevel four has fire geysers, water dumples, and hermet crawmads... no burried treasures!!!</span>";
document.getElementById("sub3b").style="display: none;";
document.getElementById("sub2back").style="display: none;";
document.getElementById("sub4b").style="display: none;";
document.getElementById("sub4back").style="display: none;";
document.getElementById("sub3back").style="display: inline;";
document.getElementById("sub5b").style="display: inline; float: right;";
document.body.style.backgroundImage = 'url(images/citadelofspiders/4.png)';
}

function sub5(){
document.getElementById("title").innerHTML = "<span>sublevel 5</span>";
document.getElementById("para").innerHTML = "<span>sublevel five has an iridescent flint beetle, a burried treasure on top of one of the blocks... and beady long legs! reminder to bring 25 yellow pikmin!</span>";
document.getElementById("sub3b").style="display: none;";
document.getElementById("sub2back").style="display: none;";
document.getElementById("sub4b").style="display: none;";
document.getElementById("sub3back").style="display: none;";
document.getElementById("sub5b").style="display: none;";
document.getElementById("sub5back").style="display: none;";
document.getElementById("sub4back").style="display: inline;";
document.body.style.backgroundImage = 'url(images/citadelofspiders/5.png)';
}