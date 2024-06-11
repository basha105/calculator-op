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

function alertFunction() {
    alert("Hello");
}

let myDisplay = document.getElementById("display");

const numbers = document.querySelectorAll(".num");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        myDisplay.textContent = number.id;
        
    });
});
