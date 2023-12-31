function reset() {
    moveButtons.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = "black";
    });

    playerCount = 0;
    computerCount = 0;

    computerScore.textContent = computerCount;
    playerScore.textContent = playerCount;
    resultDisplay.textContent = "-";

    this.style.visibility = "hidden";
    this.disabled = true;
}

function endMessage(message) {
    resultDisplay.textContent = message;
    moveButtons.forEach(button => {
        button.disabled = true;
        button.style.backgroundColor = "gray";
    });
    newGameButton.style.visibility = "visible";
    newGameButton.disabled = false;
}

function playMove() {
    let result = play(this.id);
    resultDisplay.textContent = result;

    //These values are updated in the other js file
    computerScore.textContent = computerCount;
    playerScore.textContent = playerCount;

    if (computerCount == 5) {
        endMessage("The computer has won! Game Over...");
    } else if (playerCount == 5) {
        endMessage("The player has won! Good Job!");
    }
}

const moveButtons = document.querySelectorAll(".rpsButton");
const resultDisplay = document.querySelector(".result");
const playerScore = document.querySelector(".playerWin");
const computerScore = document.querySelector(".computerWin");
const newGameButton = document.querySelector(".reset");

let playerCount = 0;
let computerCount = 0;

moveButtons.forEach(button => {
    button.addEventListener("click", playMove);
});

newGameButton.addEventListener("click", reset);