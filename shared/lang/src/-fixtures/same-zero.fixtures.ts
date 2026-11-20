import { equalSameFixtures } from "./equal-same.fixtures";

export const sameZeroFixtures: [value: unknown, expected: unknown][] = [
  ...equalSameFixtures,
  [NaN, NaN],
  [-0, 0],
];
