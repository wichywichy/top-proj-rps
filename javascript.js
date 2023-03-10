  
function getRndInteger (min, max) {
 return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getComputerChoice (getRndInteger) {
    if (getRndInteger === 1) {
        console.log ("Rock");
    } else if (getRndInteger === 2) {
        console.log ("Paper");
    } else {
        console.log ("Scissors");
    }
}
//Assign random integer to each variable so that when called, getComputerChoice will choose either Rock, paper, or scissors, at random.

let computerSelection = (getComputerChoice (getRndInteger (1,3)));
//reduce the function down to a variable for clarity.

const clickRock = document.getElementById("clickRock");
const clickPaper = document.getElementById("clickPaper");
const clickScissors = document.getElementById("clickScissors");
//Align button in html with button constants in java. Declares 3 player select variables.

clickRock.addEventListener ("click", function () {
    console.log (playRound (clickRock, computerSelection))
})
clickPaper.addEventListener ("click", function () {
    console.log (playRound ())
})
clickScissors.addEventListener ("click", function () {
    console.log (playRound ())
})
//Assigns player selection event to click constant.

function playRound () {
    if (clickRock && computerSelection == "Paper") {
        return "You lose!";
    } else if (clickRock && computerSelection == "Scissors") {
        return "You win!";
    } else {
        return "You tie!";
    }
}


//Tell the computer that player selects a variable, that that is their game choice.
//Create a function that pits player selection against getComputerChoice.

// let playerSelection = "Rock";





// function playRound (playerSelection, computerSelection) {
    // if (playerSelection === "Rock" && computerSelection === "Paper") {
       // console.log ("You lose!");
 //   } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
   //     console.log ("You win!");
   // } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    //    console.log ("You tie!");
  //  } else { 
    //    console.log ("Play again!");
  //  }
// }

//function roundOne () {

  //  const playerSelection = 
    //if (playerSelection === "Rock" && computerSelection === "Paper") {
      //    console.log ("You lose!");
     //} else if (playerSelection === "Rock" && computerSelection === "Scissors") {
       //   console.log ("You win!");
     // } else if (playerSelection === "Rock" && computerSelection === "Rock") {
       //   console.log ("You tie!");
    //  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
      //    console.log ("You win!");
 //     } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
   //       console.log ("You tie!");
     // } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
      //    console.log ("You lose!");
//  }   
// }
