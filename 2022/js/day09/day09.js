var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Part 1: ", partOne(data, 2))
  console.log("Part 2: ", partOne(data, 10))
});

const directions = {
  "U": [0, 1],
  "D": [0, -1],
  "R": [1, 0],
  "L": [-1, 0],
}

const moveTail = (head, tail) => {
  let diffX = head[0] - tail[0];
  let diffY = head[1] - tail[1];

  if (Math.abs(diffX) <= 1 && Math.abs(diffY) <= 1) { return }

  if (diffX !== 0) {
    tail[0] += diffX / Math.abs(diffX)
  }
  if (diffY !== 0) {
    tail[1] += diffY / Math.abs(diffY)
  }
}

const moveHead = (direction, distance, knots, visited) => {
  const move = directions[direction]
  distance = parseInt(distance)

  for (let i = 0; i < distance; i++) {
    knots[0][0] += move[0]
    knots[0][1] += move[1]

    for (let j = 1; j < knots.length; j++) {
      moveTail(knots[j - 1], knots[j])
    }

    visited.add(`${knots[knots.length - 1][0]}, ${knots[knots.length - 1][1]}`)
  }

}

const partOne = (data, tailLength) => {
  const moves = []
  data.split("\n").forEach(line => moves.push(line.trim(" ")))


  const visited = new Set([`0,0`])
  const knots = Array.from({ length: tailLength }, _ => { return [0, 0] })


  for (const move of moves) {
    const [direction, distance] = move.split(" ")
    moveHead(direction, distance, knots, visited)
  }


  return visited.size - 1

}

module.exports = { partOne }