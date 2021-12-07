const assert = require("assert");
const encoding = require("./day09");

const input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

describe("Part I", () => {
  it("What is the first number that does not have this property? => 127", () => {
    assert.equal(encoding.invalidNumber(input), 127);
  });
  it("What is the encryption weakness in your XMAS-encrypted list of numbers? => 62", () => {
    assert.equal(encoding.weakness(input), 62);
  });
});
