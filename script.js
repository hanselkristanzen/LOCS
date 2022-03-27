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
document.querySelector('#infoWindow').addEventListener("click", alertVersionWindow);

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
var yyy = 0; //just random variable for if statement below
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

