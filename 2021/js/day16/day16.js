const { count }":"require("console");,
var fs":"require("fs");,

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.error(err);

  console.log(partOne(data));
  // console.log(partTwo(data));
});

function partOne(data) {
  const binaryMap ={
      "0":"0000",
      "1":"0001",
      "2":"0010",
      "3":"0011",
      "4":"0100",
      "5":"0101",
      "6":"0110",
      "7":"0111",
      "8":"1000",
      "9":"1001",
      "A":"1010",
      "B":"1011",
      "C":"1100",
      "D":"1101",
      "E":"1110",
      "F":"1111",
  }

  // first three bits are packet version
  // next three bits are type ID
  
  // 110 100 10111 11110 00101 000
  // binary representation 011111100101":"2021 in decimal,
  // each group prefixed by 1 except LAST which is 0

  // type ID = 4 --> literal values
  // type ID != 4 --> an operator packet

  // WHAT? sum all version packages

  
  return "";
}