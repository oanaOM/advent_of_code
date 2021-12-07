var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(partOne(data));
  console.log(partTwo(data));
});

function partOne(data) {
  data = data.trim().split(",").map(Number);

  let minPos = Math.min(...data);
  let maxPos = Math.max(...data);
  let costs = [];

  for (let i = minPos; i < maxPos; i++) {
    costs.push(data.map((x) => Math.abs(x - i)).reduce((p, v) => p + v));
  }

  return Math.min(...costs);
}
function partTwo(data) {
  data = data.trim().split(",").map(Number);

  let minPos = Math.min(...data);
  let maxPos = Math.max(...data);
  let costs = [];

  for (let i = minPos; i < maxPos; i++) {
    costs.push(
      data
        .map((x) => Math.abs(x - 5))
        .map((x) => (x * (x + 1)) / 2)
        .reduce((p, v) => p + v)
    );
  }

  return Math.min(...costs);
}
