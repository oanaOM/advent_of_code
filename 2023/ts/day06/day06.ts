export function partOne(data) {
  const score = data.split("\n");
  const times = score[0].split("Time: ")[1].match(/\d+/g);
  const distances = score[1].split("Distance: ")[1].match(/\d+/g);

  const wins: number[] = [];

  times.forEach((time, i) => {
    console.log(findWinsPerRace(time, distances[i]));
    wins.push(findWinsPerRace(time, distances[i]));
  });

  return wins.reduce((acc, v) => acc * v);
}

export function findWinsPerRace(totalTime: number, distance: number) {
  let counter = 0;
  for (let i = 1; i < totalTime; i++) {
    const distancePerWay = (totalTime - i) * i;
    if (distancePerWay > distance) {
      counter += 1;
    }
  }

  return counter;
}

export function partTwo(data) {
  const score = data.split("\n");
  const time = score[0]
    .split("Time: ")[1]
    .match(/\d+/g)
    .reduce((acc, val) => acc + val);
  const distance = score[1]
    .split("Distance: ")[1]
    .match(/\d+/g)
    .reduce((acc, val) => acc + val);

  return findWinsPerRace(time, distance);
}
