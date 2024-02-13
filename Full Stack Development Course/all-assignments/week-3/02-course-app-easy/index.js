const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

function userAlreadyExists(list, username) {
  let userExists = false;
  for (let i = 0; i < list.length; i++) {
    if (username === list[i].username) userExists = true;
  }
  return userExists;
}

function authenticator(list, username, password) {
  let authentication = false;
  for (let i = 0; i < list.length; i++) {
    if (username === list[i].username && password === list[i].password)
      authentication = true;
  }
  return authentication;
}

function findCourse(id) {
  for (let i = 0; i < COURSES.length; i++) {
    if (parseInt(COURSES[i]["courseId"]) === id) {
      return i;
    }
  }
  return -1;
}

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  if (userAlreadyExists(ADMINS, req.headers.username))
    res.send({ message: "Admin Already Exists" });
  else {
    ADMINS.push({
      username: req.headers.username,
      password: req.headers.password,
    });
    res.status(201).send({ message: "Admin created successfully" });
  }
});

app.post("/admin/login", (req, res) => {
  // logic to log in admin
  if (authenticator(ADMINS, req.headers.username, req.headers.password)) {
    res.status(200).send({ message: "Logged in successfully" });
  } else res.status(200).send({ message: "Wrong username / password" });
});

app.post("/admin/courses", (req, res) => {
  // logic to create a course
  if (authenticator(ADMINS, req.headers.username, req.headers.password)) {
    COURSES.push({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imageLink: req.body.imageLink,
      published: req.body.published,
      courseId: COURSES.length + 1,
    });
    res.status(201).send({
      message: "Course created successfully",
      courseId: COURSES.length,
    });
  } else res.send({ message: "Wrong username / passowrd" });
});

app.put("/admin/courses/:courseId", (req, res) => {
  // logic to edit a course
  if (authenticator(ADMINS, req.headers.username, req.headers.password)) {
    let index = findCourse(parseInt(req.params.courseId));
    if (index === -1) res.status(200).send({ message: "Course not found" });
    else {
      COURSES[index] = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
        published: req.body.published,
        courseId: parseInt(req.params.courseId),
      };
      res.status(200).send({ message: "Course updated successfully" });
    }
  } else res.send({ message: "Wrong username / passowrd" });
});

app.get("/admin/courses", (req, res) => {
  // logic to get all courses
  if (authenticator(ADMINS, req.headers.username, req.headers.password)) {
    res.send(COURSES);
  } else res.status(404).send("Course Not Found");
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
  if (userAlreadyExists(USERS, req.headers.username))
    res.send({ message: "User Already Exists" });
  else {
    USERS.push({
      username: req.headers.username,
      password: req.headers.password,
    });
    res.status(201).send({ message: "User created successfully" });
  }
});

app.post("/users/login", (req, res) => {
  // logic to log in user
  if (authenticator(USERS, req.headers.username, req.headers.password)) {
    res.status(200).send({ message: "Logged in successfully" });
  } else res.status(200).send({ message: "Wrong username / password" });
});

app.get("/users/courses", (req, res) => {
  // logic to list all courses
  if (authenticator(USERS, req.headers.username, req.headers.password)) {
    res.status(200).send(COURSES);
  } else res.status(404).send("Course Not Found");
});

app.post("/users/courses/:courseId", (req, res) => {
  // logic to purchase a course
  if (authenticator(USERS, req.headers.username, req.headers.password)) {
    let index = findCourse(parseInt(req.params.courseId));
    if (index === -1) res.status(200).send({ message: "Course not found" });
    else {
      COURSES[index].purchased = true;
      res.status(200).send({ message: "Course purchased successfully" });
    }
  } else res.send({ message: "Wrong username / passowrd" });
});

app.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
  purchasedCourses = [];
  for (let i = 0; i < COURSES.length; i++) {
    if (COURSES[i].purchased === true) purchasedCourses.push(COURSES[i]);
  }
  res.status(200).send(purchasedCourses);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
