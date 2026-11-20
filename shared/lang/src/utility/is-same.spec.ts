import { describe, expect, it } from "@jest/globals";

import { sameFixtures } from "../-fixtures/same.fixtures";

import { isSame } from "./is-same";

describe(`function ${isSame.name}(value, expected)`, () => {
  it("should act as `Object.is` function", () => {
    expect(isSame(0, -0)).toBe(false);
    expect(isSame(-0, 0)).toBe(false);

    sameFixtures.forEach(([value, equal]) => {
      expect(isSame(value, equal)).toBe(Object.is(value, equal));

      sameFixtures.forEach(([notEqual]) => {
        expect(isSame(value, notEqual)).toBe(Object.is(value, notEqual));
      });
    });
  });
});
