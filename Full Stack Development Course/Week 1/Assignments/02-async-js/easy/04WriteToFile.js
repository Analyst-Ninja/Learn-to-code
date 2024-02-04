fs = require("fs");

function printToScreen() {
  console.log(data, " has been written into the file");
}

data = "Astala Westa, Tu Baadam Pista";
fs.writeFile("b.txt", data, "utf-8", printToScreen);
