let playerScore = 0;
let computerScore = 0;

// Function to display Results
function displayResult(message) {
    const output = document.querySelector(".results");
    output.textContent = message;
    updateScoreboard();
}

function updateScoreboard() {
    const playerScoreDisplay = document.querySelector("#humanScore");
    const computerScoreDisplay = document.querySelector("#computerScore");
    const gameResultDisplay = document.querySelector("#gameResult");

    playerScoreDisplay.textContent = `Your Score: ${playerScore}`
    computerScoreDisplay.textContent = `PC Score: ${computerScore}`

    if (humanScore === 5) {
        gameResultDisplay.textContent = "Congratulations! You win the game!";
    } else if (computerScore === 5) {
        gameResultDisplay.textContent = "You lost the game. Better luck next time!";
    } else {
        gameResultDisplay.textContent = ""
    }
}

// Function to determine computer choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    return randomNum === 2 ?  "rock": randomNum === 1 ? "paper" : "scissors";
}

//Function to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! You both Chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        playerScore++;
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    displayResult(resultMessage);
}

// Select buttons from the HTML and add event listeners
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); 
    });
})