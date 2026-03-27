import { describe, expect, it } from "@jest/globals";

import { Integer } from "../../number";

import { Fraction } from "./fraction";

describe(`toFraction(Math, value1, value2)`, () => {
  it("should create a `fraction` using passed integral `Math`", () => {
    expect(Fraction(Integer, 1, 2)).toEqual([1, 2]);
    expect(Fraction(Integer, 1)).toEqual([1, 1]);
    expect(Fraction(Integer, 2)).toEqual([2, 1]);

    expect(Fraction(Integer, "1", "2")).toEqual([1, 2]);
  });

  it("should use sign of numerator", () => {
    expect(Fraction(Integer, -1, 2)).toEqual([-1, 2]);
    expect(Fraction(Integer, 1, -2)).toEqual([-1, 2]);
    expect(Fraction(Integer, -1, -2)).toEqual([1, 2]);
  });

  it("should reduce numerator and denominator", () => {
    expect(Fraction(Integer, 2, 4)).toEqual([1, 2]);
    expect(Fraction(Integer, 6, 4)).toEqual([3, 2]);
    expect(Fraction(Integer, 6, 8)).toEqual([3, 4]);
    expect(Fraction(Integer, 2, -4)).toEqual([-1, 2]);
    expect(Fraction(Integer, -6, 4)).toEqual([-3, 2]);
    expect(Fraction(Integer, -6, -8)).toEqual([3, 4]);
  });
});
