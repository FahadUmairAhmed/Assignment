"use strict";
//Develop a program that calculates and prints the sum of the n even numbers using a for loop.
let evennum = 11;
function sumeven(evennum) {
    let sum = 0;
    for (let i = 1; i <= evennum; i++) {
    }
    return sum;
}
const result = sumeven(evennum);
console.log((result));
//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
}
//Implement a program that uses to iterate through an array of numnbers and remove all even numbers from them and just leave the odd ones.
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 === 0) {
        array1.splice(i, 1);
    }
}
console.log(array1);
//Write a program that defines a function to calculates the area of a circle.The function should take the radius as input and return the calculated area.
let radius = 12;
const area = (radius) => {
    const pi = Math.PI;
    let area1 = pi * radius ** 2;
    return area;
};
let circle = area(radius);
console.log(circle);
//Develop a program that reads a list of grades and uses the splice method to remove failing grade(below 50) from the array.
let marks = [33, 55, 60, 80, 45, 70, 99, 49, 67];
const removegrade = (grade) => {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 50) {
            marks.splice(i, 1);
        }
    }
    return marks;
};
let markresult = removegrade(marks);
console.log(markresult);
//Write a program that uses a function to find the largest element in an array of numbers.
let array2 = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const largenum = (value) => {
    let large = value[0];
    for (let i = 0; i < value.length; i++) {
        if (value[i] > large) {
            large = value[i];
        }
    }
    return large;
};
let largevalue = largenum(array2);
console.log(largevalue);
