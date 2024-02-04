// if

// const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//   console.log("Executed");
// }

// conditional operators - < , >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

const balance = 200;

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const isUserLoggedIn = true;
const debitCardUser = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCardUser && loggedInFromGoogle) {
  console.log("You can do shopping");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("You can do shopping");
}
