/**
 Zach Kamp
 SDI Section #2
 12-10-2014
 */

//alert("teste!")


//prompt user for the pool temp
var temp = prompt("What is the pool's temperature?");
//prompt user for number of people
var noOfPeople = prompt("Number of people by the pool?");
//prompt user to check for police
var theFuzz = prompt("Number of police officers nearby?");

//begin conditional statement
if(temp >= 70){
    if(noOfPeople <= 3) {
        if (theFuzz == 0) {
            alert("Let's go skinny dippin'!");

        }
    }
    if(temp < 70){
        alert("Brrrr! That's too cold!");
    }
    if(noOfPeople > 3)
}

