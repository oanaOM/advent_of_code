export const arrayRange = (start, stop, step): number[] =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
