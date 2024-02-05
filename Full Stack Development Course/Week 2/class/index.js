const express = require("express");
const app = express();
const port = 3000;
// const n = 100;

function handleFirstRequest(req, res) {
  let counter = req.query.counter;
  // console.log(req.headers);
  // let counter = req.headers.counter;
  let ans = {
    sum: calculateSum(counter),
  };
  res.send(ans);
}

app.get("/handleSum", handleFirstRequest);

function createUserRequest(req, res) {
  res.send("Hi, The user has been created");
}

app.post("/createUser", createUserRequest);

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
