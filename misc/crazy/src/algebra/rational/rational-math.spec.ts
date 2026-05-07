import { describe, expect, it } from "@jest/globals";

import type { NumberLike } from "@positron/core";

import { Exception } from "../../exception";
import { Integer, isIntegerNumber } from "../../number";
import { IntegerMath } from "../integer";

import { Rational } from "./rational";
import { RationalMath } from "./rational-math";

describe(RationalMath.name, () => {
  const integral = new IntegerMath(Integer, isIntegerNumber);
  const rational = new RationalMath(integral);

  const Ratio = (num: NumberLike, den: NumberLike = 1) =>
    Rational(integral, num, den);

  describe("#equals(value1, value2)", () => {
    it("should return `true` if the `value1` equals the `value2`", () => {
      expect(rational.equals(Ratio(6), Ratio(6))).toBe(true);
      expect(rational.equals(Ratio(6, 5), Ratio(6, 5))).toBe(true);
      expect(rational.equals(Ratio(6, 2), Ratio(3, 1))).toBe(true);
      expect(rational.equals(Ratio(6), Ratio(2))).toBe(false);
    });
  });

  describe("#compare(value1, value2)", () => {
    it("should return `1` if the `value1` is greater than the `value2`", () => {
      expect(rational.compare(Ratio(6), Ratio(2))).toBe(1);
      expect(rational.compare(Ratio(3, 6), Ratio(2, 6))).toBe(1);
      expect(rational.compare(Ratio(6, 2), Ratio(6, 3))).toBe(1);
      expect(rational.compare(Ratio(6, 4), Ratio(6, 5))).toBe(1);
      expect(rational.compare(Ratio(-6, 3), Ratio(-6, 2))).toBe(1);
      expect(rational.compare(Ratio(-6, 5), Ratio(-6, 4))).toBe(1);
    });

    it("should return `-1` if the `value1` is less than the `value2`", () => {
      expect(rational.compare(Ratio(2), Ratio(6))).toBe(-1);
      expect(rational.compare(Ratio(2, 6), Ratio(3, 6))).toBe(-1);
      expect(rational.compare(Ratio(6, 3), Ratio(6, 2))).toBe(-1);
      expect(rational.compare(Ratio(6, 5), Ratio(6, 4))).toBe(-1);
      expect(rational.compare(Ratio(-6, 2), Ratio(-6, 3))).toBe(-1);
      expect(rational.compare(Ratio(-6, 4), Ratio(-6, 5))).toBe(-1);
    });

    it("should return `0` if the `value1` is equal the `value2`", () => {
      expect(rational.compare(Ratio(2), Ratio(2))).toBe(0);
      expect(rational.compare(Ratio(2, 3), Ratio(2, 3))).toBe(0);
      expect(rational.compare(Ratio(6, 3), Ratio(6, 3))).toBe(0);
    });
  });

  describe("#abs(value)", () => {
    it("should return the absolute value of a the `value`", () => {
      expect(rational.abs(Ratio(0))).toEqual(Ratio(0));
      expect(rational.abs(Ratio(-0))).toEqual(Ratio(0));
      expect(rational.abs(Ratio(1))).toEqual(Ratio(1));
      expect(rational.abs(Ratio(-1))).toEqual(Ratio(1));
    });
  });

  describe("#inv(value)", () => {
    it("should return inverted ratio", () => {
      expect(rational.inv(Ratio(1))).toEqual(Ratio(1));
      expect(rational.inv(Ratio(-1))).toEqual(Ratio(-1));
      expect(rational.inv(Ratio(1, 2))).toEqual(Ratio(2, 1));
      expect(rational.inv(Ratio(-1, 2))).toEqual(Ratio(-2, 1));
    });
  });

  describe("#neg(value)", () => {
    it("should negate the passed the `value`", () => {
      expect(rational.neg(Ratio(0))).toEqual(Ratio(0));
      expect(rational.neg(Ratio(2))).toEqual(Ratio(-2));
      expect(rational.neg(Ratio(-2))).toEqual(Ratio(2));
      expect(rational.neg(Ratio(2, 3))).toEqual(Ratio(-2, 3));
      expect(rational.neg(Ratio(-2, 3))).toEqual(Ratio(2, 3));
    });
  });

  describe("#sign(value)", () => {
    it("should return `0` if the `value` is equal zero", () => {
      expect(rational.sign(Ratio(0))).toEqual(Ratio(0));
    });

    it("should return `Rational(1)` if the `value` is greater than zero", () => {
      expect(rational.sign(Ratio(1))).toEqual(Ratio(1));
      expect(rational.sign(Ratio(2))).toEqual(Ratio(1));
    });

    it("should return `Rational(-1)` if the `value` is less than zero", () => {
      expect(rational.sign(Ratio(-1))).toEqual(Ratio(-1));
      expect(rational.sign(Ratio(-2))).toEqual(Ratio(-1));
    });
  });

  describe("#add(value1, value2)", () => {
    it("should return the sum of the `value1` and the `value2`", () => {
      expect(rational.add(Ratio(3), Ratio(2))).toEqual(Ratio(5));
      expect(rational.add(Ratio(3), Ratio(-2))).toEqual(Ratio(1));
      expect(rational.add(Ratio(-3), Ratio(2))).toEqual(Ratio(-1));
      expect(rational.add(Ratio(-3), Ratio(-2))).toEqual(Ratio(-5));
    });
  });

  describe("#sub(value1, value2)", () => {
    it("should return the difference between the `value1` and the `value2`", () => {
      expect(rational.sub(Ratio(3), Ratio(2))).toEqual(Ratio(1));
      expect(rational.sub(Ratio(3), Ratio(-2))).toEqual(Ratio(5));
      expect(rational.sub(Ratio(-3), Ratio(2))).toEqual(Ratio(-5));
      expect(rational.sub(Ratio(-3), Ratio(-2))).toEqual(Ratio(-1));
    });
  });

  describe("#mul(value1, value2)", () => {
    it("should return the product of the `value1` and the `value2`", () => {
      expect(rational.mul(Ratio(3), Ratio(2))).toEqual(Ratio(6));
      expect(rational.mul(Ratio(3), Ratio(-2))).toEqual(Ratio(-6));
      expect(rational.mul(Ratio(-3), Ratio(2))).toEqual(Ratio(-6));
      expect(rational.mul(Ratio(-3), Ratio(-2))).toEqual(Ratio(6));
    });
  });

  describe("#pow(value1, value2)", () => {
    it("should raise the `value1` to the power the `value2`", () => {
      expect(rational.pow(Ratio(1), Ratio(0))).toEqual(Ratio(1));
      expect(rational.pow(Ratio(2), Ratio(4))).toEqual(Ratio(16));
      expect(rational.pow(Ratio(-2), Ratio(3))).toEqual(Ratio(-8));
    });

    it("should raise to the negative power if the `value1` is divisor of `1`", () => {
      expect(rational.pow(Ratio(1), Ratio(-1))).toEqual(Ratio(1));
      expect(rational.pow(Ratio(1), Ratio(-2))).toEqual(Ratio(1));
      expect(rational.pow(Ratio(-1), Ratio(-1))).toEqual(Ratio(-1));
      expect(rational.pow(Ratio(-1), Ratio(-2))).toEqual(Ratio(1));
    });

    it("should throw a `TypeError` if the `value2` is not an integer", () => {
      expect(() => rational.pow(Ratio(2), Ratio(2, 3))).toThrow(TypeError);
    });

    it("should throw a `RangeError` if the `value1` is not divisor of `1` and the `value2` is negative", () => {
      expect(() => rational.pow(Ratio(2), Ratio(-1))).toThrow(
        new Exception(Exception.NonIntegralDivision),
      );
    });

    it("should throw a `RangeError` if the `value1` and the `value2` are `0`", () => {
      expect(() => rational.pow(Ratio(0), Ratio(0))).toThrow(
        new Exception(Exception.ZeroPowerOfZero),
      );
    });
  });

  describe("#div(value1, value2)", () => {
    it("should return the quotient of the `value1` divided by the `value2` if the `value2` is a divisor of the `value1`", () => {
      expect(rational.div(Ratio(6), Ratio(2))).toEqual(Ratio(3));
      expect(rational.div(Ratio(5), Ratio(1))).toEqual(Ratio(5));
      expect(rational.div(Ratio(6, 4), Ratio(2, 5))).toEqual(Ratio(15, 4));
    });
  });

  describe("#toValue(value)", () => {
    it("should convert the `value` to a f", () => {
      expect(rational.element(1)).toEqual(Ratio(1));
      expect(rational.element("1")).toEqual(Ratio(1));
      expect(rational.element(1n)).toEqual(Ratio(1));
    });

    it("should throw `RangeError` if the numeric the `value` cannot be converted to a f", () => {
      expect(() => rational.element(1.1)).toThrow(RangeError);
      expect(() => rational.element(Infinity)).toThrow(RangeError);
      expect(() => rational.element(NaN)).toThrow(RangeError);
    });
  });
});
