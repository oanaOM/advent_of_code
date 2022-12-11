var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Part 1", partOne(data))
  console.log("Part 2", partTwo(data))
});

function partOne(data) {
  return 0
}

function partTwo(data) {
  return 0
}
