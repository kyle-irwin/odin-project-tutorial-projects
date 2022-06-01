let firstNumber = 1;
let secondNumber = 2;
let chosenOperator;
let answer;

function add (num1,num2) {
    answer = num1 + num2;
    return answer;
}

function subtract (num1,num2) {
    answer = num1 - num2;
    return answer;
}

function multiply (num1,num2) {
    answer = num1 * num2;
    return answer;
}

function divide (num1,num2) {
    answer = num1 / num2;
    return answer;
}


/*User will enter #, operator, #. The operator that is selected will be stored 
in the chosenOperator variable. When equals is pressed, this function will be called.
It will check what operator has been chosen and then apply it to the numbers and return
the answer  */
function operate () {
    if (chosenOperator = 'add') {
        add(firstNumber,secondNumber)
    }
    else if (chosenOperator = 'subtract') {
        subtract(firstNumber,secondNumber)
    }
    else if (chosenOperator = 'multiply') {
        multiply(firstNumber,secondNumber)
    }
    else{
        divide(firstNumber,secondNumber)
    }
}




console.log(add(firstNumber,secondNumber))
console.log(subtract(firstNumber,secondNumber))
console.log(multiply(firstNumber,secondNumber))
console.log(divide(firstNumber,secondNumber))