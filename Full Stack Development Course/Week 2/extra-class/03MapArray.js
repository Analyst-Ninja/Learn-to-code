// function mapArray(num) {
//   if (num % 2 == 0) return { num: "even" };
//   else
//     return {
//       num: "odd",
//     };
// }

array = [1, 2, 3, 30];

// console.log(arr.map(mapArray));

// let arr2 = [];
// array.forEach((el) => {
//   arr2.push(el * 2);
// });

// console.log(arr2);

let arr2 = array.filter((n) => {
  return n % 2 === 0;
});

console.log(arr2);
