"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partOne = exports.partTwo = void 0;
// 12 red, 13 green, 14 blue
function partTwo(data) {
  var sum = 0;
  var formattedData = data.split("\n");
  formattedData.map(function (g) {
    var rounds = g.split(": ")[1];
    var games = rounds.split(";");
    var gameColours = {
      red: [],
      green: [],
      blue: [],
    };
    games.map(function (game) {
      game.split(",").map(function (e) {
        var pair = e.trim().split(" ");
        gameColours[pair[1]].push(Number(pair[0]));
        return pair;
      });
    });
    var maxRed = Math.max.apply(Math, gameColours.red);
    var maxGreen = Math.max.apply(Math, gameColours.green);
    var maxBlue = Math.max.apply(Math, gameColours.blue);
    var total = maxBlue * maxGreen * maxRed;
    sum += total;
  });
  return sum;
}
exports.partTwo = partTwo;

function partOne(data) {
  var validGames = [];
  var pattern = /\d+/g;
  var formattedData = data.split("\n");
  formattedData.map(function (g) {
    var gameNo = g.split("Game ")[1].split(":")[0];
    var rounds = g.split(": ")[1];
    var games = rounds.split(";");
    var matches = rounds.match(pattern);
    var highestNumberInAllGames = matches
      .map(function (e) {
        return Number(e);
      })
      .sort(compareNumbers)[matches.length - 1];
    if (highestNumberInAllGames <= 12) {
      validGames.push(gameNo);
    }
    if (highestNumberInAllGames === 13) {
      var row = games.find(function (g) {
        return g.includes(13);
      });
      var colour = row.split("13 ")[1].split(" ")[0];
      if (colour.includes("blue")) {
        validGames.push(gameNo);
      }
    }
    if (highestNumberInAllGames === 13) {
      var row = games.find(function (g) {
        return g.includes(13);
      });
      var colour = row.split("13 ")[1].split(" ")[0];
      if (colour.includes("green")) {
        validGames.push(gameNo);
      }
    }
    if (highestNumberInAllGames === 14) {
      var row = games.find(function (g) {
        return g.includes(14);
      });
      var colour = row.split("14 ")[1].split(" ")[0];
      if (colour.includes("blue")) {
        validGames.push(gameNo);
      }
    }
  });
  return validGames.reduce(function (acc, value) {
    return parseInt(acc) + parseInt(value);
  });
}
exports.partOne = partOne;
function compareNumbers(a, b) {
  return a - b;
}
