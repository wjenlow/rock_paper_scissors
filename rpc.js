function computerPlay() {
    let playChoices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = playChoices.slice(randomNumber, randomNumber + 1).toString();
    return computerSelection;
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() +
            playerSelection.substring(1).toLowerCase();
    //console.log("player selection: " + playerSelection);
    //console.log("computer selection: " + computerSelection);
    let playerWins;
    let draw;
    let statement;
    if(playerSelection === "Rock") {
        if(computerSelection === "Scissors") {
            playerWins = true;
            statement = "Rock beats Scissors";
        }
        else if(computerSelection === "Paper") {
            playerWins = false;
            statement = "Paper beats Rock";
        }
        else {
            draw = true;
        }
    }
    else if(playerSelection === "Paper") {
        if(computerSelection === "Scissors") {
            playerWins = false;
            statement = "Scissors beats Paper";
        }
        else if(computerSelection === "Rock") {
            playerWins = true;
            statement = "Paper beats Rock";
        }
        else {
            draw = true;
        }
    }
    else if(playerSelection === "Scissors") {
        if(computerSelection === "Rock") {
            playerWins = false;
            statement = "Rock beats Scissors";
        }
        else if(computerSelection === "Paper") {
            playerWins = true;
            statement = "Scissors beats Paper";
        }
        else {
            draw = true;
        }
    }
    if (draw === true) {
        return "It's a draw!"
    }
    else if (playerWins === true) {
        return "You win! " + statement;
    }
    else return "You lose! " + statement;
    
}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your selection:", "rock");
        let result = playRound(playerSelection, computerPlay());
        console.log("Result: " + result);
        if (result.startsWith("You win")) {
            playerScore++;
        }
        else {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        return "You win!"
    }
    else if (playerScore < computerScore) {
        return "You lose!"
    }
    else {
        return "It's a draw!"
    }
}
let result = game();
console.log(result);