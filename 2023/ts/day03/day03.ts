// 12 red, 13 green, 14 blue

export function partOne(data) {
  let sum: number = 0;
  const formattedData = data.split("\n");
  const validNumber = [];

  formattedData.forEach((row, rowIndex) => {
    // console.log("row: ", row.split(""));
    // row.split("").forEach((cell, cellIndex) => {
    //   if (cell === "*" || cell == "#" || cell == "+" || cell == "") {
    //     console.log("------ symbol", cell);
    //     const topRowIndex = rowIndex - 1;
    //     console.log("-top-left: ", formattedData[topRowIndex][cellIndex - 1]);
    //     console.log("-top-right: ", formattedData[topRowIndex][cellIndex + 1]);
    //     console.log("-top: ", formattedData[topRowIndex][cellIndex]);
    //     console.log("-bottom: ", formattedData[rowIndex + 1][cellIndex]);
    //     console.log(
    //       "-bottom-left: ",
    //       formattedData[rowIndex + 1][cellIndex - 1]
    //     );
    //     console.log(
    //       "-bottom-right: ",
    //       formattedData[rowIndex + 1][cellIndex + 1]
    //     );
    //     console.log("-right: ", formattedData[rowIndex][cellIndex + 1]);
    //     console.log("-left: ", formattedData[rowIndex][cellIndex - 1]);
    //   }
    // });

    var patternDigits = /\d+/g;
    var patternSymbols = /[^\w\d\.]+/g;
    let matchR;

    while ((matchR = patternDigits.exec(row)) !== null) {
      const match = matchR[0];

      const indexOfMatchInRow = matchR.index;
      // console.log(
      //   "---row: ",
      //   row,
      //   "--indexOfMatchInRow: ",
      //   match,
      //   indexOfMatchInRow,
      // );
      const rowBellow = formattedData[rowIndex + 1];
      const rowAbove = formattedData[rowIndex - 1];
      const rowCurrent = formattedData[rowIndex];

      // console.log("---indexOfMatchInRow: ", match.index);

      if (rowBellow) {
        const startIndexB =
          indexOfMatchInRow > 0 ? indexOfMatchInRow - 1 : indexOfMatchInRow;
        const endIndexB = match.length + 2 + startIndexB;
        const rowBellowSubString = rowBellow.substring(startIndexB, endIndexB);
        // console.log("-- row, ", row);
        // console.log("-- match: ", match, "--match index ", indexOfMatchInRow);
        // console.log(
        //   "-- rowBellow ",
        //   rowBellowSubString,
        //   "--rowStart:",
        //   startIndexB,
        //   "---endIndex: ",
        //   endIndexB
        // );
        // console.log("-- rowBellow, ", rowBellow);
        // console.log(">>>>>");

        if (rowBellowSubString.match(patternSymbols) != null) {
          validNumber.push(match);
          sum += Number(match);
        }
      }

      if (rowAbove) {
        const startIndexA =
          indexOfMatchInRow > 0 ? indexOfMatchInRow - 1 : indexOfMatchInRow;
        const rowAboveString = rowAbove.substring(
          startIndexA,
          match.length + 1 + startIndexA + 1
        );

        // console.log("-- row, ", startIndexA, match.length + 1 + startIndexA);
        // console.log("-- match: ", match, "--match index ", indexOfMatchInRow);
        // console.log(
        //   "-- rowAboveString ",
        //   rowAboveString
        //   // nextRowHasSymbols
        // );
        // console.log(">>>>>");
        if (rowAboveString.match(patternSymbols) != null) {
          validNumber.push(match);
          sum += Number(match);
        }
      }

      // current row has symbol neighbours?

      const leftNeighbour = rowCurrent[indexOfMatchInRow - 1];
      const rightNeighbour = rowCurrent[indexOfMatchInRow + match.length];

      const leftNeighbourHasSymbol = leftNeighbour
        ? leftNeighbour.match(patternSymbols) != null
        : false;

      const rightNeighbourHasSymbol = rightNeighbour
        ? rightNeighbour.match(patternSymbols) != null
        : false;

      // console.log("---current row", row);
      // console.log(
      //   "----match",
      //   match,
      //   "---indexOfMatchInRow",
      //   indexOfMatchInRow,
      //   "---leftN",
      //   leftNeighbour,
      //   " ---rightN",
      //   rightNeighbour
      // );

      if (leftNeighbourHasSymbol || rightNeighbourHasSymbol) {
        // console.log("--NOOOOOOOO");
        validNumber.push(match);
        sum += Number(match);
      }
    }
  });
  console.log("----validNumber: ", validNumber);

  return sum;
}

/**
 * x x x
 * x o x
 * x x x
 *
 * [x-1,y-1] [x-1,y] [x-1,y+1]
 * [x,y-1] [x,y] [x,y+1]
 * [x+1,y-1] [x+1,y] [x+1,y+1]
 */

export function partTwo(data) {
  let validGames: number[] = [];
  const pattern = /\d+/g;
  const formattedData = data.split("\n");

  return 0;
}
