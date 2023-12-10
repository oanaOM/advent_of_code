const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export function partOne(data) {
  const arrayOfNumbers: string[] = [];
  let sum = 0;

  data.split("\n").map((w) => {
    let n: string = "";
    for (const e of w) {
      if (numbers.includes(parseInt(e))) {
        n += e;
      }
    }
    if (n.length == 2) {
      arrayOfNumbers.push(n);
    } else {
      arrayOfNumbers.push(n[0] + n[n.length - 1]);
    }
  });

  // console.log("-arrayOfNumbers: ", arrayOfNumbers);

  arrayOfNumbers.map((e) => (sum += parseInt(e)));

  return sum;
}

export function findNumberWords(input) {
  // Define a mapping of number words to their corresponding digits
  const numberWordMap = {
    threeight: 38,
    fiveight: 58,
    eighthree: 83,
    sevenine: 79,
    eightwo: 82,
    twone: 21,
    oneight: 18,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    // Add more number words as needed
  };

  // Create a regex pattern that matches any of the number words
  const pattern = new RegExp(
    "(" + Object.keys(numberWordMap).join("|") + ")",
    "gi"
  );

  // Use the regex pattern to find matches in the input string
  const matches = input.match(pattern);

  if (matches != null) {
    matches.map((word) => {
      input = input.replace(word, String(numberWordMap[word]));
      return input;
    });
  }

  return input;
}

export function partTwo(data) {
  const newInput: string[] = [];
  let input = data.split("\n");

  input.map((w) => {
    newInput.push(findNumberWords(w));
  });

  const formattedNewInput = newInput.reduce(
    (acc, currentValue) => acc + "\n" + currentValue
  );

  return partOne(formattedNewInput);
}
