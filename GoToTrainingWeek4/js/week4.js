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

    if(min===""){
        //reprompt the user
        min = prompt("Please do not leave blank and type only numbers! \nPlease type in a min number:");
    } else{

        min=prompt("Please only type in numbers!\nPlease type in a min value:");
    }

}


//test if the user types something specific
//ex. yes or no questions

var userGoodMood = prompt("Are you in a good mood? \nPlease answer yes or no:");

while(userGoodMood!="yes" && userGoodMood!="Yes" && userGoodMood!="no" && userGoodMood!="No"){
    //reprompt the user
    //Y is not the same as y
    userGoodMood= prompt("Please only type in yes or no!\nAre you in a good mood?");
}

//toLowerCase() - converts a text string to lower case
if(userGoodMood==="yes" || userGoodMood==="Yes"){
    console.log("Great! Glad your in a good mood!");
} else{
    console.log("Sorry to hear that, maybe you should code more.");
}

//Ask the user for a max value
var max = prompt("Please type in a maximum value:");

//Validate the prompt
while(max==="" || isNaN(max)){

    max = prompt("Please do not leave blank and only use numbers.\nPlease type in a max value:");

}

//Parameters are used to catch the incoming arguments
function randomizer(minNum,maxNum){

    //console.log(min); - do not use variables from the main code in your functions

    //In the function
    console.log("inside the function");
    //Use parameters instead of the main code variables

    //Find a random number between 2 values
    //Math.random() * ( max value - min value) + min value
    var randomNumber = Math.round (Math.random() * (maxNum-minNum)+ Number (minNum)) ;
    //console.log(randomNumber); - DO NOT USE CONSOLE.LOG INSIDE OF FUNCTION!!!

    // Use a return value instead.
    return randomNumber;
}

//We need a function call to "run" our function
//arguments go in the function call
//what information in our main code does our function need access to

//We have to "catch" the returned value of our functional call
var results = randomizer(min,max);

//We use the results variable in our final consult.log
console.log("The random number is "+results);


console.log(randomizer(30,70)); //you can use other arguments