let player2Score = 0;
let player1Score = 0;

let score1 = document.getElementById("player1Score");
let score2 = document.getElementById("player2Score");
const button = document.querySelectorAll(".selection button");
const showicon1 = document.querySelector(".ply1 i");
const showicon2 = document.querySelector(".ply2 i");
const text = document.getElementById("demo");
const text2 = document.getElementById("demo2");
const randomClasses = [
  "fas fa-hand-rock",
  "fas fa-hand-paper",
  "fas fa-hand-scissors",
];
const btn = [
  document.getElementById("rock"),
  document.getElementById("paper"),
  document.getElementById("scissors"),
];
let playerOneChoice = null;
let playerTwoChoice = null;
// const game = () => {
//   if (showicon1.className === showicon2.className) {
//     score1.innerHTML = score1.innerHTML;
//     score2.innerHTML = score2.innerHTML;
//     text.innerHTML = "It's a Tie ! ";
//     text.style.color = "orange";
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = "orange";
//   }
//   // if it's not a Tie.
//   else if (
//     showicon1.className === randomClasses[0] &&
//     showicon2.className === randomClasses[2]
//   ) {
//     score1.innerHTML = player1Score;
//     player1Score++;
//     text.innerHTML = "player 1 Won ! ";
//     text.style.color = "rgb(1, 146, 1)";
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = "rgb(1, 146, 1)";
//   } else if (
//     showicon1.className === randomClasses[0] &&
//     showicon2.className === randomClasses[1]
//   ) {
//     score2.innerHTML = player2Score;
//     player2Score++;
//     text.innerHTML = "player 1 u Loosed ! ";
//     text.style.color = "red";
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = "red";
//   } else if (
//     showicon1.className === randomClasses[1] &&
//     showicon2.className === randomClasses[2]
//   ) {
//     score2.innerHTML = player2Score;
//     player2Score++;
//     text.innerHTML = "player 1 Loosed ! ";
//     text.style.color = "red";
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = "red";
//   } else if (
//     showicon1.className === randomClasses[1] &&
//     showicon2.className === randomClasses[0]
//   ) {
//     score1.innerHTML = player1Score;
//     player1Score++;
//     text.innerHTML = "player 1 u Won ! ";
//     text.style.color = "rgb(1, 146, 1)";
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = "rgb(1, 146, 1)";
//   } else if (
//     showicon1.className === randomClasses[2] &&
//     showicon2.className === randomClasses[0]
//   ) {
//     score2.innerHTML = player2Score;
//     player2Score++;
//     text.innerHTML = "player 2 u won ";
//     text.style.color = "red";
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = "red";
//   } else if (
//     showicon1.className === randomClasses[2] &&
//     showicon2.className === randomClasses[1]
//   ) {
//     score1.innerHTML = player1Score;
//     player1Score++;
//     text.innerHTML = "player 2 loose ";
//     text.style.color = "rgb(1, 146, 1)";
//     text2.innerHTML = text.innerHTML;
//     text2.style.color = "rgb(1, 146, 1)";
//   }
// };

// button.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let clickedBtn = document.getElementById(e.target.id);
//     const isPlayer1 = e.target.id.split("-")[1] == "1";
//     if (isPlayer1) {
//       showicon1.className = clickedBtn.className;
//     } else {
//       showicon2.className = clickedBtn.className;
//     }
//   });
// });


button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!playerOneChoice || !playerTwoChoice) {
      let clickedBtn = document.getElementById(e.target.id);
      const isPlayer1 = e.target.id.split("-")[1] == "1";
      if (isPlayer1) {
        showicon1.className = clickedBtn.className;
        playerOneChoice = e.target.id.split("-")[0];
      } else {
        showicon2.className = clickedBtn.className;
        playerTwoChoice = e.target.id.split("-")[0];
      }
    }

    if (playerOneChoice && playerTwoChoice) {
      calculateWinner();
    }
  });
});

function calculateWinner() {
  if (playerOneChoice === playerTwoChoice) {
    text.innerHTML = "It's a Tie ! ";
    text.style.color = "orange";
    text2.innerHTML = text.innerHTML;
    text2.style.color = "orange";
  } else {
    if (
      (playerOneChoice === "rock" && playerTwoChoice === "scissors") ||
      (playerOneChoice === "paper" && playerTwoChoice === "rock") ||
      (playerOneChoice === "scissors" && playerTwoChoice === "paper")
    ) {
      player1Score++;
      score1.innerHTML = player1Score;
      text.innerHTML = "player 1 Won ! ";
      text.style.color = "rgb(1, 146, 1)";
      text2.innerHTML = text.innerHTML;
      text2.style.color = "rgb(1, 146, 1)";
    } else {
      player2Score++;
      score2.innerHTML = player2Score;
      text.innerHTML = "player 2 u won ";
      text.style.color = "red";
      text2.innerHTML = text.innerHTML;
      text2.style.color = "red";
    }
  }
  setTimeout(() => {
    playerOneChoice = null;
    playerTwoChoice = null;
    text.innerHTML = "choose a symbol";
    text.style.color = "yellow";
    text2.innerHTML = text.innerHTML;
    text2.style.color = "yellow";
  }, 5000);
}

function startGame() {
  playerOneChoice = null;
  playerTwoChoice = null;
  player2Score = 0;
  player1Score = 0;
}

startGame();
