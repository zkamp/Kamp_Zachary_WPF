/*
 Zach Kamp
 SDI section #2
 Functions-Personal
 12-18-2014
 */

//alert("Testing the connection");

//Ask user for initial info
var bikeType = prompt("Do you ride a road or mountain bike?\nType \"road\" or \"mountain\":")

//Validate using a while loop
//test to see if blank
while(bikeType===""){
    //reprompt the user
    bikeType = prompt("Please do not leave blank! \nPlease type \"road\" or \"mountain\":");
}