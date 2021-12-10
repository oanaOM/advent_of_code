var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  console.log(partOne(data));
  console.log(partTwo(data));
});

function partOne(data) {
  return data.split("\n").reduce((sum, line) => {
    let characters = [];

    for (let char of line) {
      if ("([{<".includes(char)) {
        let matchingChart = { "(": ")", "[": "]", "{": "}", "<": ">" }[char];
        characters.push(matchingChart);
      } else {
        let expectedChar = characters.pop();
        if (char != expectedChar) {
          sum += { ")": 3, "]": 57, "}": 1197, ">": 25137 }[char];
          break;
        }
      }
    }
    return sum;
  }, 0);
}

function partTwo(data) {
  let results = data
    .split("\n")
    .map((line) => {
      let characters = [];

      for (let char of line) {
        if ("([{<".includes(char)) {
          let matchingChart = { "(": ")", "[": "]", "{": "}", "<": ">" }[char];
          characters.push(matchingChart);
        } else {
          let expectedChar = characters.pop();
          if (char != expectedChar) {
            return "corrupted";
          }
        }
      }
      return characters.reduceRight(
        (score, char) => score * 5 + { ")": 1, "]": 2, "}": 3, ">": 4 }[char],
        0
      );
    }, 0)
    .filter((result) => result !== "corrupted")
    .sort((a, b) => a - b);

  return results[(results.length - 1) / 2];
}
