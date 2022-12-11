import express from "express"
const app = express()
const port = 3000

import partOne from "./day19/day19.js"

let smallInput = `--- scanner 0 ---
  0,2
  4,1
  3,3
  
  --- scanner 1 ---
  -1,-1
  -5,0
  -2,1`;

app.listen(port, ()=> {
    console.assert(partOne(smallInput)==52)
    console.log(`Dolphin app listening on port ${port}!`)
})