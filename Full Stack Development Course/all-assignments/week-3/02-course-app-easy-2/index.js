const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];
let id = 0;

const secret = "ADMIN-123";

function generateJwt(user) {
  const payload = { username: user.username };
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

function jwtAuthentication(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, secret, (err, user) => {
      if (err)
        return res.status(403).send({ message: "Authentication Failed" });
      else {
        req.user = user;
        next();
      }
    });
  } else res.status(401).send({ message: "Authorization String Missing" });
}

// Admin routes
app.post("/admin/signup", (req, res) => {
  // logic to sign up admin
  adminFound = ADMINS.findIndex((a) => a.username === req.body.username);
  if (adminFound !== -1) res.send({ message: "User Already Exists" });
  else {
    ADMINS.push(req.body);
    const token = "Bearer " + generateJwt(req.body);
    res.status(200).json({ message: "Admin Created Successfully", token });
  }
});

app.post("/admin/login", jwtAuthentication, (req, res) => {
  // logic to log in admin
  res.json({ message: "Logged in successfully" });
});

app.post("/admin/courses", jwtAuthentication, (req, res) => {
  // logic to create a course
  id = id + 1;
  courseObj = {
    courseId: id,
    courseName: req.body.courseName,
    courseDesc: req.body.courseDesc,
    price: req.body.price || 0,
    published: req.body.published || false,
  };
  COURSES.push(courseObj);
  res.status(200).send({
    message: `Course created with ID : ${courseObj.courseId} and Name : ${courseObj.courseName}`,
  });
});

app.put("/admin/courses/:courseId", jwtAuthentication, (req, res) => {
  // logic to edit a course
  const index = COURSES.findIndex(
    (course) => course.courseId === parseInt(req.params.courseId)
  );
  if (index !== -1) {
    courseObj = {
      courseId: COURSES[index].courseId,
      courseName: req.body.courseName || COURSES[index].courseName,
      courseDesc: req.body.courseDesc || COURSES[index].courseDesc,
      price: req.body.price || COURSES[index].price,
      published: req.body.published || COURSES[index].published,
    };
    COURSES[index] = courseObj;
    console.log(COURSES);
    res.status(200).send({
      message: `Course with ${req.params.courseId} is successfully updated`,
    });
  } else
    res
      .status(404)
      .send({ message: `Course with ${req.params.courseId} not found` });
});

app.get("/admin/courses", jwtAuthentication, (req, res) => {
  // logic to get all courses
  res.status(200).json(COURSES);
});

// User routes
app.post("/users/signup", (req, res) => {
  // logic to sign up user
});

app.post("/users/login", (req, res) => {
  // logic to log in user
});

app.get("/users/courses", (req, res) => {
  // logic to list all courses
});

app.post("/users/courses/:courseId", (req, res) => {
  // logic to purchase a course
});

app.get("/users/purchasedCourses", (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
