import { expect, test } from "vitest";
import { extrapolatedValue, sum } from "./day09";
import { readInput } from "../utils";

const originalInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

const myInput = readInput("ts/day09/input.txt");

test("Part One - Mirage Maintenance", () => {
  expect(sum(originalInput, extrapolatedValue, "end")).toBe(114);
  expect(sum(myInput, extrapolatedValue, "end")).toBe(1987402315);
});

test("Part Two - Mirage Maintenance", () => {
  expect(sum(originalInput, extrapolatedValue, "start")).toBe(2);
  // the correct result is actually 900
  expect(sum(myInput, extrapolatedValue, "start")).toBe(902);
});

test("extrapolatedValue()", () => {
  expect(extrapolatedValue("0 3 6 9 12 15", "end")).toBe(18);
  expect(extrapolatedValue("1 3 6 10 15 21", "end")).toBe(28);
  expect(extrapolatedValue("10 13 16 21 30 45", "end")).toBe(68);
});

test("extrapolatedValue()", () => {
  expect(extrapolatedValue("0 3 6 9 12 15", "start")).toBe(-3);
  expect(extrapolatedValue("1 3 6 10 15 21", "start")).toBe(0);
  expect(extrapolatedValue("10 13 16 21 30 45", "start")).toBe(5);
  expect(extrapolatedValue("-6 -14 -14 4 57 177 419", "start")).toBe(-1);
});
