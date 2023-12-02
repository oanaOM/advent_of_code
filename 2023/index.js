import express from "express";
var fs = require("fs");
const app = express();
const port = 3000;

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Part 1", partOne(data));
  console.log("Part 2", partTwo(data));
});

app.listen(port, () => {
  console.log(`Dolphin app listening on port ${port}!`);
});
