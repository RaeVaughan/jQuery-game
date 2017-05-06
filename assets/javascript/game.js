$(document).ready(function() {


//creates a random target number between 19 and 120
var targetNumber = Math.floor(Math.random() * (121-19) + 19);
$("#number-to-guess").text(targetNumber);

//creates the counter of points that will go up on each click of a power-up
var counter = 0;
$("#points").text(counter);

var winCounter = 0;
$("#wins").text(winCounter);
var lossCounter = 0;
$("#losses").text(lossCounter);


//creates randomly generated numbers between 1 and 12 for each image
var coinNumber = Math.floor((Math.random() * 12) + 1);
var mushroomNumber = Math.floor((Math.random() * 12) + 1);
var starNumber = Math.floor((Math.random() * 12) + 1);
var flowerNumber = Math.floor((Math.random() * 12) + 1);

//for each image, on click, the random number from the respective global variable is assigned and added to the counter

// Coin image -----------------------------------------------------------------------------
$("#coin-img").click(function(){
	coinNumber;
	console.log(coinNumber);
	counter += coinNumber;
	$("#points").html(counter);

	//if the number guessed becomes equal to the target number: 
	if (counter === targetNumber) {
		//wins goes up one
		winCounter++;
		$("#wins").text(winCounter);
		//target number is reset
		targetNumber = Math.floor(Math.random() * (121-19) + 19);
		$("#number-to-guess").text(targetNumber);
		//counter is reset to 0
		counter = 0;
		$("#points").text(counter);
		//random number for the coin is reset
		coinNumber = Math.floor((Math.random() * 12) + 1);
		alert("Hooray! A win!");
	}

	//if the number guessed becomes greater than the target number:
	else if (counter >= targetNumber){
		//losses goes up one
		lossCounter++;
		$("#losses").text(lossCounter);
		//target number is reset
		targetNumber = Math.floor(Math.random() * (121-19) + 19);
		$("#number-to-guess").text(targetNumber);
		//counter is reset to 0
		counter = 0;
		$("#points").text(counter);
		//random number for the coin is reset
		coinNumber = Math.floor((Math.random() * 12) + 1);
		alert("Oh no! You lost!");
	}
});


// Mushroom image -----------------------------------------------------------------------------

$("#mushroom-img").click(function(){
	mushroomNumber
	console.log(mushroomNumber);
	counter += mushroomNumber;
	$("#points").html(counter);

	//if the number guessed becomes equal to the target number: 
	if (counter === targetNumber) {
		//wins goes up one
		winCounter++;
		$("#wins").text(winCounter);
		//target number is reset
		targetNumber = Math.floor(Math.random() * (121-19) + 19);
		$("#number-to-guess").text(targetNumber);
		//counter is reset to 0
		counter = 0;
		$("#points").text(counter);
		//random number for the coin is reset
		mushroomNumber = Math.floor((Math.random() * 12) + 1);
		alert("Hooray! A win!");
	}

	//if the number guessed becomes greater than the target number:
	else if (counter >= targetNumber){
		//losses goes up one
		lossCounter++;
		$("#losses").text(lossCounter);
		//target number is reset
		targetNumber = Math.floor(Math.random() * (121-19) + 19);
		$("#number-to-guess").text(targetNumber);
		//counter is reset to 0
		counter = 0;
		$("#points").text(counter);
		//random number for the coin is reset
		mushroomNumber = Math.floor((Math.random() * 12) + 1);
		alert("You lose! Keep playing?");
	}
});


// Star image -----------------------------------------------------------------------------

$("#star-img").click(function(){
	starNumber
	console.log(starNumber);
	counter += starNumber;
	$("#points").html(counter);

	//if the number guessed becomes equal to the target number: 
	if (counter === targetNumber) {
		//wins goes up one
		winCounter++;
		$("#wins").text(winCounter);
		//target number is reset
		targetNumber = Math.floor(Math.random() * (121-19) + 19);
		$("#number-to-guess").text(targetNumber);
		//counter is reset to 0
		counter = 0;
		$("#points").text(counter);
		//random number for the coin is reset
		starNumber = Math.floor((Math.random() * 12) + 1);
		alert("Hooray! A win!");
	}

	//if the number guessed becomes greater than the target number:
	else if (counter >= targetNumber){
		//losses goes up one
		lossCounter++;
		$("#losses").text(lossCounter);
		//target number is reset
		targetNumber = Math.floor(Math.random() * (121-19) + 19);
		$("#number-to-guess").text(targetNumber);
		//counter is reset to 0
		counter = 0;
		$("#points").text(counter);
		//random number for the coin is reset
		starNumber = Math.floor((Math.random() * 12) + 1);
		alert("You lose! Keep playing?");
	}
});


// Flower image -----------------------------------------------------------------------------

$("#flower-img").click(function(){
	flowerNumber
	console.log(flowerNumber);
	counter += flowerNumber;
	$("#points").html(counter);

	//if the number guessed becomes equal to the target number: 
	if (counter === targetNumber) {
		//wins goes up one
		winCounter++;
		$("#wins").text(winCounter);
		//target number is reset
		targetNumber = Math.floor(Math.random() * (121-19) + 19);
		$("#number-to-guess").text(targetNumber);
		//counter is reset to 0
		counter = 0;
		$("#points").text(counter);
		//random number for the coin is reset
			flowerNumber = Math.floor((Math.random() * 12) + 1);
			alert("Hooray! A win!");
	}

	//if the number guessed becomes greater than the target number:
	else if (counter >= targetNumber){
		//losses goes up one
		lossCounter++;
		$("#losses").text(lossCounter);
		//target number is reset
		targetNumber = Math.floor(Math.random() * (121-19) + 19);
		$("#number-to-guess").text(targetNumber);
		//counter is reset to 0
		counter = 0;
		$("#points").text(counter);
		//random number for the coin is reset
		flowerNumber = Math.floor((Math.random() * 12) + 1);
		alert("You lose! Keep playing?");
	}
});

























});