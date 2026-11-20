import { describe, expect, it } from "@jest/globals";

import { Integer } from "./integer";

describe(`${Integer.name}(value)`, () => {
  it("should return `value` if `value` is a safe integer", () => {
    expect(Integer(0)).toEqual(0);
    expect(Integer(Number.MAX_SAFE_INTEGER)).toEqual(Number.MAX_SAFE_INTEGER);
    expect(Integer(Number.MIN_SAFE_INTEGER)).toEqual(Number.MIN_SAFE_INTEGER);
  });

  it("should convert `-0` to `0`", () => {
    expect(Integer(-0)).toEqual(0);
  });

  it("should parse string `value`", () => {
    expect(Integer("10")).toEqual(10);
    expect(Integer("010")).toEqual(10);
    expect(Integer("0x10")).toEqual(16);
    expect(Integer("0o10")).toEqual(8);
    expect(Integer("0b10")).toEqual(2);
  });

  it("should throw `SyntaxError` if `value` cannot be converted to an `IntegerNumber`", () => {
    expect(() => Integer("1.1")).toThrow(
      new SyntaxError("Cannot convert string \"1.1\" to an 'IntegerNumber'"),
    );
  });

  it("should throw `RangeError` if `value` is not an integer", () => {
    expect(() => Integer(1.1)).toThrow(
      new RangeError(
        "The number 1.1 cannot be converted to an 'IntegerNumber' because it is not a safe integer",
      ),
    );

    expect(() => Integer(1e-10)).toThrow(
      new RangeError(
        "The number 1e-10 cannot be converted to an 'IntegerNumber' because it is not a safe integer",
      ),
    );
  });

  it("should throw `RangeError` if `value` is not a safe integer", () => {
    expect(() => Integer(Number.MAX_SAFE_INTEGER + 1)).toThrow(
      new RangeError(
        "The number 9007199254740992 cannot be converted to an 'IntegerNumber' because it is not a safe integer",
      ),
    );

    expect(() => Integer(Number.MIN_SAFE_INTEGER - 1)).toThrow(
      new RangeError(
        "The number -9007199254740992 cannot be converted to an 'IntegerNumber' because it is not a safe integer",
      ),
    );
  });
});
