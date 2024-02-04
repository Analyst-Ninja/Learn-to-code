const score = 400;
// console.log(score);

const balance = new Number(400);
// console.log(balance);

// console.log(balance.toString().length);

// toFixed() --> to get the precision upto no of decimal

// console.log(balance.toFixed(1));

const otherNumber = 45.8989;

// toPrecision() --> to get the n no of significant numbers, and returns in string

// console.log(otherNumber.toPrecision(4));

const num1 = 100000000;

// toLocaleString() --> to give the commas in the number with the format passed in
//                      the arguments and it returns a String
// console.log(num1.toLocaleString("en-IN"));

// **************************** Maths *************************

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(9.1));
// console.log(Math.ceil(9.1));
// console.log(Math.floor(9.1));
// console.log(Math.min(9.1, 2, 3, 4, 5, 6));
// console.log(Math.max(9.1, 2, 3, 4, 5, 6));

// Math.random

// Math.random will values between 0 and 1
console.log(Math.random());

// for die
console.log(Math.round(Math.random() * 6 + 1, 1));

// trick to get the random value between some min and max value

const min = 10;
const max = 11;

console.log(Math.floor(Math.random() * (max - min + 1) + min));

