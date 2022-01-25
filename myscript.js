let playerSelection;
let computerSelection;
let computerWins = 0;
let playerWins = 0;
let announcement;



function getSelections(){
playerSelection = prompt("Please choose between rock, paper, or scissors.");
playerSelection = playerSelection.toLowerCase();
let randomNumber = Math.floor(Math.random() * 3) + 1;

if (randomNumber == 1) {
    computerSelection = "rock";
} else if (randomNumber == 2) {
    computerSelection = "paper";
} else if (randomNumber == 3) {
    computerSelection = "scissors";
}

console.log(playerSelection, computerSelection); 

}


function playRound(playerSelection, computerSelection){
    //rock
    if (playerSelection == "rock" && computerSelection == "rock") {
        
        announcement = ("Tie! Both players picked " + playerSelection + ". No points assigned.");     
        return announcement;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
       
        computerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Computer wins!");
        return announcement;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        
        playerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Player wins!");
        return announcement;
    } //paper
    else if (playerSelection == "paper" && computerSelection == "paper") {
        
        announcement = ("Tie! Both players picked " + playerSelection + ". No points assigned.");
        return announcement;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        
        computerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Computer wins!");
        return announcement;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
       
        playerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Player wins!");
        return announcement;
    } //scissors
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        
        announcement = ("Tie! Both players picked " + playerSelection + ". No points assigned.");
        return announcement;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        
        computerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Computer wins!");
        return announcement;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        
        playerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Player wins!");
        return announcement;
    }

}

function game() {

    for (let i = 0; i < 5; i++) {
        getSelections();
        console.log(playRound(playerSelection, computerSelection));  
    }

    if (playerWins > computerWins) {
        console.log("Out of 5 games, the player has won " + playerWins + " times and the computer has won " + computerWins + " times. The player wins the series!");
    } else if (computerWins > playerWins) {
        console.log("Out of 5 games, the player has won " + playerWins + " times and the computer has won " + computerWins + " times. The computer wins the series!");
    } else if (computerWins == playerWins) {
        console.log("Out of 5 games, the player has won " + playerWins + " times and the computer has won " + computerWins + " times. The series ends in a tie!");
    }
}
