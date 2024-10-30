let playerScore = 0;
let computerScore = 0;

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

    if (playerScore === 5) {
        gameResultDisplay.textContent = "Congratulations! You win the game!";
        playAgainButton.classList.remove("hidden");
    } else if (computerScore === 5) {
        gameResultDisplay.textContent = "You lost the game. Better luck next time!";
        playAgainButton.classList.remove("hidden");
    } else {
        gameResultDisplay.textContent = ""
    }
}

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

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); 
    });
})

const playAgainButton = document.querySelector("#playAgain");
playAgainButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    displayResult(""); // Clear result message
    updateScoreboard();
    playAgainButton.classList.add("hidden"); // Hide "Play Again" button
});