export function sum(
  data: string,
  extrapolatedValue: (i: string, d: string) => number,
  direction: string
) {
  const history = data.split("\n");

  let results: number[] = [];

  history.forEach((h) => {
    results.push(extrapolatedValue(h, direction));
  });

  const sum = results.reduce((acc, val) => (acc += val));

  return Number(sum);
}

export function extrapolatedValue(input: string, direction: string) {
  let history = input.split(" ")?.map((e) => Number(e)) || ([] as number[]);

  let isZeros = true;

  let historyMap = [history];
  let start = history.slice();
  while (isZeros) {
    let nextSeq: number[] = [];

    for (let i = start?.length - 1; i >= 0; i--) {
      let difference = Number(start[i]) - Number(start[i - 1]);
      if (i - 1 != -1) {
        nextSeq.push(difference);
      }
    }

    start = nextSeq.reverse();
    historyMap.push(start);

    if (nextSeq.reduce((acc, value) => acc + value) === 0) {
      break;
    }
  }

  // this array contains the last value of each array in the history map
  let lastValuesArray: number[] = [];
  if (direction === "end") {
    lastValuesArray = historyMap.map((h) => h.pop());
  } else if (direction === "start") {
    lastValuesArray = historyMap.map((h) => h.shift());
  }

  let sum = 0;
  let resultSm = lastValuesArray.reverse().map((value) => {
    if (direction === "end") {
      sum += value;
    } else if (direction === "start") {
      sum = value - sum;
    }
    return sum;
  });

  return resultSm[resultSm.length - 1];
}
