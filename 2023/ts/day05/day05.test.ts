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

const aPath = `seed-to-soil map:
50 98 2
52 50 48`;

const aaPath = `seed-to-soil map:
1965922922 2387203602 59808406
2540447436 434094583 220346698
2217992666 1677013102 149631368
0 700424909 25332775
2488189883 199146916 52257553
1096820417 2512808179 247985955
25332775 725757684 113904366
4167057552 3534307691 127909744
1787863383 0 33562512
2947958449 3662217435 64182733
2907785302 3360301224 40173147
3774943096 4218385602 76581694
693455216 1273647901 403365201
380961654 1909017232 171283127
139237141 1031923388 241724513
2367624034 251404469 38193087
3038180364 3429533867 104773824
2484064707 1826644470 4125176
1344806372 128789319 70357597
3012141182 3109705711 26039182
1821425895 289597556 144497027
598228409 33562512 95226807
2405817121 1830769646 78247586
552244781 654441281 45983628
3641222276 3255639900 104661324
3851524790 3726400168 315532762
2025731328 839662050 192261338
3464769604 4041932930 176452672
1480960140 2080300359 306903243
1415163969 2447012008 65796171
3142954188 2787890295 321815416
3745883600 3400474371 29059496
2787890295 3135744893 119895007`;

const bPath = `soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15`;

const cPath = `fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4`;

const mySeeds =
  "seeds: 1778931867 1436999653 3684516104 2759374 1192793053 358764985 1698790056 76369598 3733854793 214008036 4054174000 171202266 3630057255 25954395 798587440 316327323 290129780 7039123 3334326492 246125391";

// test("Part One - If You Give A Seed A Fertilizer", () => {
//   expect(partOne(originalInput, [79, 14, 81, 13])).toBe(35);
//   // expect(partOne(originalInput, findSeedRange([81, 13]))).toBe(35);
//   // expect(findSeedRange([1778931867, 1436999653])).toBe(23847);
// });

const myInput = readInput("ts/day05/input.txt");

test("Part Two - If You Give A Seed A Fertilizer", () => {
  expect(partTwo(originalInput, [82, 43, 84, 35])).toBe([79, 14, 81, 13]);
  // expect(partOne(originalInput, findSeedRange([81, 13]))).toBe(35);
  // expect(findSeedRange([1778931867, 1436999653])).toBe(23847);
});

// test("Part One - If You Give A Seed A Fertilizer", () => {
// expect(partOne(myInput, findSeedRange([1778931867, 1436999653]))).toBe(35);
// expect(partOne(myInput, findSeedRange([3684516104, 2759374]))).toBe(35);
// expect(partOne(myInput, findSeedRange([1192793053, 358764985]))).toBe(35);
// expect(partOne(myInput, findSeedRange([1698790056, 76369598]))).toBe(35);
// expect(partOne(myInput, findSeedRange([3733854793, 214008036]))).toBe(35);
// expect(partOne(myInput, findSeedRange([4054174000, 171202266]))).toBe(35);
// expect(partOne(myInput, findSeedRange([3630057255, 25954395]))).toBe(35);
// expect(partOne(myInput, findSeedRange([798587440, 316327323]))).toBe(35);
// expect(partOne(myInput, findSeedRange([290129780, 7039123]))).toBe(35);
// expect(partOne(myInput, findSeedRange([3334326492, 246125391]))).toBe(35);
// expect(findSeedRange([1778931867, 1436999653])).toBe(23847);
// });

// test("Part Two - If You Give A Seed A Fertilizer", () => {
//   // expect(partOne(originalInput, [79, 14, 55, 13])).toBe(35);
//   // expect(
//   //   partOne(
//   //     myInput,
//   //     [
//   //       1778931867, 1436999653, 3684516104, 2759374, 1192793053, 358764985,
//   //       1698790056, 76369598, 3733854793, 214008036, 4054174000, 171202266,
//   //       3630057255, 25954395, 798587440, 316327323, 290129780, 7039123,
//   //       3334326492, 246125391,
//   //     ]
//   //   )
//   // ).toBe(23847);
// });

// test("Part One - findSourceToDestination", () => {
//   // expect(findSourceToDestination(aPath, 79)).toStrictEqual({
//   //   destination: [81],
//   //   phase: "seed-to-soil",
//   // });
//   // expect(findSourceToDestination(aPath, 14)).toStrictEqual({
//   //   destination: [],
//   //   phase: "seed-to-soil",
//   // });
//   // expect(findSourceToDestination(aPath, 55)).toStrictEqual({
//   //   destination: [57],
//   //   phase: "seed-to-soil",
//   // });
//   // expect(findSourceToDestination(aPath, 13)).toStrictEqual({
//   //   destination: [],
//   //   phase: "seed-to-soil",
//   // });
//   // expect(findSourceToDestination(aaPath, 1436999653)).toStrictEqual({
//   //   destination: [],
//   //   phase: "seed-to-soil",
//   // });
//   // #######
//   // expect(findSourceToDestination(bPath, 81)).toStrictEqual({
//   //   destination: [],
//   //   phase: "soil-to-fertilizer",
//   // });
//   // expect(findSourceToDestination(bPath, 14)).toStrictEqual({
//   //   destination: [53],
//   //   phase: "soil-to-fertilizer",
//   // });
//   // expect(findSourceToDestination(bPath, 57)).toStrictEqual({
//   //   destination: [],
//   //   phase: "soil-to-fertilizer",
//   // });
//   // expect(findSourceToDestination(bPath, 13)).toStrictEqual({
//   //   destination: [52],
//   //   phase: "soil-to-fertilizer",
//   // });
// });
