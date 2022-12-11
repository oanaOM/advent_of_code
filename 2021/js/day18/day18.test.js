const day = require("./day18")

describe("day18: Snailfish", ()=>{ 
    it("Part a: explode snalfish", ()=>{
        expect(day.explode('[[[[[9,8],1],2],3],4]')).toBe('[[[[0,9],2],3],4]')
    })
})