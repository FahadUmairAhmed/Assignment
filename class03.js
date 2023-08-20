"use strict";
//program that converts number of days into weeks and days
var numofdays = 100;
var weeks = (numofdays % 365) / 7;
var days = (numofdays % 365) % 7;
console.log(weeks, days);
//progran that calculates the discount for a product based on its price.If price above 100 10% discount otherwise 5%
var proprice = 127;
if (proprice > 100) {
    console.log("discount offer:10%");
}
else if (proprice < 100) {
    console.log("Discount 5%");
}
else {
    console.log('unvalid');
}
//Program that determines category of a user provided age.
var age = 27;
if (age > 0 && age <= 12) {
    console.log("Child");
}
else if (age > 13 && age <= 18) {
    console.log('Teenager');
}
else {
    console.log("Adult");
}
// program that checks if the given year is leap year or not
var year = 2024;
if (year % 4 == 0 && year % 100 != 0 && year % 400 != 0) {
    console.log("It is a Leap Year");
}
else {
    console.log("It is not");
}
//Program that takes temperature and check it.And suggest clothes according to weather.
var temp = 35;
if (temp <= 10) {
    console.log("Weather is cold wear jackets");
}
else if (temp <= 25) {
    console.log("weather is normal wear normal clothes");
}
else {
    console.log("Weather is hot wear light");
}
//program that checks given number divisible by 5 or 3 or both or not divisible
var num = 15;
if (num % 3 == 0 && num % 5 == 0) {
    console.log("It is divisible by both");
}
else if (num % 3 == 0) {
    console.log("Divisible by 3");
}
else if (num % 5 == 0) {
    console.log("Divisible by 5");
}
else {
    console.log("Not divisible");
}
//Program that determines the day of the week.Ask the user for a number91-7) and use nested if statements to print the corresponding day name.
var day = 5;
if (day == 1) {
    console.log("Monday");
}
else if (day == 2) {
    console.log("Tuesday");
}
else if (day == 3) {
    console.log("wednesday");
}
else if (day == 4) {
    console.log("Thursday");
}
else if (day == 5) {
    console.log("Friday");
}
else if (day == 6) {
    console.log("Saturday");
}
else if (day == 7) {
    console.log("Sunday");
}
else {
    console.log("Unverified");
}
//Program that takes number of units consumed by a user it greater than 100 then add 10% tax if greater than 200 add 15% tax if greater than 500 add 25% tax.
var units = 450;
var priceofunit = 25;
var amount = (units * priceofunit);
if (units >= 0 && units <= 100) {
    var billcalculate = amount + (10 / 100) * amount;
    console.log(billcalculate);
}
else if (units > 100 && units <= 200) {
    var billcalculate = amount + (15 / 100) * amount;
    console.log(billcalculate);
}
else if (units > 200 && units <= 500) {
    var billcalculate = amount + (25 / 100) * amount;
    console.log(billcalculate);
}
else {
    console.log("Unverified");
}
