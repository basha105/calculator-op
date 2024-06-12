function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

let num1;
let operator;
let num2;

function operate(n1, n2, op) {
    switch(op) {
        case "+":
            return add(n1, n2);
            break;
        case "-":
            return subtract(n1, n2);
            break;
        case "x":
            return multiply(n1, n2);
            break;
        case "/":
            return divide(n1, n2);
    }
}

let myDisplay = document.getElementById("display");
myDisplay.textContent = "";

let a;
let b;
let currentOperator;
let lastEntryIsOperator = false;




const numbers = document.querySelectorAll(".num");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (lastEntryIsOperator) {

            if (typeof a === 'undefined') {
                a = Number(myDisplay.textContent);
            }
            else if (typeof b === 'undefined') {
                b = Number(myDisplay.textContent);
            }

            if (!typeof b === 'undefined') {
                myDisplay
                
            }
            

            myDisplay.textContent = "" + String(number.id);

            

        }
        else {
            myDisplay.textContent = myDisplay.textContent + String(number.id);
            
        }
        lastEntryIsOperator = false;
    });
});


const operators = document.querySelectorAll(".op");
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        currentOperator = operator.id;
        lastEntryIsOperator = true;
    });
});

const equals = document.querySelector("")