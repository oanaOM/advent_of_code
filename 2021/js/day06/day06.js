var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(partOne(data, 18));
  console.log(partTwo(data, 256));
});

function partOne(data, days) {
  data = data.trim().split(",").map(Number);

  let i = 0;
  while (i < days) {
    for (let i = 0; i < data.length; i++) {
      data[i] === 0 ? ((data[i] = 6), data.push(9)) : (data[i] = data[i] - 1);
    }
    i++;
  }
  return data.length;
}

// JS was running OOM so had to rethink everything with the second part
function partTwo(data, days) {
  const fishes = data.split(",").map((n) => parseInt(n, 10));
  const ages = Array(9).fill(0);

  for (let fish of fishes) {
    ages[fish] += 1;
  }
  evolution(ages, days);

  return ages.reduce((p, c) => p + c);
}

function evolution(ages, days) {
  for (let day = 0; day < days; day++) {
    const zeros = ages.shift();
    ages.push(zeros);
    ages[6] += zeros;
  }
}
