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
// Output: "Rock!", "Paper!", "Scissors" (Randomly selected)
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
        return "Invalid choice! please choose 'rock, 'paper', or 'scissors'.";
    }
}

//score tracking
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both Chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++ 
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++
    }
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  