const startButton = document.querySelector('.start-button');
const greenButton = document.querySelector('.green-button');
const redButton = document.querySelector('.red-button');
const yellowButton = document.querySelector('.yellow-button');
const blueButton = document.querySelector('.blue-button');
const gameButtons = document.querySelector('.game-buttons');
const gameBoard = document.querySelector('.game-board');
const instructionsButton = document.querySelector('.instructions-button');
const instructions = document.querySelector('.instructions');
const loser = document.querySelector('.loser-message');

// will store user and computer inputs
let compArray = [];
let userArray = [];
let winner = false;
let currentScore = document.querySelector('#score-num');
let currentHighScore = document.querySelector('#highscore-num');
let storedHighScore = localStorage.getItem('playerHighScore');
let playerScore = 0;
let playerHighScore = 0;

// sets high score to saved value
if (storedHighScore) {
  currentHighScore.innerText = storedHighScore;
}

startButton.addEventListener('click', startGame);
instructionsButton.addEventListener('click', peek);
gameButtons.addEventListener('click', userInput);
gameButtons.addEventListener('mousedown', highlight);
gameButtons.addEventListener('mouseup', removeHighlight);
gameButtons.addEventListener('mouseout', removeHighlight);

// this function makes it possible to view the instructions on
// the same page, without  distraction.
function peek() {
  instructions.style.display = 'block';
  gameBoard.style.display = 'none';
  instructionsButton.style.display = 'none';
}

// only runs for visible interaction. does not affect game logic.
// lights up buttons when clicked.
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

// same as above, does not affect game logic.
function removeHighlight(evt) {
  if (evt.target.className === 'green-button') {
    greenButton.style.background = 'green';
  } else if (evt.target.className === 'red-button') {
    redButton.style.background = 'red';
  } else if (evt.target.className === 'yellow-button') {
    yellowButton.style.background = '#cece00';
  } else if (evt.target.className === 'blue-button') {
    blueButton.style.background = 'blue';
  }
}

// initailize game
function startGame() {
  instructions.style.display = 'none';
  gameBoard.style.display = 'flex';
  instructionsButton.style.display = 'block';
  loser.style.display = 'none';
  playerScore = 0;
  currentScore.innerText = playerScore;
  compArray = [];
  userArray = [];
  let firstNum = Math.floor(Math.random() * 4);
  compArray.push(firstNum);
  lightButtons();
}

// shows off light sequence provided only by computer
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

// takes in user sequence to be stored.
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

// progression. first, checks to see if user sequence is as long as the computer's, then checks to see if the sequences are the same. results in progression, or loss.
function checkSolution() {
  if (userArray.length === compArray.length) {
    for (let i = 0; i < compArray.length; i++) {
      if (userArray[i] === compArray[i]) {
        winner = true;
      } else {
        loser.style.display = 'block';
        gameBoard.style.display = 'none';
        instructions.style.display = 'none';
        playerScore = 0;
        currentScore.innerText = playerScore;
        return (winner = false);
      }
    }
    if ((winner = true)) {
      let nextNum = Math.floor(Math.random() * 4);
      compArray.push(nextNum);
      userArray = [];
      lightButtons();
      playerScore += 1;
      currentScore.innerText = playerScore;
      if (playerScore >= storedHighScore) {
        playerHighScore = playerScore;
        localStorage.setItem('playerHighScore', playerScore);
        storedHighScore = parseInt(localStorage.getItem('playerHighScore'));
        currentHighScore.innerText = storedHighScore;
      }
    }
  }
}
