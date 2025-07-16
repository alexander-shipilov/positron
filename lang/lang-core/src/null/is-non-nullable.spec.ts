import { describe, expect, it } from "@jest/globals";

import { isNonNullable } from "./is-non-nullable";

describe(`isNonNullable(value)`, () => {
  it("should return `true` if the `value` is an `object`", () => {
    expect(isNonNullable({})).toBe(true);
    expect(isNonNullable("")).toBe(true);
    expect(isNonNullable(1)).toBe(true);
    expect(isNonNullable(true)).toBe(true);
  });

  it("should return `false` if the `value` is `null` or `undefined`", () => {
    expect(isNonNullable(null)).toBe(false);
    expect(isNonNullable(undefined)).toBe(false);
  });
});
