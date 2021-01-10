var body = document.getElementsByTagName("body");
var img = document.getElementById("img");
var hourDisplay = document.getElementById("hourDisplay");
var link = document.querySelectorAll(".link")
var next = document.getElementById("next");
var prev = document.getElementById("previous")

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

function showRefresh() {
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();

  if(hours < 10){
    hours = "0" + hours;
  }

  if(minutes < 10){
    minutes = "0" + minutes;
  }

  if(seconds < 10){
    seconds = "0" + seconds;
  }

  /* show in html */
  hourDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;

  setTimeout("showRefresh(),10");
}

function changeColor() {
  /* Change image */
  if (hours >= 0  && hours < 6) {
    document.body.style.backgroundColor = "#474849";
    for(i = 0; i < link.length; i++){
      link[i].style.backgroundColor = "#474849"
    }
    img.src = "/img/noite.jpg";
  }

  if (hours >= 6 && hours <= 13) {
    document.body.style.backgroundColor = "#CDBB90";
    for(i = 0; i < link.length; i++){
      link[i].style.backgroundColor = "#CDBB90"
    }
    img.src = "/img/dia.jpg";
  }

  if (hours > 13 && hours <= 18) {
    document.body.style.backgroundColor = "#AB7A64";
    for(i = 0; i < link.length; i++){
      link[i].style.backgroundColor = "#AB7A64"
    }
    img.src = "/img/tarde.jpg";
  }

  if (hours > 18 && hours <= 23) {
    document.body.style.backgroundColor = "#474849";
    for(i = 0; i < link.length; i++){
      link[i].style.backgroundColor = "#474849"
    }
    img.src = "/img/noite.jpg";
  }

  

  setTimeout("changeColor(),10");
}

addEventListener("load", function(){
    changeColor();
    showRefresh();
})
