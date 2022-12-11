var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

});

function partOne(data) {
  return 0
}

function partTwo(data) {

  const outcome_score = {
    "X": 0,
    "Y": 3,
    "Z": 6,
  };

  const shape_score = {
    "A": 1,
    "B": 2,
    "C": 3,
  };

  const games = data.split("\n")

  let total_score = 0;
  games.forEach(game => {

    let game_score = game.split(" ")[1]
    let opp = game.split(" ")[0]

    total_score += outcome_score[game_score]

    if (game_score == "Y") {
      total_score += shape_score[opp]

    }
    //  need to loose
    if (game_score == "X") {
      switch (opp) {
        case "A":
          total_score += 3;
          break;
        case "B":
          total_score += 1;
          break;
        case "C":
          total_score += 2;
          break;
      }
    }
    //  need to win
    if (game_score == "Z") {
      switch (opp) {
        case "A":
          total_score += 2;
          break;
        case "B":
          total_score += 3;
          break;
        case "C":
          total_score += 1;
          break;
      }
    }

  })

  return total_score
}

module.exports = { partOne, partTwo }