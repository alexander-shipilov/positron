import { describe, expect, it } from "@jest/globals";

import { toBigInteger } from "../big-integer";

import { toMixedInteger } from "./toMixedInteger";

describe("toInteger(value)", () => {
  const { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER } = Number;

  it("should return a `number` if the passed `value` can be converted to a safe integer", () => {
    expect(toMixedInteger(1)).toBe(1);
    expect(toMixedInteger("1")).toBe(1);
    expect(toMixedInteger(1n)).toBe(1);
    expect(toMixedInteger(toBigInteger(MAX_SAFE_INTEGER))).toBe(
      MAX_SAFE_INTEGER,
    );
    expect(toMixedInteger(toBigInteger(MIN_SAFE_INTEGER))).toBe(
      MIN_SAFE_INTEGER,
    );
  });

  it("should return a `bigint` if the passed `value` is an integer that can not be converted to a safe integer", () => {
    expect(toMixedInteger(MAX_SAFE_INTEGER + 1)).toBe(
      toBigInteger(MAX_SAFE_INTEGER + 1),
    );
    expect(toMixedInteger(MIN_SAFE_INTEGER - 1)).toBe(
      toBigInteger(MIN_SAFE_INTEGER - 1),
    );
    expect(toMixedInteger(toBigInteger(MAX_SAFE_INTEGER + 1))).toBe(
      toBigInteger(MAX_SAFE_INTEGER + 1),
    );
    expect(toMixedInteger(toBigInteger(MIN_SAFE_INTEGER - 1))).toBe(
      toBigInteger(MIN_SAFE_INTEGER - 1),
    );
  });

  it("should throw a `SyntaxError` if the passed `value` cannot be converted to an integer", () => {
    expect(() => toMixedInteger("a")).toThrow(SyntaxError);
  });

  it("should throw a `RangeError` if the passed `value` is a numeric that cannot be converted to an integer", () => {
    expect(() => toMixedInteger(1.1)).toThrow(RangeError);
    expect(() => toMixedInteger(NaN)).toThrow(RangeError);
    expect(() => toMixedInteger(Infinity)).toThrow(RangeError);
  });
});
