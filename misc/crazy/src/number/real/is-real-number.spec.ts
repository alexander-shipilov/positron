import { describe, expect, it } from "@jest/globals";

import { isRealNumber } from "./is-real-number";

describe(`${isRealNumber.name}(value)`, () => {
  it("should return `true` if the passed `value` is a finite number", () => {
    expect(isRealNumber(0)).toBe(true);
    expect(isRealNumber(Number.MAX_VALUE)).toBe(true);
    expect(isRealNumber(Number.MIN_VALUE)).toBe(true);
  });

  it("should return `false` if the passed `value` is `-0`", () => {
    expect(isRealNumber(-0)).toBe(false);
  });

  it("should return `false` if the passed `value` is `NaN`", () => {
    expect(isRealNumber(NaN)).toBe(false);
  });

  it("should return `false` if the passed `value` is not finite", () => {
    expect(isRealNumber(Infinity)).toBe(false);
    expect(isRealNumber(-Infinity)).toBe(false);
  });
});
