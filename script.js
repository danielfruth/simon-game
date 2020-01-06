const startButton = document.querySelector('.start-button');
const greenButton = document.querySelector('.green-button');
const redButton = document.querySelector('.red-button');
const yellowButton = document.querySelector('.yellow-button');
const blueButton = document.querySelector('.blue-button');
let compArray = [];
let userArray = [];

startButton.addEventListener('click', startGame);

function startGame() {
  compArray = [];
  let firstNum = Math.floor(Math.random() * 4);
  compArray.push(firstNum);
  console.log(firstNum);
  lightButtons();
}

function lightButtons() {
  compArray.forEach(lightMe);
}

// Sage Kearney helped with the iterarion pause on my forEach method by
// linking me to https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30
function lightMe(buttonNum, i) {
  setTimeout(() => {
    if (buttonNum === 0) {
      setTimeout(function() {
        greenButton.style.background = '#75ff79';
      }, 500);
      setTimeout(function() {
        greenButton.style.background = 'green';
      }, 1000);
    } else if (buttonNum === 1) {
      setTimeout(function() {
        redButton.style.background = '#ff7a83';
      }, 500);
      setTimeout(function() {
        redButton.style.background = 'red';
      }, 1000);
    } else if (buttonNum === 2) {
      setTimeout(function() {
        yellowButton.style.background = '#ffffb5';
      }, 500);
      setTimeout(function() {
        yellowButton.style.background = 'yellow';
      }, 1000);
    } else {
      setTimeout(function() {
        blueButton.style.background = '#7c83ff';
      }, 500);
      setTimeout(function() {
        blueButton.style.background = 'blue';
      }, 1000);
    }
  }, i * 1000);
}
