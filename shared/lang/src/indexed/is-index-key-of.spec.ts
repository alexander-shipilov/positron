import { describe, expect, it } from "@jest/globals";

import { isIndexKeyOf } from "./is-index-key-of";

describe(`function ${isIndexKeyOf.name}(key, value)`, () => {
  it("should return `true` if `key` is an index key of `value`", () => {
    expect(isIndexKeyOf(0, [1])).toBe(true);
    expect(isIndexKeyOf(2, Array.from({ length: 3 }))).toBe(true);
    expect(isIndexKeyOf(0, "abc")).toBe(true);
    expect(isIndexKeyOf(2, "abc")).toBe(true);
    expect(isIndexKeyOf("0", [1])).toBe(true);
    expect(isIndexKeyOf("0", "abc")).toBe(true);
    expect(isIndexKeyOf("1", "abc")).toBe(true);
  });

  it("should return `false` if `key` is not an index key", () => {
    expect(isIndexKeyOf(-1, [1, 2])).toBe(false);
    expect(isIndexKeyOf(1.1, [1, 2])).toBe(false);
    expect(isIndexKeyOf("-0", [1, 2])).toBe(false);
    expect(isIndexKeyOf("-1", [1, 2])).toBe(false);
    expect(isIndexKeyOf("1.1", [1, 2])).toBe(false);
    expect(isIndexKeyOf("0.0", [1, 2])).toBe(false);
  });

  it("should return `false` if `key` is out of range of `value` indices", () => {
    expect(isIndexKeyOf(0, [])).toBe(false);
    expect(isIndexKeyOf(3, [1, 2, 3])).toBe(false);
    expect(isIndexKeyOf("0", [])).toBe(false);
    expect(isIndexKeyOf("3", [1, 2, 3])).toBe(false);
  });
});
