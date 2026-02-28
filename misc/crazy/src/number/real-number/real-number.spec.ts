import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import { RealNumber } from "./real-number";

describe(`${RealNumber.name}(value?)`, () => {
  it("should return `value` if the passed `value` is a finite number", () => {
    expect(RealNumber(0)).toBe(0);
    expect(RealNumber(Number.MAX_VALUE)).toBe(Number.MAX_VALUE);
    expect(RealNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
  });

  it("should return `RealNumber` type", () => {
    expectTypeOf(RealNumber(0)).toEqualTypeOf<RealNumber>();
  });

  it("should convert boolean `value`: `false` -> `0`, `true` -> `1`", () => {
    expect(RealNumber(false)).toBe(0);
    expect(RealNumber(true)).toBe(1);
  });

  it("should return `0` if the passed `value` is empty string", () => {
    expect(RealNumber("")).toBe(0);
  });

  it("should number if the passed `value` is numerical string", () => {
    expect(RealNumber("0")).toBe(0);
    expect(RealNumber("0b10")).toBe(2);
    expect(RealNumber("0o10")).toBe(8);
    expect(RealNumber("0x10")).toBe(16);

    expect(RealNumber("1.1")).toBe(1.1);
    expect(RealNumber("1e3")).toBe(1_000);

    expect(RealNumber(".1")).toBe(0.1);
    expect(RealNumber(".1e3")).toBe(100);
  });

  it("should throw a `TypeError` if called with `new`", () => {
    expect(() => {
      // @ts-expect-error TS7009: new expression, whose target lacks a
      // construct signature, implicitly has an any type.
      new RealNumber(0);
    }).toThrow(TypeError);
  });

  it("should throw a `RangeError` if the passed `value` is `NaN`", () => {
    expect(() => RealNumber(NaN)).toThrow(RangeError);
  });

  it("should throw a `RangeError` if the passed `value` is not finite", () => {
    expect(() => RealNumber(Infinity)).toThrow(RangeError);
    expect(() => RealNumber(-Infinity)).toThrow(RangeError);
  });

  it("should throw a `SyntaxError` if the passed string `value` cannot be converted to a finite number", () => {
    expect(() => RealNumber("a")).toThrow(SyntaxError);
    expect(() => RealNumber("1a")).toThrow(SyntaxError);
    expect(() => RealNumber("1e1.1")).toThrow(SyntaxError);
    expect(() => RealNumber("0b0.1")).toThrow(SyntaxError);
    expect(() => RealNumber("0o0.1")).toThrow(SyntaxError);
    expect(() => RealNumber("0x0.1")).toThrow(SyntaxError);
  });
});
