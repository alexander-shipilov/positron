import { describe, expect, it } from "@jest/globals";

import { toPower } from "./to-power";

describe("function toPower(maybePower)", () => {
  it("should return `maybePower` if it is a safe integer", () => {
    expect(toPower(0)).toBe(0);
    expect(toPower(2)).toBe(2);
    expect(toPower(-3)).toBe(-3);
  });

  it("should normalize `-0` to `0`", () => {
    expect(toPower(-0)).toBe(0);
  });

  it("should throw `RangeError` if `maybePower` is not a safe integer", () => {
    expect(() => toPower(0.5)).toThrow(RangeError);
    expect(() => toPower(NaN)).toThrow(RangeError);
    expect(() => toPower(Infinity)).toThrow(RangeError);
    expect(() => toPower(Number.MAX_SAFE_INTEGER + 1)).toThrow(RangeError);
  });
});
