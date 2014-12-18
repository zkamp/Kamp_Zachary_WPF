/*
Zachary Kamp
SDI Section #2
Go To Training Week #3
12-10-2014
 */
//alert("Testing to make sure we are connected");

//Create code that sorts through fruit names and picks out pears

//Create our "fruit bowl" array

var bowlOfFruit = ["apple","banana","pear","peach","pear","tomato","kiwi","pear"];

//Console logs the whole array
console.log(bowlOfFruit);

//How to get one fruit inside of the bowl
console.log(bowlOfFruit[1]);

//How many fruits are in the bowl?
//How many items are in the array
//Length of the array
//Dot Syntax - "use a period"
console.log(bowlOfFruit.length);

//What is the last index number of the array using the length property?
//Last index number is always one less than the length.
//bowlOfFruit.length - 1 is the last index #.

//Create a variable to track the number of pears.
var totalNumPears = 0;

//Test each item and see if it is a "pear".

//if(condition to test) { Code to run if true}
if(bowlOfFruit[0]==="pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
} else {
    //This will run if false
    console.log("This fruit is not a pear!");
}

if(bowlOfFruit[1]==="pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
} else {
    //This will run if false
    console.log("This fruit is not a pear!");
}

if(bowlOfFruit[2]==="pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
} else {
    //This will run if false
    console.log("This fruit is not a pear!");
}

if(bowlOfFruit[3]==="pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
} else {
    //This will run if false
    console.log("This fruit is not a pear!");
}

//Report out how many pears we have
console.log("There are "+totalNumPears+" pears in the bowl.");

//We want the computer to do the heavy lifting

//Create a new tracking variable for # of pears
var pearNumber= 0;

//Create a loop for repetitive code

//For Loop - great when you know how many times it should run
// for(initialize a counting variable; condition to test; incremental change)
// { Code to run each loop around}

for(var i=0;i<8; i++ ){
    console.log("Inside of the loop "+i);
    console.log(bowlOfFruit[i]);
    //test each fruit to see if it is a pear
    if(bowlOfFruit[i]==="pear"){
        //add to pear total
        pearNumber++;
        console.log("This fruit is a pear");
    } else{
        console.log("This fruit is not a pear");
    }
}

console.log("Total number of pears in bowl is "+pearNumber);