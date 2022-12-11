const { partOne, partTwo } = require("./day04")

describe("day04: ", () => {

    const data = `2-4,6-8
    2-3,4-5
    5-7,7-9
    2-8,3-7
    6-6,4-6
    2-6,4-8`

    it("Part one: Camp Cleanup", () => {
        expect(partOne(data)).toBe(2)
    })

    it("Part two: Camp Cleanup", () => {
        expect(partTwo(data)).toBe(4)
    })
})