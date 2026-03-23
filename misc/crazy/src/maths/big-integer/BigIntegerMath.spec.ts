import { describe, expect, it } from "@jest/globals";

import { OutOfRangeError } from "../error";

import { BigIntegerMath as Math } from "./BigIntegerMath";
import { toBigInteger } from "./toBigInteger";

describe("BigIntMath", () => {
  const MAX_POW = 2n ** 30n - 1n;
  const MAX = 2n ** MAX_POW;
  const MIN = -(2n ** MAX_POW);

  describe("#equals(value1, value2)", () => {
    it("should return `true` if the `value1` equals the `value2`", () => {
      expect(Math.equals(toBigInteger(6), toBigInteger(6))).toBe(true);
      expect(Math.equals(toBigInteger(6), toBigInteger(2))).toBe(false);
    });
  });

  describe("#compare(value1, value2)", () => {
    it("should return `1` if the `value1` is greater than the `value2`", () => {
      expect(Math.compare(toBigInteger(6), toBigInteger(2))).toBe(1);
    });

    it("should return `-1` if the `value1` is less than the `value2`", () => {
      expect(Math.compare(toBigInteger(2), toBigInteger(6))).toBe(-1);
    });

    it("should return `0` if the `value1` is equal the `value2`", () => {
      expect(Math.compare(toBigInteger(2), toBigInteger(2))).toBe(0);
    });
  });

  describe("#abs(value)", () => {
    it("should return the absolute value of a the `value`", () => {
      expect(Math.abs(toBigInteger(0))).toBe(toBigInteger(0));
      expect(Math.abs(toBigInteger(-0))).toBe(toBigInteger(0));
      expect(Math.abs(toBigInteger(1))).toBe(toBigInteger(1));
      expect(Math.abs(toBigInteger(-1))).toBe(toBigInteger(1));
    });
  });

  describe("#inv(value)", () => {
    it("should return a the `value` if the `value` is a divisor of `1`", () => {
      expect(Math.inv(toBigInteger(1))).toBe(toBigInteger(1));
      expect(Math.inv(toBigInteger(-1))).toBe(toBigInteger(-1));
    });

    it("should throw a `RangeError` if the `value` is not a divisor of `1`", () => {
      expect(() => Math.inv(toBigInteger(2))).toThrow(RangeError);
      expect(() => Math.inv(toBigInteger(0))).toThrow(RangeError);
    });
  });

  describe("#neg(value)", () => {
    it("should negate the passed the `value`", () => {
      expect(Math.neg(toBigInteger(0))).toBe(toBigInteger(0));
      expect(Math.neg(toBigInteger(-0))).toBe(toBigInteger(-0));
      expect(Math.neg(toBigInteger(2))).toBe(toBigInteger(-2));
      expect(Math.neg(toBigInteger(-2))).toBe(toBigInteger(2));
    });
  });

  describe("#sign(value)", () => {
    it("should return `0` if the `value` is equal zero", () => {
      expect(Math.sign(toBigInteger(0))).toBe(toBigInteger(0));
    });

    it("should return `toBigInteger(1)` if the `value` is greater than zero", () => {
      expect(Math.sign(toBigInteger(1))).toBe(toBigInteger(1));
      expect(Math.sign(toBigInteger(2))).toBe(toBigInteger(1));
    });

    it("should return `toBigInteger(-1)` if the `value` is less than zero", () => {
      expect(Math.sign(toBigInteger(-1))).toBe(toBigInteger(-1));
      expect(Math.sign(toBigInteger(-2))).toBe(toBigInteger(-1));
    });
  });

  describe("#add(value1, value2)", () => {
    it("should return the sum of the `value1` and the `value2`", () => {
      expect(Math.add(toBigInteger(3), toBigInteger(2))).toBe(toBigInteger(5));
      expect(Math.add(toBigInteger(3), toBigInteger(-2))).toBe(toBigInteger(1));
      expect(Math.add(toBigInteger(-3), toBigInteger(2))).toBe(
        toBigInteger(-1),
      );
      expect(Math.add(toBigInteger(-3), toBigInteger(-2))).toBe(
        toBigInteger(-5),
      );
    });

    it("should throw a `RangeError` if the sum is out of range", () => {
      expect(() => Math.add(toBigInteger(MAX), toBigInteger(1))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.add(toBigInteger(MIN), toBigInteger(-1))).toThrow(
        OutOfRangeError,
      );
    });
  });

  describe("#sub(value1, value2)", () => {
    it("should return the difference between the `value1` and the `value2`", () => {
      expect(Math.sub(toBigInteger(3), toBigInteger(2))).toBe(toBigInteger(1));
      expect(Math.sub(toBigInteger(3), toBigInteger(-2))).toBe(toBigInteger(5));
      expect(Math.sub(toBigInteger(-3), toBigInteger(2))).toBe(
        toBigInteger(-5),
      );
      expect(Math.sub(toBigInteger(-3), toBigInteger(-2))).toBe(
        toBigInteger(-1),
      );
    });

    it("should throw a `RangeError` if the difference is out of range", () => {
      expect(() => Math.sub(toBigInteger(MIN), toBigInteger(1))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.sub(toBigInteger(MAX), toBigInteger(-1))).toThrow(
        OutOfRangeError,
      );
    });
  });

  describe("#mul(value1, value2)", () => {
    it("should return the product of the `value1` and the `value2`", () => {
      expect(Math.mul(toBigInteger(3), toBigInteger(2))).toBe(toBigInteger(6));
      expect(Math.mul(toBigInteger(3), toBigInteger(-2))).toBe(
        toBigInteger(-6),
      );
      expect(Math.mul(toBigInteger(-3), toBigInteger(2))).toBe(
        toBigInteger(-6),
      );
      expect(Math.mul(toBigInteger(-3), toBigInteger(-2))).toBe(
        toBigInteger(6),
      );
    });

    it("should throw a `RangeError` if the product is out of range", () => {
      expect(() => Math.mul(toBigInteger(MAX), toBigInteger(2))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.mul(toBigInteger(MIN), toBigInteger(2))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.mul(toBigInteger(MAX), toBigInteger(-2))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.mul(toBigInteger(MIN), toBigInteger(-2))).toThrow(
        OutOfRangeError,
      );
    });
  });

  describe("#pow(value1, value2)", () => {
    it("should raise the `value1` to the power the `value2`", () => {
      expect(Math.pow(toBigInteger(1), toBigInteger(0))).toBe(toBigInteger(1));
      expect(Math.pow(toBigInteger(2), toBigInteger(4))).toBe(toBigInteger(16));
      expect(Math.pow(toBigInteger(-2), toBigInteger(3))).toBe(
        toBigInteger(-8),
      );
    });

    it("should raise to the negative power if the `value1` is divisor of `1`", () => {
      expect(Math.pow(toBigInteger(1), toBigInteger(-1))).toBe(toBigInteger(1));
      expect(Math.pow(toBigInteger(1), toBigInteger(-2))).toBe(toBigInteger(1));
      expect(Math.pow(toBigInteger(-1), toBigInteger(-1))).toBe(
        toBigInteger(-1),
      );
      expect(Math.pow(toBigInteger(-1), toBigInteger(-2))).toBe(
        toBigInteger(1),
      );
    });

    it("should throw a `RangeError` if the power is out of range", () => {
      expect(() => Math.pow(toBigInteger(MAX), toBigInteger(2))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.pow(toBigInteger(MIN), toBigInteger(2))).toThrow(
        OutOfRangeError,
      );
      expect(() =>
        Math.pow(toBigInteger(2), toBigInteger(MAX_POW + 1n)),
      ).toThrow(OutOfRangeError);
    });

    it("should throw a `RangeError` if the `value1` is not divisor of `1` and the `value2` is negative", () => {
      expect(() => Math.pow(toBigInteger(2), toBigInteger(-1))).toThrow(
        RangeError,
      );
    });

    it("should throw a `RangeError` if the `value1` and the `value2` are `0`", () => {
      expect(() => Math.pow(toBigInteger(0), toBigInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#div(value1, value2)", () => {
    it("should return the quotient of the `value1` divided by the `value2` if the `value2` is a divisor of the `value1`", () => {
      expect(Math.div(toBigInteger(6), toBigInteger(2))).toBe(toBigInteger(3));
      expect(Math.div(toBigInteger(5), toBigInteger(1))).toBe(toBigInteger(5));
    });

    it("should throw a `RangeError` if the `value2` is not a divisor of the `value1`", () => {
      expect(() => Math.div(toBigInteger(6), toBigInteger(4))).toThrow(
        RangeError,
      );
      expect(() => Math.div(toBigInteger(1), toBigInteger(4))).toThrow(
        RangeError,
      );
    });

    it("should throw a `RangeError` if the `value2` is zero", () => {
      expect(() => Math.div(toBigInteger(6), toBigInteger(0))).toThrow(
        RangeError,
      );
      expect(() => Math.div(toBigInteger(0), toBigInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#mod(value1, value2)", () => {
    it("should return reminder left over when the `value1` is divided by the `value2`", () => {
      expect(Math.mod(toBigInteger(0), toBigInteger(3))).toBe(toBigInteger(0));
      expect(Math.mod(toBigInteger(2), toBigInteger(3))).toBe(toBigInteger(2));
      expect(Math.mod(toBigInteger(4), toBigInteger(3))).toBe(toBigInteger(1));
      expect(Math.mod(toBigInteger(4), toBigInteger(-3))).toBe(
        toBigInteger(-2),
      );
      expect(Math.mod(toBigInteger(-4), toBigInteger(3))).toBe(toBigInteger(2));
      expect(Math.mod(toBigInteger(-4), toBigInteger(-3))).toBe(
        toBigInteger(-1),
      );
    });

    it("should throw a `RangeError` if the `value2` is zero", () => {
      expect(() => Math.mod(toBigInteger(6), toBigInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#divMod(value1, value2)", () => {
    it("should return a tuple of quotient and remainder from division the `value1` by the `value2`", () => {
      expect(Math.divMod(toBigInteger(6), toBigInteger(2))).toEqual([
        toBigInteger(3),
        toBigInteger(0),
      ]);
      expect(Math.divMod(toBigInteger(7), toBigInteger(3))).toEqual([
        toBigInteger(2),
        toBigInteger(1),
      ]);
      expect(Math.divMod(toBigInteger(-7), toBigInteger(3))).toEqual([
        toBigInteger(-3),
        toBigInteger(2),
      ]);
    });

    it("should throw a `RangeError` if the `value2` is zero", () => {
      expect(() => Math.div(toBigInteger(6), toBigInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#gcd(value1, value2)", () => {
    it("should return the greatest common divisor of the `value1` and the `value2`", () => {
      expect(Math.gcd(toBigInteger(6), toBigInteger(0))).toBe(toBigInteger(6));
      expect(Math.gcd(toBigInteger(0), toBigInteger(6))).toBe(toBigInteger(6));

      expect(Math.gcd(toBigInteger(6), toBigInteger(2))).toBe(toBigInteger(2));
      expect(Math.gcd(toBigInteger(8), toBigInteger(6))).toBe(toBigInteger(2));
      expect(Math.gcd(toBigInteger(7), toBigInteger(2))).toBe(toBigInteger(1));

      expect(Math.gcd(toBigInteger(18), toBigInteger(24))).toBe(
        toBigInteger(6),
      );
      expect(Math.gcd(toBigInteger(18), toBigInteger(-24))).toBe(
        toBigInteger(6),
      );
      expect(Math.gcd(toBigInteger(-18), toBigInteger(24))).toBe(
        toBigInteger(6),
      );
      expect(Math.gcd(toBigInteger(-18), toBigInteger(-24))).toBe(
        toBigInteger(6),
      );
    });

    it("should throw a `RangeError` if the `value1` and the `value2` are equal `0`", () => {
      expect(() => Math.gcd(toBigInteger(0), toBigInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#lcm(value1, value2)", () => {
    it("should return the least common multiple of the `value1` and the `value2`", () => {
      expect(Math.lcm(toBigInteger(6), toBigInteger(0))).toBe(toBigInteger(0));
      expect(Math.lcm(toBigInteger(0), toBigInteger(6))).toBe(toBigInteger(0));

      expect(Math.lcm(toBigInteger(6), toBigInteger(2))).toBe(toBigInteger(6));
      expect(Math.lcm(toBigInteger(8), toBigInteger(6))).toBe(toBigInteger(24));
      expect(Math.lcm(toBigInteger(7), toBigInteger(2))).toBe(toBigInteger(14));

      expect(Math.lcm(toBigInteger(18), toBigInteger(24))).toBe(
        toBigInteger(72),
      );
      expect(Math.lcm(toBigInteger(18), toBigInteger(-24))).toBe(
        toBigInteger(72),
      );
      expect(Math.lcm(toBigInteger(-18), toBigInteger(24))).toBe(
        toBigInteger(72),
      );
      expect(Math.lcm(toBigInteger(-18), toBigInteger(-24))).toBe(
        toBigInteger(72),
      );
    });

    it("should throw a `RangeError` if the least common multiple is out of range", () => {
      expect(() => Math.lcm(toBigInteger(MAX), toBigInteger(2))).toThrow(
        OutOfRangeError,
      );
    });

    it("should throw a `RangeError` if the `value1` and the `value2` are zeros", () => {
      expect(() => Math.lcm(toBigInteger(0), toBigInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#toValue(value)", () => {
    it("should convert the `value` to a toBigInteger", () => {
      expect(Math.toValue(1)).toBe(toBigInteger(1));
      expect(Math.toValue("1")).toBe(toBigInteger(1));
      expect(Math.toValue(1n)).toBe(toBigInteger(1));
    });

    it("should throw `RangeError` if the numeric the `value` cannot be converted to a toBigInteger", () => {
      expect(() => Math.toValue(1.1)).toThrow(RangeError);
      expect(() => Math.toValue(Infinity)).toThrow(RangeError);
      expect(() => Math.toValue(NaN)).toThrow(RangeError);
    });

    it("should throw `SyntaxError` if the `value` cannot be converted to a toBigInteger", () => {
      expect(() => Math.toValue("a")).toThrow(SyntaxError);
    });
  });
});
