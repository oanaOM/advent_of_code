const { partOne } = require("./day13")

describe("day13: ", () => {

const input = `[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`;

    it("Part one: Hill Climbing Algorithm", () => {
      expect(partOne(input)).toBe(13);
    });

    // it("Part two: Rope Bridge", () => {
    //     expect(partOne(data, 14)).toBe(19)
    // })
})