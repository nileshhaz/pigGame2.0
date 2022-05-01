'use strict';
//selecting elements
const elDiceOne = document.getElementById('dice1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const start = document.querySelector('.start');
const btnRoll = document.querySelector('.btn--roll');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
//functions
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 'Waiting';
  activePlayer = activePlayer === 0 ? 1 : 0;
  x = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent =
    'Playing Now';
};
const newGame = function () {
  x = 0;
  activePlayer = 0;
  score[0] = 0;
  score[1] = 0;
  elDiceOne.classList.add('hidden');
  document.getElementById(`current--0`).textContent = 'Playing';
  document.getElementById(`current--1`).textContent = 'Waiting';
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  console.log('heloo');
};

let x = 0;
let prev = 0;
let curr = 0;
let activePlayer = 0;
const score = [0, 0];
btnRoll.disabled = true;
btnNew.disabled = true;
let playingg = true;

score0El.textContent = 0;
score1El.textContent = 0;
elDiceOne.classList.add('hidden');

start.addEventListener('click', function () {
  btnRoll.disabled = false;
  btnNew.disabled = false;
  elDiceOne.classList.remove('hidden');
  start.classList.add('hidden');
  var diceOne = Math.floor(Math.random() * 6 + 1);
  prev = diceOne;
  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
      elDiceOne.classList.add('show-' + i);
    }
  }
});

btnRoll.addEventListener('click', function () {
  if (playingg) {
    prev = curr;
    var diceOne = Math.floor(Math.random() * 6 + 1);
    curr = diceOne;
    console.log(diceOne);
    if (curr == prev) {
      for (var i = 1; i <= 6; i++) {
        elDiceOne.classList.remove('show-' + i);
        if (diceOne === i) {
          elDiceOne.classList.add('show-' + i);
          elDiceOne.classList.add('ske');
          setTimeout(() => {
            elDiceOne.classList.remove('ske');
          }, 300);
        }
      }
    } else {
      for (var i = 1; i <= 6; i++) {
        elDiceOne.classList.remove('show-' + i);
        if (diceOne === i) {
          elDiceOne.classList.add('show-' + i);
        }
      }
    }

    setTimeout(() => {
      //   if (diceOne !== 1) {
      x += diceOne;
      save();
      //   } else {
      // switchPlayer();
      //   }
    }, 1000);
  }
});

const save = function () {
  if (playingg) {
    score[activePlayer] += x;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    console.log(activePlayer);
    console.log(score[activePlayer]);
    if (score[activePlayer] >= 20) {
      playingg = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.getElementById(`current--${activePlayer}`).textContent =
        'Winner🏆';
    } else {
      switchPlayer();
    }
  }
};

btnNew.addEventListener('click', function () {
  start.classList.remove('hidden');
  btnRoll.disabled = true;
  btnNew.disabled = true;
  playingg = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  if (activePlayer == 1) {
    switchPlayer();
    newGame();
  } else {
    newGame();
  }
});
