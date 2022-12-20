
let number = 0;

const countElement = document.getElementById("counter-number");     //Counter Number
const savedResults = document.getElementById("savedResults");       //Saved Number
let increase = () => {number++; countElement.innerText = number;}

let save = () => {
    //Want to capture the value
    let savedNumber = number + " - ";

    number = 0;
    countElement.textContent = number;

    savedResults.textContent += savedNumber;



}


