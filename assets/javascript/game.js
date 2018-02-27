    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var words = ["potato", "chicken","tea","coffee","beer","wine","liquor","orange","pig","cow","sheep", "apple", "carrot", "tomato"];
    var guesses = 10;
    var userscore = 0;
    var computerscore = 0;
    var guessarray = [];
    var display = [];

    alert("Press any key to get started!");
    
    // Randomly chooses a choice from the options array. This is the Computer's guess.
function generateWord(){
    
      var computerGuess = words[Math.floor(Math.random() * words.length)];
      display = [];
      guessarray = [" "];
      guesses = 10;

      // Displays unsolved phrase
      for (i = 0; i < computerGuess.length; i++)
      {
        if(computerGuess[i]==" "){
          // console.log("space detected");
          display[i] = " ";
        }
        else{display[i] = "_";}
      }
      return computerGuess;
}
    

// Generate first word
computerGuess = generateWord();

    // This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    
    // Alerts the key the user pressed (userGuess).
    alert("User guess: " + userGuess);

    var repeat = 0;

    for (i = 0; i<guessarray.length; i++)
    {
      if(guessarray[i] == userGuess){
        console.log("repeat guess");
        repeat = 1;
      }
    }

    if (repeat == 1) {console.log("Not pushing");}
    else {
      guessarray.push(userGuess);
      guesses = guesses - 1;
    }

    // Alerts the Computer's guess.
    alert("Hangman Answer: " + computerGuess);

    // If User guesses correct letter, fill in unsolved phrase
    for (i = 0; i < computerGuess.length; i++)
    {
      if (userGuess == computerGuess[i]){
        // if (userGuess == " "){console.log("Space Key invalid");}
        // else{
          // alert("Correct Letter!");
          display[i] = computerGuess[i];
          console.log(display.join(""));
          // console.log(display[i]);
        // }
      }
    }
    
    // console.log(display);
    // console.log(computerGuess);

    if (display.join("") == computerGuess){
      console.log("YOU WIN!! Starting new game");
      soundcheck();
      userscore = userscore +1;
      computerGuess = generateWord();
    }

    if (guesses == 0){
      console.log("Out of Guesses!");
      computerGuess = generateWord();
    }

    gameStatus.innerHTML = "<br><h1>" + display.join("") + "</h1>" +
    "<p>You chose: " + userGuess + "</p>" + 
    "<br><p> Wins: " + userscore + "</p>" + 
    "<br><p> Guesses left: " + guesses + "</p>" +
    "<br><p> Guesses so far: <br> <br>'" + guessarray.join(" ") + "'</p>";
  };


function soundcheck()
{
  var x = document.createElement("AUDIO");
  
  console.log(x);

  if (x.canPlayType("audio/mpeg")) {
    x.setAttribute("src","assets/sounds/nuke.mp3");
    x.play();
  } else {
    console.log("Browser not MP3 compatible");
  }

  // x.setAttribute("controls", "controls");
  // document.body.appendChild(x);

  // function playAudio() { 
  //     x.play(); 
  // } 
  
  // function pauseAudio() { 
  //     x.pause(); 
  // } 
}