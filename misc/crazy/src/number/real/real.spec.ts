import { describe, expect, it } from "@jest/globals";
import { expectTypeOf } from "expect-type";

import type { Real } from "./real";
import { Real } from "./real";

describe("Real", () => {
  it("should extend `number` but not vice versa", () => {
    expectTypeOf<Real>().toExtend<number>();
    expectTypeOf<number>().not.toExtend<Real>();
  });
});

describe(`${Real.name}(value)`, () => {
  it("should return `value` if the passed `value` is a finite number", () => {
    expect(Real(0)).toBe(0);
    expect(Real(Number.MAX_VALUE)).toBe(Number.MAX_VALUE);
    expect(Real(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
  });

  it("should return `Real` type", () => {
    expectTypeOf(Real(0)).toEqualTypeOf<Real>();
  });

  it("should convert boolean `value`: `false` -> `0`, `true` -> `1`", () => {
    expect(Real(false)).toBe(0);
    expect(Real(true)).toBe(1);
  });

  it("should return `0` if the passed `value` is empty string", () => {
    expect(Real("")).toBe(0);
  });

  it("should number if the passed `value` is numerical string", () => {
    expect(Real("0")).toBe(0);
    expect(Real("0b10")).toBe(2);
    expect(Real("0o10")).toBe(8);
    expect(Real("0x10")).toBe(16);

    expect(Real("1.1")).toBe(1.1);
    expect(Real("1e3")).toBe(1_000);

    expect(Real(".1")).toBe(0.1);
    expect(Real(".1e3")).toBe(100);
  });

  it("should throw a `TypeError` if called with `new`", () => {
    expect(() => {
      // @ts-expect-error TS7009: new expression, whose target lacks a
      // construct signature, implicitly has an any type.
      new Real(0);
    }).toThrow(TypeError);
  });

  it("should throw a `RangeError` if the passed `value` is `NaN`", () => {
    expect(() => Real(NaN)).toThrow(RangeError);
  });

  it("should throw a `RangeError` if the passed `value` is not finite", () => {
    expect(() => Real(Infinity)).toThrow(RangeError);
    expect(() => Real(-Infinity)).toThrow(RangeError);
  });

  it("should throw a `SyntaxError` if the passed string `value` cannot be converted to a finite number", () => {
    expect(() => Real("a")).toThrow(SyntaxError);
    expect(() => Real("1a")).toThrow(SyntaxError);
    expect(() => Real("1e1.1")).toThrow(SyntaxError);
    expect(() => Real("0b0.1")).toThrow(SyntaxError);
    expect(() => Real("0o0.1")).toThrow(SyntaxError);
    expect(() => Real("0x0.1")).toThrow(SyntaxError);
  });
});
