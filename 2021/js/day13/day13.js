var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  // console.log(partOne(data));
  console.log(partTwo(data));
});

function partOne(data) {
  data = data
    .trim()
    .split("\n\n")
    .map((x) => x.split("\n"));
  // console.log(data)
  let dots = data[0].map((pair) => pair.split(",").map(Number));
  const instructions = data[1];
  const instruction = instructions[0].split(" ")[2].split("=");
  const instructionX = instruction[0];
  const coordinate = instruction[1];

  console.log(instruction, instructionX, coordinate);

  if (instructionX === "x") {
    for (const i in dots) {
      const dot = dots[i];
      // console.log(dot[0])
      if (dot[0] > coordinate) {
        dots[i][0] = coordinate - Math.abs(coordinate - dot[0]);
      }
    }
  } else {
    for (const i in dots) {
      const dot = dots[i];
      // console.log(dot[0])
      if (dot[1] > coordinate) {
        dots[i][1] = coordinate - Math.abs(coordinate - dot[1]);
      }
    }
  }

  let visited = [];
  for (const dot of dots) {
    let dotCoord = `${dot[0]}${dot[1]}`;
    if (!visited.includes(dotCoord)) {
      visited.push(dotCoord);
    }
  }

  return visited.length;
}

function partTwo(data) {
  data = data
    .trim()
    .split("\n\n")
    .map((x) => x.split("\n"));
  let dots = data[0].map((pair) => pair.split(",").map(Number));
  console.log(">>> dots", dots);
  const instructions = data[1];
  console.log(instructions);

  for (const i in instructions) {
    const instruction = instructions[i].split(" ")[2].split("=");
    const instructionX = instruction[0];
    const coordinate = instruction[1];

    if (instructionX === "x") {
      for (const i in dots) {
        const dot = dots[i];
        if (dot[0] > coordinate) {
          dots[i][0] = coordinate - Math.abs(coordinate - dot[0]);
        }
      }
    } else {
      for (const i in dots) {
        const dot = dots[i];
        // console.log(dot[0])
        if (dot[1] > coordinate) {
          dots[i][1] = coordinate - Math.abs(coordinate - dot[1]);
        }
      }
    }
  }

  let visited = [];
  let exclude = [];
  for (const dot of dots) {
    let dotCoord = `${dot[0]}|${dot[1]}`;
    if (!visited.includes(dotCoord)) {
      visited.push(dotCoord);
      if (!exclude[dot[1]]) {
        exclude[dot[1]] = [];
      }
      for (let j = 0; j < dot[0] - 1; j++) {
        if (!exclude[dot[1]][j]) {
          exclude[dot[1]][j] = " ";
        }
      }
      exclude[dot[1]][dot[0]] = "#";
    }
  }
  exclude.map((x) => x.join("")).join("\n");
  // console.log(visited)

  return exclude
    .map((x) => x.join(""))
    .join("\n")
    .toString();
}
