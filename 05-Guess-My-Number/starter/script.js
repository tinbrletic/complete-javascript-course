"use strict";

/*
console.log(document.querySelector(".message").textContent);

document.querySelector(".message").textContent = "🎉 Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    //document.querySelector(".message").textContent = "⛔ No Number!";
    displayMessage("⛔ No Number!");
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You  lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   // when guess is to high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage("📈 Too high!");
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     displayMessage("💥 You  lost the game!");
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   // when guess is to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage("📉 Too Low!");
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     displayMessage("💥 You  lost the game!");
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
