var fs = require("fs");
const { type } = require("os");

// fs.readFile("./input.txt", "utf8", (err, data) => {
//   if (err) console.error(err);

//   console.log("example input", partOne(data));
// });

function explode(pair){
  let exploded = true
  while(exploded){
    exploded = false;
    let lefts = 0
    for(let i=0;i<pair.length;i++){
      let char = pair.at(i)

      if(char === '['){
        lefts++;
      }else if(char===']'){
        lefts--;
      }else{
        continue
      }
      if(lefts > 4){
        let right = pair.indexOf(']', i)
        console.log
        let explodingPair = pair.slice(i, right+1)

        console.log("explodingPair: ",explodingPair)

        pair = pair.slice(0,i) + pair.slice(i + pair.length)
        console.log("i: ", i)
        console.log("pair: ", pair)

        let [leftExploded, rightExploded] = explodingPair.slice()
      }

    }
  }

  return ""
}

function partOne(data) {

  // addition [1,2] + [[3,4],5] becomes [[1,2],[[3,4],5]]
  // how to reduce?:
  // - check if any pair is nested inside four pairs ->  leftmost pair explodes
  // - check if regular num > 10, letfmost regular number splits
  // how to explode?
  // pair = [left value + left 1st reg. num, right value + right 1st.reg. num.]
  // how to split?
  
  data = data.split("\n")

  return ""

}

function partTwo(){
  return "do it!"
}

module.exports = {
  explode,
  partOne,
  partTwo
}