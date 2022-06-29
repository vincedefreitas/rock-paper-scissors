// Create function called computerPlay() that randomly returns Rock Paper or Scissors

function computerPlay() {
    let choice = ["rock", "paper", "scissors"];
    let computerSelection = choice[Math.floor(Math.random() * choice.length)];
    return computerSelection;
}

console.log(computerPlay())

// Write playRound() function that plays single round of rock paper scissors

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock"
    } 
}

console.log(playRound("rock", "paper"))

// rock beats scissors
// rock draws with rock
// paper beats rock

// function must contain the parameters playerSelection and computerSelection

// return string that declares winner of round

// playerSelection should be case insensitive

// Write new function called game() - call playRound function inside of this to play a 5
// round game that keeps score and reports a winner or loser at end (hint: loops)
// for (let i = 0; i < 5; i++;)

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
