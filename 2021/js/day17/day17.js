var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  // console.log("example input", partOne(20, 30, -10, -5));
  // console.log("my input", partOne(135,155,-102,-78));
  // console.log("example input", partTwo(20, 30, -10, -5));
  console.log("my input", partTwo(135,155,-102,-78));
});

function partOne(minX, maxX, minY, maxY) {
  const maxSteps = 500;

  let allYs = new Set();

  for (let vx = 0; vx <= maxX; vx++) {
    for (let vy = minY; vy <= maxSteps; vy++) {
      let x = 0;
      let y = 0;
      let distanceX = vx;
      let distanceY = vy;
      let highestY = 0;

      for (let step = 0;step<=maxSteps; step++) {
        x += distanceX;
        y += distanceY;

        if (distanceX > 0) {
          distanceX--;
        }
        distanceY--;

        if (y > highestY) {
          highestY = y;
        }
        
        if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
          allYs.add(highestY);
          break;
        } else if (x > maxX || y < minY) {
          break;
        }
      }
    }
  }
  return Math.max(...allYs);
}


function partTwo(minX, maxX, minY, maxY) {
  const maxSteps = 500;

  let allVelocities = [];

  for (let vx = 0; vx <= maxX; vx++) {
    for (let vy = minY; vy <= maxSteps; vy++) {
      let x = 0;
      let y = 0;
      let distanceX = vx;
      let distanceY = vy;

      for (let step = 0;step<=maxSteps; step++) {
        x += distanceX;
        y += distanceY;

        if (distanceX > 0) {
          distanceX--;
        }
        distanceY--;
        
        if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
          allVelocities.push([x,y]);
          // console.log(x,y)
          break;
        } else if (x > maxX || y < minY) {
          break;
        }
      }
    }
  }
  return allVelocities.length;
}