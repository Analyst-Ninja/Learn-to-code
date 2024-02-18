const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];
let id = 0;

const adminSecret = "ADMIN-123";
const userSecret = "USER-#$57";

function generateJwt(user) {
  const payload = { username: user.username };
  return jwt.sign(payload, adminSecret, { expiresIn: "1h" });
}

function jwtAuthentication(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, adminSecret, (err, user) => {
      if (err)
        return res.status(403).send({ message: "Authentication Failed" });
      else {
        req.user = user;
        next();
      }
    });
  } else res.status(401).send({ message: "Authorization String Missing" });
}

function generateJwtUser(user) {
  const payload = { username: user.username };
  return jwt.sign(payload, userSecret, { expiresIn: "1h" });
}

function jwtAuthenticationUser(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, userSecret, (err, user) => {
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

app.post("/admin/login", (req, res) => {
  // logic to log in admin
  const { username, password } = req.headers;
  const admin = ADMINS.find(
    (a) => a.username === username && a.password === password
  );

  if (admin) {
    const token = "Bearer " + generateJwt(admin);
    res.json({ message: `Logged in successfully with token : ${token}` });
  } else res.status(403).send({ message: "Authentication Failed" });
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
    // console.log(COURSES);
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
  userFound = USERS.find((u) => u.username === req.body.username);
  if (userFound) res.status(401).send({ message: "User Already Exists" });
  else {
    const userObj = req.body;
    userObj.purchasedCourses = [];
    USERS.push(userObj);
    const token = "Bearer " + generateJwtUser(req.body);
    res
      .status(201)
      .send({ message: `User Created Successfully with ${token}` });
  }
});

app.post("/users/login", (req, res) => {
  // logic to log in user
  const { username, password } = req.headers;
  const user = USERS.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    const token = generateJwtUser(user);
    res
      .status(200)
      .send({ message: `User Logged In Successfully with ${token}` });
  } else res.status(403).send({ message: "User Authenication Failed" });
});

app.get("/users/courses", jwtAuthenticationUser, (req, res) => {
  // logic to list all courses
  res.status(200).json(COURSES);
});

app.post("/users/courses/:courseId", jwtAuthenticationUser, (req, res) => {
  // logic to purchase a course
  const id = parseInt(req.params.courseId);
  if (COURSES.length !== 0) {
    const purchasedCourse = COURSES.findIndex((a) => a.courseId === id);
    const foundUserIndex = USERS.findIndex(
      (u) => u.username === req.user.username
    );
    if (foundUserIndex !== -1) {
      if ("purchasedCourses" in USERS[foundUserIndex]) {
        const courseAlreadyExists = USERS[
          foundUserIndex
        ].purchasedCourses.findIndex((c) => c.courseId === id);
        if (courseAlreadyExists === -1) {
          USERS[foundUserIndex].purchasedCourses.push(
            COURSES[purchasedCourse].courseId
          );
          res.status(201).send({
            message: `Course Purchased Successfully ${JSON.stringify(
              USERS[foundUserIndex]
            )}`,
          });
          console.log(USERS);
        }
      } else
        res
          .status(401)
          .send({ message: `Course already exits with id : ${id}` });
    } else
      res.status(404).send({ message: `Course Not Found with id : ${id}` });
  } else res.status(404).send({ message: "No Courses to buy" });
});

app.get("/users/purchasedCourses", jwtAuthenticationUser, (req, res) => {
  // logic to view purchased courses
  const purchasedCourseList = USERS.find(
    (u) => u.username === req.user.username
  ).purchasedCourses;
  const purchasedCourses = COURSES.filter((c) =>
    purchasedCourseList.includes(c.courseId)
  );
  res.status(200).json(purchasedCourses);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
