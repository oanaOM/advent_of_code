import { expect, test } from "vitest";
import { findWinsPerRace, partOne, partTwo } from "./day06";

const originalInput = `Time:      7  15   30
Distance:  9  40  200`;

const myInput = `Time:        53     71     78     80
Distance:   275   1181   1215   1524
`;

// test("Part One - Wait For It", () => {
//   expect(partOne(originalInput)).toBe(288);
//   expect(partOne(myInput)).toBe(449820);
// });
test("Part Two - Wait For It", () => {
  expect(partTwo(originalInput)).toBe(71503);
  expect(partTwo(myInput)).toBe(42250895);
});
// test("findWinsPerRace()", () => {
//   expect(findWinsPerRace(7, 9)).toBe(4);
//   expect(findWinsPerRace(15, 40)).toBe(8);
//   expect(findWinsPerRace(30, 200)).toBe(9);
//   expect(findWinsPerRace(53717880, 275118112151524)).toBe(42250895);
// });
