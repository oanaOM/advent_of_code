/**
 * | : [N,S]
 * - : [E,W]
 * L : [N,E]
 * J : [N,W]
 * 7 : [S,W]
 * F : [S,E]
 */

type Start = {
  x: number;
  y: number;
};

export function partOne(data) {
  const rows = data.split("\n");

  let start: Start = { x: 0, y: 0 };
  rows.forEach((column, i) => {
    const columns = column.split("");
    columns.forEach((move, j) => {
      // moves[i][j] = move;

      if (move == "S") {
        start = { x: j, y: i };
      }
    });
  });

  console.log(start);

  let x = start.x;
  let y = start.y;
  let direction;

  let neighbourBottom = rows[y + 1][x];

  if (
    neighbourBottom === "|" ||
    neighbourBottom === "L" ||
    neighbourBottom === "J"
  ) {
    direction = "S";
    y++;
  }

  if (!neighbourBottom) {
    let neighbourAbove = rows[y - 1][x];
    if (
      neighbourAbove === "|" ||
      neighbourAbove === "7" ||
      neighbourAbove === "F"
    ) {
      direction = "N";
      y--;
    }
  }

  if (!direction) {
    direction = "E";
    x++;
  }

  let path = [start, { x, y }];
  let steps = 1;
  console.log("rows[y][x] + direction: ", rows[y][x] + direction);

  while (x !== start.x || y !== start.y) {
    let deltaX = 0;
    let deltaY = 0;

    switch (rows[y][x] + direction) {
      case "|S":
        deltaY = 1;
        break;
      case "|N":
        deltaY = -1;
        break;
      case "-E":
        deltaX = 1;
        break;
      case "-W":
        deltaX = -1;
        break;
      case "LS":
        deltaX = 1;
        break;
      case "LW":
        deltaY = -1;
        break;
      case "JS":
        deltaX = -1;
        break;
      case "JE":
        deltaY = -1;
        break;
      case "7N":
        deltaX = -1;
        break;
      case "7E":
        deltaY = 1;
        break;
      case "FN":
        deltaX = 1;
        break;
      case "FW":
        deltaY = 1;
        break;

      default:
        throw "ERRR " + rows[y][x] + direction;
    }

    if (deltaY === 1) {
      direction = "S";
    } else if (deltaY === -1) {
      direction = "N";
    } else if (deltaX === -1) {
      direction = "W";
    } else {
      direction = "E";
    }

    y += deltaY;
    x += deltaX;
    steps++;
    path.push({ x, y });
  }

  console.log("steps", steps / 2);

  return steps / 2;
}

export function partTwo(data) {
  return 0;
}
