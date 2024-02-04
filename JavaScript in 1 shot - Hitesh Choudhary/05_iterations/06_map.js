// +++++++++++++++++++++++++++++++ map +++++++++++++++++++++++++++++++++

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => {
//   return num + 10;
// });

// console.log(newNums);

// +++++++++++++++++++++++++++++++ chaining +++++++++++++++++++++++++++++++

// const newNums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num < 30);

// console.log(newNums);

// +++++++++++++++++++++++++++++++ reduce +++++++++++++++++++++++++++++++

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myTotal = myNums.reduce(function (acc, currVal) {
//   console.log(`acc - ${acc} and currVal - ${currVal}`);
//   return acc + currVal;
// }, 0);

// in arrow function format

// const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 399,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "Data Science Course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
