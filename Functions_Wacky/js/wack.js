/*
 Zach Kamp
 SDI section #2
 Functions-Wacky
 12-18-2014
 */


//alert("Testing the connection");

//centimeter to inches conversion
//prompt user to give cm
var cmCount = prompt("How many centimeters would you like to convert to inches?");
//provides formula for inches
var inches = 0.39370;
//variable that calls function
var convert = convertCmToInch(cmCount, inches);
//log to console
console.log("Inches = " + convert);
//function
function convertCmToInch(cmCount, inches){
 return cmCount * inches;
}

alert("Your answer is " + convert)