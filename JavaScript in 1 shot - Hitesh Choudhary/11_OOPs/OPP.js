const user = {
  userName: "Rohit",
  loginCoount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log(user.userName);
    // console.log(`username : ${this.userName}`);
    console.log(this); // Current Context
  },
};

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this); // Global Context

// In browser - this --- > Window
// In node - this ----> {}

// ----------------------------------------------------------------------------------

function User(username, loginCount, isLoggedIn) {
  this.userName = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = function () {
    console.log(`Hello ${this.userName}`);
  };
  return this;
}

const userOne = new User("Rohit", 12, true);
const userTwo = new User("ChaiAurCode", 12, false);

// console.log(userOne); // Value got overwritten  -- without new keyword
// console.log(userTwo);

// "new" keyword --> is used to create new instance of an object

console.log(userOne.constructor);
