const userEmail = [];

if (userEmail) {
  console.log("Got the user email");
} else {
  console.log("Don't have the user email");
}

// falsy values

//==> fasle, 0, -0, BigInt 0n, "", null, undefined, NaN

// Values other than falsy values are truthy values

// truthy values

// "0", 'false', "false", " ", [], {}, function() {}

if (userEmail.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Non - Empty Array");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
} else {
  console.log("Non - Empty Object");
}

// false == 0  ---> true
// "" == 0  ---> true
// false == ""  ---> true

// ++++++++++++++++++ Nullish Coalescing Operator (??) : null, undefined ++++++++++++++++++++++

let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20;

console.log(val1);

// ++++++++++++++++++ Terniary Operation ++++++++++++++++++++++

// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("more than or equal to 80") : console.log("less than 80");
