/**
  You need to create a HTTP server in Node.js which will handle the logic of an authentication server.
  - Don't need to use any database to store the data.

  - Save the users and their signup/login data in an array in a variable
  - You can store the passwords in plain text (as is) in the variable for now

  The expected API endpoints are defined below,
  1. POST /signup - User Signup
    Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
    Request Body: JSON object with username, password, firstName and lastName fields.
    Response: 201 Created if successful, or 400 Bad Request if the username already exists.
    Example: POST http://localhost:3000/signup

  2. POST /login - User Login
    Description: Gets user back their details like firstname, lastname and id
    Request Body: JSON object with username and password fields.
    Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
    Example: POST http://localhost:3000/login

  3. GET /data - Fetch all user's names and ids from the server (Protected route)
    Description: Gets details of all users like firstname, lastname and id in an array format. Returned object should have a key called users which contains the list of all users with their email/firstname/lastname.
    The users username and password should be fetched from the headers and checked before the array is returned
    Response: 200 OK with the protected data in JSON format if the username and password in headers are valid, or 401 Unauthorized if the username and password are missing or invalid.
    Example: GET http://localhost:3000/data

  - For any other route not defined in the server return 404

  Testing the server - run `npm run test-authenticationServer` command in terminal
 */

const express = require("express");
const PORT = 3000;
const app = express();
const bodyParser = require("body-parser");
// write your logic here, DONT WRITE app.listen(3000) when you're running tests, the tests will automatically start the server

let users = [];

function findIndex(users, userName) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === userName) return i;
  }
  return -1;
}

function removeAtIndex(users, userName) {
  let newUsers = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].username !== userName) newUsers.push(users[i]);
  }
  return newUsers;
}

app.use(bodyParser.json());

app.post("/signup", (req, res) => {
  if (findIndex(users, req.body.username) === -1) {
    users.push({
      id: Math.floor(Math.random() * 10000000 + 1),
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    });
    console.log(users);
    res.status(201).send("Signup successful");
  } else res.status(400).send("User Already Exists");
});

app.post("/login", (req, res) => {
  let index = findIndex(users, req.body.username);
  if (index !== -1) {
    if (
      users[index].email === req.body.email &&
      users[index].password === req.body.password
    ) {
      res.status(200).send({
        firstName: users[index].firstName,
        lastName: users[index].lastName,
        email: users[index].email,
      });
    } else {
      res.status(401).send("Unauthorized");
    }
  } else res.status(401).send("User not exists - Please Signup");
});

app.get("/data", (req, res) => {
  let index = findIndex(users, req.headers.username);
  if (index !== -1) {
    if (
      users[index].username === req.headers.username &&
      users[index].password === req.headers.password
    ) {
      let allData = users;
      res.status(200).send({ users: allData });
    } else res.status(401).send("Unauthorized");
  } else res.status(401).send("User not exists - Please Signup");
});

app.use((req, res, next) => {
  res.status(404).send();
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
