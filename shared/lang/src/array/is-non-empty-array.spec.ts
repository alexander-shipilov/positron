import { describe, expect, it } from "@jest/globals";

import { isNonEmptyArray } from "./is-non-empty-array";

describe(`function ${isNonEmptyArray.name}(value)`, () => {
  it("should return `true` if `value` is a non-empty array", () => {
    expect(isNonEmptyArray([1])).toBe(true);
    expect(isNonEmptyArray([1, 2])).toBe(true);
  });

  it("should return `false` if `value` is a empty array", () => {
    expect(isNonEmptyArray([])).toBe(false);
  });
});
