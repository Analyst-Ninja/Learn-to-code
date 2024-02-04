const user = {
  userName: "Rohit",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.userName}, Welcome to the website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.userName = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let userName = "Rohit";
//   console.log(this.userName);
// }
const chai = () => {
  let userName = "Rohit";
  console.log(this.userName);
};
// chai();

// giving undefined -- > can't access in function though this keyword

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// with implicit return
const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => {user : "Rohit"}; ----> It wont return object
// const addTwo = (num1, num2) => ({user : "Rohit"}); ----> It will return object,
// small braces are required to assume it as implicit return for objects only

console.log(addTwo(4, 8));
