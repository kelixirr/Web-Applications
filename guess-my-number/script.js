"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Function to handle guess checking
const checkGuess = function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("No Number!");

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
};

// Event listener for the 'Check' button
document.querySelector(".check").addEventListener("click", checkGuess);

// Event listener for the 'Enter' key press on the guess input field
document.querySelector(".guess").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkGuess();
  }
});

// Event listener for the 'Again' button to reset the game
document.querySelector(".again").addEventListener("click", function () {
  // Resetting the secret number and the score
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // Resetting the UI
  displayMessage("Start guessing..");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
