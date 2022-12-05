/* 0=rock 1=paper 2=scissors */
const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output')
const computerLog = document.querySelector('.computerLog')
const playerLog = document.querySelector('.playerLog')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playgame(button.id)
    });
  });
let computerChoice = 0
let playerWins = 0
let computerWins = 0
function playgame(playerChoice) {
    computerChoice = Math.floor(Math.random() * 3)
    if (playerChoice==0) {
        if (playerChoice==computerChoice){
            output.textContent = 'You tied'
        }
        else if (1==computerChoice){
            computerWins++;
            output.textContent = 'Computer wins, paper beats rock'
            computerLog.textContent = 'Computer has '+computerWins 
        }
        else if (2==computerChoice){
            playerWins++
            output.textContent = 'you win rock beats scissors'
            playerLog.textContent = 'You have '+ playerWins
        }
    }
    else if (playerChoice==1) {
        if (playerChoice==computerChoice) {
            output.textContent = 'you tied'
        }
        else if (computerChoice==0) {
            playerWins++
            output.textContent = 'you win paper beats rock'
            playerLog.textContent = 'You have '+ playerWins
        }
        else if (computerChoice==2){
            computerWins++;
            output.textContent = 'you lose scissors beats paper'
            computerLog.textContent = 'Computer has '+computerWins
        }
    }
    else if (playerChoice==2){
        if (playerChoice==computerChoice){
            output.textContent = 'you tied'
        }
        else if (computerChoice==0){
            computerWins++;
            output.textContent = 'you lose rock beats scissors'
            computerLog.textContent = 'Computer has '+computerWins
        }
        else if (computerChoice==1){
            playerWins++
            output.textContent = 'you win scissors beats paper'
            playerLog.textContent = 'You have '+ playerWins
        }
    }
    if (playerWins>=5 || computerWins>=5){
        if (playerWins>=5) {
            output.textContent = 'You win the match'
        }
        else {
            output.textContent = 'computer has won the match'
        }
    }
}