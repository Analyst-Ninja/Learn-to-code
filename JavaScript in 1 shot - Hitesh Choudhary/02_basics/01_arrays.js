// arrays

// 1. Collection of Elements in a single variable
// 2. Arrays are resizable
// 3. can contains mixture of dataTypes
// 4. JS Arrays are not associative arrays, so arrays can not be accessed through
// arbitrary string indexs, but must also be accesed using non - negative integers.
// 5. zero - based indexed
// 6. JS arrays-copy operations create -- Shallow copy --  ==> it copy the references
// means it will change the value of the original array. --> uses Heap memmory

// opposite of Shallow Copy ==> Deep Copy

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktimaan", "Junior G", "Naagraaj"];

// console.log(myArr[4]);
// console.log(myHeros);

// Array Methods

// push --> Add a value at last
// myArr.push(6);

// pop --> remove a value from last
// myArr.pop();

// unshift --> Add a value at the start ==> time consuming operation
// need to change the indexing of all the values ==> Inefficient operation
// but can be used in to-do list app etc.
// myArr.unshift(-1);

// shift --> Remove a value from the start
// myArr.shift();

// console.log(myArr.includes(5));
//  ==> true / false

// console.log(myArr.indexOf(5));
// returns the index of a element from array if exists
// if does not exists ==> returns -1

// const newArr = myArr.join();
// console.log(myArr, newArr);
// console.log(typeof myArr, typeof newArr);

// slice , splice methods

console.log("A", myArr);

const myNewArr1 = myArr.slice(1, 3);

console.log(myNewArr1);
console.log("B", myArr);

const myNewArr2 = myArr.splice(1, 3);
console.log(myNewArr2);
console.log("C", myArr);

// Difference between slice and splice

// 1. slice does not include the 3 and splice does
// 2. in splice, array get changed ==> Heap Memmory
