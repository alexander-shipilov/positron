import { describe, expect, it } from "@jest/globals";

import { isArrayLike } from "./is-array-like";

describe(`function ${isArrayLike.name}(value)`, () => {
  it("should return `true` if `value` has the `length` property which is a number", () => {
    expect(isArrayLike({ length: 0 })).toBe(true);
    expect(isArrayLike({ length: Number.EPSILON })).toBe(true);
    expect(isArrayLike({ length: Number.MIN_VALUE })).toBe(true);
    expect(isArrayLike({ length: Number.MAX_VALUE })).toBe(true);
    expect(isArrayLike({ length: Number.NaN })).toBe(true);
  });

  it("should return `false` if `value` has no the `length` property", () => {
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike(1)).toBe(false);
    expect(isArrayLike(null)).toBe(false);
    expect(isArrayLike(undefined)).toBe(false);
  });

  it("should return `false` if `value` has the `length` property, which is \
      not a number", () => {
    expect(isArrayLike({ length: "a" })).toBe(false);
    expect(isArrayLike({ length: "1.0" })).toBe(false);
  });
});
