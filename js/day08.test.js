const assert = require("assert");
const handheld = require("./day08");

const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

describe("Part I", () => {
  it("what value is in the accumulator? => 5", () => {
    assert.equal(handheld.halting(input).acc, 5);
  });
    it("What is the value of the accumulator after the program terminates? => 8", () => {
      assert.equal(handheld.terminate(input), 8);
    });

});
