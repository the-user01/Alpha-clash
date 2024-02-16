function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function getTextElement(elementId){
    const elementValue = document.getElementById(elementId);
    const element = elementValue.innerText.toLowerCase();
    return element;
}

function getRandomAlphabate(){
    const alphabateString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabates = alphabateString.split('');

    const randomNumber = Math.round(Math.random()*25);

    const alphabate = alphabates[randomNumber];
    
    return alphabate;

}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400");
}

function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
}

function getScoreValue(elementId){
    const elementValue = document.getElementById(elementId);
    const element = parseInt(elementValue.innerText);

    return element;
}

function setScoreValue(elementId, value){
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = value;
}