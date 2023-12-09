const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;


function getNumEquiv(choice) {
    choice = String(choice).toLowerCase;
    
    switch (choice) {
        case "rock":
            return ROCK;
            break;

        case "paper":
            return PAPER;
            break;

        case "scissors":
            return SCISSORS;
            break;
    }
}


function getStrEquiv(choice) {
    switch (choice) {
        case ROCK:
            return "rock";
            break;
        
        case PAPER:
            return "paper";
            break;
        
        case SCISSORS:
            return "scissors";
    }
}


function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}


function playRound() {

}