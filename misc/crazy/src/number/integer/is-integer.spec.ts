import { describe, expect, it } from "@jest/globals";

import { isInteger } from "./is-integer";

describe(`${isInteger.name}(value)`, () => {
  it("should return `true` if the passed `value` is a safe integer", () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isInteger(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  it("should return `false` if the passed `value` is not a number", () => {
    expect(isInteger("")).toBe(false);
    expect(isInteger(1n)).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
  });

  it("should return `false` if the passed `value` is `NaN`", () => {
    expect(isInteger(NaN)).toBe(false);
  });

  it("should return `false` if the passed `value` is `Infinity`", () => {
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
  });

  it("should return `false` if the passed `value` is not an integer", () => {
    expect(isInteger(0.01)).toBe(false);
    expect(isInteger(1.1)).toBe(false);
  });

  it("should return `false` if the passed `value` is not a safe integer", () => {
    expect(isInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
    expect(isInteger(Number.MIN_SAFE_INTEGER - 1)).toBe(false);
  });
});
