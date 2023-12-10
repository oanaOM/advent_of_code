export function partOne(data) {
  let sum: number = 0;
  let instructions = data.split("\n\n")[0].split("");
  const originalInstruction = instructions.slice();
  const nodes = data.split("\n\n")[1];

  const mapTree = buildNodeTree(nodes);
  let steps = 0;
  let start = Object.keys(mapTree)[0];

  // console.log(mapTree);
  let i = 0;
  while (i < instructions.length) {
    if (start === "ZZZ") {
      break;
    }
    const indexIns = instructions[i] === "R" ? 1 : 0;

    const nextNode = mapTree[start][indexIns];

    start = nextNode;

    // console.log(
    //   "start",
    //   start,
    //   "instructions[steps]",
    //   steps,
    //   instructions[i],
    //   nextNode
    // );
    // instructions.push(instructions[steps]);
    steps++;
    i++;
    if (i === 3) {
      i = 0;
    }
    // if (steps === 53847) {
    //   break;
    // }
    // console.log(steps);
  }

  return steps;
}

export function buildNodeTree(nodes: string) {
  let nodeObj = {};
  nodes.split("\n").forEach((node, i) => {
    const element = node.split(" = ")[0];
    const [left, right] = node.split(" = ")[1].split(", ");
    nodeObj[element] = [left.replace("(", ""), right.replace(")", "")];
  });

  return nodeObj;
}
