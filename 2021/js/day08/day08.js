var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  console.log(partOne(data));
  console.log(partTwo(data));
});

function partOne(data) {
  let outputValues = data
    .split("\n")
    .map((line) => line.split(" | ")[1])
    .map((l) => l.split("\n"));
  let seventSegmentValues = [2, 4, 3, 7];
  let instances = [];

  outputValues.forEach((outputLine) => {
    outputLine.map((output) => {
      output
        .trim()
        .split(" ")
        .forEach((digits) => {
          if (seventSegmentValues.includes(digits.length)) {
            let outputMap = {};

            outputMap[digits] = digits.length;
            instances.push(outputMap);
          }
        });
    });
  });
  return instances.length;
}

function partTwo(data) {
  let outputValues = data.split("\n").map((line) => line.split(" ").map((pattern) => [...pattern].sort()));
let sum = []
  outputValues.forEach((row) => {
    let patterns = row.slice(0, 10);
    let output = row.slice(11).map(pattern => pattern.join(""));


    // console.log("p1: ", patterns)
    // console.log(output)

    let digits = [];

    
    digits[1] = patterns.find((pattern) => pattern.length === 2);
    digits[4] = patterns.find((pattern) => pattern.length === 4);
    digits[7] = patterns.find((pattern) => pattern.length === 3);
    digits[8] = patterns.find((pattern) => pattern.length === 7);
    // unique digits with same length
    digits[6] = patterns.find((pattern) => pattern.length === 6 && digits[1].some((d) => !pattern.includes(d)));
    digits[0] = patterns.find(pattern => pattern.length === 6 && pattern !== digits[6] && digits[4].some(d => !pattern.includes(d)));
   
    digits[9] = patterns.find((pattern)=>pattern.length === 6 && pattern!=digits[0] && pattern!=digits[6])  
   
    digits[3] = patterns.find((pattern) => pattern.length === 5 && digits[1].every((d) => pattern.includes(d)));
    digits[5] = patterns.find((pattern) => pattern.length === 5 && pattern.every((d) => digits[6].includes(d)));
    digits[2] = patterns.find((pattern) => pattern.length === 5 && pattern!=digits[3] && pattern!=digits[5]);
   
    digits = digits.map(d=>d.join(""))

     sum.push(output.map(pattern=>digits.indexOf(pattern)).join(""))

  });

  return sum.map(Number).reduce((p,c)=>p+c, 0);
}
