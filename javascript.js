function displayResult(message) {
    const output = document.querySelector(".results");
    output.textContent = message;
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
    } else {
        resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    displayResult(resultMessage)
}

// Select buttons from the HTML and add event listeners
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanChoice = button.textContent.toLowerCase(); // Convert button text to lowercase
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice); // Play a round with the clicked choice
    });
})

/*
//Final results
console.log("FinalResults:");
if (humanScore > computerScore) {
    console.log("Congratulations! You win!");
} else if (humanScore < computerScore) {
    console.log("You lost. Better luck next time!");
} else {
    console.log("It's a tie game!");
}
*/

    /* Play 5 Rounds
    for (let i = 0; i <5; i++) {
        const humanSelection = getHumanChoice();
        if (humanSelection === "invalid") {
            console.log("Invalid choice! Please choose 'rock', 'paper', or 'scissors'.");
            i--;
            continue; // Skip this round if the choice is invalid
        } 
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1} Scores - You: ${humanScore}, Computer: ${computerScore}`);
    }*/
