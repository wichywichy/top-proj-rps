  
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

const computerSelection = getComputerChoice (randomPick);

//Assign random integer to each variable so that when called, getComputerChoice will choose either Rock, paper, or scissors, at random.

//let computerSelection = getComputerChoice (getRndInteger (1,3);
//reduce the function down to a variable for clarity.

const clickRock = document.getElementById("clickRock");
const clickPaper = document.getElementById("clickPaper");
const clickScissors = document.getElementById("clickScissors");
//Align button in html with button constants in java. Declares 3 player select variables.

//Assign playerSelection = Rock, Paper, or Scissors.

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
  //  console.log (playRound (computerSelection, clickScissors))

clickRock.addEventListener ("click", function () {
    console.log (playRound (computerSelection, clickRock))
})
clickPaper.addEventListener ("click", function () {
    console.log (playRound (computerSelection, clickPaper))
})
clickScissors.addEventListener ("click", function () {
    console.log (playRound (computerSelection, clickScissors))
})
