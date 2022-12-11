var fs = require("fs");

// my input
// fs.readFile("./input.txt", "utf8", (err, data) => {
//   if (err) console.error(err);

//   console.log("part 1:", partOne(data));
//   // console.log("part 2:", partTwo(data));
// const axis = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];

// });


function partOne(data) {
  let scanners = data.split("\n\n").map((scanner) =>
    scanner
      .split("\n")
      .slice(1)
      .map((coords) => coords.split(",").map(Number))
  );
  let totalBeacons = 0;

  console.log(">>", scanners);


  return totalBeacons;
}

function partTwo(){
  return "";
}

module.exports = {
  partOne,
  partTwo
}
