//returns random choice from list of options for computer
function getComputerChoice () {
    let computerSelection = Math.floor((Math.random() * 3)); //selects random number whole number between zero and two (not including three)
    computerChoice = options[computerSelection];
    return computerChoice;
}

//
function playRound(playerChoice, computerChoice) {
    playerSelection = prompt("Choose between rock, paper, or scissors:");
    playerChoice = playerSelection.toLowerCase();
    computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        alert("It's a draw!");
    } else if (playerChoice === "rock"  && computerChoice === "scissors") {
        alert("You win! Rock beats scissors");
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats Rock.");
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats paper.")
    } else if (computerChoice === "rock"  && playerChoice === "scissors") {
        alert("You lose! Scissors loses to rock.");
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        alert("You lose! Rock loses to paper.");
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        alert("You lose! Paper loses to scissors.")
    } else {
        alert("You entered an invalid option. You forfeit");
    }
    console.log(playerChoice);
    console.log(computerChoice);
}

const options = ["rock", "paper", "scissors"];
let playerChoice = " ";
let computerChoice = " ";

playRound(playerChoice, computerChoice);

