// OPTION: function can also be done using arrays
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    
    if (randomNum === 2) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else if (randomNum === 0) {
        return "Scissors"
    } else {
        return "error";
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
        return `You chose ${choice}`;
    } else {
        return "Invalid choice! please choose 'rock, 'paper', or 'scissors'.";
    }
}

console.log(getHumanChoice())

/*
//score tracking
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!
    humanChoice = humanSelection;
    computerChoice =computerSelection;

    if (humanChoice === "rock" && computerChoice === "Scissors",
        humanChoice === "paper" && computerChoice === "Rock",
        humanChoice === "scissors" && computerChoice === "Paper"
    ) {
        return `You win! ${computerChoice} beats ${humanChoice}`; 
    } 
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  
  playRound(humanSelection, computerSelection);
  */