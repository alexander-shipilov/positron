import { describe, expect, it } from "@jest/globals";

import { Integer, isIntegerNumber } from "../../number";
import { IntegerMath } from "../integer";

import { Rational } from "./rational";

describe(`${Rational.name}(math, num, den)`, () => {
  const math = new IntegerMath(Integer, isIntegerNumber);

  it("should create a `Fraction` using passed integral `math`", () => {
    expect(Rational(math, 1, 2)).toEqual([1, 2]);
    expect(Rational(math, 1)).toEqual([1, 1]);
    expect(Rational(math, 2)).toEqual([2, 1]);

    expect(Rational(math, "1", "2")).toEqual([1, 2]);
  });

  it("should use sign of numerator", () => {
    expect(Rational(math, -1, 2)).toEqual([-1, 2]);
    expect(Rational(math, 1, -2)).toEqual([-1, 2]);
    expect(Rational(math, -1, -2)).toEqual([1, 2]);
  });

  it("should reduce numerator and denominator", () => {
    expect(Rational(math, 2, 4)).toEqual([1, 2]);
    expect(Rational(math, 6, 4)).toEqual([3, 2]);
    expect(Rational(math, 6, 8)).toEqual([3, 4]);
    expect(Rational(math, 2, -4)).toEqual([-1, 2]);
    expect(Rational(math, -6, 4)).toEqual([-3, 2]);
    expect(Rational(math, -6, -8)).toEqual([3, 4]);
  });
});
