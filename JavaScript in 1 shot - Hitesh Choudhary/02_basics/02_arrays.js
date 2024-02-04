const marvelHeros = ["Spider Man", "Thor", "Iron Man"];

const dcHeros = ["Super Man", "Bat Man", "Flash"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros);

//concat --> it concatenate but return the arrays without modifying the originial array.

// console.log(allHeros);

// Spread Array ==> ...  ---> Bikhar jaata hai sab, Kanch ke glass ki tarah 😄😄

const allHerosSpread = [...marvelHeros, ...dcHeros];

// console.log(allHerosSpread);

const anotherArray = [1, 2, 3, 4, 5, [6, 7, 8], [6, 7, [4, 5]]];

const realAnotherArray = anotherArray.flat(Infinity);
const realAnotherArray2 = anotherArray.flat(1);

// console.log(realAnotherArray2);

const name = "Rohit";

// console.log(Array.isArray(name));
// console.log(Array.from(name));
// console.log(Array.from({ name: "Rohit" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
