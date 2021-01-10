var body = document.getElementsByTagName("body");
var button = document.querySelectorAll(".button");
var next = document.getElementById("next");
var prev = document.getElementById("previous")

var date = new Date();
var hours = date.getHours();

function changeColor() {
  /* Change image */
  if (hours >= 0 && hours < 6) {
    document.body.style.backgroundColor = "#474849";
    next.style.backgroundColor = "#aeafaf"
    prev.style.backgroundColor = "#aeafaf"

    for (var i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = "#474849";
    }


  }

  if (hours >= 6 && hours <= 13) {
    document.body.style.backgroundColor = "#CDBB90";
    next.style.backgroundColor = "#f4e1b5"
    prev.style.backgroundColor = "#f4e1b5"

    for (var i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = "#CDBB90";
    }
  }

  if (hours > 13 && hours <= 18) {
    document.body.style.backgroundColor = "#AB7A64";
    next.style.backgroundColor = "#ceab9c"
    prev.style.backgroundColor = "#ceab9c"

    for (var i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = "#AB7A64";
    }

  }

  if (hours > 18 && hours <= 23) {
    document.body.style.backgroundColor = "#474849";
    next.style.backgroundColor = "#aeafaf"
    prev.style.backgroundColor = "#aeafaf"

    for (var i = 0; i < button.length; i++) {
      button[i].style.backgroundColor = "#474849";
    }
  }

  setTimeout("changeColor(),10");
}

addEventListener("load", function () {
  changeColor();
});

//

var hoursC = document.getElementById("hoursC");
var minutesC = document.getElementById("minutesC");
var secondsC = document.getElementById("secondsC");
var millisC = document.getElementById("millisC")

var startC = document.getElementById("start");
var stopC = document.getElementById("stop");
var resetC = document.getElementById("reset");
var tst = document.getElementById("test");

var h = 0;
var m = 0;
var s = 0;
var ms = 0;

var cron;

function start() {
  cron = setInterval(function () {
    hoursC.innerHTML = h < 10 ? "0" + h : h;
    minutesC.innerHTML = m < 10 ? "0" + m : m;
    secondsC.innerHTML = s < 10 ? "0" + s : s;
    millisC.innerHTML = ms < 10 ? "0" + ms : ms;

    if(ms < 100){
      ms++
    }

    if(ms >= 100){
      s++
      ms = 0;
    }

    if (s >= 60) {
      m++;
      s = 0;
    }

    if (m >= 60) {
      h++;
      m = 0;
    }
  }, 10);
}

function stop() {
  clearInterval(cron);
}

function reset() {
  clearInterval(cron);

  ms = 0;
  s = 0;
  m = 0;
  h = 0;

  hoursC.innerHTML = "0" + 0;
  minutesC.innerHTML = "0" + 0;
  secondsC.innerHTML = "0" + 0;
  millisC.innerHTML = "0" + 0;
}

startC.addEventListener("click", function () {
  start();
});

stopC.addEventListener("click", function () {
  stop();
});

resetC.addEventListener("click", function () {
  reset();
});


/*prev && next */
prev.addEventListener("click",function(){
  history.back()
})
