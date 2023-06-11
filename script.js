'use strict';

const secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Please Put your guess number';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent =
      'You Guessed the Correct Number';
  } else if (guess > secretNum) {
    document.querySelector('.message').textContent =
      'The number you guessed is to high. Guess Again';
  } else {
    document.querySelector('.message').textContent =
      'The number you guessed is to low. Guess Again';
  }
});
