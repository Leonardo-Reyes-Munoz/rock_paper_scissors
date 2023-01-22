//returns random choice from list of options for computer
function getComputerChoice () {
    let computerSelection = Math.floor((Math.random() * 3)); //selects random number whole number between zero and two (not including three)
    computerChoice = options[computerSelection];
    return computerChoice;
}

//Prompts for player choice and compares it to computer choice. Alets won or lost message. 
// Adds to computer or player score. Returns score.
function playRound(playerChoice, computerChoice) {
    playerSelection = prompt("Choose between rock, paper, or scissors:");
    playerChoice = playerSelection.toLowerCase();
    computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        alert("It's a draw!");
    } else if (playerChoice === "rock"  && computerChoice === "scissors") {
        alert("You win! Rock beats scissors");
        return playerScore++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats Rock.");
        return playerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats paper.")
        return playerScore++;
    } else if (computerChoice === "rock"  && playerChoice === "scissors") {
        alert("You lose! Scissors loses to rock.");
        return computerScore++;
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        alert("You lose! Rock loses to paper.");
        return computerScore++;
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        alert("You lose! Paper loses to scissors.")
        return computerScore++;
    } else {
        alert("You entered an invalid option. You lose!");
        return computerScore++;
    }
}

const options = ["rock", "paper", "scissors"];
let playerChoice = " ";
let computerChoice = " ";
let computerScore = 0;
let playerScore = 0;

//initiates game and continues for 5 rounds.
function game() {
    for (let i = 0; i < 5 ; i++) {
        playRound(playerChoice, computerChoice);
    }
}
 game();

 //compares scores and if player won or lost. 
 if (playerScore > computerScore) {
    alert("Congratulations you won best out of 5.");
 } else {
    alert("You lost. Computer won best out of 5.");
 }

//end of game

