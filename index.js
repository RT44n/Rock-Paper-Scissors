const buttons = document.querySelectorAll("button");
const pChoice = document.querySelector("#pChoice");
const cChoice = document.querySelector("#cChoice");
const pScore = document.querySelector("#playerScore");
const cScore = document.querySelector("#computerScore");
const winner = document.querySelector("#winner");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerselection = button.id;
    computerSelection = getComputerChoice();
    game();
    pChoice.textContent = "You chose " + button.id;
    cChoice.textContent = "The computer chose " + computerSelection;
    pScore.textContent = "Your score is " + playerScore;
    cScore.textContent = "The Computer score is " + computerScore;
    if (playerScore == 5) {
      winner.textContent = "You have won!";
      computerScore = 0;
      playerScore = 0;
      alert("You have won!");
    } else if (computerScore == 5) {
      winner.textContent = "The computer has won!";
      computerScore = 0;
      playerScore = 0;
      alert("You have lost!");
    }
  });
});

let playerScore = 0;
let computerScore = 0;
let computerSelection = getComputerChoice();

function game() {
  computerSelection;
  playRound();
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  }
  if (computerChoice === 1) {
    return "paper";
  }
  if (computerChoice === 2) {
    return "scissors";
  }
}
const playRound = () => {
  playerselection;
  computerSelection;

  if (playerselection == computerSelection) {
    return "Its a tie!";
  }
  if (playerselection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You have lost!";
  }
  if (playerselection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You have won!";
  }
  if (playerselection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You have won!";
  }
  if (playerselection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You have lost!";
  }
  if (playerselection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You have won!";
  }
  if (playerselection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You have lost!";
  }
};
