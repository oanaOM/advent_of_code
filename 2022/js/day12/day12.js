var fs = require("fs");

// fs.readFile("./input.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log("Part 1: ", partOne(data))
//   console.log("Part 2: ", partTwo(data))
// });

// a is the lowest elevation
// b is the next-lowest
// ...
// z lowest elevation

// S current position --> a elevation
// E locations with good signal --> z elevation

const partOne = (data) => {
  const input = data.split("\n").map((line) => line.split(""));
  let step = 0;

  // directions
  // down: x + 1 | up x - 1 | right y + 1 | left y - 1 
  const elevations = ["a", "b", "c", "d", "e", "f", "g"]
  // find position of S
  // find position of E

  for (let x = 0; x < input.length; x++) {
    for (let y = 0; y < input[x].length; y++) {
      if (elevations.indexOf(input[x][y]>= elevations.indexOf(input[x][y+1]))) {
        step++
      }
      // console.log(input[1][1])
    };
  }

  // console.log(input[0][1]);
  return step;
}

const partTwo = (data) => {

}

module.exports = { partOne }