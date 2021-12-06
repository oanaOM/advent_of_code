var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  data = data.split("\n").map((line) => [...line]);

  console.log(partOne(data));
});

function partOne(data) {
  let gama = "";
  let epsion = "";

  for (let i = 0; i < data[i].length; i++) {
    let bits = data.map((nr) => nr[i]);
    let ones = bits.filter((bit) => bit === "1");

    console.log(ones.length)

    if (ones.length > bits.length / 2) {
      gama += "1";
      epsion += "0";
    } else {
      gama += "0";
      epsion += "1";
    }
  }

  return(parseInt(gama, 2) * parseInt(epsion, 2));
}

function partTwo(data) {
  let oxygen = [...data];

  for (let i = 0; i < oxygen[0].length; i++) {
    let bits = oxygen.map((nr) => nr[i]);
    let ones = bits.filter((bit) => bit === "1");

    if (ones.length >= bits.length / 2) {
      oxygen = oxygen.filter((nr) => nr[i] === "1");
    } else {
      oxygen = oxygen.filter((nr) => nr[i] === "0");
    }

    if (oxygen.length <= 1) break;
  }

  let co2 = [...data];

  for (let i = 0; i < co2[0].length; i++) {
    let bits = co2.map((nr) => nr[i]);
    let ones = bits.filter((bit) => bit === "1");

    if (ones.length >= bits.length / 2) {
      co2 = co2.filter((nr) => nr[i] === "0");
    } else {
      co2 = co2.filter((nr) => nr[i] === "1");
    }
    if (co2.length <= 1) break;
  }

  return parseInt(oxygen[0].join(""), 2) * parseInt(co2[0].join(""), 2);
}
