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
                return "You Win! Paper beats rock"; 
            } else {
                return "You Lose! Rock beats scissors";
            }
        case "paper":
            if (playerSelectionLower === "rock") {
                return "You Lose! Paper beats rock";
            } else if (playerSelectionLower === "paper") {
                return "its a Tie! paper and paper"; 
            } else {
                return "You Win! Scissors beats paper";
            }
        case "scissors":
            if (playerSelectionLower === "rock") {
                return "You Win! Rock beats scissors";
            } else if (playerSelectionLower === "paper") {
                return "You Lose! Scissors beats paper"; 
            } else {
                return "Its a Tie! scissors and scissors";
            }
        default:
            return "Something went wrong!";

    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        let playerChoice = prompt("rock, paper, or scissors?");

        let decision = playRound(playerChoice, computerPlay());

        if (decision.includes("Win")) {
            playerScore++;
            console.log(decision);
        } else if (decision.includes("Lose")) {
            computerScore++;
            console.log(decision);
        } else if (decision.includes("Tie")) {
            console.log(decision);
        } else {
            console.log(decision);
        }
    }

    if (playerScore > computerScore) {
        return "Congratulations, you won the series! " + playerScore + " to " + computerScore;
    } else if (computerScore > playerScore) {
        return "Sorry, you lost the series! " + computerScore + " to " + playerScore;
    } else {
        return "You tied up! " + playerScore + " to " + computerScore;
    }
}
