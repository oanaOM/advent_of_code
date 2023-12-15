import { expect, test } from "vitest";
import {
  partOne,
  findSourceToDestination,
  findSeedRange,
  partTwo,
} from "./day05";
import { readInput } from "../utils";

const originalInput = `seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;

const partTwo_originalInput = `humidity-to-location map:
60 56 37
56 93 4

location-to-humidity map:
0 69 1
1 0 69

humidity-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-light map:
88 18 7
18 25 70

light-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-fertilizer map:
49 53 8
0 11 42
42 0 7
57 7 4


fertilizer-to-soil map:
0 15 37
37 52 2
39 0 15

soil-to-seed map:
50 98 2
52 50 48`;

const mySeeds =
  "seeds: 1778931867 1436999653 3684516104 2759374 1192793053 358764985 1698790056 76369598 3733854793 214008036 4054174000 171202266 3630057255 25954395 798587440 316327323 290129780 7039123 3334326492 246125391"
    .split(": ")[1]
    .split(" ")
    .map((e) => Number(e));

const myInput = readInput("ts/day05/input.txt");

// test("Part One - If You Give A Seed A Fertilizer", () => {
//   expect(partOne(originalInput, [79, 14, 81, 13])).toBe(35);
//   expect(partOne(myInput, mySeeds)).toBe(107430936);
// });

test("Part Two - If You Give A Seed A Fertilizer", () => {
  // expect(partTwo(originalInput, findSeedRange([79, 14]))).toBe(46);

  // find the location of a corresponding seed number
  expect(partTwo(partTwo_originalInput, [35])).toBe(13);
  // expect(partTwo(myInput, findSeedRange([1778931867, 10000]))).toBe(46);
  // expect(partOne(myInput, mySeeds)).toBe(107430936);
});

// test("findSeedRange()", () => {
//   expect(findSeedRange([79, 14])).toStrictEqual([
//     79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
//   ]);
// });
