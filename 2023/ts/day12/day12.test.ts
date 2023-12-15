import { expect, test } from "vitest";
import { partOne, countSprings, partTwo } from "./day12";
import { readInput } from "../utils";

const originalInput = `???.### 1,1,3
.??..??...?##. 1,1,3
?#?#?#?#?#?#?#? 1,3,1,6
????.#...#... 4,1,1
????.######..#####. 1,6,5
?###???????? 3,2,1`;

const myInput = readInput("ts/day12/input.txt");

test("Part One - Gear Ratios", () => {
  // expect(partOne(originalInput)).toBe(21);
  // expect(partOne(myInput)).toBe(23847);
});

test("Part Two - Gear Ratios", () => {
  // expect(partTwo(originalInput)).toBe(525152);
  // expect(partTwo(myInput)).toBe(23847);
});

test("countSprings()", () => {
  // expect(countSprings("???.### ", [1, 1, 3])).toBe(1);
  // expect(countSprings(".??..??...?##", [1, 1, 3])).toBe(4);
  expect(countSprings("?###????????", [3, 2, 1])).toBe(10);
});
