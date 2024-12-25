
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        computerChoice = "Rock";
    } else if (computerChoice == 1){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    console.log(computerChoice);
}
getComputerChoice();



/*
function getComputerChoice(max){
    const computerChoice= Math.floor(Math.random() * max);
            if(computerChoice == 2 ){
                return "rock"; }
            else if (computerChoice == 1){
                return "paper";
            } else { 
                return "scissors";
        }
    };
    //console.log(getComputerChoice(3)); 

function getHumanChoice(){
        let humanChoice = window.prompt("Rock, paper, scissors! ").trim();
        humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        console.log("You chose " + humanChoice);
        return humanChoice;
    } else {
        console.log("Invalid input. Please try again. ");
        return getHumanChoice(); 
    }
    }
        
    //getHumanChoice();


let humanScore = 0;
let computerScore = 0; 

function playRound(humanChoice, computerChoice){



    if(humanSelection === computerSelection){
        console.log("It's a tie! ");
    } else if((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper")){
        console.log("You win! " + humanSelection + " beats " + computerSelection);
    } else {
        console.log("You lose. "  + computerSelection + " beats " + humanSelection);
    }



    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound();
*/