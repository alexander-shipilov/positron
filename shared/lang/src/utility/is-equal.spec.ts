import { describe, expect, it } from "@jest/globals";

import { equalFixtures } from "../-fixtures/equal.fixtures";

import { isEqual } from "./is-equal";

describe(`function ${isEqual.name}(value, expected)`, () => {
  it("should act as `===` operator", () => {
    expect(isEqual(NaN, NaN)).toBe(false);

    equalFixtures.forEach(([value, equal]) => {
      expect(isEqual(value, equal)).toBe(value === equal);

      equalFixtures.forEach(([notEqual]) => {
        expect(isEqual(value, notEqual)).toBe(value === notEqual);
      });
    });
  });
});
