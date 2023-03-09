  
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

var computerSelection = (getComputerChoice (getRndInteger (1,3)))

