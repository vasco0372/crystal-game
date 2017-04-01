
//Global variables//
  var message = "Click on the crystals to play"
  var targetNumber = Math.floor(Math.random()*100);
  var numWins=0;
  var numLosses=0;
  var currentScore=0;
  var totalScore=0;
  var crystalValue=0

  // blinker();
  var displayResults=function(){
  // targetNumber = Math.floor(Math.random()*100);
  // message="Click on the crystals to play";
  // currentScore=0;
  // totalScore=0;
  // crystalValue=0
  document.getElementById("wins").innerHTML="Wins: "+ numWins;
  document.getElementById("losses").innerHTML="Losses: "+ numLosses;
  document.getElementById("currentScore").innerHTML="Current Score: "+ crystalValue;
  document.getElementById("total-score").innerHTML="Total Score: "+ totalScore;
  document.getElementById("banner").innerHTML= "Message: " + message;
  document.getElementById("number-to-guess").innerHTML= targetNumber;
}

//reset//function to reset values after one round play win or loss//
// var reset=function(){

//   targetNumber = Math.floor(Math.random()*100);
//   message="Click on the crystals to play";
//   currentScore=0;
//   totalScore=0;
//   crystalValue=0
//   displayResults();
// }

//start Game//

var startGame=function(){
  // reset();
  targetNumber = Math.floor(Math.random()*100);
  totalScore = 0;
  // message = "Click on the crystals to play"
  

  // $("#number-to-guess").text(targetNumber);

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  }//start game ends

  // This time, our click event applies to every single crystal on the page. Not just one.
  //start round play
var roundComplete=function(){
      if (totalScore === targetNumber) {
      // alert("You win! ");
      // Add to the win counter
      numWins++;
      message="You Win! Click on the crystals to play again"
      // Update the win counter in the HTML
      displayResults();
      startGame();
    }
    else if (totalScore >targetNumber) {
      // alert("You lose!");
      message="You Lose! Click on the crystals to play again"
      numLosses++;
        // Update the loss counter in the HTML
      displayResults();
      startGame();
    }

}//round complete ends

  // MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================
// Starts the Game by running the startGame() function
  var numberOptions = [10, 5, 3, 7];

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

startGame();
// Then initiates the function for capturing key clicks
// targetNumber = Math.floor(Math.random()*100);
// displayResults();

$(".crystal-image").on("click", function() {
    displayResults();
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    currentScore=crystalValue
    totalScore += crystalValue;
    document.getElementById("currentScore").innerHTML="Current Score: "+ crystalValue;
    document.getElementById("total-score").innerHTML="Total Score: "+ totalScore;
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    // alert("New score: " + totalScore);
    roundComplete();
});
  // Runs the code that ends each round.
