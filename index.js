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
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

let operator = "";
let firstNumber = "";
let secondNumber = "";
let result = "";
let displayValue = "";

function operate(operator, firstNumber, secondNumber) {
  let operateResult = 0;
  switch (operator) {
    case "+":
      operateResult = add(firstNumber, secondNumber);
      break;
    case "-":
      operateResult = subtract(firstNumber, secondNumber);
      break;
    case "*":
      operateResult = multiply(firstNumber, secondNumber);
      break;
    case "/":
      operateResult = divide(firstNumber, secondNumber);
      break;
    case "%":
      operateResult = modulus(firstNumber, secondNumber);
      break;
  }
  return operateResult;
}

const display = document.querySelector('.screen-display');
const numberBtns = document.querySelectorAll('.number-btn');

display.textContent = displayValue;

numberBtns.forEach(btn => btn.addEventListener('click', displayNumbers));

function displayNumbers() {
    console.log('clicked a button');
}