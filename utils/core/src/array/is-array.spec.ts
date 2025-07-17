import { describe, expect, it } from "@jest/globals";

import { isArray } from "./is-array";

describe(`${isArray.name}(value)`, () => {
  it("should return `true` if the passed `value` is an array", () => {
    expect(isArray([])).toBe(true);
  });

  it("should return `false` otherwise", () => {
    expect(isArray("")).toBe(false);
  });
});
