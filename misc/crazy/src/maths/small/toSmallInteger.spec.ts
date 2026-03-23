import { describe, expect, it } from "@jest/globals";

import { toSmallInteger } from "./toSmallInteger";

describe("toSmallInt(value)", () => {
  const { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER } = Number;

  it("should return a `smallint` if `value` is a safe numeric", () => {
    expect(toSmallInteger(1)).toBe(1);
    expect(toSmallInteger("1")).toBe(1);
    expect(toSmallInteger(MAX_SAFE_INTEGER)).toBe(MAX_SAFE_INTEGER);
    expect(toSmallInteger(MIN_SAFE_INTEGER)).toBe(MIN_SAFE_INTEGER);

    expect(toSmallInteger(1n)).toBe(1);
    expect(toSmallInteger(BigInt(MAX_SAFE_INTEGER))).toBe(MAX_SAFE_INTEGER);
    expect(toSmallInteger(BigInt(MIN_SAFE_INTEGER))).toBe(MIN_SAFE_INTEGER);
  });

  it("should convert `-0` to `0`", () => {
    expect(toSmallInteger(-0)).toBe(0);
  });

  it("should throw a `SyntaxError` if the passed `value` cannot be converted to a safe integer", () => {
    expect(() => toSmallInteger("a")).toThrow(SyntaxError);
    expect(() => toSmallInteger(BigInt(MAX_SAFE_INTEGER + 1))).toThrow(
      SyntaxError,
    );
    expect(() => toSmallInteger(BigInt(MIN_SAFE_INTEGER - 1))).toThrow(
      SyntaxError,
    );
  });

  it("should throw a `RangeError` if the passed `value` is a `number` that cannot be converted to a safe integer", () => {
    expect(() => toSmallInteger(1.1)).toThrow(RangeError);
    expect(() => toSmallInteger(NaN)).toThrow(RangeError);
    expect(() => toSmallInteger(Infinity)).toThrow(RangeError);
  });
});
