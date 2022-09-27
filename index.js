let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Necessary DOM nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

/* A click event listener to the Roll Dice Button. Logging random
 number between 1 and 6*/

rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else {
    player1Score += randomNumber;
    player2Scoreboard.textContent = player1Score;
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 has won! 🥳";
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🎉";
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
  }

  if (player1Turn) {
    player1Turn = false;
  } else {
    player1Turn = true;
  }
});

resetBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.textContent = "Player 1 Turn";
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
}
