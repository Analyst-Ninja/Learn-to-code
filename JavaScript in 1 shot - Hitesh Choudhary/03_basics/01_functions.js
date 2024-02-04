function sayMyName() {
  console.log("R");
  console.log("o");
  console.log("h");
  console.log("i");
  console.log("t");
}

// sayMyName();

function addTwoNum(num1, num2) {
  console.log(num1 + num2);
}

// const result = addTwoNum(45, 8969);

// console.log(result);
// result ==> undefined

function addTwoNum_V2(num1, num2) {
  return num1 + num2;
}

const result2 = addTwoNum_V2(3, 78);
// console.log(result2);

function loginUserMessage(userName = "Sam" /* default value*/) {
  if (userName === undefined) {
    console.log(`Please enter a user-name`);
    return;
  }
  return `${userName} just logged in.`;
}

// console.log(loginUserMessage());

// Another way to write

// !userName ==> Convert into the opposites

function loginUserMessage(userName = "Sam" /* default value*/) {
  if (!userName) {
    console.log(`Please enter a user-name`);
    return;
  }
  return `${userName} just logged in.`;
}

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// ...num ==> is the REST operator
// ... will be REST or SPREAD operator depending upon the use case

// console.log(calculateCartPrice(100, 200, 400, 500));

const user = {
  userName: "Rohit",
  price: 99,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.userName} and price is ${anyObject.price}`
  );
}

// console.log(handleObject(user));

// handleObject({
//   userName: "Sam",
//   price: 399,
// });

const myArray = [200, 300, 399, 799];

function returnSecondVal(getArray) {
  return getArray[1];
}

// console.log(returnSecondVal(myArray));
console.log(returnSecondVal([200, 300, 399, 799]));
