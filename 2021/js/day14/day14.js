const { count } = require("console");
var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  console.log(partOne(data));
  // console.log(partTwo(data));
});

function partOne(data) {
  data = data.trim().split("\n\n");

  let polymer = data[0];
  const maxSteps = 40;
  const rules = data[1].split("\n").reduce((acc, line) => {
    acc[line.split(" -> ")[0]] = line.split(" -> ")[1];
    return acc;
  }, {});

  for (let step = 1; step <= maxSteps; step++) {
    let nextPolymer = "";

    for (let i = 0; i < polymer.length - 1; i++) {
      let a = polymer[i];
      let b = polymer[i + 1];
      nextPolymer += a;
      nextPolymer += rules[a + b];
    }
    nextPolymer += polymer[polymer.length - 1];
    polymer = nextPolymer;
  }
  let countElements = Object.values([...polymer]).reduce((acc, element) => {
    acc[element] = acc[element] | 0;
    acc[element] += 1;
    return acc;
  }, {});

  return (
    Math.max(...Object.values(countElements)) -
    Math.min(...Object.values(countElements))
  );
}

function partTwo(data) {
  data = data.trim().split("\n\n");

  let polymer = data[0];
  const maxSteps = 40;
  const rules = data[1].split("\n").reduce((acc, line) => {
    acc[line.split(" -> ")[0]] = line.split(" -> ")[1];
    return acc;
  }, {});

  let countPairs = {};
  for (let i = 0; i < polymer.length - 1; i++) {
    let key = polymer[i] + polymer[i + 1];
    countPairs[key] = countPairs[key] || 0;
    countPairs[key] += 1;
  }

  // console.log(countPairs);

  for (let step = 1; step <= maxSteps; step++) {
    let nextCountPairs = {};
    for (let [pair, count] of Object.entries(countPairs)) {
      let elementToAdd = rules[pair];
      // insert the new element after the first element of the pair
      let keyOne = pair[0] + elementToAdd;
      nextCountPairs[keyOne] = nextCountPairs[keyOne] || 0;
      nextCountPairs[keyOne] += count;
      // insert the new element before the second element of the pair
      let keyTwo = elementToAdd + pair[1];
      nextCountPairs[keyTwo] = nextCountPairs[keyTwo] || 0;
      nextCountPairs[keyTwo] += count;
    }
    countPairs = nextCountPairs;
  }
  // console.log(">>>", countPairs);

  let countElements = Object.entries(countPairs).reduce(
    (acc, [pair, count]) => {
      acc[pair[0]] = acc[pair[0]] || 0;
      // console.log(pair[0]);
      acc[pair[0]] += count;
      return acc;
    },
    { [polymer[polymer.length - 1]]: 1}
  );
  // console.log(">>", countElements)
  return (
    Math.max(...Object.values(countElements)) -
    Math.min(...Object.values(countElements))
  );
  // return 0;
}
