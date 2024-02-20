const currentOperandDisplay = document.querySelector('.current-operand');
const previousOperandDisplay = document.querySelector('.prev-operand');
const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalButton = document.getElementById('equal-btn');
const dotButton = document.querySelector('dot-btn');

function updateDispla() {

}

function appendNumber() {

}

function deleteNumber() {

}

function clear() {

}

function appendDot() {
  
}

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
  if (b === 0) {
    return "Infinity";
  } 
  return a / b;
}

function modulus(a, b) {
  return a % b;
}

/**
 let operator = "";
let firstNumber = "";
let secondNumber = "";
let result = "";
let displayValue = "";



const display = document.querySelector('.screen-display');
const calcButtons = document.querySelectorAll('.btn');

display.textContent = displayValue;

calcButtons.forEach(btn => btn.addEventListener('click', displayNumbers));

function displayNumbers(event) {
  const clickedButtonElement = event.target;
  const clickedButtonContent = clickedButtonElement.textContent;
  if (clickedButton === '=') {
    // Check validity
    // Parse string
  }
  display.textContent += clickedButtonContent;
  console.log(`Clicked button: ${clickedButtonContent}`);
}
 */