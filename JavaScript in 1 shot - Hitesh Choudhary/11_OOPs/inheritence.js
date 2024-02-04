class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USER : ${this.username}`);
  }
}

class teacher extends user {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course is added by ${this.username}`);
  }
}

const chai = new teacher("chai", "r@fb.com", "123");

chai.addCourse();

const masalaChai = new user("masalaChai");
// console.log(masalaChai.addCourse());  Not available to user class

console.log(masalaChai.logMe());

console.log(chai instanceof user);
