fs = require("fs");

function printToScreen(err, data) {
  console.log(
    data
      .split(" ")
      .filter((e) => (e !== " " && e !== "." ? e : ""))
      .join(" ") + "."
  );
}

fs.readFile("FileWithWrongData.txt", "utf-8", printToScreen);
