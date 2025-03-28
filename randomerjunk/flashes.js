let params = new URLSearchParams(location.search);
let links = document.getElementById("selector");
let glojson;
let flashes;

function changeDiv(urlthing){
  var att = { data:urlthing, width:"100%", height:"100%" };
  var par = { shit:"foo=bar" };
  var id = "swfdiv";
  swfobject.createSWF(att, par, id);
}

  fetch("flashes.json", {cache: "no-cache"})
    .then((response) => response.json())
    .then((json) => glojson = json)
    .then((json) => flashes = json.flashes)
    .then((json) => currentindex = 0)
    .then((json) => start(true));

 function testflash(){
 document.getElementById('player').setAttribute("src", "/flashes/testflash/testflash");
 }

function start(firstrun){
  if (firstrun == true){
   const index = flashes.findIndex(e => e.url === params.get("f"));
   console.log(params.get("f"));
   if (index > -1) {
	changeflash(index);
   }
   else{
     changeflash(0);
   } 
 firstrun = false;
 addlink(currentindex);
 }
}
 
 function addlink(currentnum){
var newlink = document.createElement("a");
var a = document.createElement("a");
a.innerHTML = `&nbsp;`;
newlink.innerHTML =  `<span>`+flashes[currentnum].title+`</span>`;
newlink.href = "javascript:changeflash("+currentnum+");";
newlink.onclick = changeflash.bind(newlink, currentnum);

links.appendChild(newlink);
  if(currentnum < flashes.length -1){
	links.appendChild(a);
	currentnum += 1;
	addlink(currentnum);
	console.log("PEEENIS");
  }
}

function changeflash(num){
	document.getElementById('title').innerHTML = (flashes[num].title);
	
	document.getElementById('swfwrapper').style.height = flashes[num].height;
	document.getElementById('swfwrapper').style.maxWidth = flashes[num].width;
	document.getElementById('swfwrapper').style.backgroundColor = flashes[num].color;
	
	if(flashes[num].comment != null){
		document.getElementById("commentbox").innerHTML = flashes[num].comment;
	}
	else{
		console.log("commentbox")
	}
	
	changeurl(flashes[num].url);
	changeDiv(flashes[num].loc);
}

function changeurl(get){
var stateObj = { foo: "bar" };
   history.pushState(stateObj, "page 2", "flashes.html?f=" + get);
}