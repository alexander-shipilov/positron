import { describe, expect, it } from "@jest/globals";

import { falsyFixtures, nonFalsyFixtures } from "../-fixtures/falsy.fixtures";

import { isFalsy } from "./is-falsy";

describe(`function ${isFalsy.name}(value)`, () => {
  it("should return `true` if the `value` is falsy", () => {
    falsyFixtures.forEach((value) => {
      expect(isFalsy(value)).toBe(true);
    });
  });

  it("should return `false` if the `value` is not falsy", () => {
    nonFalsyFixtures.forEach((value) => {
      expect(isFalsy(value)).toBe(false);
    });
  });
});
