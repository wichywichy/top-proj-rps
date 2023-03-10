  
function getRndInteger (min, max) {
 return Math.floor(Math.random() * (max - min + 1)  + min);
}

const randomPick = getRndInteger (1,3);

function getComputerChoice (randomPick) {
    if (randomPick === 1) {
        return "Rock";
    } else if (randomPick === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
//Assign random integer to each variable so that when called, getComputerChoice will choose either Rock, paper, or scissors, at random.

const computerSelection = getComputerChoice (randomPick);

const clickRock = document.getElementById("clickRock");
const clickPaper = document.getElementById("clickPaper");
const clickScissors = document.getElementById("clickScissors");
//Align button in html with button constants in java. Declares 3 player select variables.

function playRound (computerSelection, playerSelection) {
    if (computerSelection == "Paper" && playerSelection == clickRock) {
        return "You lose!";
    } else if (computerSelection == "Scissors" && playerSelection == clickPaper) {
        return "You lose!";  
    } else if (computerSelection == "Rock" && playerSelection == clickScissors) {
        return "You lose!";
    } else if (computerSelection == "Scissors" && playerSelection == clickRock) {
        return "You win!";
    } else if (computerSelection == "Rock" && playerSelection == clickPaper) {
        return "You win!";
    } else if (computerSelection == "Paper" && playerSelection == clickScissors) {
        return "You win!"; 
    } else {
        return "You tie!";
    }
}
//Function created to play a single round.

clickRock.addEventListener ("click", function () {
    console.log (playRound (computerSelection, clickRock))
  })
  clickPaper.addEventListener ("click", function () {
    console.log (playRound (computerSelection, clickPaper))
  })
  clickScissors.addEventListener ("click", function () {
    console.log (playRound (computerSelection, clickScissors))
  })
  // Added button click through for game play outside of console.