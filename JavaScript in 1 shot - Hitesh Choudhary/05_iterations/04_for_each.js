const coding = ["c++", "js", "ruby", "python"]; 

// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    langName: "JavaScript",
    langFile: "js",
  },
  {
    langName: "C++",
    langFile: "cpp",
  },
  {
    langName: "Python",
    langFile: "py",
  },
];

myCoding.forEach((item) => {
  console.log(`langName -- ${item.langName}  lanFile -- ${item.langFile}`);
});
