console.log("Hello World!");

// Variables

let humanScore = 0;
let computerScore = 0;

// Functions

function getComputerChoice (){

    let choice = Math.random ();

    if (choice >= 0 && choice <= 0.33) {
        return "ROCK"
    }

    if (choice > 0.33 && choice <= 0.66) {
        return "PAPER"
    }

    if (choice > 0.66 && choice <= 1) {
        return "SCISSORS"
    }

}

function getHumanChoice (){
    let choice = prompt("Select between: Rock, Paper and Scissors.","Enter your choice: ");
    return choice.toUpperCase();

}


function playRound (humanChoice, computerChoice) {

    //Human chooses rock
    if (humanChoice == "ROCK" &&  computerChoice == "ROCK") {
        console.log("It's a draw! Rock can't beat Rock");
    }
    if (humanChoice == "ROCK" &&  computerChoice == "PAPER") {
        console.log("You lose! Paper beats Rock")
    }
    if (humanChoice == "ROCK" &&  computerChoice == "SCISSORS") {
       console.log("You win! Rock beats Scissors") 
    }

    //Human chooses paper
    if (humanChoice == "PAPER" &&  computerChoice == "ROCK") {
        console.log("You win! Paper beats rock!")
    }
    if (humanChoice == "PAPER" &&  computerChoice == "PAPER") {
        console.log("It's a draw! Paper can't beat Paper")
    }
    if (humanChoice == "PAPER" &&  computerChoice == "SCISSORS") {
       console.log("You lose! Scissors beats Paper") 
    }

    //Human chooses scissors
    if (humanChoice == "SCISSORS" &&  computerChoice == "ROCK") {
        console.log("You lose! Rock beats Scissors")
    }
    if (humanChoice == "SCISSORS" &&  computerChoice == "PAPER") {
        console.log("You win! Scissors beats Paper")
    }
    if (humanChoice == "SCISSORS" &&  computerChoice == "SCISSORS") {
       console.log("It's a draw! Scissors can't beat Scissors") 
    }

}

//Console testing

//console.log(getComputerChoice());
//console.log(getHumanChoice());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log("Human Choice: ", humanSelection);
console.log("Computer Choice: ", computerSelection);

playRound (humanSelection,computerSelection);