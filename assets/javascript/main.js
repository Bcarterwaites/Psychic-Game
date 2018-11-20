var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;

var losses = 0;

var guesses = 9;

var guessesSoFar = [];


var computerChoiceText = document.getElementById("computerchoice");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses");
var guessesSoFarText = document.getElementById("guessessofar");

document.onkeyup = function(event) {


    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    guessesSoFar.push(userGuess);

    if (userGuess == computerGuess) {
        
        wins++;
       
        guesses = 9;
     
      guessesSoFar.length = 0;



    } else if (guesses == 0 ) {

        losses++;
        guesses = 9;
        guessesSoFar.length = 0;
    }

  else if (userGuess != computerGuess) {

      guesses--;

  }


    

    computerChoiceText.textContent = "Guess what letter I'm thinking of: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesText.textContent = "guesses: " + guesses;
    guessesSoFarText.textContent = "guesses so far: " + guessesSoFar;
    };