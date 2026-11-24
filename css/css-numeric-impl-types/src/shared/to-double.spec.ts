import { describe, expect, it } from "@jest/globals";

import { toDouble } from "./to-double";

describe("function toDouble(value)", () => {
  it("should return `value` if `value` is a finite number", () => {
    expect(toDouble(0)).toBe(0);
    expect(toDouble(42.5)).toBe(42.5);
    expect(toDouble(-100)).toBe(-100);
  });

  it("should throw `TypeError` if `value` is non-finite", () => {
    expect(() => toDouble(NaN)).toThrow(TypeError);
    expect(() => toDouble(Infinity)).toThrow(TypeError);
    expect(() => toDouble(-Infinity)).toThrow(TypeError);
  });
});
