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
  data = data.split("\n").map((l) =>
    l
      .trim()
      .split(" -> ")
      .map((v) => v.split(",").map(Number))
  );

  let allCoords = {};
  // only consider horizontal and vertical lines
  // lines where either x1 = x2 or y1 = y2

  data.forEach(([[x1, y1], [x2, y2]]) => {
    if (x1 === x2) {
      const minY = Math.min(y1, y2);
      const maxY = Math.max(y1, y2);

      for (let y = minY; y < maxY + 1; y++) {
        let counter = allCoords[`${x1},${y}`] || 0;

        allCoords[`${x1},${y}`] = counter + 1;
      }
    } else if (y1 === y2) {
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);

      for (let x = minX; x < maxX + 1; x++) {
        let counter = allCoords[`${x},${y1}`] || 0;

        allCoords[`${x},${y1}`] = counter + 1;
      }
    }
  });

  const overlaps = Object.values(allCoords).reduce(
    (count, value) => count + (value > 1 ? 1 : 0),
    0
  );

  return overlaps;
}

function partTwo(data) {
  data = data.split("\n").map((l) =>
    l
      .trim()
      .split(" -> ")
      .map((v) => v.split(",").map(Number))
  );

  let allCoords = {};
  data.forEach(([[x1, y1], [x2, y2]]) => {
    const [start, end] =
      x1 < x2
        ? [
            [x1, y1],
            [x2, y2],
          ]
        : [
            [x2, y2],
            [x1, y1],
          ];

    let length = Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2));
    const dx = (end[0] - start[0]) / length;
    const dy = (end[1] - start[1]) / length;

    console.log([start, end], "dx: ", dx, "dy: ", dy, "|| ", length);

    for (let i = 0; i < length + 1; i++) {
      const x = start[0] + i * dx;
      const y = start[1] + i * dy;
      let counter = allCoords[`${x},${y}`] || 0;
      allCoords[`${x},${y}`] = counter + 1;
    }
  });

  const overlaps = Object.values(allCoords).reduce(
    (count, value) => count + (value > 1 ? 1 : 0),
    0
  );
  return overlaps;
}
