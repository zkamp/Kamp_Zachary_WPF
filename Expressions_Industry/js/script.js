/*
 Zach Kamp
 SDI Section #2
 Go To Training Week #2
 12-4-2014
 */
//alert("This is Industry!");

//Slide show duration
var timeSlide = prompt("How many seconds do you want your slideshow to last?");

//Log show duration
console.log(timeSlide);

//number of images
var imageCount = prompt('How many images do you want to use');

//Log image count
console.log(imageCount);

//calculate
var timePerSlide = timeSlide / imageCount;
alert(timePerSlide);

