class user {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    return `${this._password.toUpperCase()} rohit`;
  }
  set password(value) {
    return (this._password = value);
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
}

const rohit = new user("rohit@openai.io", "abc");

console.log(rohit);
console.log(rohit.password, rohit.email);
