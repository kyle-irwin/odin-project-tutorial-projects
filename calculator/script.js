let currentNum = '';
let previousNum = '';
let operator = '';

//getting dom into js vars
const previousDisplayNumber = document.querySelector('.previousNumber');
const currentDisplayNumber = document.querySelector('.currentNumber');

const clear = document.querySelector('.clear');
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
   if (currentNum.length < 10) {
    currentNum += number;
    currentDisplayNumber.textContent = currentNum;
    console.log(number)
   }}
   console.log(currentDisplayNumber.textContent)

operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
   });

   function handleOperator(opp) {
    operator = opp;
    previousNum = currentNum;
    previousDisplayNumber.textContent = previousNum + ' ' + operator;
    currentDisplayNumber.textContent = '';
    currentNum = '';
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

    previousDisplayNumber.textContent = '';
    currentDisplayNumber.textContent = previousNum;
    currentNum = previousNum;
}