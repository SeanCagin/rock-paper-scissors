const INVALID = -1;
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;


function getNumEquiv(choice) {
    choice = String(choice).toLowerCase();
    
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
        
        default:
            return INVALID;
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
            break;

        default:
            return INVALID;
    }
}


function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(userChoice, computerChoice) {
    let userString = getStrEquiv(userChoice);
    let computerString = getStrEquiv(computerChoice);

    // With how the values are assigned to rock, paper, and scissors,
    // it is easy to check for who wins like this
    if (userChoice == (computerChoice + 1) % 3) {
        playerCount++;
        return `You Win! ${userString} beats ${computerString}`;
    } else if (userChoice == computerChoice) {
        return `Tie! Both players played ${userString}`;
    } else {
        computerCount++;
        return `You Lose! ${computerString} beats ${userString}`;
    }
}

function play(userChoice) {
    userChoice = getNumEquiv(userChoice);

    if (userChoice == INVALID) {
        console.log("please enter a valid input!");
        return;
    }

    let computerChoice = getComputerChoice();
    return playRound(userChoice, computerChoice);
}

