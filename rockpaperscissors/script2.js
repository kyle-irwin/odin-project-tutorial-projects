/*let gameScreen = document.getElementById('gameScreen')

let computerSelection; 
function computerPlay () {
    /*this function gets the computers random choice 
    and sets it to the var computerSelection*/ /*
    let rng = Math.floor(Math.random()*1000);
    if (rng <= 333) {
        computerSelection = 'rock';
    }
    else if (rng >= 334 && rng <= 667) {
        computerSelection = 'paper';
    }
    else if (rng >= 668) {
        computerSelection = 'scissors';
    }
    return computerSelection;
}

let userSelection;
let roundResult;
let rock = document.createElement('button');
    rock.innerText = 'rock';
    let paper = document.createElement('button');
    paper.innerText = 'paper';
    let scissors = document.createElement('button');
    scissors.innerText = 'scissors';

function playRound () {
    computerPlay() 
    if (rock) {
        console.log('rock')
        userSelection = rock;
    }
    else if (paper) {
        console.log('paper')
        userSelection = paper;
    }
    else {
        console.log('scissors')
        userSelection = scissors;
    }


    console.log(computerSelection)


    /*if (userSelection === 'rock' && computerSelection === 'rock') {
        roundResult = 'Tie';
        return roundResult; 

    }
    else if (userSelection === 'rock' && computerSelection === 'paper') {
        roundResult = 'You lose. Paper covers rock';
        return roundResult; 

    }
    else if (userSelection === 'rock' && computerSelection === 'scissors') {
        roundResult = 'You win. Rock beats scissors';
        return roundResult; 

    }
    else if (userSelection === 'paper' && computerSelection === 'scissors') {
        roundResult = 'You lose. Scissors cuts paper';
        return roundResult; 

    }
    else if (userSelection === 'paper' && computerSelection === 'rock') {
        roundResult = 'You win. Paper covers rock';
        return roundResult; 

    }
    else if (userSelection === 'paper' && computerSelection === 'paper') {
        roundResult = 'Tie';
        return roundResult; 

    }
    else if (userSelection === 'scissors' && computerSelection === 'scissors') {
        roundResult = 'Tie'; 
        return roundResult; 

    }
    else if (userSelection === 'scissors' && computerSelection === 'paper') {
        roundResult = 'You win. Scissors cuts paper';
        return roundResult; 
    }
    else if (userSelection === 'scissors' && computerSelection === 'rock'){
        roundResult = 'You lose. Rock beats scissors';
    return roundResult;
}
*/ /*
}











/* main two problems are saying i won when my score was less than the computers and
when the round number doesn't go up*/ 