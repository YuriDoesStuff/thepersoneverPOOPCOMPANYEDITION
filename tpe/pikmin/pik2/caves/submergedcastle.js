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
document.getElementById("para").innerHTML = "<span>sublevel one has fire geysers, blowhogs, and a firey bulblax that holds a treasure! did you know you can keep firey bulblaxes cooled off in water</span>";
document.getElementById("sub1b").style="display: none;";
document.getElementById("sub3b").style="display: none;";
document.getElementById("sub2b").style="display: inline; float: right;";
document.body.style.backgroundImage = 'url(images/submergedcastle/1.png)';
}

function sub2(){
document.getElementById("title").innerHTML = "<span>sublevel 2</span>";
document.getElementById("para").innerHTML = "<span>sublevel two has orange dwarf bulborbs, bulbmin, firey dweevils, and a careening dirigibug. sigh</span>";
document.getElementById("sub2b").style="display: none;";
document.getElementById("sub2back").style="display: none;";
document.getElementById("sub4b").style="display: none;";
document.getElementById("sub1b").style="display: inline;";
document.getElementById("sub3b").style="display: inline; float: right;";
document.body.style.backgroundImage = 'url(images/submergedcastle/2.png)';
}

function sub3(){
document.getElementById("title").innerHTML = "<span>sublevel 3</span>";
document.getElementById("para").innerHTML = "<span>sublevel three has eletric gates, electric dweevils, anode dweevils, and two bulbmin mothers thankfully!!!!</span>";
document.getElementById("sub1b").style="display: none;";
document.getElementById("sub2b").style="display: none;";
document.getElementById("sub3b").style="display: none;";
document.getElementById("sub3back").style="display: none;";
document.getElementById("sub5b").style="display: none;";
document.getElementById("sub2back").style="display: inline;";
document.getElementById("sub4b").style="display: inline; float: right;";
document.body.style.backgroundImage = 'url(images/submergedcastle/3.png)';
}

function sub4(){
document.getElementById("title").innerHTML = "<span>sublevel 4</span>";
document.getElementById("para").innerHTML = "<span>sublevel four has poison machines, more bulbmin, falling bomb rocks, volitile dweevils, and a golden flint beetle... yay?</span>";
document.getElementById("sub3b").style="display: none;";
document.getElementById("sub2back").style="display: none;";
document.getElementById("sub4b").style="display: none;";
document.getElementById("sub4back").style="display: none;";
document.getElementById("sub3back").style="display: inline;";
document.getElementById("sub5b").style="display: inline; float: right;";
document.body.style.backgroundImage = 'url(images/submergedcastle/4.png)';
}

function sub5(){
document.getElementById("title").innerHTML = "<span>sublevel 5</span>";
document.getElementById("para").innerHTML = "<span>sublevel five has your very best friend! you can turn him solid with purple pikmin...</span>";
document.getElementById("sub3b").style="display: none;";
document.getElementById("sub2back").style="display: none;";
document.getElementById("sub4b").style="display: none;";
document.getElementById("sub3back").style="display: none;";
document.getElementById("sub5b").style="display: none;";
document.getElementById("sub5back").style="display: none;";
document.getElementById("sub4back").style="display: inline;";
document.body.style.backgroundImage = 'url(images/submergedcastle/5.png)';
}