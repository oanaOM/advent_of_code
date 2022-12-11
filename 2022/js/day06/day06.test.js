const { partOne } = require("./day06")

describe("day06: ", () => {

    const data = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`
    const data_2 = `bvwbjplbgvbhsrlpgdmjqwftvncz`
    const data_3 = `nppdvjthqldpwncqszvftbrmjlhg`
    const data_4 = `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`
    const data_5 = `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`

    it("Part one: Tuning Trouble", () => {
        expect(partOne(data, 4)).toBe(7)
        expect(partOne(data_2, 4)).toBe(5)
        expect(partOne(data_3, 4)).toBe(6)
        expect(partOne(data_4, 4)).toBe(10)
        expect(partOne(data_5, 4)).toBe(11)
    })

    it("Part two: Tuning Trouble", () => {
        expect(partOne(data, 14)).toBe(19)
        expect(partOne(data_2, 14)).toBe(23)
        expect(partOne(data_3, 14)).toBe(23)
        expect(partOne(data_4, 14)).toBe(29)
        expect(partOne(data_5, 14)).toBe(26)
    })
})