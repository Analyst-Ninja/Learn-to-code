// let myName = "Rohit    ";

// console.log(myName.trueLength());

let myHeros = ["thor", "spriderman"];

let heroPower = {
  thor: "Thunder",
  spiderman: "Sling",

  getSpiderPower: function () {
    console.log(`Spidy Power is ${this.spiderman}`);
  },
};

Object.prototype.rohit = function () {
  console.log(`Rohit is present in all objects`);
};

// console.log(heroPower.rohit());
// console.log(myHeros.rohit());

Array.prototype.heyRohit = function () {
  console.log(`Rohit says hello`);
};

// console.log(myHeros.heyRohit());
// console.log(heroPower.heyRohit());

// --------------------------------------------------------------------------------

const user = {
  name: "Chai",
  email: "chai@google.com",
};

const teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAvailable: true,
};
const TAsupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// console.log(teacher);

// Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher);

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};

anotherUsername.trueLength();

"Hitesh".trueLength();
"IceTea    ".trueLength();
