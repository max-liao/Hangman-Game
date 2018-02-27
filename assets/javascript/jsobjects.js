// Creates an array that lists out all of the options (Rock, Paper, or Scissors).

alert("Press any key to get started!");

var game = {
    words: ["roast beef","potato", "chicken","tea and coffee","beer","wine","liquor","orange","pig","cow","sheep", "apple", "carrot", "tomato"],
    userscore: 0,
    computerscore: 0,
    guessarray: [],
    display: [],
    computerGuess: [],
    userGuess: [],
    name: "hangman",
    creator: "Max",

    generateWord: function() {
        game.computerGuess = game.words[Math.floor(Math.random() * game.words.length)];
        game.display = [];
        game.guessarray = [" "];
        game.guesses = 10;
  
        // Displays unsolved phrase
        for (i = 0; i < game.computerGuess.length; i++)
        {
          if(game.computerGuess[i]==" "){
            game.display[i] = " ";
          }
          else{game.display[i] = "_";}
        }
        return game.computerGuess;
    },

    soundcheck: function()
    {
      var x = document.createElement("AUDIO");
      
      console.log(x);
    
      if (x.canPlayType("audio/mpeg")) {
        x.setAttribute("src","assets/sounds/nuke.mp3");
        x.play();
      } else {
        console.log("Browser not MP3 compatible");
      }
    },

    keycheck: function(event) {
        // Alerts the Computer's guess.
        alert("Hangman Answer: " + game.computerGuess);
    
        // Determines which key was pressed.
        game.userGuess = event.key;
        
        // Alerts the key the user pressed (userGuess).
        alert("User guess: " + game.userGuess);
    
        var repeat = 0;
    
        // If Guess repeated doesn't count
        for (i = 0; i<game.guessarray.length; i++)
        {
          if(game.guessarray[i] == game.userGuess){
            repeat = 1;
          }
        }
    
        // If repeat wrong guess is not pushed to display
        if (repeat == 1) {console.log("Not pushing");}
        else {
            game.guessarray.push(game.userGuess);
            game.guesses = game.guesses - 1;
        }
    
    
        // If User guesses correct letter, fill in unsolved phrase
        for (i = 0; i < game.computerGuess.length; i++)
        {
          if (game.userGuess == game.computerGuess[i]){
            game.display[i] = game.computerGuess[i];
            console.log(game.display.join(""));
          }
        }
        
        if (game.display.join("") == game.computerGuess){
          console.log("YOU WIN!! Starting new game");
          game.soundcheck();
          game.userscore = game.userscore +1;
          game.computerGuess = game.generateWord();
        }
    
        if (game.guesses == 0){
          console.log("Out of Guesses!");
          game.computerGuess = game.generateWord();
        }
    
        gameStatus.innerHTML = "<br><h1>" + game.display.join("") + "</h1>" +
        "<p>You chose: " + game.userGuess + "</p>" + 
        "<br><p> Wins: " + game.userscore + "</p>" + 
        "<br><p> Guesses left: " + game.guesses + "</p>" +
        "<br><p> Guesses so far: <br> <br>'" + game.guessarray.join(" ") + "'</p>";
    },

    hellow : function(){
        console.log("Hello World");
    }
}

game.computerGuess = game.generateWord();
console.log(game.computerGuess);
console.log(game.display);
document.onkeyup = game.keycheck;