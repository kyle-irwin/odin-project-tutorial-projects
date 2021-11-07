let gameScreen = document.getElementById('gameScreen')
let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

const rockButton = document.createElement('button');
rockButton.innerText = 'rock';
const paperButton = document.createElement('button');
paperButton.innerText = 'paper';
const scissorsButton = document.createElement('button');
scissorsButton.innerText = 'scissors';


let computerSelection; 
let userSelection;
let computerScore = 0;
let userScore = 0;
let roundResult
let printRoundResult = document.createElement('p');

function getComputer () {
    /*this function gets the computers random choice 
    and sets it to the var computerSelection*/
    let rng = Math.floor(Math.random()*1000);
    if (rng <= 333) {
        computerSelection = rock;
    }
    else if (rng >= 334 && rng <= 667) {
        computerSelection = paper;
    }
    else if (rng >= 668) {
        computerSelection = scissors;
    }
    return computerSelection;
}
function getUser () { 
    gameScreen.appendChild(rockButton)
    gameScreen.appendChild(paperButton)
    gameScreen.appendChild(scissorsButton)
    userSelection = rock;
    /*rockButton.addEventListener('click', () => { I DO NOT KNOW HOW TO WAIT FOR THE EVENT AND THEN MAKE THE USERSELECTION VARIABLE THAT EVENT
        userSelection = rock;
        return userSelection;
    })
    paperButton.addEventListener('click', () => {
        userSelection = paper;
    })
    scissorsButton.addEventListener('click', () => {
        userSelection = scissors;
    })*/
}
function playRound () {
    if (userSelection === rock && computerSelection === rock) {
        roundResult = 'Tie';
    }
    else if (userSelection === rock && computerSelection === paper ) {
        roundResult = 'You Lose';
    }
    else if (userSelection === rock  && computerSelection === scissors ) {
        roundResult = "You Win";
    }
    else if (userSelection === paper  && computerSelection === rock  ) {
        roundResult = "You Win";
    }
    else if (userSelection === paper && computerSelection === paper) {
        roundResult = 'Tie';
    }    
    else if (userSelection === paper && computerSelection === scissors) {
        roundResult = 'You Lose';
    }
    else if (userSelection === scissors && computerSelection === rock ) {
        roundResult = 'You Lose';

    }
    else if (userSelection === scissors && computerSelection === paper) {
        roundResult = "You Win";
    }
    else {
        roundResult = 'Tie';
    }

    printRoundResult.textContent = roundResult;
    gameScreen.appendChild(printRoundResult)
}
function printSelections () {
    gameScreen.removeChild(rockButton)
    gameScreen.removeChild(paperButton)
    gameScreen.removeChild(scissorsButton)
    
    let printUser = document.createElement('p');
    printUser.textContent = 'Your selection is ' + userSelection;
    gameScreen.appendChild(printUser)
    
    let printComputer = document.createElement('p');
    printComputer.textContent = 'Your opponent\'s selection is ' + computerSelection;
    gameScreen.appendChild(printComputer)
}


function game () {
    getUser()
    getComputer()
    printSelections()
    playRound()

}


const startGame = document.getElementById('startGame');
startGame.addEventListener('click', () => {
    gameScreen.removeChild(startGame);
    game();
});