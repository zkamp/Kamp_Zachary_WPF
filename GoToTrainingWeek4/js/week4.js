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