function getComputerChoice () {
    let selection = Math.floor((Math.random() * 3)); //selects random number whole number between zero and two (not including three)
    computerChoice = options[selection];
    return computerChoice;
}

const options = ["rock", "paper", "scissors"];
let computerChoice = " ";

getComputerChoice();
console.log(computerChoice);


