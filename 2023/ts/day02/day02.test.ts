import { expect, test } from "vitest";
import { partOne, partTwo } from "./day02";

const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const anotherInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
Game 6: 13 green, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

test("Part One - Cube Conundrum", () => {
  expect(partOne(input)).toBe(8);
  expect(partOne(anotherInput)).toBe(14);
  // expect(partOne(myInput)).toBe(2810);
});
test("Part Two - Cube Conundrum", () => {
  expect(partTwo(input)).toBe(2286);
  // expect(partTwo(myInput)).toBe(69110);
});
