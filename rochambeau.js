function Player(){
    this.choice = null;
}

var Rochambeau = {
    player: new Player(),
    computer: new Player()
    var rockButton = document.getElementById("rock");
    var paperButton = document.getElementById("paper");
    var scissorsButton = document.getElementById("scissors");
    var lizardButton = document.getElementById("lizard");
    var spockButton = document.getElementById("spock");
    var playButton = document.getElementById("play");

    choices: {
    ROCK: 0,
    PAPER: 1,
    SCISSORS: 2,
    LIZARD: 3,
    SPOCK: 4
},

    score: {
    wins: 0,
    losses: 0,
    ties: 0
},
    results: {
    WIN: 1,
    TIE: 0,
    LOSS: -1,
    }


     // Stores the player's choice, then call's the function for storing the computer's choice
    storePlayerChoice: function(choice) {
        this.player.choice = choice;
        console.log("My choice = " + this.player.choice);
        this.storeComputerChoice();
    },

    // Generate the computer's random choice
    storeComputerChoice: function() {
        this.computer.choice = Math.floor(Math.random() * 5);
    }
}

// Stores match score that will be used for the match score
// Matchscore[0] = match wins, matchScore[1] = match losses
var matchScore = [0, 0];

// This is the function for playing the game
function playGame() {
    // Here is the game ruleset algorithm
    if (player.choice == computer.choice) {
        // We have a tie!
        ++score.ties;
        displayGameResult("tie")
    } else if (player.choice == choices.ROCK && computer.choice == choices.SCISSORS) {
        // Rock beats scissors - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.ROCK && computer.choice == choices.LIZARD) {
        // Rock beats lizard - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.PAPER && computer.choice == choices.ROCK) {
        // Paper beats rock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.PAPER && computer.choice == choices.SPOCK) {
        // Paper beats spock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.SCISSORS && computer.choice == choices.PAPER) {
        // Scissors beats paper - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.SCISSORS && computer.choice == choices.LIZARD) {
        // Scissors beats lizard - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.SPOCK && computer.choice == choices.SCISSORS) {
        // Spock beats scissors - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.SPOCK && computer.choice == choices.ROCK) {
        // Spock beats rock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.LIZARD && computer.choice == choices.SPOCK) {
        // Lizard beats spock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == choices.LIZARD && computer.choice == choices.PAPER) {
        // Lizard beats paper - a win!
        ++score.wins;
        displayGameResult("win")
    } else {
        // All other combinations are losses
        ++score.losses;
        displayGameResult("lose")

    }
}

//Displays the result of the game
function displayGameResult(result) {
    // Define an array of text labels for the choices 0, 1, 2;
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    // Add to the base message if it was a win, loss, or tie
    if (result === "win") {
        // Display that it was a win
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        // Display that it was a loss
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        // Display that it was a tie
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    updateScoreBoard();
    updateMatchScoreBoard();
}


function updateMatchScore() {
    if (score[0] == 2) {
        matchScore[0]++;
        score[0] = 0;
        score[1] = 0;
        score[2] = 0;
    } else if (score[2] == 2) {
        matchScore[1]++;
        score[0] = 0;
        score[1] = 0;
        score[2] = 0;
    }
}

// Function for displaying the score
function displayScoreBoard(winsId, lossesId, tiesId) {
    document.getElementById(winsId).textContent = score.wins;
    document.getElementById(lossesId).textContent = score.losses;
    document.getElementById(tiesId).textContent = score.ties;
}

function updateMatchScoreBoard() {
    document.getElementById("Match Wins").textContent = matchScore[0];
    document.getElementById("Match Losses").textContent = matchScore[1];
}


// Add the event handlers
rockButton.addEventListener('click', () => {
    storePlayerChoice(0);
    document.getElementById("play").disabled = false;

});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1);
    document.getElementById("play").disabled = false;

});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2);
    document.getElementById("play").disabled = false;

});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(3);
    document.getElementById("play").disabled = false;

});
spockButton.addEventListener('click', () => {
    storePlayerChoice(4);
    document.getElementById("play").disabled = false;

});
playButton.addEventListener('click', () => {
    playGame();
    document.getElementById("play").disabled = true;

});
