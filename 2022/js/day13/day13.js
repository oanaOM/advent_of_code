var fs = require("fs");

// fs.readFile("./input.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log("Part 1: ", partOne(data))
//   console.log("Part 2: ", partTwo(data))
// });

// a is the lowest elevation
// b is the next-lowest
// ...
// z lowest elevation

// S current position --> a elevation
// E locations with good signal --> z elevation

const partOne = (data) => {
  const input = data.split("\n\n");

  let samePairs = [];
  let inputArr = input.map((line) => line.split("\n")).flatMap((c) => c);
  
  input.forEach(line => {
    let left = line.split("\n")[0].replace(/\[/g, "").replace(/\]/g, "").replace(/,/g, "");
    let right = line.split("\n")[1].replace(/\[/g, "").replace(/\]/g, "").replace(/,/g, "");
    const maxLength = Math.max(left.length, right.length)
    console.log(line, " || ", left.length, right.length)
    
    // if left is empty, input are in the right order
    if (left.length == 0) {
      // pairs are in the right order
      
    }

    if (left.length > right.length) {
      return 
    }

    // for (let i = 0; i < maxLength; i++) {
    //   if (left[i] <= right[i]) {
    //     // samePairs.push(inputArr.indexOf(line.split("\n")[0]));    
    //     // samePairs.push(inputArr.indexOf(line.split("\n")[1]));  
        
    //     console.log()
    //   }
    // }
  })
  
  console.log("samePairs", samePairs)

  return 0;
}

const partTwo = (data) => {

}

module.exports = { partOne }