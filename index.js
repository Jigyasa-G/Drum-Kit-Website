var numberOfButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', handleClick);

  function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}

var ref =document.getElementById('refresh');
ref.addEventListener('click',togglerefresh);
var theme = document.getElementsByTagName('link')[0];
var num=0;
function togglerefresh()
{
  console.log(33);
  num=(num+1)%5;
  if(num==0)
  {
    theme.setAttribute('href', 'styles.css');
  }
  if(num==1)
  {
    theme.setAttribute('href', 'styles1.css');
  }
  if(num==2)
  {
    theme.setAttribute('href', 'styles2.css');
  }
  if(num==3)
  {
    theme.setAttribute('href', 'styles3.css');
  }
  if(num==4)
  {
    theme.setAttribute('href', 'styles4.css');
  }
}

//Detecting Keyboard Press

document.addEventListener('keypress', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case 'a':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case 's':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case 'd':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case 'j':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case 'k':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    case 'l':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case 'i':
      var audio = new Audio('sounds/Hi-Hat-Foot-Pedal.mp3');
      audio.play();
      break;

    case 'g':
      var audio = new Audio('sounds/Drum-Sticks-Hit.mp3');
      audio.play();
      break;

    case 'f':
      var audio = new Audio('sounds/openhat.wav');
      audio.play();
      break;

    case 'h':
      var audio = new Audio('sounds/boom.wav');
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}

var modal = document.getElementById('myModal');

var btn = document.getElementById('myBtn');

var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
