fs = require("fs");

function printContent(err, data) {
  console.log(data);
}

fs.readFile("a.txt", "utf-8", printContent);

count = 0;
for (let i = 0; i < 1000000000; i++) {
  count += i;
}

console.log(count);
