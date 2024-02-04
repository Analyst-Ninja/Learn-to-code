// Array Specific Loops

["", "", ""];
[{}, {}, {}];

// for of

const arr = [1, 2, 3, 4, 5];

// for (const i of arr) {
//   console.log(i);
// }

const greetings = "Welocome";

for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

// maps

// Map object holds key - value pairs and remembers the original insertion order of keys.
// Map objects are collections of key-value pairs.
// A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map();

map.set("name", "Rohit");
map.set("age", 26);

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ": - ", value);
// }

const myObject = {
  game1: "NFS",
  game2: "GOD OF WAR",
};

// for (const [key, value] of myObject) {
//   console.log(key, ": - ", value);
// }

// Objects are not iterable

// ----------------------------------------------------------------------

const myObject2 = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by apple",
};

for (const key in myObject2) {
  // console.log(`${key} - ${myObject2[key]}`);
}

const arr2 = ["js", "c++", "python"];

for (const key in arr2) {
  // console.log(arr2[key]);
}

const newMap = new Map();
newMap.set("name", "Rohit");
newMap.set("age", 26);

for (const key in newMap) {
  console.log(key);
}
