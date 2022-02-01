let playerSelection;
let computerSelection;
let computerWins = 0;
let playerWins = 0;
let announcement;
let roundsRemaining = 5;
let gameSummary = '';


const playerWinsDisplay = document.getElementById("playerWinsTotal");
const computerWinsDisplay = document.getElementById("computerWinsTotal");
const messageDisplay = document.getElementById("message");
const roundsDisplay = document.getElementById("rounds");




//console.log(document.querySelector(".rock"));
//const rockBtn = document.getElementById("rock");
//console.log(rockBtn);
//rockBtn.addEventListener("click", chooseRock);









function computerChoice(){
let randomNumber = Math.floor(Math.random() * 3) + 1;


if (randomNumber == 1) {
    return "rock";
} else if (randomNumber == 2) {
    return"paper";
} else if (randomNumber == 3) {
    return "scissors";
}

}

function evaluateWinner(){
    if (playerWins > computerWins) {
        gameSummary = "The player wins the series!";
    }
    if (playerWins < computerWins) {
        gameSummary = "The computer wins the series!";
    }
    if (playerWins == computerWins) {
        gameSummary = "The series ends in a draw!"
    } 
}


function playRound(playerSelection, computerSelection){
    //rock
    //console.log("playRound has been called with" + playerSelection + " and " + computerSelection);
    if (roundsRemaining < 1) {
        messageDisplay.textContent = "Press the reset button to begin a new series!";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        
        announcement = ("Tie! Both players picked " + playerSelection + ". No points assigned.");     
        console.log(announcement);
        roundsRemaining --;
        if (roundsRemaining == 0) {
            evaluateWinner();
        }
        console.log(roundsRemaining);
        messageDisplay.textContent = announcement + " " + gameSummary;
        roundsDisplay.textContent = roundsRemaining;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
       
        computerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Computer wins!");
        console.log(announcement);
        roundsRemaining --;
            if (roundsRemaining == 0) {
                evaluateWinner();
            }
        computerWinsDisplay.textContent = computerWins;
        messageDisplay.textContent = announcement + " " + gameSummary;
        roundsDisplay.textContent = roundsRemaining;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        
        playerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Player wins!");
        console.log(announcement);
        roundsRemaining --;
        if (roundsRemaining == 0) {
            evaluateWinner();
        }
        playerWinsDisplay.textContent = playerWins; 
        messageDisplay.textContent = announcement + " " + gameSummary;
        roundsDisplay.textContent = roundsRemaining;
    } //paper
    else if (playerSelection == "paper" && computerSelection == "paper") {
        
        announcement = ("Tie! Both players picked " + playerSelection + ". No points assigned.");
        console.log(announcement);
        roundsRemaining --;
        if (roundsRemaining == 0) {
            evaluateWinner();
        }
        messageDisplay.textContent = announcement + " " + gameSummary;
        roundsDisplay.textContent = roundsRemaining;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        
        computerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Computer wins!");
        console.log(announcement);
        roundsRemaining --;
        if (roundsRemaining == 0) {
            evaluateWinner();
        }
        computerWinsDisplay.textContent = computerWins;
        messageDisplay.textContent = announcement + " " + gameSummary;
        roundsDisplay.textContent = roundsRemaining;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
       
        playerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Player wins!");
        console.log(announcement);
        roundsRemaining --;
        if (roundsRemaining == 0) {
            evaluateWinner();
        }
        playerWinsDisplay.textContent = playerWins;
        messageDisplay.textContent = announcement + " " + gameSummary;
        roundsDisplay.textContent = roundsRemaining; 
    } //scissors
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        
        announcement = ("Tie! Both players picked " + playerSelection + ". No points assigned.");
        console.log(announcement);
        roundsRemaining --;
        if (roundsRemaining == 0) {
            evaluateWinner();
        }
        messageDisplay.textContent = announcement + " " + gameSummary;
        roundsDisplay.textContent = roundsRemaining;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        
        computerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Computer wins!");
        console.log(announcement);
        roundsRemaining --;
        if (roundsRemaining == 0) {
            evaluateWinner();
        }
        computerWinsDisplay.textContent = computerWins;
        messageDisplay.textContent = announcement + " " + gameSummary;
        roundsDisplay.textContent = roundsRemaining;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        
        playerWins ++;
        announcement = ("Player picks " + playerSelection + " and computer picks " + computerSelection + ". Player wins!");
        console.log(announcement);
        roundsRemaining --;
        if (roundsRemaining == 0) {
            evaluateWinner();
        }
        playerWinsDisplay.textContent = playerWins;
        messageDisplay.textContent = announcement + " " + gameSummary;
        roundsDisplay.textContent = roundsRemaining; 
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

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", chooseRock);

const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", choosePaper);

const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", chooseScissors);

const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", reset)

function chooseRock() { 
   playerSelection = "rock";
   computerSelection = computerChoice();
   playRound(playerSelection, computerSelection);
}

function choosePaper() {
    playerSelection = "paper";
    computerSelection = computerChoice();
    playRound(playerSelection, computerSelection);
}

function chooseScissors() {
    playerSelection = "scissors";
    computerSelection = computerChoice();
    playRound(playerSelection, computerSelection);
}

function reset () {
    playerWins = 0;
    computerWins = 0;
    roundsRemaining = 5;
    gameSummary = '';
    messageDisplay.textContent = "Game Reset!";
    playerWinsDisplay.textContent = playerWins;
    computerWinsDisplay.textContent = computerWins;
    roundsDisplay.textContent = roundsRemaining; 

}