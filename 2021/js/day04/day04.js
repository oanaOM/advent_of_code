var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(partOne(data));
  console.log(partTwo(data));
});

function partOne(data) {
  data = data.split("\n\n");

  let randomNumbers = data.shift().split(",").map(Number);
  let boards = data.map((board) =>
    board.split("\n").map((row) => row.trim().split(/\s+/).map(Number))
  );

  for (let drawnNumber of randomNumbers) {
    boards.forEach((board) =>
      board.forEach((row) =>
        row.forEach((_, i) => {
          if (row[i] === drawnNumber) row[i] = "x";
        })
      )
    );

    for (let board of boards) {
      if (
        board.some((row) => row.every((cell) => cell === "x")) ||
        board[0].some((_, i) => board.every((row) => row[i] === "x"))
      ) {
        const flatBoard = board.reduce((acc, curr) => acc.concat(curr), []);

        let sum = flatBoard.filter((e) => e != "x").reduce((s, n) => s + n, 0);
        return sum * drawnNumber;
      }
    }
  }
}

function partTwo(data) {
  data = data.split("\n\n");

  let randomNumbers = data.shift().split(",").map(Number);
  let boards = data.map((board) =>
    board.split("\n").map((row) => row.trim().split(/\s+/).map(Number))
  );

  for (let drawnNumber of randomNumbers) {
    boards.forEach((board) =>
      board.forEach((row) =>
        row.forEach((_, i) => {
          if (row[i] === drawnNumber) row[i] = "x";
        })
      )
    );

    for (let board of boards) {
      if (
        board.some((row) => row.every((cell) => cell === "x")) ||
        board[0].some((_, i) => board.every((row) => row[i] === "x"))
      ) {
        if (boards.length === 1) {
          const flatBoards = boards[0].reduce(
            (acc, curr) => acc.concat(curr),
            []
          );
          let sum = flatBoards
            .filter((e) => e != "x")
            .reduce((s, n) => s + n, 0);
          return sum * drawnNumber;
        }

        boards = boards.filter((t) => t !== board);
      }
    }
  }
}


function test(data){
  data = data.split("\n\n");
  let boards = data.map((board) =>
    board.split("\n").map((row) => row.trim().split(/\s+/).map(Number))
  );
  console.log(boards)
}