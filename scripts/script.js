
function handleKeyboardButtonPress(event) {
    const pressedKey = event.key;

    const currentAlphabate = getTextElement("change-alphabate");

    if(pressedKey === "Escape"){
        gameOver();
    }

    
    if (pressedKey === currentAlphabate) {

        const currentScore = getScoreValue("current-score");

        let newScore = currentScore + 1;

        setScoreValue("current-score", newScore);

        removeBackgroundColor(currentAlphabate);
        continueGame();

        setScoreValue("final-score", newScore)

    }
    else {

        const lifeSpan = getScoreValue("life-span");
        let newLife = lifeSpan - 1;
        setScoreValue("life-span", newLife);

        if (newLife === 0) {
            gameOver();

        }

    }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
    const randomAlphabate = getRandomAlphabate();

    const changeAlphabate = document.getElementById("change-alphabate");
    changeAlphabate.innerText = randomAlphabate.toUpperCase();

    setBackgroundColor(randomAlphabate);
}


function play() {
    hideElement("home-screen");
    hideElement("score-section");
    showElement("play-ground");

    /* Restore life sapn and score */

    setScoreValue("current-score", 0);
    setScoreValue("life-span", 5);

    continueGame();
}

function gameOver() {
    hideElement("play-ground");
    showElement("score-section");

    //clear last selected Alphabate

    const currentAlphabate = getTextElement("change-alphabate");
    removeBackgroundColor(currentAlphabate);

}