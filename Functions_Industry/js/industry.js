/*
 Zach Kamp
 SDI section #2
 Functions-Industry
 12-18-2014
 */

//alert("Testing the connection");

//how many jobs in a day
//prompt user
var time = prompt("How long does it take for you to complete one job (hours)");
//provides hours in work day
var inADay = 8;
//variable that calls function
var total = jobsInADay(time, inADay);
//log to console
console.log("Jobs = " + total);

