var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  console.log("Part A:", partOne(data));
  console.log("Part B:", partTwo(data));
});

function partOne(data) {
  let dumbos = data.split("\n").map((row) => row.split("").map(Number));
  let flashes = 0;
  let steps = 100;

  for (let step = 0; step < steps; step++) {
    let flashed = [];

    for (let x = 0; x < dumbos.length; x++) {
      flashed[x] = [];
      for (let y = 0; y < dumbos[x].length; y++) {
        dumbos[x][y]++;
      }
    }

    let marked = true;

    while (marked) {
      marked = false;
      dumbos.forEach((row, x) => {
        row.forEach((_, y) => {
          if (dumbos[x][y] > 9 && !flashed[x][y]) {
            flashes++;
            flashed[x][y] = true;
            marked = true;
            dumbos[x][y] = 0;
            for (let dx = x - 1; dx <= x + 1; dx++) {
              for (let dy = y - 1; dy <= y + 1; dy++) {
                if (
                  (dx !== x || dy !== y) &&
                  dumbos[dx] &&
                  dumbos[dx][dy] !== undefined &&
                  !flashed[dx][dy]
                ) {
                  dumbos[dx][dy]++;
                }
              }
            }
          }
        });
      });
    }
  }
  return flashes;
}

function partTwo(data) {
  let dumbos = data.split("\n").map((row) => row.split("").map(Number));
  let step = 0;
  let loop = false;
  let allDumbosFlash = 0;

  while (!loop) {
    step++;
    let flashes = 0;
    let flashed = [];

    for (let x = 0; x < dumbos.length; x++) {
      flashed[x] = [];
      for (let y = 0; y < dumbos[x].length; y++) {
        dumbos[x][y]++;
      }
    }

    let marked = true;

    while (marked) {
      marked = false;
      dumbos.forEach((row, x) => {
        row.forEach((_, y) => {
          if (dumbos[x][y] > 9 && !flashed[x][y]) {
            flashes++;
            flashed[x][y] = true;
            marked = true;
            dumbos[x][y] = 0;
            for (let dx = x - 1; dx <= x + 1; dx++) {
              for (let dy = y - 1; dy <= y + 1; dy++) {
                if (
                  (dx !== x || dy !== y) &&
                  dumbos[dx] &&
                  dumbos[dx][dy] !== undefined &&
                  !flashed[dx][dy]
                ) {
                  dumbos[dx][dy]++;
                }
              }
            }
          }
        });
      });
    }

    if (flashes === 100) {
      loop = true;
      allDumbosFlash = step;
    }
  }

  return allDumbosFlash;
}
