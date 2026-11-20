import { describe, expect, it } from "@jest/globals";

import { isIndexNumber } from "./is-index-number";

describe(`function ${isIndexNumber.name}(value)`, () => {
  it("should return `true` if `value` is an integer within range `[0, 2 ** 32 - 1)`", () => {
    expect(isIndexNumber(0)).toBe(true);
    expect(isIndexNumber(1)).toBe(true);
    expect(isIndexNumber(2 ** 32 - 2)).toBe(true);
  });

  it("should return `false` if `value` is not an integer", () => {
    expect(isIndexNumber(1.1)).toBe(false);
  });

  it("should return `false` if `value` is an integer less than `0`", () => {
    expect(isIndexNumber(-1)).toBe(false);
  });

  it("should return `false` if `value` is an integer greater than `2 ** 32 - 2`", () => {
    expect(isIndexNumber(2 ** 32 - 1)).toBe(false);
  });
});
