'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
const checkBtn = document.querySelector('.check');
const again = document.querySelector('.again');
// ⛔️ No number!
// 📈 Too high!
// 📉 Too low!
// 💥 You lost the game!
// 🎉 Correct Number!
// #60b347
// #222
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (secretNumber === guess) {
    displayMessage('🎉 Correct Number!');
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (secretNumber > guess) {
    if (score > 1) {
      displayMessage('📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  } else if (secretNumber < guess) {
    if (score > 1) {
      displayMessage('📈 Too high!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
again.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').width = '15rem';
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = 0;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
});
