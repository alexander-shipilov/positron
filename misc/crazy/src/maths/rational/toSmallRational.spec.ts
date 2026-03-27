import { describe, expect, it } from "@jest/globals";

import { toSmallRational } from "./toSmallRational";

describe("toSmallRational(value1, value2)", () => {
  const { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER } = Number;

  it("should return a integer rational if `value` is a safe numeric", () => {
    expect(toSmallRational(1)).toEqual([1, 1]);
    expect(toSmallRational(2, 1)).toEqual([2, 1]);
    expect(toSmallRational(1, 2)).toEqual([1, 2]);
    expect(toSmallRational(-2, 1)).toEqual([-2, 1]);
    expect(toSmallRational(1, -2)).toEqual([-1, 2]);

    expect(toSmallRational("1")).toEqual([1, 1]);
    expect(toSmallRational("1", "2")).toEqual([1, 2]);
    expect(toSmallRational(MAX_SAFE_INTEGER)).toEqual([MAX_SAFE_INTEGER, 1]);
    expect(toSmallRational(MIN_SAFE_INTEGER)).toEqual([MIN_SAFE_INTEGER, 1]);

    expect(toSmallRational(1n)).toEqual([1, 1]);
    expect(toSmallRational(BigInt(MAX_SAFE_INTEGER))).toEqual([
      MAX_SAFE_INTEGER,
      1,
    ]);
    expect(toSmallRational(BigInt(MIN_SAFE_INTEGER))).toEqual([
      MIN_SAFE_INTEGER,
      1,
    ]);
  });

  it("should convert `-0` to `0`", () => {
    expect(toSmallRational(-0)).toEqual([0, 1]);
  });

  it("should throw a `SyntaxError` if the passed `value` cannot be converted to a safe integer", () => {
    expect(() => toSmallRational("a")).toThrow(SyntaxError);
    expect(() => toSmallRational(BigInt(MAX_SAFE_INTEGER + 1))).toThrow(
      SyntaxError,
    );
    expect(() => toSmallRational(BigInt(MIN_SAFE_INTEGER - 1))).toThrow(
      SyntaxError,
    );
  });

  it("should throw a `RangeError` if the passed `value` is a `number` that cannot be converted to a safe integer", () => {
    expect(() => toSmallRational(1.1)).toThrow(RangeError);
    expect(() => toSmallRational(NaN)).toThrow(RangeError);
    expect(() => toSmallRational(Infinity)).toThrow(RangeError);
  });
});
