"use strict";
// //Create a funtion that takes an array,an index and a value as parameters.Inside function use the splice method to insert the value at the specified index in the array.Return the modified array.
// let array:number[] = [1,2,3,4,5]
// let index :number= 5;
// let parameters: number =7;
// function arrayindexparameters(array:number[] , index: number , parameters:number):number[] 
// {
//     array.splice(index,0,parameters)
//     return array
// }
// var modifyarray:number[]=arrayindexparameters(array,index,parameters);
// console.log(modifyarray);
// //Write a program that uses a while loop to print the first 25 integers.
// let count: number =1;
// while (count<=25){
//     console.log("First 25 integers",count);
//     count++;
// }
//Write a program that uses a while loop to print the first 10 even number.
// var num01:number=1;
// while (num01<=10){
//   if (num01%2==0)
//   console.log(num01," ");
//     num01++;
// }
//Implement simple shopping cart using an array.Create functions to add items,remove items,and update quantities using the splice method.Print the cart's content after each operation.
// var shop:string[]=["Coke","Ice cream","Sprite","Lays"]
// function additem(shop:string[]){
//     var add= shop.splice(shop.length-3,0,"Apple");
//     console.log(add)
// }
// console.log(shop)
// console.log(shop,additem)
//Create a fuction that takes an array of numbers as parameter.Use a while loop to calculate and return the sum of all the numbers in the array.
// let num02=[1,2,3,4,5,6,7,8,9]
// let num03=[7,8,9,6,5,7,8,9,7]
// // console.log("Value of arrays: ",num02)
// function addnum(num01:number[]) {
//     let i=0,sum=0;
//     while (i<num02.length);{
//         sum=sum+num02[i];
//         i++;
//     }
//   // return sum;  
// }
// console.log (addnum(num02))
//Negative array remove program
// const negativearray:number[]=[1,2,-3,-4,-5,6,7];
// function removenegative(negativearray:number[]) {
//   for (let i=negativearray.length;i>=0;i--){
//     if (negativearray[i]<0) {
//       negativearray.splice(i,1);
//     }
//   }  
// }
// removenegative(negativearray);
// console.log(negativearray)
//Function factorial
// let facnum:number=20;
// const factorial=(facnum:number)=>{
//   if (facnum>0) {
//     let result=1;
//     let index=1;
//     while(index<=facnum){
//       result*=index;
//       index++;
//     }
//     return result;
//   }else{
//     throw new Error("Enter Positive Number"); 
//   }
// }
// let facresult:number=factorial(facnum);
// console.log(facresult)
//Temperature
// let tempincel:number[]=[20,40,30];
// const convertinf=(tempincel:number[]):number[]=>{
//   const fahrentemp:number[]=[];
//   let i=0;
//   while (i<tempincel.length){
//     const celsiuis=tempincel[i];
//     const fahren=(celsiuis*9)/5+32;
//     fahrentemp.push(fahren);
//     i++;
//   }
// return fahrentemp;
// }
// let tempresult=convertinf(tempincel);
// console.log(tempresult);
