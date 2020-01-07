const startButton = document.querySelector('.start-button');
const greenButton = document.querySelector('.green-button');
const redButton = document.querySelector('.red-button');
const yellowButton = document.querySelector('.yellow-button');
const blueButton = document.querySelector('.blue-button');
const gameButtons = document.querySelector('.game-buttons');
const gameBoard = document.querySelector('.game-board');
const instructions = document.querySelector('.instructions');
const paragraph = document.querySelector('.paragraph');

let compArray = [];
let userArray = [];
let winner = false;

startButton.addEventListener('click', startGame);
instructions.addEventListener('click', peek);
gameButtons.addEventListener('click', userInput);
gameButtons.addEventListener('mousedown', highlight);
gameButtons.addEventListener('mouseup', removeHighlight);
gameButtons.addEventListener('mouseout', removeHighlight);

function peek() {
  paragraph.style.display = 'block';
  gameBoard.style.display = 'none';
  instructions.style.display = 'none';
}

function highlight(evt) {
  if (evt.target.className === 'green-button') {
    greenButton.style.background = '#75ff79';
  } else if (evt.target.className === 'red-button') {
    redButton.style.background = '#ff7a83';
  } else if (evt.target.className === 'yellow-button') {
    yellowButton.style.background = '#ffffb5';
  } else if (evt.target.className === 'blue-button') {
    blueButton.style.background = '#7c83ff';
  }
}
function removeHighlight(evt) {
  if (evt.target.className === 'green-button') {
    greenButton.style.background = 'green';
  } else if (evt.target.className === 'red-button') {
    redButton.style.background = 'red';
  } else if (evt.target.className === 'yellow-button') {
    yellowButton.style.background = 'yellow';
  } else if (evt.target.className === 'blue-button') {
    blueButton.style.background = 'blue';
  }
}

function startGame() {
  paragraph.style.display = 'none';
  gameBoard.style.display = 'flex';
  instructions.style.display = 'block';
  compArray = [];
  userArray = [];
  let firstNum = Math.floor(Math.random() * 4);
  compArray.push(firstNum);
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

function userInput(evt) {
  if (evt.target.className === 'green-button') {
    userArray.push(0);
  } else if (evt.target.className === 'red-button') {
    userArray.push(1);
  } else if (evt.target.className === 'yellow-button') {
    userArray.push(2);
  } else if (evt.target.className === 'blue-button') {
    userArray.push(3);
  }
  checkSolution();
}

function checkSolution() {
  if (userArray.length === compArray.length) {
    for (let i = 0; i < compArray.length; i++) {
      if (userArray[i] === compArray[i]) {
        winner = true;
      } else {
        console.log('you lose');
        alert('You lose! Click start to try again!');
        return (winner = false);
      }
    }
    if ((winner = true)) {
      let nextNum = Math.floor(Math.random() * 4);
      compArray.push(nextNum);
      userArray = [];
      lightButtons();
    }
  }
}
