// console.log(Math.PI);
// Math.PI = 6;

// // Value did not get changed
// console.log(Math.PI);

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// Descriptor
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const chai = {
  name: "chai",
  price: 250,
};

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
