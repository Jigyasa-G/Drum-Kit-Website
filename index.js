//Detecting Button Press

var numberOfButtons = document.querySelectorAll(".drum").length ;

for(var i=0; i<numberOfButtons ; i++){

       document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

       function handleClick(){

         var buttonInnerHTML = this.innerHTML;
         makeSound(buttonInnerHTML);
         buttonAnimation(buttonInnerHTML);
       }
     }

//Detecting Keyboard Press

document.addEventListener("keypress", function(event){
makeSound(event.key);
buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {

    case "w":                     //if w was the case
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;               //declarations between case and break:

      break;

    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;

    case "s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;

    case "d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;

    case "j":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;

    case "k":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;

    case "l":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;

    case "i":
      var audio = new Audio("sounds/Hi-Hat-Foot-Pedal.mp3");
      audio.play();
      break;

    case "g":
      var audio = new Audio("sounds/Drum-Sticks-Hit.mp3");
      audio.play();
      break;

    default: console.log(buttonInnerHTML);
  }

}

function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100 );
}
