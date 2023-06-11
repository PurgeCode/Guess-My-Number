'use strict';

let score = 20;
let secretNum = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If there is no recieved input form the user
  if (!guess) {
    displayMessage('Please Put your guess number');
  }

  //If User guessed the correct number and won
  else if (guess === secretNum) {
    displayMessage('You Guessed the Correct Number');
    document.querySelector('body').style.backgroundColor = '#8B8000';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // Use Ternary Operator to Identify the number is high or low
  else if (guess !== secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNum
          ? 'The number you guessed is to high. Guess Again'
          : 'The number you guessed is to low. Guess Again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lose the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Codes for Again Button/Reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
