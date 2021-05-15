
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

function computerPlay() {
    let choiceInt = getRandomIntInclusive(0,2);
    if (choiceInt === 0) {
        return "rock";
    } else if (choiceInt === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase();

    switch (computerSelection) {
        case "rock":
            if (playerSelectionLower === "rock") {
                return "Its a Tie! rock and rock";
            } else if (playerSelectionLower === "paper") {
                playerWin();
                return "You Win! Paper beats rock"; 
            } else {
                compWin();
                return "You Lose! Rock beats scissors";
            }
        case "paper":
            if (playerSelectionLower === "rock") {
                compWin();
                return "You Lose! Paper beats rock";
            } else if (playerSelectionLower === "paper") {
                return "its a Tie! paper and paper"; 
            } else {
                playerWin();
                return "You Win! Scissors beats paper";
            }
        case "scissors":
            if (playerSelectionLower === "rock") {
                playerWin();
                return "You Win! Rock beats scissors";
            } else if (playerSelectionLower === "paper") {
                compWin();
                return "You Lose! Scissors beats paper"; 
            } else {
                return "Its a Tie! scissors and scissors";
            }
        default:
            return "Something went wrong!";

    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent.includes("Rock")) {
            decisionVar.textContent = playRound("rock", computerPlay());
            checkScores();
        } else if (btn.textContent.includes("Paper")) {
            decisionVar.textContent = playRound("paper", computerPlay());
            checkScores();
        } else if (btn.textContent.includes("Scissors")) {
            decisionVar.textContent = playRound("scissors", computerPlay());
            checkScores();
        } else if (btn.textContent.includes("Reset Score")) {
            resetScores();
        }
    });
});

const pScoreClass = document.querySelector('.player-score');

let pScoreVar = document.createElement('h1');
pScoreVar.textContent = 0;

let cScoreVar = document.createElement('h1');
cScoreVar.textContent = 0;

pScoreClass.appendChild(pScoreVar);

const cScoreClass = document.querySelector('.comp-score');
cScoreClass.appendChild(cScoreVar);

const decisionClass = document.querySelector('.decision');
let decisionVar = document.createElement('h3');
decisionClass.appendChild(decisionVar);

function playerWin() {
    pScoreVar.textContent = parseInt(pScoreVar.textContent) + 1;
}

function compWin() {
    cScoreVar.textContent = parseInt(cScoreVar.textContent) + 1;

    if (cScoreVar.textContent == 5) {
        decisionVar.textContent = "Sorry! You lost the series...";
    }
}

function resetScores() {
    pScoreVar.textContent = 0;
    cScoreVar.textContent = 0;
    decisionVar.textContent = "";
    decisionVar.style.color = 'black';
}

function checkScores() {
    if (pScoreVar.textContent == 5) {
        decisionVar.style.color = 'green';
        decisionVar.textContent = "Congratulations! You won the series!";
    } else if (cScoreVar.textContent == 5) {
        decisionVar.style.color = 'red';
        decisionVar.textContent = "Sorry! You lost the series...";
    }
}


