let rockButton = document.querySelector('#rock-button');
let paperButton = document.querySelector('#paper-button');
let scissorsButton = document.querySelector('#scissors-button');
let playerPoints = document.getElementById('player-points');
let computerPoints = document.getElementById('computer-points');
let resetButton = document.getElementById('reset-button');
let playerDiv = document.getElementById('player-choice');
let computerDiv = document.getElementById('computer-choice');

playerPoints.textContent = 0;
computerPoints.textContent = 0;

// Checks if user clicked on "Rock". If so, it sets player's pick as rock (string) and sends it to the play function
rockButton.addEventListener('click', () => {
    let playerPick = 'rock';
    play(playerPick);
})

// Checks if user clicked on "Paper". If so, it sets player's pick as paper (string) and sends it to the play function.
paperButton.addEventListener('click', () => {
    let playerPick = 'paper';
    play(playerPick);
})

// Checks if user clicked on "Scissors". If so, it sets player's pick as scissors (string) and sends it to the play function.
scissorsButton.addEventListener('click', () => {
    let playerPick = 'scissors';
    play(playerPick);
})

// Checks if user clicked on the reset button. If so, it resets the score and the text and background colors of the outcome buttons.
resetButton.addEventListener('click', () => {
    playerPoints.textContent = 0;
    computerPoints.textContent = 0;
    playerDiv.textContent = '';
    computerDiv.textContent = '';
    playerDiv.style.backgroundColor = "#2c698d";
    computerDiv.style.backgroundColor = "#2c698d";
})

// Sets computer's picks selecting a random integer between 1 and 3 and then returning the corresponding string (rock, paper or scissors).
function randomPick() {
    let pick = Math.floor(Math.random() * 3) + 1;
    if(pick === 1){
        return 'rock';
    }
    if(pick === 2){
        return 'paper';
    }
    if(pick === 3){
        return 'scissors';
    }
}

// Receives the selected pick from the buttons event listeners, then calls the random function to set the computer pick. Then sends both picks to the outcome function, and finally calls the round function to display all the results.
function play(playerPick) {
    let computerPick = randomPick();
    let outcome = checkWinner(playerPick, computerPick);
    round(playerPick, computerPick, outcome);
}

// Compares player's and computer's picks to select a winner, then returns the outcome.
function checkWinner(playerChoice, computerChoice){
    if(playerChoice === 'rock') {
        if(computerChoice === 'rock') {
            return 'tie';
        } else if(computerChoice === 'paper') {
            return 'lost';
        } else if(computerChoice === 'scissors') {
            return 'won';
        }
    } else if(playerChoice === 'paper') {
        if(computerChoice === 'rock') {
            return 'won';
        } else if(computerChoice === 'paper') {
            return 'tie';
        } else if(computerChoice === 'scissors') {
            return 'lost';
        }
    } else if(playerChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'lost';
        } else if(computerChoice === 'paper') {
            return 'won';
        } else if(computerChoice === 'scissors') {
            return 'tie';
        }
    }
}

// Changes the UI based on the outcome of the round, increasing the total points in case of a winner (a tie won't change the points counters), then sets the correct colors to be shown in the outcome boxes: red for loser, green for winner and orange in case of a tie.
function round(playerChoice, computerChoice, outcome) {
    playerDiv.textContent = playerChoice;
    computerDiv.textContent = computerChoice;

    if (outcome === 'won') {
        playerDiv.style.backgroundColor = "#58b368";
        computerDiv.style.backgroundColor = "#f55951";
        let pp = parseInt(playerPoints.textContent);
        pp++;
        playerPoints.textContent = pp;
    } else if (outcome === 'lost') {
        computerDiv.style.backgroundColor = "#58b368";
        playerDiv.style.backgroundColor = "#f55951";
        let cp = parseInt(computerPoints.textContent);
        cp++;
        computerPoints.textContent = cp;
    } else if (outcome === 'tie') {
        playerDiv.style.backgroundColor = "#ffc14d";
        computerDiv.style.backgroundColor = "#ffc14d";
    }

}