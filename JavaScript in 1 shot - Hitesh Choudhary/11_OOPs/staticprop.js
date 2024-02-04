class user {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username : ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}
// const hitesh = new user("Hitesh");

// console.log(hitesh.createId());

class teacher extends user {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iPhone = new teacher("iPhone", "i@phone.com");
console.log(iPhone.createId());
