const partOne = (matrix, right, down) => {
  let counterTrees = 0;
  let treeMap = matrix.split("\n").map((x) => x.split(""));
  let x = 0;
  let y = 0;

  while (y < treeMap.length) {
    const updatedX = x % treeMap[0].length;
    // get the value at a given coordinate;
    const value = treeMap[y][updatedX];

    if (value === `#`) {
      counterTrees++;
    }

    x += right;
    y += down;
  }
  return counterTrees;
};
const partTwo = (matrix, turns) => {
  return turns.reduce((acc, [right, down]) => {
    return acc * partOne(matrix, right, down);
  }, 1);
};

module.exports = {
  oneSlope: partOne,
  allSlopes: partTwo,
};
