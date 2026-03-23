import { describe, expect, it } from "@jest/globals";

import { isSmallInteger } from "./isSmallInteger";

describe("isSmallInt(value)", () => {
  it("should return `true` if value is a safe integer", () => {
    expect(isSmallInteger(1)).toBe(true);
    expect(isSmallInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isSmallInteger(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  it("should return `true` if value is not a safe integer", () => {
    expect(isSmallInteger("1")).toBe(false);
    expect(isSmallInteger(1.1)).toBe(false);
    expect(isSmallInteger(NaN)).toBe(false);
    expect(isSmallInteger(Infinity)).toBe(false);
    expect(isSmallInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
    expect(isSmallInteger(Number.MIN_SAFE_INTEGER - 1)).toBe(false);
  });
});
