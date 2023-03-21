const computerOption = ["ROCK", "PAPER", "SCISSOR"];
let computerSelection = getComputerChoice();
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * computerOption.length);
  let randomElement = computerOption[randomIndex];
  return randomElement;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() === computerSelection) {
    return "tie";
  } else if (
    (playerSelection.toUpperCase() === "ROCK" &&
      computerSelection === "SCISSOR") ||
    (playerSelection.toUpperCase() === "PAPER" &&
      computerSelection === "ROCk") ||
    (playerSelection.toUpperCase() === "SCISSOR" &&
      computerSelection === "PAPER")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let userSelection = prompt("Select Rock-Paper-Scissor");
    let computerSelection = getComputerChoice();
    let result = playRound(userSelection, computerSelection);
    if (result == "player") {
      console.log(`Player wins! ${userSelection} beats ${computerSelection}`);
      playerWins++;
    } else if (result == "computer") {
      console.log(`Computer wins! ${computerSelection} beats ${userSelection}`);
      computerWins++;
    } else {
      console.log(`It's a tie!`);
    }
  }

  if (playerWins > computerWins) {
    return "Player Win the match!";
  } else if (playerWins < computerWins) {
    return "Computer Win the match!";
  } else {
    return "It's a tie!";
  }
}

console.log(game());
