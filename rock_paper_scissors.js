//returns random choice from list of options for computer
function getComputerChoice () {
    let computerSelection = Math.floor((Math.random() * 3)); //selects random number whole number between zero and two (not including three)
    computerChoice = options[computerSelection];
    return computerChoice;
}

//Prompts for player choice and compares it to computer choice. Alerts won or lost message. 
// Adds to computer or player score. Returns score.
function playRound(playerChoice, computerChoice) {
    //playerSelection 
    console.log(this.id);
    if(this.id === "rockbtn") {
        playerChoice = "rock";
    } else if(this.id === "paperbtn") {
        playerChoice = "paper";  
    } else if(this.id === "scissorsbtn") {
        playerChoice = "scissors";
    };

    computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        alert("It's a draw!");
    } else if (playerChoice === "rock"  && computerChoice === "scissors") {
        alert("You win! Rock beats scissors");
        playerScore++;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        alert("You win! Paper beats Rock.");
        playerScore++;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        alert("You win! Scissors beats paper.")
        playerScore++;
    } else if (computerChoice === "rock"  && playerChoice === "scissors") {
        alert("You lose! Scissors loses to rock.");
        computerScore++;
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        alert("You lose! Rock loses to paper.");
        computerScore++;
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        alert("You lose! Paper loses to scissors.")
        computerScore++;
    } else {
        alert("You entered an invalid option. You lose!");
        computerScore++;
    }

    const container = document.querySelector("#container");

    const content = document.createElement('div');
    content.classList.add("content");
    content.textContent = `Computer Score ${computerScore} Player Score ${playerScore}`;

    container.appendChild(content);
    
    console.log(computerScore);
    console.log(playerScore);
    
    
    //Compares playerScore to computerScore once the combine score reaches 5.
    //clears scores once the total score reaches 5 and winner is determined 
    if(playerScore + computerScore === 5) {
        if (playerScore > computerScore) {
            alert("Congratulations you won best out of 5. The game will restart now.");
            content.textContent = `Final Computer Score ${computerScore} Final Player Score ${playerScore}`;
            computerScore = 0;
            playerScore = 0;
        } else {
            alert("You lost. Computer won best out of 5. The game will restart now.");
            content.textContent = `Final Computer Score ${computerScore} Final Player Score ${playerScore}`;
            computerScore = 0;
            playerScore = 0;
        }
    }
    //score loops by clearing the score


}

const options = ["rock", "paper", "scissors"];
let playerChoice = " ";
let computerChoice = " ";
let computerScore = 0;
let playerScore = 0;


const rockbtn = document.querySelector('#rockbtn');
rockbtn.addEventListener('click', playRound);

const paperbtn = document.querySelector('#paperbtn');
paperbtn.addEventListener('click', playRound);

const scissorsbtn = document.querySelector('#scissorsbtn');
scissorsbtn.addEventListener('click', playRound);




