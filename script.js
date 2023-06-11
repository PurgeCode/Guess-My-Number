'use strict';

let score = 20;

const secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum;

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
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'The number you guessed is to high. Guess Again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNum) {
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
