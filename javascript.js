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

let a = 'nothing';
let b = 'nothing';
let currentOperator;
let lastEntryIsOperator = false;
let result;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("num")) { // IF ITS A NUMBER
            if (lastEntryIsOperator) {
                myDisplay.textContent = "" + button.id;

                
            }
            else {
                myDisplay.textContent = myDisplay.textContent + String(button.id);
            }
            

            lastEntryIsOperator = false;
        }

        else if (button.classList.contains("op")) { // IF ITS AN OPerator
            currentOperator = button.id;
            if (a == 'nothing') {
                a = Number(myDisplay.textContent);
            }
            else if (b == 'nothing') {
                b = Number(myDisplay.textContent);
            }

            myDisplay.textContent = "";
            if (a != 'nothing' & b != 'nothing') {
                result = operate(a, b, currentOperator);
                myDisplay.textContent = String(result);
                a = Number(result);
                b = 'nothing';
                lastEntryIsOperator = true;
            }



        }
        
    });
});
