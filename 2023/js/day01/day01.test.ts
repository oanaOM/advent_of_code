// sum.test.js
import { expect, test } from "vitest";
import { findNumberWords, partOne, partTwo, partTwoAgain } from "./day01";

const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const myInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
eightwothree`;
// 12, 38, 15, 77, 83

const original = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

// 29, 83, 13, 24, 42, 14, and 76

const inputThree = `hjmzlzlxltninefourbfnzqqhlq9fourfivejhvc8
threetwotjsnfjjqgdfoureight5crjthmlshhdtsix
two5snkqq11sixthreemhthree
8tworzoneqeight8nine3
827qzfrjlpfournine6twofive
h93
7nnfourthreenbsqjzsttwo81`;

const inputFour = `tzcndx5zqfour
five1oneight`;

// 54, 52, 71, 36, 51, 16, 57, 82, 94, 78, 89, 39
// 54133 :O

test("Part One", () => {
  expect(partOne(input)).toBe(142);
});

test.only("Part Two", () => {
  // expect(partTwo(input)).toBe(142);
  // expect(partTwo(original)).toBe(281);
  // expect(partTwo(inputThree)).toBe(489);
  expect(partTwo(inputFour)).toBe(489);
});

test("findNumberWords", () => {
  expect(findNumberWords("eighthree")).toBe("83");
  expect(findNumberWords("sevenine")).toBe("79");
});
