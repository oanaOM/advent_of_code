var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Part 1: ", partOne(data, 4))
  console.log("Part 2: ", partOne(data, 14))
});


const partOne = (data, marker_position) => {
  for (let i = 0; i < data.length; i++) {
    if (new Set(data.substring(i, i + marker_position)).size == marker_position) {
      return i + marker_position
    }
  }
}

module.exports = { partOne }