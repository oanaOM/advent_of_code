import { expect, test } from "vitest";
import { partOne, partTwo } from "./day10";
import { readInput } from "../utils";

const originalInput = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`;

const myInput = readInput("ts/day10/input.txt");

test("Part One - Pipe Maze", () => {
  expect(partOne(originalInput)).toBe(8);
  expect(partOne(myInput)).toBe(6951);
});
// test("Part Two - Pipe Maze", () => {
//   expect(partTwo(originalInput)).toBe(8);
//   // expect(partTwo(myInput)).toBe(6951);
// });
