const currentOperandDisplay = document.querySelector('.current-operand');
const previousOperandDisplay = document.querySelector('.prev-operand');
const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalButton = document.getElementById('equal-btn');
const dotButton = document.querySelector('.dot-btn');
const delButton = document.getElementById('del-btn');
const acButton = document.getElementById('ac-btn');

let currentOperand = '';
let previousOperand = '';
let operation = null;

numberButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
      appendNumber(btn.textContent);
      updateDisplay();
  })
});

operatorButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    selectOperator(btn.textContent);
    updateDisplay();
  })
});

equalButton.addEventListener('click', operate);
dotButton.addEventListener('click', appendDot);
delButton.addEventListener('click', deleteNumber);
acButton.addEventListener('click', clear)

function updateDisplay() {
  currentOperandDisplay.textContent = currentOperand;
  previousOperandDisplay.textContent = previousOperand + ' ' + (operation || '');
}

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) {
    return;
  }
  currentOperand = currentOperand.toString() + number.toString();
}

function selectOperator(selectedOperator) {
  if (currentOperand === '') {
    return;
  }
  if (previousOperand !== '') {
    operate();
  }
  operation = selectedOperator;
  previousOperand = currentOperand;
  currentOperand = '';
}

function deleteNumber() {
  currentOperand = currentOperand.toString().slice(0, -1);
  updateDisplay();
}

function clear() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateDisplay();
}

function appendDot() {
  if (currentOperand.includes('.')) {
    return
  };
  if (currentOperand === '') { 
    currentOperand = '0';
  }
  currentOperand += '.';
  updateDisplay();
}

function operate() {
  let operateResult = 0;
  
  const curr = parseFloat(currentOperand);
  const prev = parseFloat(previousOperand);

  if (isNaN(currentOperand) || isNaN(previousOperand)) {
    return;
  }

  switch (operation) {
    case "+":
      operateResult = add(prev, curr);
      break;
    case "-":
      operateResult = subtract(prev, curr);
      break;
    case "*":
      operateResult = multiply(prev, curr);
      break;
    case "/":
      operateResult = divide(prev, curr);
      break;
    case "%":
      operateResult = modulus(prev, curr);
      break;
  }
  currentOperand = operateResult;
  operation = undefined;
  previousOperand = '';
  updateDisplay();
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  console.log(a, b);
  return a * b;
}

function divide(a, b) {
  if (a === 0) {
    console.log('b === 0');
    return "Infinity";
  } 
  return (a / b).toFixed(2);
}

function modulus(a, b) {
  return a % b;
}