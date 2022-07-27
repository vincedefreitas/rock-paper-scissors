let playerScore = 0
let computerScore = 0

function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection; 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1
        return "You win! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1
        return "You win! Paper beats Rock";
    } else if (playerSelection === computerSelection) {
        return "It's a draw! Go again";
    } else {
        return "You have chosen an option that isn't there. Choose again"
    }
}

const buttons = document.querySelectorAll('button');
const playerChoice = document.querySelector('.player-choice')
const computerChoice = document.querySelector('.computer-choice')
const result = document.querySelector('.result')
const score = document.querySelector('.score')
const winner = document.querySelector('.winner')


buttons.forEach((button) => {
    button.addEventListener('click', function() {
        if (playerScore < 5 && computerScore < 5) {
            let playerSelection = button.className.toLowerCase();
            let computerSelection = computerPlay()
            playerChoice.textContent = `You chose ${playerSelection}`;
            computerChoice.textContent = `Computer chose ${computerSelection}`;
            result.textContent = playRound(playerSelection, computerSelection);
            score.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
            if (computerScore === 5) {
                winner.textContent = "Computer wins! Commiserations";
                return
            } else if (playerScore === 5) {
                winner.textContent = "You win! Congratulations";
                return
            };
        } 
    });
});
