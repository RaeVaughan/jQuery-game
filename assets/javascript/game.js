$(document).ready(function() {


//creates a random target number between 19 and 120
var targetNumber = Math.floor(Math.random() * (121-19) + 19);
$("#number-to-guess").text(targetNumber);

//creates the counter of points that will go up on each click of a crystal
var counter = 0;
$("#points").text(counter);

//creates a randomly generated number between 1 and 12 - does this number need to be inside the click function for the crystal image class?
var numberOptions = Math.floor(Math.random() * 13);
console.log(numberOptions);


//does each crystal image need it's own click function, or just the crystal-image class? if I do a click function for the crystal-image class, how do I get each crystal to have its own value? how do I get the crystals to not generate a new number with every click, but instead only when the game resets?


























});