console.log("Hello World!");

function getComputerChoice (){

    let choice = Math.random ();

    if (choice >= 0 && choice <= 0.33) {
        return "Rock"
    }

    if (choice > 0.33 && choice <= 0.66) {
        return "Paper"
    }

    if (choice > 0.66 && choice <= 1) {
        return "Scissors"
    }

}

console.log(getComputerChoice())