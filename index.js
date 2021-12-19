const get_detail=document.querySelector('.login__input');
const btnlogin=document.querySelector('.login__btn');
const container=document.querySelector('.sec');
const navig=document.querySelector('.navigation');
const welcome=document.querySelector('.wel');

btnlogin.addEventListener('click',function(e){
  e.preventDefault();
  value=get_detail.value;
  if(get_detail.value)
  {
    container.style.opacity=100;

    welcome.innerHTML=`Welcome  ${get_detail.value} !`;
    navig.innerHTML=` `;
    


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

let sequence=[];
document.addEventListener('keypress', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    // case 'w':
    //   var audio = new Audio('sounds/tom-1.mp3');
    //   audio.play();
    //   break;

    // case 'a':
    //   var audio = new Audio('sounds/tom-2.mp3');
    //   audio.play();
    //   break;

    // case 's':
    //   var audio = new Audio('sounds/tom-3.mp3');
    //   audio.play();
    //   break;

    // case 'd':
    //   var audio = new Audio('sounds/tom-4.mp3');
    //   audio.play();
    //   break;

    case 'j':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case 'k':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    // case 'l':
    //   var audio = new Audio('sounds/snare.mp3');
    //   audio.play();
    //   break;

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
      // console.log(buttonInnerHTML);
  }
  }

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');

  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}

var wrapper = document.getElementById('key_wrapper');

var btn = document.getElementById('myBtn');
var btn2= document.getElementById('myBtn2');



btn.onclick = function () {
  wrapper.classList.toggle("key-map-wrapper_one");
};

btn2.onclick= function(){
  document.getElementById('music-sequence').innerHTML = sequence;
};


// JavaScript Drum Kit App

{
	const playingClass = 'playing',
		crashRide = document.getElementById('crash-ride'),
		hiHatTop = document.getElementById('hihat-top');

	const animateCrashOrRide = () => {
		crashRide.style.transform = 'rotate(0deg) scale(1.5)';
	};

	const animateHiHatClosed = () => {
		hiHatTop.style.top = '171px';
	};

	const playSound = e => {
		const keyCode = e.keyCode,
			keyElement = document.querySelector(`div[data-key="${keyCode}"]`);

		if(!keyElement) return;

		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
		audioElement.currentTime = 0;
		audioElement.play();

		switch(keyCode) {
			case 69:
			case 82:
				animateCrashOrRide();
				break;
			case 75:
				animateHiHatClosed();
				break;
		}

		keyElement.classList.add(playingClass);
	};

	const removeCrashRideTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
	};

	const removeHiHatTopTransition = e => {
		if(e.propertyName !== 'top') return;

		e.target.style.top = '166px';
	};	

	const removeKeyTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.classList.remove(playingClass)
	};

	const drumKeys = Array.from(document.querySelectorAll('.key'));

	drumKeys.forEach(key => {
		key.addEventListener('transitionend', removeKeyTransition);
	});

	crashRide.addEventListener('transitionend', removeCrashRideTransition);
	hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);

	window.addEventListener('keydown', playSound);


    // On click audio function 

    function playOnClick(){
      const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
      const key = document.querySelector(`div[data-key="${this.dataset.key}"]`);
      if (!audio) return;
  
      audio.currentTime = 0;
      audio.play();
      const keyNo = this.dataset.key;
      
      switch(keyNo) {
        case '74':
          sequence.push('J');
          break;
        case '66':
          sequence.push('B');
          break;
        case '86':
          sequence.push('V');
          break;
        case '72':
          sequence.push('H');
          break;
        case '71':
          sequence.push('G');
          break;
        case '70':
          sequence.push('F');
          break;
        case '69':
          sequence.push('E');
          break;
        case '73':
          sequence.push('I');
          break;
        case '82':
          animateCrashOrRide();
          sequence.push('R');
          break;
        case '75':
          animateHiHatClosed();
          sequence.push('K');
          console.log("happen");
        break;
      }
      key.classList.add(playingClass);
      console.log(sequence);
    }
  
    const drumbtn = document.querySelectorAll('.key');
    drumbtn.forEach(key=>key.addEventListener('click', playOnClick));
}


}


});