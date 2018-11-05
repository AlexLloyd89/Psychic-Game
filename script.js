var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var pastGuess = [];


var wins = 0;
var losses = 0;
var lives = 10;



var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text")
var userInputText = document.getElementById("userInput-text");
var livesText = document.getElementById("lives-text");



//Random letter generation
var computerOutput = computerChoice[Math.floor(Math.random() * computerChoice.length)];


document.onkeyup = function (event) {

var userInput = event.key;

for (var i = 0; i < userGuess.length; i++){ 

    //code will only run if userInput = alaphabetic key
     if (userInput === userGuess[i]) { 
    
    //hides title screen upon userInput
    document.getElementById('mydiv').classList.add("hideme"); 
    document.getElementById('game').classList.remove("hideme");

    // Begin game logic
    if (userInput.toLowerCase() === computerOutput) {
        wins++;
        lives = 10;
        pastGuess = [];
        computerOutput = computerChoice[Math.floor(Math.random() * computerChoice.length)];
        
    }
    else {
        lives--;
        pastGuess.push(userInput);
    }

    if (lives === 0) {
        losses++;
        lives = 10;
        pastGuess = [];
        computerOutput = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    }

  
   


//Display text
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
userInputText.textContent = "Letters guessed: " + pastGuess;
livesText.textContent = "Lives left: " + lives;
}
}
};
    

    











