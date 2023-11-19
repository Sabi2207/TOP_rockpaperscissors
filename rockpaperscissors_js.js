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

        showScore(playerScore, computerScore);
        showWinner();
        resetScore();
    }



function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// const playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();


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

// function playGame(numRounds) {
//     for (let i = 0; i <= numRounds; i++) {
//         // const playerSelection = getPlayerChoice();
//         playRound(playerSelection);
//     }
// }

// playGame(5)

let playerSelection;

const selectionButtons = Array.from(document.getElementsByClassName("button"));
selectionButtons.forEach(button => {
    button.addEventListener("click", function () {
        handleButtonClick(button.value);
        playRound(playerSelection);
    })
})

function handleButtonClick(buttonValue) {
            playerSelection = buttonValue;
        }

let announceWinner = document.getElementById("winner");
let scoreCounter = document.getElementById("score");

function showScore(playerScore, computerScore) {
    scoreCounter.innerText = `Player: ${playerScore} vs. Computer ${computerScore}`
}

function showWinner() {
    if (playerScore === 5) {
        announceWinner.innerText = "Congratulations! You won!";
    } else if (computerScore === 5) {
        announceWinner.innerText = "Sorry, you lost.";
    }
}

function resetScore() {
    if (playerScore === 5 || computerScore === 5) {
        const winner = document.querySelector('#winner');
        let playAgainButton = document.createElement('button');
        playAgainButton.id = 'playAgain';
        playAgainButton.textContent = 'Play again';
        winner.appendChild(playAgainButton)
    }
}

document.getElementById('winner').addEventListener('click', function (event) {
    if (event.target.id === 'playAgain') {
        scoreCounter.innerText = "";
        playerScore = 0;
        computerScore = 0;
        announceWinner.innerText = "";
        event.target.remove();
    }
});