import { describe, expect, it } from "@jest/globals";

import { isIndexedLength } from "./is-indexed-length";

describe(`function ${isIndexedLength.name}(value)`, () => {
  it("should return `true` if `value` is an integer within range `[0, 2 ** 32 - 1]`", () => {
    expect(isIndexedLength(0)).toBe(true);
    expect(isIndexedLength(1)).toBe(true);
    expect(isIndexedLength(2 ** 32 - 1)).toBe(true);
  });

  it("should return `false` if `value` is not an integer", () => {
    expect(isIndexedLength(1.1)).toBe(false);
  });

  it("should return `false` if `value` is an integer less than `0`", () => {
    expect(isIndexedLength(-1)).toBe(false);
  });

  it("should return `false` if `value` is an integer greater than `2 ** 32 - 1`", () => {
    expect(isIndexedLength(2 ** 32)).toBe(false);
  });
});
