let choice; //hi
function computerPlay () {
    
    let rng = Math.floor(Math.random()*1000);
    if (rng <= 333) {
        choice = 'rock';
    }
    else if (rng >= 334 && rng <= 667) {
        choice = 'paper';
    }
    else if (rng >= 668) {
        choice = 'scissors';
    }
    return choice;
}
const computerSelection = computerPlay();
let playerSelection = 'rock';
let stm;
function playRound () {
    //if statements 
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        stm = 'Tie';
        return stm; 

    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        stm = 'You lose. Paper covers rock';
        return stm; 

    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        stm = 'You win. Rock beats scissors';
        return stm; 

    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        stm = 'You lose. Scissors cuts paper';
        return stm; 

    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        stm = 'You win. Paper covers rock';
        return stm; 

    }
    else if (playerSelection === 'paper' && computerSelection === 'tie') {
        stm = 'Tie';
        return stm; 

    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        stm = 'Tie'; 
        return stm; 

    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        stm = 'You win. Scissors cuts paper';
        return stm; 
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        stm = 'You lose. Rock beats scissors';
    return stm;
}
}
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound())

