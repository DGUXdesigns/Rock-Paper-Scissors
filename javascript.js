// OPTION: function can also be done using arrays
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    
    if (randomNum === 2) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else if (randomNum === 0) {
        return "scissors"
    }

    // Output: "rock", "paper", "scissors" (Randomly selected)
}

function getHumanChoice() {
    let choice = prompt("Make a Choice: Rock, Paper or Scissors");
    
    if (choice !== null) {
        choice = choice.toLowerCase();
    } else {
        choice =""
    }

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return "invalid";
    }
}

// Function to play the entire game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    //Function to play a single round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! You both Chose ${humanChoice}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++; 
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    // Play 5 Rounds
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
    }

    //Final results
    console.log("FinalResults:");
    if (humanScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (humanScore < computerScore) {
        console.log("You lost. Better luck next time!");
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
playGame();
