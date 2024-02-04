var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);  -- correct
// console.log(b);  -- correct
// console.log(c);  -- incorrect, it is getting called out of scope as well

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  //   console.log("Inner Scope value of a: - ", a);
}

// console.log(a);

function one() {
  const userName = "Rohit";
  function two() {
    const website = "youtube.com";
    console.log(userName);
  }
  //   console.log(website);

  //   two();
}

// one();

if (true) {
  const userName = "Rohit";
  if (true) {
    const website = "youtube.com";
    // console.log(userName + website);
  }
  //   console.log(website);
}

// console.log(userName);

// +++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

// console.log(addTwo(5)); --> Can't be used before the
// variable declaration having function

var addTwo = function (num) {
  return num + 2;
};
