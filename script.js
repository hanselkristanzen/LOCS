//Version
var version = "Version 1.3";

//Alert Version Window
function alertVersionWindow(){
  var newLine = "\n";
    var msg = "LOCS";
    msg += newLine;
    msg += version;
    msg += newLine;
    msg += "By: Hansel Kristanzen";
    alert(msg);
}

//Info Window
document.getElementById('infoWindow').addEventListener("click", alertVersionWindow);

//Version Info
document.querySelector('#versionInfo').addEventListener("click", alertVersionWindow);

//alertHi
document.getElementById("alertHi").addEventListener("click", () => alert("hi!"));

//Spotify drag window
dragElement(document.getElementById("spotify"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//Close and open spotify window
document.getElementById("spotify")
function spotButton() {
  var x = document.getElementById("spotify");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

spotButton(); //biar pas pertama kali buka, ga kebuka spoti nya

//Date and Time
var element = document.getElementById('currentTime');

setInterval(function () {
  var today = new Date();
  var DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var MONTHNAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var month = MONTHNAMES[new Date().getMonth()];
  var day = DAYS[new Date().getDay()];
  var minutes = (today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes();
  var seconds = (today.getSeconds() < 10) ? "0" + today.getSeconds() : today.getSeconds();
  var hours = (today.getHours() < 10) ? "0" + today.getHours() : today.getHours();
  var time = hours + "." + minutes + "." + seconds;
  var date = `${new Date().getDate()}`;
  var dateTime = `${day} ${date} ${month} &nbsp;${time}`;
  element.innerHTML = dateTime;}, 1000);

//Dark Light Theme Switcher
//const checkbox = document.querySelector("#checkbox");
//
//checkbox.addEventListener("change", () => {
//  // Toggle website theme
//  document.body.classList.toggle("dark");
//});

var checkbox = document.querySelector('#checkbox');
var switcher = document.querySelector('.switcher');
var yyy = 1; //just random variable for if statement below (1 = dark, 0 = light)
checkbox.addEventListener("click", function(){ 
  //switch animation
  if (yyy == 0) {
    switcher.style.transtion = "0.1s";
    switcher.style.transform = "translateX(26px)";
    yyy = 1;
  } else {
    switcher.style.transition = "0.1s";
    switcher.style.transform = "translateX(0px)";
    yyy = 0;
  }
})

checkbox.addEventListener("change", function() { 
  //switch toggle
  document.body.classList.toggle("dark");
})

document.body.classList.toggle("dark");

//Switch Kelas
var landingPage = document.querySelector("#landingPage");

// var containerF = document.querySelector('.container-F');
// var containerG = document.querySelector('.container-G');
var titleA = document.querySelector(".title-A");
var titleB = document.querySelector(".title-B");
var titleC = document.querySelector(".title-C");
var titleD = document.querySelector(".title-D");
var titleE = document.querySelector(".title-E");
var titleF = document.querySelector(".title-F");
var titleG = document.querySelector(".title-G");
var titleH = document.querySelector(".title-H");
var titleI = document.querySelector(".title-I");
var titleJ = document.querySelector(".title-J");

var XAButton = document.querySelector('#XA-button');
var XBButton = document.querySelector('#XB-button');
var XCButton = document.querySelector('#XC-button');
var XDButton = document.querySelector('#XD-button');
var XEButton = document.querySelector('#XE-button');
var XFButton = document.querySelector("#XF-button");
var XGButton = document.querySelector('#XG-button');
var XHButton = document.querySelector('#XH-button');
var XIButton = document.querySelector('#XI-button');
var XJButton = document.querySelector('#XJ-button');

var XA = document.querySelector("#XA");
var XB = document.querySelector("#XB");
var XC = document.querySelector("#XC");
var XD = document.querySelector("#XD");
var XE = document.querySelector("#XE");
var XF = document.querySelector("#XF");
var XG = document.querySelector("#XG");
var XH = document.querySelector("#XH");
var XI = document.querySelector("#XI");
var XJ = document.querySelector("#XJ");

//Listen for title
titleA.addEventListener("click", () => {
  XA.style.display = 'none';
  landingPage.style.display = 'block';
});

titleB.addEventListener("click", () => {
  XB.style.display = 'none';
  landingPage.style.display = 'block';
});

titleC.addEventListener("click", () => {
  XC.style.display = 'none';
  landingPage.style.display = 'block';
});

titleD.addEventListener("click", () => {
  XD.style.display = 'none';
  landingPage.style.display = 'block';
});

titleE.addEventListener("click", () => {
  XE.style.display = 'none';
  landingPage.style.display = 'block';
});

titleF.addEventListener("click", () => {
  XF.style.display = 'none';
  landingPage.style.display = 'block';
});

titleG.addEventListener("click", () => {
  XG.style.display = 'none';
  landingPage.style.display = 'block';
});

titleH.addEventListener("click", () => {
  XH.style.display = 'none';
  landingPage.style.display = 'block';
});

titleI.addEventListener("click", () => {
  XI.style.display = 'none';
  landingPage.style.display = 'block';
});

titleJ.addEventListener("click", () => {
  XJ.style.display = 'none';
  landingPage.style.display = 'block';
});

//Listen for button
XAButton.addEventListener("click", () => {
  XA.style.display = 'block';
  landingPage.style.display = 'none';
});

XBButton.addEventListener("click", () => {
  XB.style.display = 'block';
  landingPage.style.display = 'none';
});

XCButton.addEventListener("click", () => {
  XC.style.display = 'block';
  landingPage.style.display = 'none';
});

XDButton.addEventListener("click", () => {
  XD.style.display = 'block';
  landingPage.style.display = 'none';
});

XEButton.addEventListener("click", () => {
  XE.style.display = 'block';
  landingPage.style.display = 'none';
});

XFButton.addEventListener("click", () => {
   XF.style.display = 'block';
   landingPage.style.display = 'none';
});

XGButton.addEventListener("click", () => {
  XG.style.display = 'block';
  landingPage.style.display = 'none';
});

XHButton.addEventListener("click", () => {
  XH.style.display = 'block';
  landingPage.style.display = 'none';
});

XIButton.addEventListener("click", () => {
  XI.style.display = 'block';
  landingPage.style.display = 'none';
});

XJButton.addEventListener("click", () => {
  XJ.style.display = 'block';
  landingPage.style.display = 'none';
});

// document.addEventListener("DOMContentLoaded", () => {
//   XF.style.display = 'none';
//   XG.style.display = 'none';
// });