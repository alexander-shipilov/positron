import { describe, expect, it } from "@jest/globals";

import { isMixedInteger } from "./isMixedInteger";

describe("isInteger(value)", () => {
  it("should return `true` if value is a safe integer or `bigint`", () => {
    expect(isMixedInteger(1)).toBe(true);
    expect(isMixedInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isMixedInteger(Number.MIN_SAFE_INTEGER)).toBe(true);
    expect(isMixedInteger(BigInt(1))).toBe(true);
  });

  it("should return `false` if value is neither a safe integer nor `bigint`", () => {
    expect(isMixedInteger("1")).toBe(false);
    expect(isMixedInteger(1.1)).toBe(false);
    expect(isMixedInteger(NaN)).toBe(false);
    expect(isMixedInteger(Infinity)).toBe(false);
    expect(isMixedInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
    expect(isMixedInteger(Number.MIN_SAFE_INTEGER - 1)).toBe(false);
  });
});
