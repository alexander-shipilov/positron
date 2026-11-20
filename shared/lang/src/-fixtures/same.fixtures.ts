import { equalSameFixtures } from "./equal-same.fixtures";

export const sameFixtures: [value: unknown, expected: unknown][] = [
  ...equalSameFixtures,
  [NaN, NaN],
  [-0, -0],
  [0, 0],
];
