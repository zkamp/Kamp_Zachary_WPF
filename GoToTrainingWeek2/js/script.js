/*
Zach Kamp
SDI Section #2
Go To Training Week #2
12-3-2014
 */


//alert("testing");

// create an age calculator

//Ask the user their name
var name = prompt("Please type your name");

//use the variable and say hello to the user
alert("Welcome "+name+"! Let's figure out how old you are.");

//ask the user what year they were born
//create a variable to catch that answer
var yearBorn = prompt("What year were you born");

//Console.log to check what they type
console.log(yearBorn);

//Calculate their age

//We need the current year
var currentYear = 2014;

var age = currentYear-yearBorn;

//Alert the user with their current age
alert(name+" you are "+age+" years old.");

//Make it more complex
//Ask the user how many years in the future they would like to know how old they will be
var yearsMore = prompt("How many years in the future would you like to know?");

console.log(yearsMore);

//Calculate their future age
//Cast the returned variable from a text string to a number
//Number(thing to cast goes here)
var futureAge = age + Number(yearsMore);
console.log(futureAge);

//Make the results look pretty
console.log("You will be "+futureAge+" in "+yearsMore+" years.");
alert("You will be "+futureAge+" in "+yearsMore+" years.");