/*
 Zach Kamp
 SDI Section #2
 Go To Training Week #2
 12-4-2014
 */

//alert("This is Wacky!");

//people in house
var peopleInHouse = prompt("How many people live in your house?");

//log number
console.log(peopleInHouse);

//dogs in house
var dogsInHouse = prompt("How many dogs?");

//log number of dogs
console.log(dogsInHouse);

//calculate
var peopleTootsDaily = peopleInHouse * 14;

//log people toots
console.log(peopleTootsDaily);

//calculate
var dogTootsDaily = dogsInHouse * 10;

//log dog toots
console.log(peopleTootsDaily);

//add products
var dailyOutput = peopleTootsDaily + dogTootsDaily;

//days in the month
var daysMonth = prompt("How many days in current month?");

//Multiply dailyOutput by days in month
var monthlyOutput = dailyOutput * daysMonth;

//Answer
alert("Number of farts in your house this month " + monthlyOutput);



