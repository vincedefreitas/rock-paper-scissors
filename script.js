let playerScore = 0
let computerScore = 0

console.log("Welcome to Rock Paper Scissors! Best of 5")

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

function game() {
    for (let i = 0; i < 10; i++) {
        if (playerScore < 3 && computerScore < 3) {
            let playerSelection = prompt("Rock, Paper or Scissors? ").toLowerCase()
            let computerSelection = computerPlay()
            console.log(`You chose ${playerSelection}`)
            console.log(`Computer chose ${computerSelection}`)
            console.log(playRound(playerSelection, computerSelection))
            console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
        } 
    }
    if (computerScore === 3) {
        console.log("Computer wins! Commiserations")
    } else {
        console.log("You win! Congratulations!")
    }
}

game()
