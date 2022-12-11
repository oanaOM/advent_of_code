var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Part 1: ", partOne(data))
  console.log("Part 2: ", partTwo(data))
});

const partOne = (data) => {
  const input = data.split("\n").map(instruction => instruction.trim(" "))

  let numberOfCycles = 0;
  let X = 1;
  const interestingSignal = [20, 60, 100, 140, 180, 220]

  let signalStrength = 0

  input.forEach((line) => {
    const instruction = line.split(" ")[0]

    switch (instruction) {
      case "noop":
        numberOfCycles += 1;
        if (interestingSignal.includes(numberOfCycles)) {
          // console.log("numberOfCycles: ", numberOfCycles, instruction)
          signalStrength += numberOfCycles * X
        }
        break;
      case "addx":
        const valueX = parseInt(line.split(" ")[1])
        for (let i = 0; i < 2; i++) {
          numberOfCycles += 1
          if (interestingSignal.includes(numberOfCycles)) {
            // console.log("numberOfCycles: ", numberOfCycles, instruction)
            signalStrength += numberOfCycles * X
          }
        }
        X += valueX
        break
    }
  })
  return signalStrength
}

const partTwo = (data) => {

}

module.exports = { partOne }