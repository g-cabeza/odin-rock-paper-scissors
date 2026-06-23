// VARIABLES

    let humanScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    let matchCounter = 0;


// FUNCTIONS

//Computer Choice function - Chooses a random option
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

// Play Round function - Plays one round against the computer based on choices
function playRound (humanChoice, computerChoice) {
    // 0 = lose , 1= win, 2= draw
    const logContent = document.querySelector("#logDiv") ;
    const logContainer = document.createElement("div");

    //Human chooses rock
    if (humanChoice == "ROCK" &&  computerChoice == "ROCK") {
        //console.log("Human Choice:", humanChoice);
        // console.log("Computer Choice", computerChoice);
        // console.log("It's a draw! Rock can't beat Rock");

        
        logContainer.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice} so it's a draw! Rock can't beat Rock` ;
        logContent.replaceChildren(logContainer) ;
        return 2;
    }
    if (humanChoice == "ROCK" &&  computerChoice == "PAPER") {
        // console.log("Human Choice: ", humanChoice);
        // console.log("Computer Choice", computerChoice);
        // console.log("You lose! Paper beats Rock");

        logContainer.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice} so you lose! Paper beats Rock` ;
        logContent.replaceChildren(logContainer) ;
        return 0;
    }
    if (humanChoice == "ROCK" &&  computerChoice == "SCISSORS") {
        // console.log("Human Choice: ", humanChoice);
        // console.log("Computer Choice", computerChoice);
        // console.log("You win! Rock beats Scissors");

        logContainer.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice} so you win! Rock beats Scissors` ;
        logContent.replaceChildren(logContainer) ;
        return 1;
    }

    //Human chooses paper
    if (humanChoice == "PAPER" &&  computerChoice == "ROCK") {
        // console.log("Human Choice: ", humanChoice);
        // console.log("Computer Choice", computerChoice);
        // console.log("You win! Paper beats rock!");

        logContainer.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice} so you win! Paper beats rock!` ;
        logContent.replaceChildren(logContainer) ;
        return 1;
    }
    if (humanChoice == "PAPER" &&  computerChoice == "PAPER") {
        // console.log("Human Choice: ", humanChoice);
        // console.log("Computer Choice", computerChoice);
        // console.log("It's a draw! Paper can't beat Paper");

        logContainer.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice} so it's a draw! Paper can't beat Paper` ;
        logContent.replaceChildren(logContainer) ;
        return 2;
    }
    if (humanChoice == "PAPER" &&  computerChoice == "SCISSORS") {
        // console.log("Human Choice: ", humanChoice);
        // console.log("Computer Choice", computerChoice);
        // console.log("You lose! Scissors beats Paper");

        logContainer.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice} so you lose! Scissors beats Paper` ;
        logContent.replaceChildren(logContainer) ;
        return 0;
    }

    //Human chooses scissors
    if (humanChoice == "SCISSORS" &&  computerChoice == "ROCK") {
        // console.log("Human Choice: ", humanChoice);
        // console.log("Computer Choice", computerChoice);
        // console.log("You lose! Rock beats Scissors");

        logContainer.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice} so you lose! Rock beats Scissors` ;
        logContent.replaceChildren(logContainer) ;
        return 0;
    }
    if (humanChoice == "SCISSORS" &&  computerChoice == "PAPER") {
        // console.log("Human Choice: ", humanChoice);
        // console.log("Computer Choice", computerChoice);
        // console.log("You win! Scissors beats Paper");

        logContainer.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice} so you win! Scissors beats Paper` ;
        logContent.replaceChildren(logContainer) ;
        return 1;
    }
    if (humanChoice == "SCISSORS" &&  computerChoice == "SCISSORS") {
        // console.log("Human Choice: ", humanChoice);
        // console.log("Computer Choice", computerChoice);
        // console.log("It's a draw! Scissors can't beat Scissors");

        logContainer.textContent = `You chose ${humanChoice} and the computer chose ${computerChoice} so it's a draw! Scissors can't beat Scissors` ;
        logContent.replaceChildren(logContainer) ;
        return 2; 
    }

    }

//Round result function - Receives a escore based on function return
function roundResult(result) {
    const scoreContent = document.querySelector("#scoreDiv") ;
    const scoreContainer = document.createElement("div");
    

    if (result == 0) {
        computerScore += 1;
        matchCounter += 1;
    }
    if (result == 1){
        humanScore += 1;
        matchCounter += 1;
    }
    if (result == 2) {
        drawScore += 1;
        matchCounter += 1;
    }

    
    scoreContainer.textContent = `YOUR SCORE: ${humanScore} | COMPUTER SCORE: ${computerScore} | DRAWED MATCHES: ${drawScore} # NUMBER OF MATCHES: ${matchCounter}` ;
    scoreContent.replaceChildren(scoreContainer) ;


}

//Check amount of matches function - Checks for 5 matches an ends the game
function endMatch(humanScore,computerScore,matchCounter){
    const scoreContent = document.querySelector("#mainDiv") ;
    const scoreContainer = document.createElement("div");

    if (matchCounter == 5) {
        if (humanScore > computerScore) {
            
            scoreContainer.textContent = `YOU WON! ---- YOUR SCORE: ${humanScore} | COMPUTER SCORE: ${computerScore} | DRAWED MATCHES: ${drawScore} # NUMBER OF MATCHES: ${matchCounter}` ;
            scoreContent.replaceChildren(scoreContainer) ;
        } 
        if (computerScore > humanScore) {
            scoreContainer.textContent = `YOU LOOSE! ---- YOUR SCORE: ${humanScore} | COMPUTER SCORE: ${computerScore} | DRAWED MATCHES: ${drawScore} # NUMBER OF MATCHES: ${matchCounter}` ;
            scoreContent.replaceChildren(scoreContainer) ;
        }
        if (computerScore == humanScore) {
            scoreContainer.textContent = `ITS A DRAW! ---- YOUR SCORE: ${humanScore} | COMPUTER SCORE: ${computerScore} | DRAWED MATCHES: ${drawScore} # NUMBER OF MATCHES: ${matchCounter}` ;
            scoreContent.replaceChildren(scoreContainer) ;
        }
    }
}
//REFACTOR CODE FOR UI VERSION

const rockBtn = document.querySelector("#rockBtn") ;
rockBtn.addEventListener("click", () => { roundResult(playRound("ROCK", getComputerChoice()));}) ;
rockBtn.addEventListener("click", () => { endMatch(humanScore,computerScore,matchCounter);})

const paperBtn = document.querySelector("#paperBtn") ;
paperBtn.addEventListener("click", () => { roundResult(playRound("PAPER", getComputerChoice())) ;}) ;
paperBtn.addEventListener("click", () => { endMatch(humanScore,computerScore,matchCounter);})

const scissorBtn = document.querySelector("#scissorBtn") ;!
scissorBtn.addEventListener("click", () => { roundResult(playRound("SCISSORS", getComputerChoice()));}) ;
scissorBtn.addEventListener("click", () => { endMatch(humanScore,computerScore,matchCounter);})
