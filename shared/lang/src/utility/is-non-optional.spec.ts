import { describe, expect, it } from "@jest/globals";

import { isNonOptional } from "./is-non-optional";

describe(`function ${isNonOptional.name}(value)`, () => {
  it("should return `true` if the `value` is not `undefined`", () => {
    expect(isNonOptional({})).toBe(true);
    expect(isNonOptional("")).toBe(true);
    expect(isNonOptional(1)).toBe(true);
    expect(isNonOptional(true)).toBe(true);
    expect(isNonOptional(null)).toBe(true);
  });

  it("should return `false` if the `value` is `undefined`", () => {
    expect(isNonOptional(undefined)).toBe(false);
  });
});
