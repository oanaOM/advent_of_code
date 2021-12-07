var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  data = data.trim().split(",").map(Number);
  let positionsA, positionsB = [];

  for (let i = Math.min(...data); i < Math.max(...data); i++) {
    positionsA.push(data.map((x) => Math.abs(x - i)).reduce((p, v) => p + v));
    positionsB.push(data.map((x) => Math.abs(x - i)).map((x) => (x * (x + 1)) / 2).reduce((p, v) => p + v)
    );
  }
  return console.log(`${Math.min(...positionsA)},  ${Math.min(...positionsB)}`);
});