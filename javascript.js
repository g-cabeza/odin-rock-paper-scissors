//console.log("Hello World!");

// Variables
    let humanScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    let counter = 5;


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


function playGame() {

    


    function playRound (humanChoice, computerChoice) {
    // 0 = lose , 1= win, 2= draw

    //Human chooses rock
    if (humanChoice == "ROCK" &&  computerChoice == "ROCK") {
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice", computerChoice);
        console.log("It's a draw! Rock can't beat Rock");
        return 2;
    }
    if (humanChoice == "ROCK" &&  computerChoice == "PAPER") {
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice", computerChoice);
        console.log("You lose! Paper beats Rock");
        return 0;
    }
    if (humanChoice == "ROCK" &&  computerChoice == "SCISSORS") {
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice", computerChoice);
        console.log("You win! Rock beats Scissors");
        return 1;
    }

    //Human chooses paper
    if (humanChoice == "PAPER" &&  computerChoice == "ROCK") {
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice", computerChoice);
        console.log("You win! Paper beats rock!");
        return 1;
    }
    if (humanChoice == "PAPER" &&  computerChoice == "PAPER") {
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice", computerChoice);
        console.log("It's a draw! Paper can't beat Paper");
        return 2;
    }
    if (humanChoice == "PAPER" &&  computerChoice == "SCISSORS") {
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice", computerChoice);
        console.log("You lose! Scissors beats Paper");
        return 0;
    }

    //Human chooses scissors
    if (humanChoice == "SCISSORS" &&  computerChoice == "ROCK") {
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice", computerChoice);
        console.log("You lose! Rock beats Scissors");
        return 0;
    }
    if (humanChoice == "SCISSORS" &&  computerChoice == "PAPER") {
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice", computerChoice);
        console.log("You win! Scissors beats Paper");
        return 1;
    }
    if (humanChoice == "SCISSORS" &&  computerChoice == "SCISSORS") {
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice", computerChoice);
        console.log("It's a draw! Scissors can't beat Scissors");
        return 2; 
    }

    }
    
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    roundResult = playRound (humanChoice,computerChoice);
    if (roundResult == 0) {
        computerScore = computerScore + 1;
    }
    if (roundResult == 1){
        humanScore = humanScore +1;
    }
    if (roundResult == 2) {
        drawScore = drawScore +1;
    }


    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    roundResult = playRound (humanChoice,computerChoice);
    if (roundResult == 0) {
        computerScore = computerScore + 1;
    }
    if (roundResult == 1){
        humanScore = humanScore +1;
    }
    if (roundResult == 2) {
        drawScore = drawScore +1;
    }

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    roundResult = playRound (humanChoice,computerChoice);
    if (roundResult == 0) {
        computerScore = computerScore + 1;
    }
    if (roundResult == 1){
        humanScore = humanScore +1;
    }
    if (roundResult == 2) {
        drawScore = drawScore +1;
    }

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    roundResult = playRound (humanChoice,computerChoice);
    if (roundResult == 0) {
        computerScore = computerScore + 1;
    }
    if (roundResult == 1){
        humanScore = humanScore +1;
    }
    if (roundResult == 2) {
        drawScore = drawScore +1;
    }

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    roundResult = playRound (humanChoice,computerChoice);
    if (roundResult == 0) {
        computerScore = computerScore + 1;
    }
    if (roundResult == 1){
        humanScore = humanScore +1;
    }
    if (roundResult == 2) {
        drawScore = drawScore +1;
    }

    console.log("Human Score: ", humanScore);
    console.log("Computer Score: ", computerScore);
    console.log("Drew games: ", drawScore);

}
//Console testing

//console.log(getComputerChoice());
//console.log(getHumanChoice());




//console.log("Human Choice: ", humanSelection);
//console.log("Computer Choice: ", computerSelection);

playGame();
