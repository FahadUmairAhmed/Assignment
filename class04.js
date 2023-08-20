"use strict";
//Create a funtion that takes an array,an index and a value as parameters.Inside function use the splice method to insert the value at the specified index in the array.Return the modified array.
let array = [1, 2, 3, 4, 5];
let index = 5;
let parameters = 7;
function arrayindexparameters(array, index, parameters) {
    array.splice(index, 0, parameters);
    return array;
}
var modifyarray = arrayindexparameters(array, index, parameters);
console.log(modifyarray);
//Write a program that uses a while loop to print the first 25 integers.
let count = 1;
while (count <= 25) {
    console.log("First 25 integers", count);
    count++;
}
//Write a program that uses a while loop to print the first 10 even number.
function first10even() {
    let even = 2;
    let evencount = 0;
    while (evencount < 10) {
        if (even % 2 === 0) {
            console.log(even);
            evencount++;
        }
    }
}
console.log(first10even());
//Implement simple shopping cart using an array.Create functions to add items,remove items,and update quantities using the splice method.Print the cart's content after each operation.
var shop = ["Coke", "Ice cream", "Sprite", "Lays"];
function additem(shop) {
    var add = shop.splice(shop.length - 3, 0, "Apple");
    console.log(add);
}
console.log(shop);
console.log(shop, additem);
