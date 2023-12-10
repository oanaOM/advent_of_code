import { expect, test } from "vitest";
import { partOne, partTwo, handStrength } from "./day07";

const originalInput = ``;

const myInput = ``;

// test("Part One - Gear Ratios", () => {
//   expect(partOne(originalInput)).toBe(13);
//   // expect(partOne(myInput)).toBe(23847);
// });
test("handStrength", () => {
  expect(handStrength("32T3K")).toBe(1);
  // expect(handStrength("AAAAA")).toBe(7);
  // expect(handStrength("AA8AA")).toBe(6);
  // expect(handStrength("23332")).toBe(5);
  // expect(handStrength("TTT98")).toBe(4);
  // expect(handStrength("23432")).toBe(3);
  // expect(handStrength("A23A4")).toBe(2);
  // expect(handStrength("23456")).toBe(1);
  // expect(partTwo(myInput)).toBe(8570000);
});
