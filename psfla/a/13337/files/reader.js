var chatshown = false;
	let params = new URLSearchParams(location.search);
	function getId(input) {return document.getElementById(input);};		
			var stateObj = { foo: "bar" };
			var glojson; 
			var thoughts;
			var json;
			var index;
				fetch("../leeet.json", {cache: "no-cache"})
				.then((response) => response.json())
				.then((json) => glojson = json)
				.then((json) => start(json));
				
			var currentnum; 

			function start(){
				var barelyCN = window.location.pathname.replace('/a/13337/','');
				var almostCN = barelyCN.replace('/','');
				currentnum =(parseInt(barelyCN));
				if ((currentnum+1) < glojson.length && currentnum != 1){ //i hate 0 indexing
					getId("linkdiv").innerHTML = "<a2 class=next>&gt; <a class=next href='javascript:changePage(true);'/>"+glojson[currentnum].title+"</a></a2>";
					getId("goback").href = "javascript:changePage(false);";
				} else if ((currentnum) != glojson.length){
					getId("linkdiv").innerHTML = "<a2 class=next>&gt; <a class=next href='../"+(currentnum+1)+"'/>"+glojson[currentnum].title+"</a></a2>"					
				}
				document.addEventListener("keydown", handleKey);
				
			}
	
			function changePage(positive){	
				chatshown = false;
				var barelyCN = window.location.pathname.replace('/a/13337/',''); //getting int of current number
				var almostCN = barelyCN.replace('/','');
				currentnum =(parseInt(barelyCN));
				
				if (positive == false){
					currentnum = currentnum - 2;
				}
				
				switch (glojson[currentnum].title){
					case "13337":
					getId("htmltitle").innerHTML = "PSFLA - 13337";
					break;
					case "=->":
					getId("htmltitle").innerHTML = "13337 =->";
					break;
					default: 
						getId("htmltitle").innerHTML = "13337 - "+glojson[currentnum].title;
					}
					if (glojson[currentnum].type == "chapter"){
						getId("prepanel").innerHTML = "";
					}
					else {
						getId("prepanel").innerHTML = "<img src=../files/terminal.gif>";
					}
					//
					//<a href=https://www.tumblr.com/psfla target=_blank><img src=../files/terminal2.gif></a>
					switch (glojson[currentnum].type){
						case "image":
							getId("panel").innerHTML = `<img src=../`+glojson[currentnum].url+`>`;
						break;
						case "flash":
							getId("panel").innerHTML = `
								<div id="swfwrapper" style="width: 100%; max-width: 600px; height: 450px; overflow: hidden; margin: auto; text-align: center;">
								<div id=swfdiv>

								</div>
								</div>`;
								callbackFunction(glojson[currentnum].url);
						break;
						case "chapter":
							getId("panel").innerHTML = "<a href=../map#"+glojson[currentnum].chapter+"> <img src=../files/title/"+glojson[currentnum].chapter+".gif><img src=../files/terminal.gif><img src=../"+glojson[currentnum].url+">";
						break;
						default:
							getId("panel").innerHTML = "uh oh!";
					}
					getId("title").innerHTML = glojson[currentnum].title;
					getId("text").innerHTML = "<p>"+glojson[currentnum].text+"</p>";
					getId("creddiv").href = "javascript:alert(\""+glojson[currentnum].cred+"\");";
					getId("pagething").innerHTML = "13337 - page "+(currentnum+1)+" - "+glojson[currentnum].date;
				
					currentnum = currentnum + 1; //starting the new page stuff

				history.pushState(stateObj, "woof", "/a/13337/"+currentnum+"/");
				if ((currentnum+1) < glojson.length){ //i hate 0 indexing
					getId("linkdiv").innerHTML = "<a2 class=next>&gt; <a class=next href='javascript:changePage(true);'/>"+glojson[currentnum].title+"</a></a2>";
				} else{
					getId("linkdiv").innerHTML = "<a2 class=next>&gt; <a class=next href='../"+(currentnum+1)+"'/>"+glojson[currentnum].title+"</a></a2>"
				}
				if (currentnum < 2){
					getId("evildiv").innerHTML = `<div id="controlsdiv">&nbsp;<a href="javascript:savegame();" onclick="">save game</a><a>&nbsp;</a> <a href="javascript:loadgame();">load game</a><a>&nbsp;</a> <a href="javascript:deletegame();">whipe game</a></div>`
				}
				else{
					getId("evildiv").innerHTML =`<a href="../1/" class="13337">restart</a><a class="small 13337">&nbsp;</a> <a id=goback href="javascript:changePage(false);" class="13337">go back</a><br><div id="controlsdiv">&nbsp;<a href="javascript:savegame();" onclick="">save game</a><a>&nbsp;</a> <a href="javascript:loadgame();">load game</a><a>&nbsp;</a> <a href="javascript:deletegame();">whipe game</a></div>`					
				}
				fetch(`../`+glojson[currentnum].url);
			}
	
	/*
																HELLO!
												
					unlike some... people with admittedly awesome websites, i LIKE people copying my code
					as long as you modify it some, i'm fine with anything you do with this site's code! learning from what other people have made is AWESOME!!!! 
					i do this a lot with templates myself! of course, i respect other people's preferences on code editing
					unfortunately, this code. sucks. you can (probably) do better than what i have this from scratch :p
					it's your choice though! ^_^
					
					- jade
	*/
	

	
function savegame(){
	var barelyCN = window.location.pathname.replace('/a/13337/','');
	var almostCN = barelyCN.replace('/','');
	currentnum =(parseInt(barelyCN));
	localStorage.setItem("13337", currentnum);
}

function loadgame(){
	if (localStorage.getItem("13337")){
		window.location.href="../"+localStorage.getItem("13337");
		}
	else{
		alert("no save present for this adventure!! click \"save game\" to save your game");
	}
}

function deletegame(){
  
  if (confirm("deleting your saved game!") == true) {
  localStorage.removeItem("13337");
  }
 }

function showchat(){
	if (document.getElementById("talkdiv")){
	  if (chatshown == false){
		document.getElementById("talkdiv").style.display = "block";
		document.getElementById("showchat").id = "hidechat";
		chatshown = true;
	  }
	  else{
		document.getElementById("talkdiv").style.display = "none";
		document.getElementById("hidechat").id = "showchat";
		chatshown = false;
	}
  }
  else{
	console.log("no chat present");
  }
}

function showwarning(){
	if (document.getElementById("warningdiv")){
	  if (chatshown == false){
		document.getElementById("warningdiv").style.display = "block";
		document.getElementById("showwarning").id = "hidewarning";
		chatshown = true;
	  }
	  else{
		document.getElementById("warningdiv").style.display = "none";
		document.getElementById("hidewarning").id = "showwarning";
		chatshown = false;
	}
  }
}

function handleKey(event) {
    switch (event.key){
		case "ArrowRight":
			event.preventDefault();
			if ((currentnum+1) < glojson.length ){
				changePage(true);
			}
			else if ((currentnum+1) == glojson.length){
				window.location.href = "../"+(currentnum+1);
			}
			break;
		case "ArrowLeft":
			event.preventDefault();
			if ((currentnum) < glojson.length && currentnum != 1){
				changePage(false);
			}
			else if (currentnum != 1){
				window.location.href = "../"+(currentnum-1);
			}
			break;
		case " ":
			event.preventDefault();
			showchat();
			break;
    }
}

function callbackFunction(input){
  var att = { data:"../"+input, width:"100%", height:"100%", wmode:"transparent" };
  var par = { shit:"foo=bar" };
  var id = "swfdiv";
  swfobject.createSWF(att, par, id);
}