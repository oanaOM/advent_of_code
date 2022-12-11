const { count } = require("console");
var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  // console.log(partOne(data));
  console.log(partTwo(data));
});

const getMin = (x, y) => (x < y ? x : y);

function partOne(data) {
  cave = data
    .trim()
    .split("\n")
    .map((line) => line.split("").map(Number));

  console.log(cave);
  return shortestPath(cave);
}

function shortestPath(cave){

  const m = cave.length;
  const n = cave[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      } else if (i === 0) {
        cave[i][j] = cave[i][j] + cave[i][j - 1];
      } else if (j === 0) {
        cave[i][j] = cave[i][j] + cave[i - 1][j];
      } else {
        cave[i][j] = getMin(
          cave[i][j] + cave[i][j - 1],
          cave[i][j] + cave[i - 1][j]
        );
      }
    }
  }
  let x = cave.length - 1;
  let y = cave[0].length - 1;

  return cave[x][y] - cave[0][0];
}

function partTwo(data) {
  cave = data
    .trim()
    .split("\n")
    .map((line) => line.split("").map(Number));

  let bigCave = [];
  console.log("---", cave);

  for (let i = 0; i < 5; i++) {
    for (let y = 0; y < cave.length; y++) {
      let caveRow = cave[y];
      const row = [];
      for (let j = 0; j < 5; j++) {
        for (let x = 0; x < cave.length; x++) {
          row.push(((caveRow[x] + i + j - 1) % 9) + 1);
        }
      }
      bigCave.push(row);
    }
  }

  console.log("---", shortestPath(bigCave));
  return "";
}
