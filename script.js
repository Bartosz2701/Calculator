const displayHTML = document.getElementById("display");
const numbersHTML = document.querySelectorAll(".number");
const operatorHTML = document.querySelectorAll(".operator");
const decimalHTML = document.getElementById("decimal");
const clearHTML = document.getElementById("clear");
const equalsHTML = document.getElementById("equals");

let display = "";

let firstNumber;
let secondNumber;
let operator;

numbersHTML.forEach(button => {
    button.addEventListener("click", () => {
        display = display + button.textContent;
        displayHTML.textContent = display;
    });
});

operatorHTML.forEach(button => {
    button.addEventListener("click", () => {
        operator = button.textContent;
        firstNumber = Number(display);
        display = "";
    });
});

equalsHTML.addEventListener("click", () => {
    secondNumber = Number(display);
    display = operate(operator, firstNumber, secondNumber);
    displayHTML.textContent = display;
    
    secondNumber = null;

});



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return Math.round((a / b) * 100) / 100; 
}

function operate (operator, a, b) {
    if(operator === "+") {
       return add(a, b);
    }
    if(operator === "-") {
        return subtract(a, b);
    }
    if(operator === "*") {
        return multiply(a, b);
    }
    if(operator === "/") {
        return divide(a, b);
    }
}

