const fs = require("fs");
const express = require("express");
const { log } = require("console");

app = express();
port = 3000;

fs.readFile("a.txt", "utf-8", printToScreen);

function printToScreen(err, data) {
  //   console.log("File is read and here is the data");
  console.log(data);

  function showData(req, res) {
    res.send(data);
  }

  app.get("/", showData);

  app.listen(port, () => console.log(`Listening on port on ${port}`));
}
