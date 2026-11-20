import { describe, expect, it } from "@jest/globals";

import { equalSameFixtures } from "../-fixtures/equal-same.fixtures";

import { isSameZero } from "./is-same-zero";

describe(`function ${isSameZero.name}(value, expected)`, () => {
  it("should act as `Object.is` function if none of parameters is zero number", () => {
    equalSameFixtures.forEach(([value, equal]) => {
      expect(isSameZero(value, equal)).toBe(Object.is(value, equal));

      equalSameFixtures.forEach(([notEqual]) => {
        expect(isSameZero(value, notEqual)).toBe(Object.is(value, notEqual));
      });
    });
  });

  it("should act as `===` operator if none of parameters is `NaN`", () => {
    equalSameFixtures.forEach(([value, equal]) => {
      expect(isSameZero(value, equal)).toBe(value === equal);

      equalSameFixtures.forEach(([notEqual]) => {
        expect(isSameZero(value, notEqual)).toBe(value === notEqual);
      });
    });
  });

  it("should return `true` if both parameters are `NaN`", () => {
    expect(isSameZero(NaN, NaN)).toBe(true);
  });

  it("should return `true` if both parameters are zero numbers", () => {
    expect(isSameZero(0, -0)).toBe(true);
    expect(isSameZero(0, 0)).toBe(true);
    expect(isSameZero(-0, -0)).toBe(true);
  });
});
