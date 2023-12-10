const { partOne } = require("./day12")

describe("day12: ", () => {

const input = `Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi`;

    it("Part one: Hill Climbing Algorithm", () => {
      expect(partOne(input)).toBe(31);
    });

    // it("Part two: Rope Bridge", () => {
    //     expect(partOne(data, 14)).toBe(19)
    // })
})