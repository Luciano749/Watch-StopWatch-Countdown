var body = document.getElementsByTagName("body");
var selectA = document.querySelectorAll("#selectA")
var selectD = document.querySelectorAll("select");
var buttonJ = document.getElementById("buttonRun");
var linkS = document.querySelectorAll("#link");

var date = new Date();
var hours = date.getHours();

function changeColor() {
  /* Change image */
  if (hours >= 0 && hours < 6) {
    document.body.style.backgroundColor = "#474849";
    buttonJ.style.backgroundColor = "#474849";

    for(var i = 0; i < linkS.length; i++){
      linkS[i].style.backgroundColor = "#474849"
    }

    for(var i = 0; i < selectA.length; i++){
      selectA[i].style.backgroundColor = "#474849";
      selectD[i].style.backgroundColor = "#474849";

      selectD[i].style.border = "2px solid #474849";
    }
  }

  if (hours >= 6 && hours <= 13) {
    document.body.style.backgroundColor = "#CDBB90";
    buttonJ.style.backgroundColor = "#CDBB90";

    for(var i = 0; i < linkS.length; i++){
      linkS[i].style.backgroundColor = "#CDBB90"
    }

    for(var i = 0; i < selectA.length; i++){
      selectA[i].style.backgroundColor = "#CDBB90";
      selectD[i].style.backgroundColor = "#CDBB90";

      selectD[i].style.border = "2px solid #CDBB90";
    }
  }

  if (hours > 13 && hours <= 18) {
    document.body.style.backgroundColor = "#AB7A64";
    buttonJ.style.backgroundColor = "#AB7A64";

    for(var i = 0; i < linkS.length; i++){
      linkS[i].style.backgroundColor = "#AB7A64"
    }

    for(var i = 0; i < selectA.length; i++){
      selectA[i].style.backgroundColor = "#AB7A64";
      selectD[i].style.backgroundColor = "#AB7A64";

      selectD[i].style.border = "2px solid #AB7A64";
      
    }
  }

  if (hours > 18 && hours <= 23) {
    document.body.style.backgroundColor = "#474849";
    buttonJ.style.backgroundColor = "#474849";

    for(var i = 0; i < linkS.length; i++){
          linkS[i].style.backgroundColor = "#474849"
        }
    
    for(var i = 0; i < selectA.length; i++){
      selectA[i].style.backgroundColor = "#474849";
      selectD[i].style.backgroundColor = "#474849";

      selectD[i].style.border = "2px solid #474849";
    }
  }

  setTimeout("changeColor(),10");
}

addEventListener("load", function () {
  changeColor();
});

//
var sound = document.getElementById("sound");

var minutesC = document.getElementById("minutesC");
var secondsC = document.getElementById("secondsC");

var buttonR = document.getElementById("buttonRun");
var label = document.getElementsByTagName("label");


var selectM = document.getElementById("selectM");
var selectS = document.getElementById("selectS");

for (var i = 0; i <= 60; i++) {
  selectM.innerHTML += '<option value = "' + i + '">' + i + "</option>";
}

for (var i = 0; i <= 59; i++) {
  selectS.innerHTML += '<option value = "' + i + '">' + i + "</option>";
}

var refresh;
var intervalR;

refresh = setInterval(function () {

  if(selectS.value <= 0 && selectM.value <= 0){
    buttonR.disabled = true;
    buttonR.style.opacity = "0.6"
  }else{
    buttonR.disabled = false;
    buttonR.style.opacity = "1"
  }

  minutesC.innerHTML = selectM.value;
  secondsC.innerHTML = selectS.value;

  if (minutesC.innerHTML < 10) {
    minutesC.innerHTML = "0" + minutesC.innerHTML;
  }

  if (secondsC.innerHTML < 10) {
    secondsC.innerHTML = "0" + secondsC.innerHTML;
  }
}, 10);


function run() {
  intervalR = setInterval(function () {
    if(selectS.value  > 0){
      selectS.value--;
    }

    for(var i = 0; i < label.length; i++){
      label[i].style.display = "none"
    }
    selectM.style.display = "none";
    selectS.style.display = "none";
    buttonR.style.display = "none";
    

    if (selectS.value <= 0) {
      if (selectM.value > 0) {
        selectM.value--;
        selectS.value = 59;
      } else {
        sound.play();
        clearInterval(intervalR);

        for(var i = 0; i < label.length; i++){
          label[i].style.display = ""
        }
        selectS.style.display = "";
        selectM.style.display = "";
        buttonR.style.display = "";
      }

    }
  }, 1000);
}

addEventListener("load", function () {
  for (var i = 0; i < 10; i++) {
    selectM.options[i].innerHTML = "0" + selectM.options[i].innerHTML;
    selectS.options[i].innerHTML = "0" + selectS.options[i].innerHTML;
  }
});

buttonR.addEventListener("click", function (){
  run();
})
