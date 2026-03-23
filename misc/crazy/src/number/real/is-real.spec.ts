import { describe, expect, it } from "@jest/globals";

import { isReal } from "./is-real";

describe(`${isReal.name}(value)`, () => {
  it("should return `true` if the passed `value` is a finite number", () => {
    expect(isReal(0)).toBe(true);
    expect(isReal(Number.MAX_VALUE)).toBe(true);
    expect(isReal(Number.MIN_VALUE)).toBe(true);
  });

  it("should return `false` if the passed `value` is not a number", () => {
    expect(isReal("")).toBe(false);
    expect(isReal(1n)).toBe(false);
    expect(isReal(null)).toBe(false);
    expect(isReal(undefined)).toBe(false);
  });

  it("should return `false` if the passed `value` is `NaN`", () => {
    expect(isReal(NaN)).toBe(false);
  });

  it("should return `false` if the passed `value` is `Infinity`", () => {
    expect(isReal(Infinity)).toBe(false);
    expect(isReal(-Infinity)).toBe(false);
  });
});
