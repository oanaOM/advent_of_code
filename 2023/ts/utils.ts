import { readFileSync } from "fs";

export const arrayRange = (start, stop, step): number[] =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export function readInput(fileName: string): string {
  return readFileSync(fileName).toString().trim();
}
