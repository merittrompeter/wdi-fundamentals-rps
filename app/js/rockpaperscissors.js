'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getPlayerMove(move) {
    if (move === "rock" || move === "paper" || move === "scissors") {
        return move;
    } else {
        return getInput();
    }
}
function getComputerMove(move) {
    if (move === "rock" || move === "paper" || move === "scissors") {
        return move;
    } else {
        return randomPlay();
    }
}
function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock" && computerMove === "rock") {
        winner = "tie";
    } else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player";
    } else if (playerMove === "rock" && computerMove === "paper") {
        winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "rock") {
        winner = "computer";
    } else if (playerMove === "scissors" && computerMove === "scissors") {
        winner = "tie";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "scissors") {
        winner = "computer";
    } else if (playerMove === "paper" && computerMove === "paper") {
        winner = "tie";
    } 
    return winner;
}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors. First to five games wins!");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". Player wins game.");
            playerWins += 1;
        } else if (winner === "computer") {
            console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". Computer wins game.");
            computerWins += 1;
        } else if (winner === "tie") {
            console.log("Stalemate, it's a tie!");
        } 
        console.log("Score: Player: " + playerWins + ", Computer: " + computerWins);
    }
    return [playerWins, computerWins];
}