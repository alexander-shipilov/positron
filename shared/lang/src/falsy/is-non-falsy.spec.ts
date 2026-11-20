import { describe, expect, it } from "@jest/globals";

import { falsyFixtures, nonFalsyFixtures } from "../-fixtures/falsy.fixtures";

import { isNonFalsy } from "./is-non-falsy";

describe(`function ${isNonFalsy.name}(value)`, () => {
  it("should return `true` if the `value` is not falsy", () => {
    nonFalsyFixtures.forEach((value) => {
      expect(isNonFalsy(value)).toBe(true);
    });
  });

  it("should return `false` if the `value` is falsy", () => {
    falsyFixtures.forEach((value) => {
      expect(isNonFalsy(value)).toBe(false);
    });
  });
});
