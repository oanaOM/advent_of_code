import { expect, test } from "vitest";
import { findNumberWords, partOne, partTwo } from "./day01";
import { readInput } from "../utils";

const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

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

const myInput = readInput("ts/day10/input.txt");

test("Part One", () => {
  expect(partOne(input)).toBe(142);
});

test("Part Two", () => {
  expect(partTwo(input)).toBe(142);
  expect(partTwo(original)).toBe(281);
  expect(partTwo(inputThree)).toBe(489);
});

test("findNumberWords", () => {
  expect(findNumberWords("eighthree")).toBe("83");
  expect(findNumberWords("sevenine")).toBe("79");
});
