var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var lives = 10;


var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text")
var userInputText = document.getElementById("userInput-text");
var livesText = document.getElementById("lives-text");



//Random letter generation
var computerOutput = computerChoice[Math.floor(Math.random() * computerChoice.length)];


document.onkeyup = function (event) {

var userInput = event.key;

for (var i = 0; i < userGuess.length; i++){

     if (userInput === userGuess[i]) {

    if (userInput === computerOutput) {
        wins++;
        lives = 10;
    }
    else {
        lives--;
    }

    if (lives === 0) {
        losses++;
        lives = 10;
    }

   
    


//Begin text content
directionsText.textContent = "";
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
userInputText.textContent = "Letters guessed: " + userInput;
livesText.textContent = "Lives left: " + lives;
}
}
};
    

    











