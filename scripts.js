/*
- get the user's choice in the game of rock, paper, scissors
- get the computer's choice
- compare the two values (user vs ai) to determine who wins
- winner gets 1 point
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

    while (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors"){
        getHumanChoice();
    }

   return humanChoice;

}

let computerChoice = getComputerChoice();
let choice = getHumanChoice();
console.log("You chose " + choice + " and the computer picked " +computerChoice + ".");



/*
function getHumanChoice(){
    do{ 
    humanChoice = prompt("Rock, Paper or Scissors?");
    if (!humanChoice) continue;
    humanChoice = humanChoice.trim().toLowerCase();
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    } while (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors");
    return humanChoice;

}
let choice = getHumanChoice();
console.log("You picked: " + choice);

/* ////////////////
function getHumanChoice() {
    let humanChoice;
    while (true) { 
        humanChoice = prompt("Rock, Paper, or Scissors?").trim().toLowerCase();
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        
        if (["Rock", "Paper", "Scissors"].includes(humanChoice)) {
            break; 
        }
        console.log("Invalid choice! Please enter Rock, Paper, or Scissors.");
    }
    return humanChoice;
}

let choice = getHumanChoice();
console.log("You picked: " + choice);




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