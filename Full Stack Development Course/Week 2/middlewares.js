const express = require("express");
const app = express();
const port = 3000;
let numberOfRequest = 0;
const bodyParser = require("body-parser");

function middleware1(req, res, next) {
  //   console.log("Inside from middleware", req.headers.counter);
  //   console.log("Inside from middleware", req);
  numberOfRequest += 1;
  console.log(req.body);
  if (numberOfRequest < 5) {
    next();
  } else {
    res.send(`Number of tries exceed : ${numberOfRequest}`);
  }
  console.log("Number of tries: ", numberOfRequest);
  //   res.send("error from inside the middleware");
}

app.use(bodyParser.json());

app.use(middleware1);

function handleFirstRequest(req, res) {
  // let counter = req.query.counter;       to get the params from query in the URL
  //   console.log(req.headers);            to get the params from headers
  //   let counter = req.headers.counter;
  let counter = req.body.counter;

  res.send(`Answer for sum from 1 to ${counter} is ${calculateSum(counter)}`);
}

app.get("/handleSum", handleFirstRequest);

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
