let result;
let runningScore;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let playChoices = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  let computerSelection = playChoices
    .slice(randomNumber, randomNumber + 1)
    .toString();
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
        playerSelection[0].toUpperCase() +
        playerSelection.substring(1).toLowerCase();
  //console.log("player selection: " + playerSelection);
  //console.log("computer selection: " + computerSelection);
  let playerWins;
  let draw;
  let statement;
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      playerWins = true;
      statement = "Rock beats Scissors.";
    } else if (computerSelection === "Paper") {
      playerWins = false;
      statement = "Paper beats Rock.";
    } else {
      draw = true;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      playerWins = false;
      statement = "Scissors beats Paper.";
    } else if (computerSelection === "Rock") {
      playerWins = true;
      statement = "Paper beats Rock.";
    } else {
      draw = true;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      playerWins = false;
      statement = "Rock beats Scissors.";
    } else if (computerSelection === "Paper") {
      playerWins = true;
      statement = "Scissors beats Paper.";
    } else {
      draw = true;
    }
  }
  if (draw === true) {
    return "It's a draw! Nobody wins the round!";
  } 
  else if (playerWins === true) {
    playerScore = ++playerScore;
    return "You win the round! " + statement;
  } 
  else {
    computerScore = ++computerScore;
    return "You lose the round! " + statement;
  }
}
const playerRunningScore = document.getElementById("PlayerScore");
const computerRunningScore = document.getElementById("ComputerScore");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e);   
    result = playRound(button.id, computerPlay());
    const results = document.querySelector("#container");
    const roundResult = document.createElement("div");
    roundResult.classList.add("content");
    roundResult.textContent = result;
    results.insertBefore(roundResult, results.firstChild);
    playerRunningScore.textContent = `Player: ${playerScore}`;
    computerRunningScore.textContent = `Computer: ${computerScore}`;
    if (playerScore == 5 || computerScore == 5) {
      if (playerScore > computerScore) {
        roundResult.textContent = "GAME OVER - YOU WIN BEST OUT OF 5 ROUNDS!";
        results.insertBefore(roundResult, results.firstChild);
      }
      else {
        roundResult.textContent = "GAME OVER - YOU LOSE BEST OUT OF 5 ROUNDS..";
        results.insertBefore(roundResult, results.firstChild);
      }
      playerScore =  0;
      computerScore = 0;
      playerRunningScore.textContent = `Player: ${playerScore}`;
      computerRunningScore.textContent = `Computer: ${computerScore}`;
    }
  });
});

