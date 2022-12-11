const { partOne, partTwo } = require("./day02")

describe("day02: ", () => {
    const data = `A Y
B X
C Z`

    it("Part one: Rock Paper Scissors", () => {
        expect(partOne(data)).toBe(15)
    })

    it("Part two: Rock Paper Scissors", () => {
        expect(partTwo(data)).toBe(12)
    })
})