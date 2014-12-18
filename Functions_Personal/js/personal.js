/*
 Zach Kamp
 SDI section #2
 Functions-Personal
 12-18-2014
 */

//alert("Testing the connection");

//Ask user for initial info
var bikeTour = prompt("Do you want to go on a long distance bike trip?");
while(bikeTour!="yes" && bikeTour!="Yes" && bikeTour!="no" && bikeTour!="No"){
    //reprompt the user
    //Y is not the same as y
    bikeTour = prompt("You must answer \"yes\" or \"no\". Do you want to go on a long distance bike trip?");

    if(bikeTour==="no" || bikeTour==="No"){
        console.log("Maybe next year then");
    } 
}

var bikeType = prompt("Do you ride a road or mountain bike?\nType \"road\" or \"mountain\":");

//Validate using a while loop
//test to see if blank
//makes user type something specific
while(bikeType!="road" && bikeType!="Road" && bikeType!="mountain" && bikeType!="Mountain"){
    //reprompt the user
    //Y is not the same as y
    bikeType= prompt("Please only type in \"road\" or \"mountain\"");
}
