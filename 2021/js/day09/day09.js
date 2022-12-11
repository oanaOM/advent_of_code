var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  // console.log(partOne(data));
  // console.log(partTwo(data));
console.log(getNeighbours(1,9, "2199943210"))
});

function partOne(data) {
  data = data.split("\n").map((n) => n.split(""));
  let lowestPoints = [];
  let sum = 0;

  data.forEach((row, x) => {
    row.forEach((_, y) => {
      const currentPos = parseInt(data[x][y]);

      if (
        (!data[x - 1] || currentPos < parseInt(data[x - 1][y])) &&
        (!data[x + 1] || currentPos < parseInt(data[x + 1][y])) &&
        (!data[x][y - 1] || currentPos < parseInt(data[x][y - 1])) &&
        (!data[x][y + 1] || currentPos < parseInt(data[x][y + 1]))
      ) {
        lowestPoints.push(currentPos);
        sum += currentPos + 1;
      }
    });
  });

  return {
    partOne: sum,
    "": "",
  };
}

function partTwo(data) {
  lines = data.split("\n").map((n) => n.split("").map(Number));

  let point = "a-b";
  let visited = [];

  while (point != "") {
    point = "";
    lines.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (lines[i][j] > 9 && !visited.includes[i][j]) point = `${i}-${j}`;
      });
    });
    if ((point = "")) break;
  }
  console.log(lines);
  return "";
}

function getBasin(point, lines) {}

function getNeighbours(x, y, lines) {
  const neightbours = [];
  if (x + 1 < +lines[0].length) neightbours.push(`${x + 1}-${y}`);
  if (x - 1 >= 0) neightbours.push(`${x - 1}-${y}`);
  if (y + 1 < +lines.length) neightbours.push(`${x}-${y + 1}`);
  if (y - 1 >= 0) neightbours.push(`${x}-${y - 1}`);

  return neightbours
}
