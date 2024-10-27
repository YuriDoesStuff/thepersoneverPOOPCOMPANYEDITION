let logs;

var indexwhole = 1;
var indexcurrent;

var title = document.getElementById("title");
var linksdiv = document.getElementById("links");
var content = document.getElementById("content");

  fetch("devlog.json", {cache: "no-cache"})
    .then((response) => response.json())
    .then((json) => glojson = json)
    .then((json) => logs = json.items)
    .then((json) => indexcurrent = json.length -1)
    .then((pages) => start());

function start(){
  if (indexcurrent != 0){
  addlink(indexcurrent);
  indexcurrent -= 1;
  start();
  }
  else{
  addlink(0);
  displaylog(logs.length -1);
  }

// displaylog(indexcurrent);
}

function displaylog(indexnum){
  if (indexnum == 0){
  console.log("pulling from start");
  title.innerHTML = logs[0].title; 
  date.innerHTML = logs[0].date_published;
  content.innerHTML = logs[0].content_html; 
  }
  else{
  title.innerHTML = logs[indexnum].title; 
  date.innerHTML = logs[indexnum].date_published;
  content.innerHTML = logs[indexnum].content_html; 
  }

}

function addlink(currentnum){
var newlink = document.createElement("a");
newlink.innerHTML = logs[currentnum].title + `&nbsp;<small>`+logs[currentnum].date_published+`</small>`;
newlink.style = "display: block;";
newlink.href = "javascript:void(0);";
newlink.onclick = displaylog.bind(newlink, currentnum);

links.appendChild(newlink);
}