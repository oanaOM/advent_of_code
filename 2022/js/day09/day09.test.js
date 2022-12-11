const { partOne } = require("./day09")

describe("day09: ", () => {

    const input = `R 4
    U 4
    L 3
    D 1
    R 4
    D 1
    L 5
    R 2`

    it("Part one: Rope Bridge", () => {
        expect(partOne(input, 2)).toBe(13)
    })
})