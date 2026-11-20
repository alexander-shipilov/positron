import { equalSameFixtures } from "./equal-same.fixtures";

export const equalFixtures: [value: unknown, expected: unknown][] = [
  ...equalSameFixtures,
  [-0, 0],
];
