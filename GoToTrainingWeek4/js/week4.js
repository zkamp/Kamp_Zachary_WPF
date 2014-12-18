/*
Zach Kamp
SDI 1412
Go To Training Week #4
12-17-2014
 */

//alert("testing to see if js file is connected");

//Create a function that spits out a random integer between two given values.

//Ask the user for a min number
var min = prompt("Let's get a random number between two values \nPlease type in the minimum value:");

//Validate that the user actually typed something

/*
//Older way of doing it
if(min===""){
    //reprompt the user
    min = prompt("Please do not leave blank! \nPlease type in a min number:");
}
    */

//Validate using a while loop
//test to see if blank

while(min===""){
    //reprompt the user
    min = prompt("Please do not leave blank! \nPlease type in a min number:");
}

//Validate that it is a number using a while loop
while(isNaN(min)){
    //reprompt the user
    min = prompt("Please only input numbers! \nPlease type in a min number:");
}

//Validate using a combined while loop
while(min==="" || isNaN(min)){
    //reprompt the user
    min = prompt("Please do not leave blank and type only numbers! \nPlease type in a min number:");
}