/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

transactions = [
  {
    itemName: "Apple",
    category: "fruit",
    price: 100,
  },
  {
    itemName: "Mango",
    category: "fruit",
    price: 50,
  },
  {
    itemName: "Tomato",
    category: "vegetable",
    price: 100,
  },
  {
    itemName: "ladyfinger",
    category: "vegetable",
    price: 20,
  },
  {
    itemName: "Spinach",
    category: "vegetable",
    price: 250,
  },
];

function calculateTotalSpentByCategory(transactions) {
  let category = [];
  let ans = [];

  for (let i = 0; i < transactions.length; i++) {
    if (category.indexOf(transactions[i].category) === -1) {
      category.push(transactions[i].category);
    }
  }

  for (let i = 0; i < category.length; i++) {
    let objToPush = {};
    let totalPrice = 0;
    for (let j = 0; j < transactions.length; j++) {
      if (category[i] === transactions[j].category) {
        totalPrice += transactions[j].price;
      }
    }
    objToPush[category[i]] = totalPrice;

    ans.push(objToPush);
  }

  return ans;
}

console.log(calculateTotalSpentByCategory(transactions));
