let currentNum = '';
let previousNum = '';
let operator = '';

//getting dom into js vars
const previousDisplayNumber = document.querySelector('.previousNumber');
const currentDisplayNumber = document.querySelector('.currentNumber');

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearCalculator);
const deleteButton = document.querySelector('.delete');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');

const numberButtons = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator')


//functionality
numberButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
   if (currentNum.length < 8) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
   }}

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
   });

   function handleOperator(opp) {
    operator = opp;
    previousNum = currentNum;

    if (previousNum.length < 8) {
        previousDisplayNumber.textContent = previousNum + ' ' + operator;

    }
    else {
        previousDisplayNumber.textContent = previousNum.slice(0,8) + '...' + operator;
    }

    currentDisplayNumber.textContent = '';
    currentNum = '';
   }

   function clearCalculator() {
    
    currentNum = '';
    previousNum = '';
    operator = '';
    currentDisplayNumber.textContent = '0';
    previousDisplayNumber.textContent = '';
   }


function calculate () {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if (operator === '+') {
        previousNum += currentNum;
    }
    else if (operator === '-') {
        previousNum -= currentNum;

    }
    else if (operator === 'x') {
        previousNum *= currentNum;

    }
    else {
        previousNum /= currentNum;

    }
    previousNum = previousNum.toString();
    displayResults();
    
    currentNum = previousNum;
}

function displayResults () {
    previousDisplayNumber.textContent = '';
    if (previousNum.length < 11) {
        currentDisplayNumber.textContent = previousNum;
    }
    else {
        currentDisplayNumber.textContent = previousNum.slice(0,11) + '...';
    }
}