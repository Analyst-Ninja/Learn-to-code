const express = require("express");
const app = express();
const port = 3000;
let numberOfRequest = 0;
const bodyParser = require("body-parser");

// function handleFirstRequest(req, res) {
//   // let counter = req.query.counter;       to get the params from query in the URL
//   //   console.log(req.headers);            to get the params from headers
//   //   let counter = req.headers.counter;
//   let counter = req.body.counter;
//   if (counter < 100000) {
//     res.send(`Answer for sum from 1 to ${counter} is ${calculateSum(counter)}`);
//   } else {
//     res.status(411).send("You have entered a very big number");
//   }
// }

function handleFirstRequest(req, res) {
  //   let counter = req.body.counter;
  let counter = req.query.counter;

  let calculatedSum = calculateSum(counter);
  let calculatedFact = calculateFact(counter);

  let ansObject = { sum: calculatedSum, factorial: calculatedFact };

  res.status(200).send(ansObject);
}

function middleware1(req, res, next) {
  //   console.log("Inside from middleware", req.headers.counter);
  //   console.log("Inside from middleware", req);
  numberOfRequest += 1;
  //   console.log(req.body);
  if (numberOfRequest < 5) {
    next();
  } else {
    res.send(`Number of tries exceed : ${numberOfRequest}`);
  }
}

app.use(bodyParser.json()); // It gives the parsed body to the next middleware in series

app.use(middleware1);
// It check the request and pass on the control to the nex in series --
// It can do the various things like - Authentication, Checking the Number of requests etc

app.get("/handleSum", handleFirstRequest);

function givePage(req, res) {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello from page</title>
  </head>
  <body>
    <h1>Hi There</h1>
  </body>
</html>
`);
}

app.get("/", givePage);

function started() {
  console.log(`Example App is listening on ${port}`);
}

app.listen(port, started);

function calculateSum(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
function calculateFact(n) {
  let mul = 1;
  for (let i = 1; i <= n; i++) {
    mul *= i;
  }
  return mul;
}
