/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

// class Todo {
//   constructor() {
//     this.taskList = [];
//   }

//   add(activity) {
//     if (this.taskList.length === 0) {
//       this.taskList.push({ task: activity, index: 1 });
//     } else {
//       console.log(this.taskList);
//       let i = this.taskList[taskList.length - 1].index;
//       this.taskList.push({ task: activity, index: i + 1 });
//     }
//   }

//   remove(index) {
//     this.taskList.splice(index, 1);
//   }
// }

// let toDo = new Todo();

// toDo.add("Make Tea");
// toDo.add("Make He;sjcbj");
// toDo.add("Make He;sjcbj");
// toDo.add("Make Tea");
// toDo.add("Make Tea");
// // toDo.remove(3);

// console.log(toDo);

// // let taskList = [
// //   { task: "Make Tea", index: 1 },
// //   { task: "Make He;sjcbj", index: 2 },
// //   { task: "Make He;sjcbj", index: 3 },
// //   { task: "Make Tea", index: 4 },
// // ];

// // console.log(taskList[taskList.length - 1].index);
