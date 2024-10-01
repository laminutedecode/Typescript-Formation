"use strict";
function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value);
    if (isNaN(guess)) {
        setMessage("Veuillez entrer un nombre valide.");
        return;
    }
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (guess === randomNumber) {
        setMessage(`Félicitations ! Vous avez deviné le nombre ${randomNumber}.`);
    }
    else if (guess < randomNumber) {
        setMessage("Le nombre est plus grand. Essayez encore !");
    }
    else {
        setMessage("Le nombre est plus petit. Essayez encore !");
    }
}
function setMessage(message) {
    const messageElement = document.getElementById("message");
    if (messageElement) {
        messageElement.innerText = message;
    }
}
