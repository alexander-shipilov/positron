import { describe, expect, it } from "@jest/globals";

import { isIndexKey } from "./is-index-key";

describe(`function ${isIndexKey.name}(value)`, () => {
  it("should return `true` if `value` is an index number", () => {
    expect(isIndexKey(0)).toBe(true);
    expect(isIndexKey(1)).toBe(true);
    expect(isIndexKey(2 ** 32 - 2)).toBe(true);
  });

  it("should return `true` if `value` is a string which can be converted to an index number", () => {
    expect(isIndexKey("0")).toBe(true);
    expect(isIndexKey("1")).toBe(true);
    expect(isIndexKey(String(2 ** 32 - 2))).toBe(true);
  });

  it("should return `false` if `value` is not an index number", () => {
    expect(isIndexKey(-1)).toBe(false);
    expect(isIndexKey(1.1)).toBe(false);
    expect(isIndexKey(2 ** 32 - 1)).toBe(false);
  });

  it("should return `false` if `value` is a string for which converting it to \
      an index number and then converting it back does equal to `value`", () => {
    expect(isIndexKey("")).toBe(false);
    expect(isIndexKey("-0")).toBe(false);
    expect(isIndexKey("-1")).toBe(false);
    expect(isIndexKey("0.0")).toBe(false);
    expect(isIndexKey("1.0")).toBe(false);
    expect(isIndexKey("1.1")).toBe(false);
  });
});
