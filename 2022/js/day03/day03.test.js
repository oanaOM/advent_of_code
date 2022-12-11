const { partOne } = require("./day03")

describe("day03: ", () => {

    const data = `vJrwpWtwJgWrhcsFMMfFFhFp
    jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
    PmmdzqPrVvPwwTWBwg
    wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
    ttgJtRGJQctTZtZT
    CrZsJsPPZsGzwwsLwLmpwMDw`

    it("Part one: Rucksack Reorganization", () => {
        expect(partOne(data)).toBe(157)
    })

})