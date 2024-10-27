const myImage = document.getElementById("cookie");

let myButton = document.getElementById("user");
let myHeading = document.getElementById("title");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/cookie.jpg") {
    myImage.setAttribute("src", "/me!.png");
  } else {
    myImage.setAttribute("src", "/cookie.jpg");
  }
};
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

function user() {
  const namename = prompt("who the hell are you");
   if (!namename) {
    user();
   }
   else{
  localStorage.setItem("name", namename);
  myHeading.textContent = `hello ${namename}`;
}}
