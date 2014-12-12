/**
 Zach Kamp
 SDI Section #2
 Go To Training Week #2
 12-10-2014
 */
//alert ("Teste!");

//ask the user outside temp
var temp = prompt("What is the outside temperature?");

//this should log their answer and compare it to the condition.
console.log(temp);

//asks user if they have the predetermined amount of money for a gourmet coffee.
var coffeeBudget = prompt ("How much money is in your pocket?")

//log the amount of money. If it is equal to ar exceeds the price of the coffee suggestion will appear.
console.log(coffeeBudget);

//Says that if the outside temperature is equal to or below 65 degrees AND if you have enough money on hand you can have either and warm or iced coffee.
//if it's cold out, a warm beverage is preferable.
if(temp <= 65){
    if(coffeeBudget >= 5){
        alert ("You should get a warm coffee!");
        console.log("You should get a warm coffee!");
    }
    //if you don't have enough money
    if(coffeeBudget < 5) {
        alert("Look under the couch cushions because you're broke!");

    }
}
//if it's hot out, a cold beverage is preferable.
else {
    if (coffeeBudget >= 5) {
        alert("You should get an iced coffee!");
        console.log("You should get a iced coffee!");
    }
    //if you don't have enough money
    if (coffeeBudget < 5) {
        alert("Look under the couch cushions because you're broke!");
    }
}
if(coffeeBudget < 5 ){

}

