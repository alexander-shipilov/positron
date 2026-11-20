import { describe, expect, it } from "@jest/globals";

import { isNonNullish } from "./is-non-nullish";

describe(`function ${isNonNullish.name}(value)`, () => {
  it("should return `true` if the `value` is not `null`", () => {
    expect(isNonNullish({})).toBe(true);
    expect(isNonNullish("")).toBe(true);
    expect(isNonNullish(1)).toBe(true);
    expect(isNonNullish(true)).toBe(true);
    expect(isNonNullish(undefined)).toBe(true);
  });

  it("should return `false` if the `value` is `null`", () => {
    expect(isNonNullish(null)).toBe(false);
  });
});
