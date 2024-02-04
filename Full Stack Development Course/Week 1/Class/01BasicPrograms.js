// 1. Star Pattern 

// star = ""

// for (let i = 1; i < 6; i++) {
//     star = star + "*";
//     console.log(star);
// }


// -------------------------------------------

// 2. Fibbonacci Series

// -------------------------------------------

// let first = 0;
// let second = 1;
// let num = 9

// for (let i = 1; i <= num; i++) {

//     if (i === 1){
//         console.log(first);
//     }
//     if (i === 2) {
//         console.log(second);
//     }
//     if (i > 2){
//         next = second + first
//         console.log(next);
//         first = second
//         second = next

//     }

// }

// ---------------------------------------------

// Object Data Type

// ---------------------------------------------

// user = {
//     name  : "Rohit",
//     age : 27
// }

// console.log(user);
// console.log(user["name"]);

// ----------------------------------------------

// Array Data Type

// ----------------------------------------------

// users = ["Rohit", "Ajay",]

// console.log(users);
// console.log(users[0]);

// for (let i = 0; i < users.length ; i++){
//     console.log(users[i]);
// }

// ------------------------------------------------

// List of Objects

// -------------------------------------------------

// const users = [
//     {
//     name : "Rohit",
//     age : 27
// },
// {
//     name : "Ajay",
//     age : 23
// },
// {
//     name : "Jitu",
//     age : 26
// },
// {
//     name : "Kartik",
//     age : 26
// }
// ]
// function printAllUsers(users_array){
//     for(let i = 0; i < users_array.length; i++){
//         console.log(users_array[i]['name'], users_array[i]["age"] );
//     };
// }

// printAllUsers(users)

// Program 3 - Sum of all Natural Number from start value & End Value

// let sum = 0;
// const startIndex = 1
// const endIndex = 2

// function sumNumbers(startIndex, endIndex){
//     for (let i = startIndex; i <= endIndex ; i++ ){
//         sum += i 
//     }
//     return sum
// }

// let sumOfNumbers = sumNumbers(2,6)
// console.log(sumOfNumbers);

// ---------------------------------------------------------------------

// Functions can take other functions as input

// -----------------------------------------------------------------------

// function sum(num1, num2){
//     return num1 + num2;
// }
// function sub(num1, num2){
//     return num1 - num2;
// }
// function mul(num1, num2){
//     return num1 * num2;
// }
// function div(num1, num2){
//     return num1 / num2;
// }

// function doArithematic(num1, num2, arithematicFn){
//     return arithematicFn(num1,num2)
// }

// let add = doArithematic(2,4,sum)
// console.log(add);


// -------------------------------------------------------------

// Star Pattern

// -------------------------------------------------------------


// function starPattern(numOfRows) {
//     const stringToPrint = "**"
    
//     for (let i = 0; i < numOfRows; i++){
//         let pattern = ""
//         for (let j = 0 ; j < i ; j ++){
//             pattern += stringToPrint

//         }
//         console.log(pattern);
//     }
    
    
// }

// starPattern(10)

// ---------------------------------------------------------------

// Problem 4:  Pyramid Pattern

// ---------------------------------------------------------------


//   *
//  ***
// ***** 

// let n = 5;

// for (let i = 1; i <= n; i++){
//     let pattern = ""
//     for (let j = 1 ; j <= n-i ; j ++){
//         pattern += " "
//     }
//     for (let k = 0; k < 2 * i -1; k++){
//         pattern += "*"
//     }
//     console.log(pattern);
// }

// ----------------------------------------------------------------

// Asynchronous JS

// ----------------------------------------------------------------

const fs = require("fs")

function sum(n) {
    let sum  = 0;
    for(let i =0; i<n; i++){
        sum +=i
    }
    return sum
}

// let start_time = new Date().getTime()
// console.log(complexFn(1000000))
// let end_time = new Date().getTime()
// console.log((end_time - start_time) / 1000)

function fileIsRead(err,contents){
    const ans = sum(contents)
    console.log("File is read and the answer is",ans);
}

fs.readFile("choclate.txt","utf-8",fileIsRead)
console.log(sum(100000));
