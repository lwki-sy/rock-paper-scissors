/*
- get the user's choice in the game of rock, paper, scissors √
- get the computer's choice √
- compare the two values (user vs ai) to determine who wins √
- winner gets 1 point √
- play the game for 5 rounds

*/


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice == 0) {
        computerChoice = "Rock";
        } else if (computerChoice == 1){
        computerChoice = "Paper";
        } else {
        computerChoice = "Scissors";
        }
    return computerChoice;
}

function getHumanChoice(){
   humanChoice = prompt ("Rock, Paper, Scissors: ");

   humanChoice = humanChoice.trim().toLowerCase();
   humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

    if (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors"){
        return getHumanChoice();
    }

   return humanChoice;

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
    } else if (humanChoice === "Rock" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Scissors" || humanChoice === "Scissors" && computerChoice === "Rock"){
        console.log("You lose.");
        computerScore++;
        return computerScore;
    } else {
        console.log("You win!");
        humanScore++;
        return humanScore;
    }
}


function playGame(){
    for(let i=1; i<=5; i++){
        console.log(`Round ${i}:`);
            let computerChoice = getComputerChoice();
            let choice = getHumanChoice();
        console.log("You chose " + choice + " and the computer picked " +computerChoice + ".");

    playRound(humanChoice, computerChoice);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
        console.log("****************************");
    }
}

playGame();

