
let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');

const getComputerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

let userScore1 = document.querySelector('#userScore');
let computerScore1 = document.querySelector('#computerScore');
let msg = document.querySelector('#msg');

const playGame = (userChoice) => {
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    if(computerChoice===0){
        computerChoice='rock';
    }else if(computerChoice===1){
        computerChoice='paper';
    }else if(computerChoice===2){
        computerChoice='scissors';
    }

    if(userChoice===computerChoice){
        msg.textContent='Draw';
    }
    else if(userChoice==='rock' && computerChoice==='scissors'){
        userScore++;
        userScore1.textContent = userScore;
        msg.textContent='User wins';
    }else if(userChoice==='paper' && computerChoice==='rock'){
        userScore++;
        userScore1.textContent = userScore;
        msg.textContent='User wins';
    }else if(userChoice==='scissors' && computerChoice==='paper'){
        userScore++;
        userScore1.textContent = userScore;
        msg.textContent='User wins';
    }else{
        computerScore++;
        computerScore1.textContent = computerScore;
        msg.textContent='computer wins';
    }

    console.log(userScore);
    console.log(computerScore);

}

choices.forEach(choice => {
    console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});

