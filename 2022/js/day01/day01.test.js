const { partOne, partTwo } = require("./day01")

describe("day01: ", () => {

    const data = `1000
    2000
    3000
    
    4000
    
    5000
    6000
    
    7000
    8000
    9000
    
    10000`

    it("Part one: Calorie Counting", () => {
        expect(partOne(data)).toBe(24000)
    })

    it("Part two: Calorie Counting", () => {
        expect(partTwo(data)).toBe(45000)
    })
})