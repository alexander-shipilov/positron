import { describe, expect, it } from "@jest/globals";

import { isIntegerNumber } from "./is-integer-number";

describe(`${isIntegerNumber.name}(value)`, () => {
  it("should return `true` if the passed `value` is a safe integer", () => {
    expect(isIntegerNumber(0)).toBe(true);
    expect(isIntegerNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isIntegerNumber(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  it("should return `false` if the passed `value` is not a number", () => {
    expect(isIntegerNumber("")).toBe(false);
    expect(isIntegerNumber(1n)).toBe(false);
    expect(isIntegerNumber(null)).toBe(false);
    expect(isIntegerNumber(undefined)).toBe(false);
  });

  it("should return `false` if the passed `value` is `NaN`", () => {
    expect(isIntegerNumber(NaN)).toBe(false);
  });

  it("should return `false` if the passed `value` is `Infinity`", () => {
    expect(isIntegerNumber(+Infinity)).toBe(false);
    expect(isIntegerNumber(-Infinity)).toBe(false);
  });

  it("should return `false` if the passed `value` is not an integer", () => {
    expect(isIntegerNumber(0.01)).toBe(false);
    expect(isIntegerNumber(1.1)).toBe(false);
  });

  it("should return `false` if the passed `value` is not a safe integer", () => {
    expect(isIntegerNumber(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
    expect(isIntegerNumber(Number.MIN_SAFE_INTEGER - 1)).toBe(false);
  });
});
