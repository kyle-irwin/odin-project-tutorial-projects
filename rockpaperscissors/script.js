let computerSelection; 
function computerPlay () {
    /*this function gets the computers random choice 
    and sets it to the var computerSelection*/
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


function playRound () {
    computerPlay() 
    console.log(userSelection)
    console.log(computerSelection)

    if (userSelection === 'rock' && computerSelection === 'rock') {
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
}


function getUser () {
    let userPrompt = prompt('Rock, Paper, or Scissors?');
    if (userPrompt.toLowerCase() === 'rock') {
        userSelection = 'rock';
    }
    else if (userPrompt.toLowerCase() === 'paper') {
        userSelection = 'paper';
    }
    else {
        userSelection = 'scissors';
    }

}


function game () {
let userScore = 0;
let computerScore = 0;

for (i = 1; i < 6; i++) { //loops over until best of 5 with no ties
    let amountOfTies = 0;
    getUser()
    playRound()
    if (roundResult === 'You lose. Paper covers rock') {
        computerScore += 1
    }
    else if (roundResult === 'You lose. Rock beats scissors') {
        computerScore +=1
    }
    else if (roundResult === 'You lose. Scissors cuts paper') {
        computerScore +=1
    }
    else if (roundResult === 'You win. Rock beats scissors') {
        userScore +=1
    }
    else if (roundResult === 'You win. Paper covers rock') {
        userScore +=1
    }
    else if (roundResult === 'You win. Scissors cuts paper') {
        userScore +=1
    }
    else {
        amountOfTies += 1;
        i -= 1;
        
    }
    console.log('Round: ' + (i + amountOfTies))
    console.log('your score = ' + userScore)
    console.log('cpu score = ' + computerScore)
    console.log(' ')
}

if (userScore > computerScore) {
    console.log('YOU WIN!')
}
else if (userScore = computerScore){
    console.log('TIE')
}
else if (computerScore > userScore){
    console.log('YOU LOSE!')
}
else {
    console.log('error')
}
}

const startGame = document.getElementById('startGame');
startGame.onclick = game;





/* main two problems are saying i won when my score was less than the computers and
when the round number doesn't go up*/