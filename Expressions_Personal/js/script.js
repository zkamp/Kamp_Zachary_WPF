/*
 Zach Kamp
 SDI Section #2
 Go To Training Week #2
 12-4-2014
 */

//alert("This is Personal");

//create a gas price calculator

//ask the distance needed to travel
var distance = prompt("How many miles do you plan on traveling?");

//log miles in the console
console.log(distance);

//interact with the user and ask for avg. gas price
var gasPrice = prompt("Yikes! "+distance+" miles? That's a hike! \nWhat's the current average gas price?");

//MPG
var milesGallon = prompt("What is your vehicle's fuel economy (MPG)?")

//Console.log to check what they type
console.log(milesGallon);

//Divide distance by MPG
var gasTotal = distance / milesGallon;

//Multiply gasTotal by gasPrice
var tripCost;
tripCost = (gasTotal * gasPrice);
alert(tripCost);

