const promiseOne = new Promise(function (resovle, reject) {
  // Do an async task
  // DB Callls
  // Crytography
  // Network Call
  setTimeout(() => {
    console.log("Async Task is complete");
    resovle();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise is consumed");
});

new Promise(function (resovle, reject) {
  setTimeout(() => {
    console.log("Async Task 2 is completed");
    resovle();
  }, 1000);
}).then(() => {
  console.log("Async 2 is resolved");
});

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ userName: "Chai", email: "chai@example.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error === true) {
      resolve({ userName: "Rohit", password: "123" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

// console.log(typeof promiseFour);

const username1 = promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally((error) => {
    console.log("Promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error === true) {
      resolve({ userName: "Rohit", password: "123" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("fetch is executed");
//   });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
