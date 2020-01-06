const startButton = document.querySelector('.start-button');
const greenButton = document.querySelector('.green-button');
const redButton = document.querySelector('.red-button');
const yellowButton = document.querySelector('.yellow-button');
const blueButton = document.querySelector('.blue-button');
let compArray = [];

startButton.addEventListener('click', startGame);

function startGame() {
  compArray = [];
  let firstNum = Math.floor(Math.random() * 5);
  compArray.push(firstNum);
  console.log(compArray);
}
