/**
 * What did I learned?
 * - how to use set. very good if you need to store unique values
 * - use .map() to return an object
 */

function formatData(data) {
  return data.split("\n").map((value) => {
    let instruction = new Object();
    instruction.action = value.split(" ")[0];
    instruction.value = parseInt(value.split(" ")[1].replace("+", ""));

    return instruction;
  });
}

function partOne(input) {
  const data = formatData(input);

  let pointer = 0;
  let accumulator = 0;
  // we need to check which action has already be done
  // A value in the Set may only occur once; Very important
  let cycle = new Set();

  let isFinished = false;

  while (true) {
    // we need to stop when reached at the end of the line
    if (pointer === data.length) {
      isFinished = true;
      break;
    }

    const { action, value } = data[pointer];

    if (cycle.has(pointer)) {
      break;
    }

    cycle.add(pointer);

    switch (action) {
      case "nop":
        pointer++;
        break;
      case "acc":
        accumulator += value;
        pointer++;
        break;
      case "jmp":
        pointer += value;
        break;
      default:
        throw new Error("not implemented");
        break;
    }
  }

  return {
    acc: accumulator,
    status: isFinished,
  };
}

function partTwo(input) {
  let result = 0;
  const data = formatData(input);

  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    if (element.action === "nop" || element.action === "jmp") {
      const copy = JSON.parse(JSON.stringify(data));

      copy[i].action = element.action === "nop" ? "jmp" : "nop";

      const updatedSource = copy
        .map((el) => `${el.action} ${el.value}`)
        .join("\n");

      const changedInput = partOne(updatedSource);
      if (changedInput.status) {
        result = changedInput.acc;
      }
    }
  }

  return result;
}

module.exports = {
  halting: partOne,
  terminate: partTwo,
};
