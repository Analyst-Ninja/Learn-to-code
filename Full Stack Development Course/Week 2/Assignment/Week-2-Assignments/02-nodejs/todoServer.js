/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

let todos = [];
let todoId = 0;

app.use(bodyParser.json());

function createTodo(req, res) {
  todoId += 1;

  let todoObj = {
    id: todoId,
    title: req.body.title,
    completed: req.body.completed || false,
    description: req.body.description,
  };
  todoId = todos.push(todoObj);
  res.status(201).send("To Do Created");
}

app.post("/todos", createTodo);

function getAllTodos(req, res) {
  res.status(200).send(todos);
}
app.get("/todos", getAllTodos);

function getTodo(req, res) {
  let found = false;
  if (todos.length !== 0) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === parseInt(req.params.id)) {
        found = true;
        res.status(200).send(todos[i]);
      }
    }
  }
  if (found === false) {
    res.status(404).send(`To Do with ${parseInt(req.params.id)} not found`);
  }
}

app.get("/todos/:id", getTodo);

function updateTodo(req, res) {
  let found = false;
  if (todos.length !== 0) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === parseInt(req.params.id)) {
        todos[i].title = req.body.title || todos[i].title;
        todos[i].completed = req.body.completed || todos[i].completed;
        todos[i].description = req.body.description || todos[i].description;
        found = true;
        res.status(200).send(`Updated To Do with ID- ${todos[i].id}`);
      }
    }
  }
  if (found === false) {
    res.status(404).send(`To Do with ${parseInt(req.params.id)} not found`);
  }
}

app.put("/todos/:id", updateTodo);

function deleteTodo(req, res) {
  let found = false;
  if (todos.length !== 0) {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === parseInt(req.params.id)) {
        todos.splice(i, 1);
        found = true;
        res.status(200).send("To Do - Deleted");
      }
    }
  }
  if (found === false) {
    res.status(404).send(`To Do with ${parseInt(req.params.id)} not found`);
  }
}

app.delete("/todos/:id", deleteTodo);

// for all other routes, return 404
app.use((req, res, next) => {
  res.status(404).send();
});

function startedFn() {
  console.log(`HTTP server is listening on ${port}`);
}

app.listen(port, startedFn);

module.exports = app;
