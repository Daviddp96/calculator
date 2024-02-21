const currentOperandDisplay = document.querySelector('.current-operand');
const previousOperandDisplay = document.querySelector('.prev-operand');
const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll('.operator-btn');
const equalButton = document.getElementById('equal-btn');
const dotButton = document.querySelector('.dot-btn');

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
      operateResult = add(curr, prev);
      break;
    case "-":
      operateResult = subtract(curr, prev);
      break;
    case "*":
      operateResult = multiply(curr, prev);
      break;
    case "/":
      operateResult = divide(curr, prev);
      break;
    case "%":
      operateResult = modulus(curr, prev);
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
  console.log(a * b);
  return b * a;
}

function divide(a, b) {
  console.log(a , b);
  if (a === 0) {
    console.log('b === 0');
    return "Infinity";
  } 
  return (b / a).toFixed(2);
}

function modulus(a, b) {
  return a % b;
}