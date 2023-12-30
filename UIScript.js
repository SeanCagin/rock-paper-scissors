function sendMove() {
    play(this.id);
}

let moveButtons = document.querySelectorAll(".rpsButton");

moveButtons.forEach(button => {
    button.addEventListener("click", sendMove);
});