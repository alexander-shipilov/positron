import { describe, expect, it } from "@jest/globals";

import { Integer, isIntegerNumber } from "../../number";
import { IntegerMath } from "../integer";

import { Rational } from "./rational";

describe(`${Rational.name}(integral, num, den)`, () => {
  const integral = new IntegerMath(Integer, isIntegerNumber);

  it("should create a `Rational` using passed integral algebra `integral`", () => {
    expect(Rational(integral, 1, 2)).toEqual([1, 2]);
    expect(Rational(integral, 1)).toEqual([1, 1]);
    expect(Rational(integral, 2)).toEqual([2, 1]);

    expect(Rational(integral, "1", "2")).toEqual([1, 2]);
  });

  it("should throw `TypeError` if denominator is zero", () => {
    expect(() => Rational(integral, 1, 0)).toThrow(TypeError);
  });

  it("should use sign of numerator", () => {
    expect(Rational(integral, -1, 2)).toEqual([-1, 2]);
    expect(Rational(integral, 1, -2)).toEqual([-1, 2]);
    expect(Rational(integral, -1, -2)).toEqual([1, 2]);
  });

  it("should reduce numerator and denominator", () => {
    expect(Rational(integral, 2, 4)).toEqual([1, 2]);
    expect(Rational(integral, 6, 4)).toEqual([3, 2]);
    expect(Rational(integral, 6, 8)).toEqual([3, 4]);
    expect(Rational(integral, 2, -4)).toEqual([-1, 2]);
    expect(Rational(integral, -6, 4)).toEqual([-3, 2]);
    expect(Rational(integral, -6, -8)).toEqual([3, 4]);
  });
});
