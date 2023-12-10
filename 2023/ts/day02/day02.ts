// 12 red, 13 green, 14 blue
export function partTwo(data) {
  let sum: number = 0;
  const formattedData = data.split("\n");

  formattedData.map((g) => {
    const rounds = g.split(": ")[1];

    const games = rounds.split(";");

    const gameColours = {
      red: [],
      green: [],
      blue: [],
    };
    games.map((game) => {
      game.split(",").map((e) => {
        const pair = e.trim().split(" ");
        gameColours[pair[1]].push(Number(pair[0]));
        return pair;
      });
    });

    const maxRed = Math.max(...gameColours.red);
    const maxGreen = Math.max(...gameColours.green);
    const maxBlue = Math.max(...gameColours.blue);
    const total = maxBlue * maxGreen * maxRed;

    sum += total;
  });

  return sum;
}

export function partOne(data) {
  let validGames: number[] = [];
  const pattern = /\d+/g;
  const formattedData = data.split("\n");

  formattedData.map((g) => {
    const gameNo = g.split("Game ")[1].split(":")[0];
    const rounds = g.split(": ")[1];

    const games = rounds.split(";");
    const matches = rounds.match(pattern);
    const highestNumberInAllGames = matches
      .map((e) => Number(e))
      .sort(compareNumbers)[matches.length - 1];

    if (highestNumberInAllGames <= 12) {
      validGames.push(gameNo);
    }

    if (highestNumberInAllGames === 13) {
      const row = games.find((g) => g.includes(13));
      const colour = row.split("13 ")[1].split(" ")[0];
      if (colour.includes("blue")) {
        validGames.push(gameNo);
      }
    }

    if (highestNumberInAllGames === 13) {
      const row = games.find((g) => g.includes(13));
      const colour = row.split("13 ")[1].split(" ")[0];
      if (colour.includes("green")) {
        validGames.push(gameNo);
      }
    }

    if (highestNumberInAllGames === 14) {
      const row = games.find((g) => g.includes(14));
      const colour = row.split("14 ")[1].split(" ")[0];
      if (colour.includes("blue")) {
        validGames.push(gameNo);
      }
    }
  });

  return validGames.reduce((acc, value) => acc + value);
}

function compareNumbers(a, b) {
  return a - b;
}
