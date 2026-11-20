import { describe, expect, it } from "@jest/globals";

import { isArray } from "./is-array";

describe(`function ${isArray.name}(value)`, () => {
  it("should return `true` if `value` is an array", () => {
    expect(isArray([])).toBe(true);
  });

  it("should return `false` if `value` is not an array", () => {
    expect(isArray("")).toBe(false);
    expect(isArray({ length: 0 })).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
  });
});
