/**
 Zach Kamp
 SDI Section #2
 Go To Training Week #2
 12-10-2014
 */
//alert ("Teste!");

//ask the user outside temp
var temp = prompt("What is the outside temperature?");
//this should log their answer and compare it to the condition??? Not working for me for some reason.
console.log(temp);

var coffeeBudget = prompt ("How much money is in your pocket?")
console.log(coffeeBudget);


if(temp <= 65 && coffeeBudget >= 5){
    alert ("You should get a warm coffee!");
    console.log("You should get a warm coffee!")
}else{
    alert ("You should get an iced coffee!");
    console.log("You should get a iced coffee!")
}

