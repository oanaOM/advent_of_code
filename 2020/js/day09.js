const preambleLength = 5;

function partOne(input) {
    const data = input.split("\n").map((value) => parseInt(value));

    for (let i = 0; i < data.length; i++) {
         let currentArrayRange = data.slice(i, preambleLength + 1 + i);
        const workingSet = new Set(data.slice(i, preambleLength + i));
        
        const sum = currentArrayRange.pop();
        
        for (let j = 0; j < workingSet.size; j++) {
          const sumRemainder = sum - currentArrayRange[j];

          if (workingSet.has(sumRemainder)) {
            break;
          }

          if (j === currentArrayRange.length - 1) {
            return sum;
          }
        }
    }
}

function partTwo(input) {
    const invalidNumber = partOne(input);

    const data = input.split("\n").map((value) => parseInt(value));

    const maxRange = data.slice(0, data.indexOf(invalidNumber) + 1);

    let sum = 0;
    let range = [];

    for (let i = 0; i < maxRange.length; i++) {
        const start = maxRange[i];
        sum += start;
        range.push(start);

        for (let j = i+1; j < maxRange.length; j++) {
            const next = maxRange[j];

            sum += next;
            range.push(next);

            if (sum>invalidNumber) { 
                sum = 0;
                range = [];

                break;
            }

            if (sum === invalidNumber) { 
                const sorted = range.sort((a, b) => a - b);
                return parseInt(sorted[0]) + parseInt(sorted.slice(-1))
            }

      }
    }
}

module.exports = {
    invalidNumber: partOne,
    weakness: partTwo
};
