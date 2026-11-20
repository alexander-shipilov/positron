import { describe, expect, it } from "@jest/globals";

import { isIndexed } from "./is-indexed";

describe(`function ${isIndexed.name}(value)`, () => {
  it("should return `true` if `value` has the `length` property which is a \
      valid indexed length", () => {
    expect(isIndexed({ length: 0 })).toBe(true);
    expect(isIndexed({ length: 2 ** 32 - 1 })).toBe(true);
    expect(isIndexed(Object.create({ length: 0 }))).toBe(true);
    expect(isIndexed([])).toBe(true);
    expect(isIndexed("")).toBe(true);
  });

  it("should return `false` if `value` has no the `length` property", () => {
    expect(isIndexed({})).toBe(false);
    expect(isIndexed(1)).toBe(false);
    expect(isIndexed(null)).toBe(false);
    expect(isIndexed(undefined)).toBe(false);
  });

  it("should return `false` if `value` has the `length` property, which is \
      not a valid indexed length", () => {
    expect(isIndexed({ length: -1 })).toBe(false);
    expect(isIndexed({ length: 2 ** 32 })).toBe(false);
    expect(isIndexed({ length: 1.1 })).toBe(false);
    expect(isIndexed({ length: "a" })).toBe(false);
    expect(isIndexed({ length: "1.0" })).toBe(false);
  });
});
