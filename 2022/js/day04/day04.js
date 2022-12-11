var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Part 1", partOne(data))
  console.log("Part 2", partTwo(data))
});

const partOne = (data) => {
  // TODO: refactor this
  let overlapped_pairs = 0

  const pairs = data.split("\n")

  pairs.forEach(pair => {
    let first_pair = pair.split(",")[0].split("-").map(n => parseInt(n))
    let second_pair = pair.split(",")[1].split("-").map(n => parseInt(n))


    if (first_pair[0] >= second_pair[0] && first_pair[1] <= second_pair[1] ||
      second_pair[0] >= first_pair[0] && second_pair[1] <= first_pair[1]) {
      overlapped_pairs += 1
    }
  })

  return overlapped_pairs
}
const partTwo = (data) => {
  // TODO: refactor this
  let overlapped_pairs = 0

  const pairs = data.split("\n")

  pairs.forEach(pair => {
    let first_pair = pair.split(",")[0].split("-").map(n => parseInt(n))
    let second_pair = pair.split(",")[1].split("-").map(n => parseInt(n))


    if (first_pair[0] <= second_pair[1] && second_pair[0] <= first_pair[1]) {
      overlapped_pairs += 1
    }
  })

  return overlapped_pairs
}

module.exports = { partOne, partTwo }