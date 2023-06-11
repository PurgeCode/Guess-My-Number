'use strict';

let score = 20;
let secretNum = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If there is no recieved input form the user
  if (!guess) {
    document.querySelector('.message').textContent =
      'Please Put your guess number';
  }

  //If User guessed the correct number and won
  else if (guess === secretNum) {
    document.querySelector('.message').textContent =
      'You Guessed the Correct Number';
    document.querySelector('body').style.backgroundColor = '#8B8000';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //If the guessed is to high
  else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'The number you guessed is to high. Guess Again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //If the guessed to low
  else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'The number you guessed is to low. Guess Again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Codes for Again Button/Reset
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
