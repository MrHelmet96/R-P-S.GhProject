// The Rock - Paper - Scissors Machine //

// Pseudo Coding

let playerScore = 0;
let computerScore = 0;

const playerSelection = playerPlay();
const computerSelection = computerPlay();

// Set up the options for the computer (Rock, Paper, Scissors) then make the computer select one of this options at random
function computerPlay() {
    const computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

// The user should input an option (Rock, Paper, Scissors)
function playerPlay() {
    const input = prompt("Choose between: Rock - Paper - Scissors");
    const playerChoice =  input.toLowerCase();
    return playerChoice;
}

console.log(`you selected ` + playerSelection);
console.log(`Computer selected ` + computerSelection);

// Play the first round  
function playRound(playerSelection, computerSelection) {

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection)
        console.log("Player score: " + playerScore);    
        console.log("Computer score: " + computerScore);    

        if (playerScore == 5) {
            console.log('You won the game! Reload the page to play again');
            
        }
    }
    else if (playerSelection == computerSelection) {
        console.log('It\'s a tie. You both chose ' + playerSelection)
        console.log("Player score: " + playerScore);    
        console.log("Computer score: " + computerScore);    
    }
    else {
        computerScore += 1
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection)
        console.log("Player score: " + playerScore);    
        console.log("Computer score: " + computerScore);

        if (computerScore == 5) {
            console.log('<br><br>I won the game! Reload the page to play again');
        }
    }
}

 playRound(playerSelection, computerSelection);

 // Repeat 5 times

function Game(playRound) {
    for (let i = 0; i < 5; i++) {

    }
}
