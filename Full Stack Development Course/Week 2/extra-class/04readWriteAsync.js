fs = require("fs");

let resArray = [];
function parallelFileOperation(filename) {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) throw err;
    else resArray.push(data);
    // else console.log(data);
    // console.log(resArray);
    fs.writeFile("b.txt", "Hello!", "utf-8", (err) => {
      if (err) resArray.push(0);
      else resArray.push(1);
    });
  });
  return resArray;
}

let result = parallelFileOperation("a.txt");

// Here we are facing a issues of callback Hell. That's why we need promises

// There is mix of sync & async code .

// Before completing the async task , sync code is returning empty array
console.log(result);
