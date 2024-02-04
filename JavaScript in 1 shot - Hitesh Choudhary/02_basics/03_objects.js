// singleton --> constructor se banta hai
// ==> Object.create

// object literals -->

const mySym = Symbol("myKey1");

const jsUser = {
  name: "Rohit",
  "full name": "Rohit Kumar",
  mySym: "myValue1", // not getting used as Symbol
  [mySym]: "myValue1", // getting used as Symbol
  age: 26,
  location: "Mathura",
  email: "rohit@google.com",
  isLoggedIn: true,
  lastLoginDay: ["Monday", "Saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// // console.log(jsUser.full name); // not possible to access it this way
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "rohit@chatgpt.com";
// console.log(jsUser);

// Object.freeze ==> to restrict any changes in the object but does not give any error

// Object.freeze(jsUser);
jsUser.email = "rohit@microsoft.com";

// console.log(jsUser); // did not allow the change in object

jsUser.greeting = function () {
  console.log(`Hello jsUser`);
};
jsUser.greetingTwo = function () {
  console.log(`Hello ${this.name}`);
};

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
