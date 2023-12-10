import { arrayRange } from "../utils";

interface PhaseMapping {
  [p: string]: number[];
}

export function partOne(input, seeds: number[]) {
  const almanac = input.split("\n\n");

  let mapping: PhaseMapping = {
    seed: seeds,
    "seed-to-soil": [],
    "soil-to-fertilizer": [],
    "fertilizer-to-water": [],
    "water-to-light": [],
    "light-to-temperature": [],
    "temperature-to-humidity": [],
    "humidity-to-location": [],
  };

  Object.keys(mapping).forEach((phase, i) => {
    if (i < 7) {
      // console.log("---almanac[i] ", phase, i);
      mapping[phase].forEach((source) => {
        const sourceToDest = findSourceToDestination(
          almanac[i],
          Number(source)
        );
        const phaseName = sourceToDest.phase;
        // console.log("--sourceToDest:L ", sourceToDest.destination);
        // console.log("--phaseName: ", mapping[phaseName]);

        if (sourceToDest.destination.length > 0) {
          // console.log("---HEEEY", sourceToDest.destination);
          mapping[phaseName].push(sourceToDest.destination[0]);
        } else {
          mapping[phaseName].push(source);
        }
      });
    }
  });

  console.log("--mapping: ", mapping);
  console.log("--locations: ", mapping["humidity-to-location"]);

  return Math.min(...mapping["humidity-to-location"]);
}

interface SourceToDestination {
  phase: string;
  destination: number[];
}

// should return the destination
export function findSourceToDestination(
  input: string,
  source: number
): SourceToDestination {
  const mapping = input.split("\n");
  const phaseName = mapping[0].split(" ")[0];
  let destinations: number[] = [];

  mapping.forEach((m, i) => {
    if (i != 0) {
      const [startDestRange, startSourceRange, range] = m.split(" ");

      const startSource = Number(startSourceRange);
      const endSource = startSource + Number(range) - 1;

      const startDest = Number(startDestRange);

      // console.log("--i ", i);
      // console.log(
      //   "---s",
      //   source,
      //   " --- SS: ",
      //   startSource,
      //   "-- startEndSource --",
      //   endSource
      // );
      // console.log(
      //   "--- is it between the range? ",
      //   source >= startSource && source <= endSource
      // );

      if (source >= startSource && source <= endSource) {
        destinations.push(source - startSource + startDest);
      }
    }
  });

  // console.log("---dsetination", destinations);

  // TODO: think if we care about duplicates
  return {
    phase: phaseName,
    destination: destinations,
  };
}

export function findSeedRange(input: number[]) {
  let range: number[] = [];
  const starts: number[] = input.filter((e, i) => i % 2 == 0);
  const ranges: number[] = input.filter((e, i) => i % 2 == 1);

  starts.forEach((start, i) => {
    const end = start - 1 + ranges[i];
    // console.log("--start", start, "--  end  ", end);
    range.push(arrayRange(start, end, 1));
  });

  // console.log("----", arrayRange(27, 50, 1));

  return range.flat();
}

export function partTwo(input, locations: number[]) {
  const almanac = input.split("\n\n");
  let mapping: PhaseMapping = {
    seed: [],
    "seed-to-soil": [],
    "soil-to-fertilizer": [],
    "fertilizer-to-water": [],
    "water-to-light": [],
    "light-to-temperature": [],
    "temperature-to-humidity": [],
    locations,
  };

  Object.keys(mapping)
    .reverse()
    .forEach((phase, i) => {
      if (i < 7) {
        console.log("---phase: ", phase);
        console.log("---almanac[i] ", mapping[phase]);
        console.log("#######");
        mapping[phase].forEach((source) => {
          // const sourceToDest = findSourceToDestination(
          //   almanac.reverse()[i],
          //   Number(source)
          // );
          // const phaseName = sourceToDest.phase;
          // console.log("--sourceToDest: ", source);
          // if (sourceToDest.destination.length > 0) {
          //   // console.log("---HEEEY", sourceToDest.destination);
          //   mapping[phaseName].push(sourceToDest.destination[0]);
          // } else {
          //   mapping[phaseName].push(source);
          // }
        });
      }
    });

  // console.log("--mapping: ", Object.keys(mapping).reverse());

  return Math.min(...mapping["humidity-to-location"]);
}
