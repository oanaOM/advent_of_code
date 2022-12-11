const day = require("./day21")

describe("day21: Dirac dice", ()=>{ 
    let test_game = `Player 1 starting position: 4
    Player 2 starting position: 8`
    it("Part A", ()=>{
        expect(day.partOne(test_game)).toBe(739785)
    })
    it.only("Part B", ()=>{
        expect(day.partTwo(test_game)).toBe(444356092776315)
    })
})