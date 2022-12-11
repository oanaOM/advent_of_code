const day = require("./day19")

  let smallInput = `--- scanner 0 ---
  0,2
  4,1
  3,3
  
  --- scanner 1 ---
  -1,-1
  -5,0
  -2,1`;

describe("day19: Beacon Scanner", ()=>{ 
    it("Part a", ()=>{
        expect(day.partOne(smallInput)).toBe(79)
    })
})