// TODO: FINISH THIS - please look somewhere else
export function partOne(data: string) {
  let sum: number = 0;
  const lines = data.split("\n");

  lines.forEach((spring) => {
    const springValue = spring.split(" ")[0];
    const springNumbers = spring
      .split(" ")[1]
      .split(",")
      .map((e) => Number(e));
    // console.log("--spring", springValue, springNumbers);
    sum += countSprings(springValue, springNumbers);
  });

  return sum;
}

export function partTwo(data: string) {
  let sum: number = 0;
  const lines = data.split("\n");

  lines.forEach((spring) => {
    const springValue = spring.split(" ")[0];
    const springNumbers = spring
      .split(" ")[1]
      .split(",")
      .map((e) => Number(e));

    let newSpringValue = "";
    let newSpringNumber: number[] = [];

    let i = 1;
    while (i < 6) {
      newSpringValue = springValue + "?" + newSpringValue;
      newSpringNumber.push(springNumbers);
      i++;
    }

    // console.log(
    //   "--spring",
    //   newSpringValue.substring(0, newSpringValue.length - 1),
    //   newSpringNumber.flat()
    // );

    sum += countSprings(
      newSpringValue.substring(0, newSpringValue.length - 1),
      newSpringNumber.flat()
    );
  });

  return sum;
}

export function countSprings(spring: string, group: number[]): number {
  // console.log(group, spring);

  if (spring.length === 0) {
    if (group.length === 0) {
      return 1;
    }
    return 0;
  }

  if (group.length === 0) {
    if (spring.includes("#")) {
      return 0;
    }
    return 1;
  }

  let sum = 0;

  if (spring[0] === "." || spring[0] === "?") {
    sum += countSprings(spring.substring(1), group);
    // console.log("---start", spring, group, sum);
  }

  if (spring[0] === "#" || spring[0] === "?") {
    if (
      group[0] <= spring.length &&
      !spring.substring(0, group[0]).includes(".") &&
      (group[0] === spring.length || spring[group[0]]) != "#"
    ) {
      // console.log("-------", spring, group[0], "---", group, "sum: ", sum);

      if (group[0] === spring.length) {
        sum += countSprings("", group.slice(1));
        // console.log("---if", spring, group, sum);
      } else {
        sum += countSprings(spring.substring(group[0] + 1), group.slice(1));
        // console.log("sum: ", sum);
        // console.log("---else", spring, group, sum);
      }
    }
  }

  // console.log("=============");

  return sum;
}
