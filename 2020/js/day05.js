/**
 * Learned about MSB and LSB
 * Bitwise operations: <<
 */

var seatsIDs = [];

function partOne(input) {
  const data = input.split("\n");

  data.forEach((entry) => {
    let row = 0;
    let col = 0;
    for (let i = 6; i >= 0; i--) {
      if (entry[6 - i] == "B") {
        row += 1 << i;
      }
    }

    for (let i = 2; i >= 0; i--) {
      if (entry[9 - i] == "R") {
        col += 1 << i;
      }
    }
    seatsIDs.push(row * 8 + col);
  });
  return seatsIDs.sort((a, b) => a - b).pop();
}

function partTwo() {
  let mySeatID = 0;
  for (let i = 0; i < seatsIDs.length; i++) {
    const currentSeat = seatsIDs[i];

    if (seatsIDs[i + 1] == currentSeat + 2) {
      mySeatID = currentSeat + 1;
    }
  }

  return mySeatID;
}

module.exports = {
  seatID: partOne,
  mySeatID: partTwo,
};
