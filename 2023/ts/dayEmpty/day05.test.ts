import { expect, test } from "vitest";
import { partOne, partTwo } from "./day05";
import { readInput } from "../utils";

const originalInput = ``;

const myInput = readInput("ts/day09/input.txt");

test("Part One - Gear Ratios", () => {
  expect(partOne(originalInput)).toBe(13);
  expect(partOne(myInput)).toBe(23847);
});
test("Part Two - Cube Conundrum", () => {
  expect(partTwo(originalInput)).toBe(30);
  expect(partTwo(myInput)).toBe(8570000);
});
