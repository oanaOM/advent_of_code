var fs = require("fs");

// fs.readFile("./input.txt", "utf8", (err, data) => {
//   if (err) console.error(err);

//   console.log("example input", partOne(data));
// });

function partOne(data) {
  let positions = data
    .split("\n")
    .map((player) => Number(player.split(": ")[1]));
  let scores = [0, 0];

  let rollDiceCount = 0;
  let dice = 0;

  let rollDice = () => {
    dice = (dice + 1) % 100 || 100;
    rollDiceCount++;
    return dice;
  };

  while (true) {
    for (let player = 0; player <= 1; player++) {
      let roll = rollDice() + rollDice() + rollDice();
      let newPosition = (positions[player] + roll) % 10 || 10;
      positions[player] = newPosition;
      scores[player] += newPosition;

      if (scores[player] >= 1000) {
        return rollDiceCount * scores[1 - player];
      }
    }
  }
}

// universe splits in 3 copies:
// roll 3 times per player
/*
roll -> possible times to get this
3 -> 1 -> 1,1,1
4 -> 3 -> 1,1,2 | 2,1,1 | 1,2,1
5 -> 6 -> 1,1,3 | 1,2,2 | 2,2,1 | 1,3,1 |  3,1,1 | 2,1,2
6 -> 7 -> 2,2,2 | 2,1,3 | 3,2,1 | 3,1,2 | 1,2,3 | 3,1,2 | 3,2,1 
7 -> 6 -> 3,3,1 | 1,3,3 | 3,1,3 | 2,2,3 | 3,2,2 | 2,3,2
8 -> 3 -> 3,3,2 | 2,3,3 | 3,2,3 
9 -> 1 -> 3,3,3 | 
*/

function partTwo(data) {
  let positions = data
    .split("\n")
    .map((player) => Number(player.split(": ")[1]));
  let scores = [0, 0];
  let countsWin = [0, 0];

  console.log(positions)

  let rollDicePossibilities = [
    [3, 1],
    [4, 3],
    [5, 6],
    [6, 7],
    [7, 6],
    [8, 3],
    [9, 1],
  ];

  let roleNextDice = (previousPositions, previousScore, player, count = 1) => {
    for (let [roll, possibleRole] of rollDicePossibilities) {
      
      let position = [...previousPositions];
      let score = [...previousScore];

      let newPosition = (positions[player] + roll) % 10 || 10;
      positions[player] = newPosition;
      scores[player] += newPosition;

      if (scores[player] >= 21) {
        countsWin[player] += count * possibleRole;
      } else {
        roleNextDice(position, score, 1 - player, count * possibleRole);
      }
    }
  };

 roleNextDice(positions, scores, 0)

 return Math.max(...countsWin)
}

module.exports = {
  partOne,
  partTwo,
};
