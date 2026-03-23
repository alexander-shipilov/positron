import { describe, expect, it } from "@jest/globals";

import { toSmallInteger } from "../small";

import { Fraction } from "./fraction";

describe("toFraction(Math, value1, value2)", () => {
  it("should create a `fraction` using passed integral `Math`", () => {
    expect(Fraction(toSmallInteger, 1, 2)).toEqual([1, 2]);
    expect(Fraction(toSmallInteger, 1)).toEqual([1, 1]);
    expect(Fraction(toSmallInteger, 2)).toEqual([2, 1]);

    expect(Fraction(toSmallInteger, "1", "2")).toEqual([1, 2]);
  });

  it("should use sign of numerator", () => {
    expect(Fraction(toSmallInteger, -1, 2)).toEqual([-1, 2]);
    expect(Fraction(toSmallInteger, 1, -2)).toEqual([-1, 2]);
    expect(Fraction(toSmallInteger, -1, -2)).toEqual([1, 2]);
  });

  it("should reduce numerator and denominator", () => {
    expect(Fraction(toSmallInteger, 2, 4)).toEqual([1, 2]);
    expect(Fraction(toSmallInteger, 6, 4)).toEqual([3, 2]);
    expect(Fraction(toSmallInteger, 6, 8)).toEqual([3, 4]);
    expect(Fraction(toSmallInteger, 2, -4)).toEqual([-1, 2]);
    expect(Fraction(toSmallInteger, -6, 4)).toEqual([-3, 2]);
    expect(Fraction(toSmallInteger, -6, -8)).toEqual([3, 4]);
  });
});
