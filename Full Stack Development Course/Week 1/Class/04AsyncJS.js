// Agenda --------------------------

const { Console } = require("console");

// 1. Asynchronous JS
// 2. Callbacks
// 3. Promises
// 4. Arrow Functions

// ----------------------------------


// 1. Asynchronous JS

// function printToScreen(){
//     console.log("Hello World!!!");
// }

// timeInSec = 3

// setTimeout(printToScreen, timeInSec*1000)

// let counter = 0
// const num = 100
// for (let i = 0; i <= num; i++) {
//     counter += i
// }

// console.log(counter);

// -------------------------
// Coding a stopwatch
// -------------------------

let start = 0
let end = 10
let count = 0
function stopWatch() {
    if (count < end){
        count+=1
        console.clear()
        console.log(count);
    }
}

setInterval(stopWatch,1*1000)


let c = 1 
for (let i = 0;   i < 100000000; i++) {
    c += i
    
}
console.log(c)