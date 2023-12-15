type Coords = { x: number; y: number };

// TODO: FINISH THIS - please look somewhere else
export function partOne(data: string, factor) {
  const galaxies = expandUniverse(data, factor);

  // console.log("galaxies:", galaxies);

  const galaxiesArray = galaxies.split("\n");
  let n = 0;

  let positions: Coords[] = [];

  for (let i = 0; i < galaxiesArray.length; i++) {
    const row = galaxiesArray[i].split("");

    for (let j = 0; j < row.length; j++) {
      if (row[j] === "#") {
        n++;
        positions.push({ x: i, y: j });
        // console.log("--cell---", i, j, row[j]);
      }
    }
  }

  let sum: number = 0;
  for (let i = 0; i < positions.length; i++) {
    for (let j = 0; j < positions.length; j++) {
      sum += ManhattanDistance(positions[i], positions[j]);
    }
  }

  // console.log("--galaxy: ", galaxiesArray);
  console.log("--positions: ", positions);

  return sum / 2;
}

export function galaxies(data: string, factor) {
  const galaxies = expandUniverse(data, factor);

  const galaxiesArray = galaxies.split("\n");
  let n = 0;

  let positions: Coords[] = [];

  for (let i = 0; i < galaxiesArray.length; i++) {
    const row = galaxiesArray[i].split("");

    for (let j = 0; j < row.length; j++) {
      if (row[j] === "#") {
        n++;
        positions.push({ x: i, y: j });
        // console.log("--cell---", i, j, row[j]);
      }
    }
  }

  return positions;
}

export function partTwo(data: string) {
  // get positions of 10
  const positions = galaxies(data, 10);
  // const positionsH = galaxies(data, 1000);

  const newPositions: Coords[] = [];

  positions.map((position) => {
    let x = 0;
    let y = 0;
    if (position.x > 9) {
      x =
        Number(position.x.toString().split("")[0]) * 1000000 +
        Number(position.x.toString().split("")[1]);
    } else {
      x = position.x;
    }
    if (position.y > 9) {
      y =
        Number(position.y.toString().split("")[0]) * 1000000 +
        Number(position.y.toString().split("")[1]);
    } else {
      y = position.y;
    }
    newPositions.push({ x, y });
  });

  console.log("--positions of 10 extra: ", positions);
  console.log("--positions of 100 extra: ", newPositions);

  let sum: number = 0;
  for (let i = 0; i < newPositions.length; i++) {
    for (let j = 0; j < newPositions.length; j++) {
      sum += ManhattanDistance(newPositions[i], newPositions[j]);
    }
  }

  return sum / 2;
}

export function expandUniverse(input: string, factor = 2) {
  let galaxies = input.split("\n");

  const arr = new Array(galaxies[0].length).fill(".");
  for (let i = 0; i < galaxies.length; i++) {
    arr[i] = new Array(galaxies.length).fill(".");
  }

  const newRowsIndexes: number[] = [];
  const newColsIndexes: number[] = [];

  galaxies.forEach((galaxy, i) => {
    if (!galaxy.includes("#")) {
      newRowsIndexes.push(i);
    }
    let columnValues: string[] = [];
    let emptyColIndex: number[] = [];
    galaxy.split("").forEach((col, j) => {
      const cell = galaxies[j][i];
      // console.log("---->", j, i, cell);
      columnValues.push(cell);
      emptyColIndex.push(i);
    });
    if (!columnValues.includes("#")) {
      //   console.log("---end of row", columnValues, emptyColIndex);
      // console.log("---end of row");
      for (let i = 1; i < factor; i++) {
        newColsIndexes.push(emptyColIndex[0]);
      }
    }
  });

  // insert the rows
  newRowsIndexes.forEach((val, i) => {
    // console.log("--new row", galaxies[val + i], val + i);
    for (let j = 1; j < factor; j++) {
      galaxies.splice(val + i, 0, "---------");
    }
  });

  // insert the cells
  const newGalaxy: string[] = [];

  for (let j = 0; j < galaxies.length; j++) {
    let row = galaxies[j].split("");
    // console.log(newEl);
    newColsIndexes.forEach((newEl, i) => {
      row.splice(newEl + i, 0, "p").join();
      // row.splice(newEl + i - 1, 0, "p").join();
    });

    newGalaxy.push(row.join(""));
    // console.log("--end of row", j, row.join(""), row.length);
  }

  // console.log(newGalaxy, newGalaxy[0].length, newGalaxy.length);
  // console.log("--newRowsIndexes: ", newRowsIndexes);
  // console.log("--newColsIndexes: ", newColsIndexes);

  return newGalaxy.join("\n");
}

export function ManhattanDistance(a: Coords, b: Coords): number {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

// 351619021554
// 353083006914

// 706166013828

// 70616613828

// 7061673828
