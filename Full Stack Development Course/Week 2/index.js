const express = require("express");
const app = express();
const port = 3000;
const n = 100;

function handleFirstRequest(req, res) {
  //   res.send(');
  res.send(
    `Hello World!!! <br> Answer for sum from 1 to ${n} is ${calculateSum(n)}`
  );
}

app.get("/", handleFirstRequest);

function started() {
  console.log(`Example App is listening on ${port}`);
}

app.listen(port, started);

function calculateSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// let ans = calculateSum(100);
// console.log(ans);
