import { expect, test } from "vitest";
import { partOne, partTwo, getNumberOfValidMatches } from "./day04";
import { readInput } from "../utils";

const originalInput = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

const myInput = readInput("ts/day04/input.txt");

test("Part One - Gear Ratios", () => {
  expect(partOne(originalInput)).toBe(13);
  expect(partOne(myInput)).toBe(23847);
});
test("Part Two - Cube Conundrum", () => {
  expect(partTwo(originalInput)).toBe(30);
  expect(partTwo(myInput)).toBe(8570000);
});

test("getNumberOfValidMatches", () => {
  expect(
    getNumberOfValidMatches("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53")
  ).toStrictEqual({
    cardNo: "1",
    noOfMatches: 4,
  });
  expect(
    getNumberOfValidMatches("Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19")
  ).toStrictEqual({
    cardNo: "2",
    noOfMatches: 2,
  });
  expect(
    getNumberOfValidMatches("Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11")
  ).toStrictEqual({
    cardNo: "6",
    noOfMatches: 0,
  });
});
