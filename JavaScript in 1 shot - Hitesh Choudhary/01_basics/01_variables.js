const accountId = 23903;
let accountEmail = "r.kumar89080@gmail.com";
var accountPassword = "12345";

// JavaScript is a safe language--> without giving the var type we can reserve
// some in memmory like in accountCity
accountCity = "Mathura";

let accountState;

// accountId = 9; // assignemnt to constant variable is not allowed

accountEmail = "asbcjkas";
accountPassword = "1234567";
accountCity = "Bengaluru";
console.log(accountEmail);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
