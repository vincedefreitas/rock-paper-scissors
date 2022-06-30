// Create function called computerPlay() that randomly returns Rock Paper or Scissors

function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

// Write playRound() function that plays single round of rock paper scissors

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock";
    } else {
        return "It's a draw! Go again";
    }
}


// Write new function called game() - call playRound function inside of this to play a 5
// round game that keeps score and reports a winner or loser at end (hint: loops)
// for (let i = 0; i < 5; i++;)

// function game() {
//     let playerSelection = prompt("Rock, Paper or Scissors? ").toLowerCase
//     const computerSelection = computerPlay()
//     for (let i = 0; i < 5; i++) {
        
//     }
// }

// game()


// display result at end of each round and winner at the end

// prompt user for input

// let playerSelection = prompt("Rock, Paper or Scissors? ")





// prompt user for input
// computer to select random from rock, paper, scissors
// compare user selection against computer selection
// tell user if they have won or lost round
// variable to keep track of score
// while the score is less than 5, keep playing
// repeat until score reaches 5, tell user if they won or lost
