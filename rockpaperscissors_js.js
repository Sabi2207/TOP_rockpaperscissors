let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
        
        const computerSelection = getComputerChoice();

        const roundWinner = getRoundWinner(playerSelection, computerSelection);

        if (roundWinner === 'You win!') {
            playerScore++;
        } else if (roundWinner === `You Lose! ${computerSelection} beats ${playerSelection}`) {
            computerScore++;
        }

        console.log(`Player Score: ${playerScore}`)
        console.log(`Computer Score: ${computerScore}`)
    }



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// function getPlayerChoice() {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

const playerSelection = prompt("Choose rock, paper or scissors").toLowerCase;


function getRoundWinner(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "rock") {
            return 'You win!';
        } else if (playerSelection === computerSelection) {
            return "It's a tie! Try again!";
        } else {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
}

function playGame(numRounds) {
    for (let i = 0; i <= numRounds; i++) {
        // const playerSelection = getPlayerChoice();
        playRound(playerSelection);
    }
}

playGame(5)

