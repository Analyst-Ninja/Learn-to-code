// Data
let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2023, 6, 23, 5, 9);
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("2023-01-31");
let myCreatedDate = new Date("01-02-2023");
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth() + 1);

console.log(
  newDate.toLocaleString("default", {
    weekday: "short",
  })
);
