import { expect, test } from "vitest";
import { buildNodeTree, partOne, partTwo } from "./day08";
import { readInput } from "../utils";

const originalInput = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

const anotherInput = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

const anotherAnotherInput = `LRLRLLRLRLRR

GXT = (MQM, CHN)
MBK = (RCK, RCK)
HBS = (QHS, RXC)
SXK = (FDB, FKP)
NJB = (BSB, KJM)
SPD = (FNL, RSH)
VDP = (NFH, ZZZ)
MQM = (LSV, BTS)
QDT = (HXV, PDX)
MDH = (XDK, DKN)
AAA = (FKL, CFC)
BTS = (VDP, LMM)`;

const myInput = readInput("ts/day10/input.txt");

test.only("Part One - Haunted Wasteland", () => {
  // expect(partOne(originalInput)).toBe(2);
  // expect(partOne(anotherInput)).toBe(6);
  // expect(partOne(anotherAnotherInput)).toBe(4);
  expect(partOne(myInput)).toBe(23847);
});
// test("Part Two - Cube Conundrum", (): > {
//   expect(partTwo(originalInput)).toBe(30);
//   expect(partTwo(myInput)).toBe(8570000);
// });

// test("buildNodeTree()", () => {
//   expect(buildNodeTree(originalInput.split("\n\n")[1])).toStrictEqual({
//     AAA: ["BBB", "CCC"],
//     BBB: ["DDD", "EEE"],
//     CCC: ["ZZZ", "GGG"],
//     DDD: ["DDD", "DDD"],
//     EEE: ["EEE", "EEE"],
//     GGG: ["GGG", "GGG"],
//     ZZZ: ["ZZZ", "ZZZ"],
//   });
// });
