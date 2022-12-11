var fs = require("fs");

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  data = data.split("\n");

  console.log(partOne(data));
});

function partOne(data) {
  let counter = 0;
  data.forEach(element => {
    
  });
}

function partTwo(data) {
  
}
