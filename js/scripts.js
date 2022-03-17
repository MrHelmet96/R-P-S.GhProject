// The Rock - Paper - Scissors Machine //

// Pseudo Coding

// The user should input an option (Rock, Paper, Scissors)
const playerSelection = document.getElementById('rock');
                        // document.getElementById('paper');
                        // document.getElementById('scissors');

// Set up the options for the computer (Rock, Paper, Scissors)
        // const options = ["Rock", "Paper", "Scissors"]

// Make the computer select one of this options at random
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    let getOptions = Math.floor(Math.random() * options.length);
    
    return options[getOptions]
}

const computerSelection = computerPlay();

// Play the first round
function playRound(playerSelection, computerSelection) {
   console.log(`you selected ${playerSelection}`);
   console.log(`Computer selected ${computerSelection}`);

   // Determinate who wins and display the message

    //Tie
   if (playerSelection === computerSelection) {
       console.log(`iT'S A TIE! You and the Computer choose the same option.`)
   }
   //Rock
     else if ( playerSelection === 'rock' && computerSelection === 'paper') {
       console.log(`You lose! Paper beats Rock.`)
   } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
       console.log(`You win! Rock beats Scissors.`)
   }
   //Paper
    else if ( playerSelection === 'paper' && computerSelection === 'rock') {
    console.log(`You win! Paper beats Rock.`)
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log(`You lose! Scissors beats Paper.`)
    }
    //Scissors
    else if ( playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log(`You win! Rock beats Paper.`)
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log(`You lose! Rock beats Scissors.`)
    }

}


// Repeat
