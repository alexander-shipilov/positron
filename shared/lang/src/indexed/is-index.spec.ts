import { describe, expect, it } from "@jest/globals";

import { isIndex } from "./is-index";

describe(`function ${isIndex.name}(value)`, () => {
  it("should return `true` if `value` is an integer within range `[0, 2 ** 32 - 1)`", () => {
    expect(isIndex(0)).toBe(true);
    expect(isIndex(1)).toBe(true);
    expect(isIndex(2 ** 32 - 2)).toBe(true);
  });

  it("should return `false` if `value` is not a number", () => {
    expect(isIndex("")).toBe(false);
    expect(isIndex(null)).toBe(false);
    expect(isIndex(1n)).toBe(false);
  });

  it("should return `false` if `value` is not an integer", () => {
    expect(isIndex(1.1)).toBe(false);
  });

  it("should return `false` if `value` is an integer less than `0`", () => {
    expect(isIndex(-1)).toBe(false);
  });

  it("should return `false` if `value` is an integer greater than `2 ** 32 - 2`", () => {
    expect(isIndex(2 ** 32 - 1)).toBe(false);
  });
});
