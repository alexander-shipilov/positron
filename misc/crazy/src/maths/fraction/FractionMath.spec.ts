import { describe, expect, it } from "@jest/globals";

import type { NumberLike } from "@positron/core";

import { SmallIntegerMath, toSmallInteger } from "../small";

import { Fraction } from "./fraction";
import { FractionMath } from "./FractionMath";

describe("FractionMath", () => {
  const Math = new FractionMath(SmallIntegerMath);
  const Rational = (num: NumberLike, den: NumberLike = 1) =>
    Fraction(toSmallInteger, num, den);

  describe("#equals(value1, value2)", () => {
    it("should return `true` if the `value1` equals the `value2`", () => {
      expect(Math.equals(Rational(6), Rational(6))).toBe(true);
      expect(Math.equals(Rational(6, 5), Rational(6, 5))).toBe(true);
      expect(Math.equals(Rational(6, 2), Rational(3, 1))).toBe(true);
      expect(Math.equals(Rational(6), Rational(2))).toBe(false);
    });
  });

  describe("#compare(value1, value2)", () => {
    it("should return `1` if the `value1` is greater than the `value2`", () => {
      expect(Math.compare(Rational(6), Rational(2))).toBe(1);
      expect(Math.compare(Rational(3, 6), Rational(2, 6))).toBe(1);
      expect(Math.compare(Rational(6, 2), Rational(6, 3))).toBe(1);
      expect(Math.compare(Rational(6, 4), Rational(6, 5))).toBe(1);
      expect(Math.compare(Rational(-6, 3), Rational(-6, 2))).toBe(1);
      expect(Math.compare(Rational(-6, 5), Rational(-6, 4))).toBe(1);
    });

    it("should return `-1` if the `value1` is less than the `value2`", () => {
      expect(Math.compare(Rational(2), Rational(6))).toBe(-1);
      expect(Math.compare(Rational(2, 6), Rational(3, 6))).toBe(-1);
      expect(Math.compare(Rational(6, 3), Rational(6, 2))).toBe(-1);
      expect(Math.compare(Rational(6, 5), Rational(6, 4))).toBe(-1);
      expect(Math.compare(Rational(-6, 2), Rational(-6, 3))).toBe(-1);
      expect(Math.compare(Rational(-6, 4), Rational(-6, 5))).toBe(-1);
    });

    it("should return `0` if the `value1` is equal the `value2`", () => {
      expect(Math.compare(Rational(2), Rational(2))).toBe(0);
      expect(Math.compare(Rational(2, 3), Rational(2, 3))).toBe(0);
      expect(Math.compare(Rational(6, 3), Rational(6, 3))).toBe(0);
    });
  });

  describe("#abs(value)", () => {
    it("should return the absolute value of a the `value`", () => {
      expect(Math.abs(Rational(0))).toEqual(Rational(0));
      expect(Math.abs(Rational(-0))).toEqual(Rational(0));
      expect(Math.abs(Rational(1))).toEqual(Rational(1));
      expect(Math.abs(Rational(-1))).toEqual(Rational(1));
    });
  });

  describe("#inv(value)", () => {
    it("should return inverted ratio", () => {
      expect(Math.inv(Rational(1))).toEqual(Rational(1));
      expect(Math.inv(Rational(-1))).toEqual(Rational(-1));
      expect(Math.inv(Rational(1, 2))).toEqual(Rational(2, 1));
      expect(Math.inv(Rational(-1, 2))).toEqual(Rational(-2, 1));
    });
  });

  describe("#neg(value)", () => {
    it("should negate the passed the `value`", () => {
      expect(Math.neg(Rational(0))).toEqual(Rational(0));
      expect(Math.neg(Rational(-0))).toEqual(Rational(-0));
      expect(Math.neg(Rational(2))).toEqual(Rational(-2));
      expect(Math.neg(Rational(-2))).toEqual(Rational(2));
      expect(Math.neg(Rational(2, 3))).toEqual(Rational(-2, 3));
      expect(Math.neg(Rational(-2, 3))).toEqual(Rational(2, 3));
    });
  });

  describe("#sign(value)", () => {
    it("should return `0` if the `value` is equal zero", () => {
      expect(Math.sign(Rational(0))).toEqual(Rational(0));
    });

    it("should return `Rational(1)` if the `value` is greater than zero", () => {
      expect(Math.sign(Rational(1))).toEqual(Rational(1));
      expect(Math.sign(Rational(2))).toEqual(Rational(1));
    });

    it("should return `Rational(-1)` if the `value` is less than zero", () => {
      expect(Math.sign(Rational(-1))).toEqual(Rational(-1));
      expect(Math.sign(Rational(-2))).toEqual(Rational(-1));
    });
  });

  describe("#add(value1, value2)", () => {
    it("should return the sum of the `value1` and the `value2`", () => {
      expect(Math.add(Rational(3), Rational(2))).toEqual(Rational(5));
      expect(Math.add(Rational(3), Rational(-2))).toEqual(Rational(1));
      expect(Math.add(Rational(-3), Rational(2))).toEqual(Rational(-1));
      expect(Math.add(Rational(-3), Rational(-2))).toEqual(Rational(-5));
    });
  });

  describe("#sub(value1, value2)", () => {
    it("should return the difference between the `value1` and the `value2`", () => {
      expect(Math.sub(Rational(3), Rational(2))).toEqual(Rational(1));
      expect(Math.sub(Rational(3), Rational(-2))).toEqual(Rational(5));
      expect(Math.sub(Rational(-3), Rational(2))).toEqual(Rational(-5));
      expect(Math.sub(Rational(-3), Rational(-2))).toEqual(Rational(-1));
    });
  });

  describe("#mul(value1, value2)", () => {
    it("should return the product of the `value1` and the `value2`", () => {
      expect(Math.mul(Rational(3), Rational(2))).toEqual(Rational(6));
      expect(Math.mul(Rational(3), Rational(-2))).toEqual(Rational(-6));
      expect(Math.mul(Rational(-3), Rational(2))).toEqual(Rational(-6));
      expect(Math.mul(Rational(-3), Rational(-2))).toEqual(Rational(6));
    });
  });

  describe("#pow(value1, value2)", () => {
    it("should raise the `value1` to the power the `value2`", () => {
      expect(Math.pow(Rational(1), Rational(0))).toEqual(Rational(1));
      expect(Math.pow(Rational(2), Rational(4))).toEqual(Rational(16));
      expect(Math.pow(Rational(-2), Rational(3))).toEqual(Rational(-8));
    });

    it("should raise to the negative power if the `value1` is divisor of `1`", () => {
      expect(Math.pow(Rational(1), Rational(-1))).toEqual(Rational(1));
      expect(Math.pow(Rational(1), Rational(-2))).toEqual(Rational(1));
      expect(Math.pow(Rational(-1), Rational(-1))).toEqual(Rational(-1));
      expect(Math.pow(Rational(-1), Rational(-2))).toEqual(Rational(1));
    });

    it("should throw a `TypeError` if the `value2` is not an integer", () => {
      expect(() => Math.pow(Rational(2), Rational(2, 3))).toThrow(TypeError);
    });

    it("should throw a `RangeError` if the `value1` is not divisor of `1` and the `value2` is negative", () => {
      expect(() => Math.pow(Rational(2), Rational(-1))).toThrow(RangeError);
    });

    it("should throw a `RangeError` if the `value1` and the `value2` are `0`", () => {
      expect(() => Math.pow(Rational(0), Rational(0))).toThrow(RangeError);
    });
  });

  describe("#div(value1, value2)", () => {
    it("should return the quotient of the `value1` divided by the `value2` if the `value2` is a divisor of the `value1`", () => {
      expect(Math.div(Rational(6), Rational(2))).toEqual(Rational(3));
      expect(Math.div(Rational(5), Rational(1))).toEqual(Rational(5));
      expect(Math.div(Rational(6, 4), Rational(2, 5))).toEqual(Rational(15, 4));
    });
  });

  describe("#toValue(value)", () => {
    it("should convert the `value` to a f", () => {
      expect(Math.toValue(1)).toEqual(Rational(1));
      expect(Math.toValue("1")).toEqual(Rational(1));
      expect(Math.toValue(1n)).toEqual(Rational(1));
    });

    it("should throw `RangeError` if the numeric the `value` cannot be converted to a f", () => {
      expect(() => Math.toValue(1.1)).toThrow(RangeError);
      expect(() => Math.toValue(Infinity)).toThrow(RangeError);
      expect(() => Math.toValue(NaN)).toThrow(RangeError);
    });
  });
});
