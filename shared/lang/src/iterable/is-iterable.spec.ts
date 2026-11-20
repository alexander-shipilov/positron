import { describe, expect, it } from "@jest/globals";

import { isIterable } from "./is-iterable";

describe(`function ${isIterable.name}(value)`, () => {
  it("should return `true` if `value` has `[Symbol.iterator]` property which \
      is a function", () => {
    expect(isIterable({ [Symbol.iterator]: () => null })).toBe(true);
  });

  it("should return `false` if `value` has no `[Symbol.iterator]` property", () => {
    expect(isIterable({})).toBe(false);
    expect(isIterable(null)).toBe(false);
    expect(isIterable(false)).toBe(false);
    expect(isIterable(1)).toBe(false);
  });

  it("should return `false` if `value` has `[Symbol.iterator]` property \
      which is not a function", () => {
    expect(isIterable({ [Symbol.iterator]: null })).toBe(false);
    expect(isIterable({ [Symbol.iterator]: 1 })).toBe(false);
  });
});
