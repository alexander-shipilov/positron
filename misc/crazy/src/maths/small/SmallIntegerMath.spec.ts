import { describe, expect, it } from "@jest/globals";

import { OutOfRangeError } from "../error";

import { SmallIntegerMath as Math } from "./SmallIntegerMath";
import { toSmallInteger } from "./toSmallInteger";

describe("SmallIntMath", () => {
  const MAX_POW = 53;
  const MAX = 2 ** MAX_POW - 1;
  const MIN = -(2 ** MAX_POW) + 1;

  describe("#equals(value1, value2)", () => {
    it("should return `true` if the `value1` equals the `value2`", () => {
      expect(Math.equals(toSmallInteger(6), toSmallInteger(6))).toBe(true);
      expect(Math.equals(toSmallInteger(6), toSmallInteger(2))).toBe(false);
    });
  });

  describe("#compare(value1, value2)", () => {
    it("should return `1` if the `value1` is greater than the `value2`", () => {
      expect(Math.compare(toSmallInteger(6), toSmallInteger(2))).toBe(1);
    });

    it("should return `-1` if the `value1` is less than the `value2`", () => {
      expect(Math.compare(toSmallInteger(2), toSmallInteger(6))).toBe(-1);
    });

    it("should return `0` if the `value1` is equal the `value2`", () => {
      expect(Math.compare(toSmallInteger(2), toSmallInteger(2))).toBe(0);
    });
  });

  describe("#abs(value)", () => {
    it("should return the absolute value of a the `value`", () => {
      expect(Math.abs(toSmallInteger(0))).toBe(toSmallInteger(0));
      expect(Math.abs(toSmallInteger(-0))).toBe(toSmallInteger(0));
      expect(Math.abs(toSmallInteger(1))).toBe(toSmallInteger(1));
      expect(Math.abs(toSmallInteger(-1))).toBe(toSmallInteger(1));
    });
  });

  describe("#inv(value)", () => {
    it("should return a the `value` if the `value` is a divisor of `1`", () => {
      expect(Math.inv(toSmallInteger(1))).toBe(toSmallInteger(1));
      expect(Math.inv(toSmallInteger(-1))).toBe(toSmallInteger(-1));
    });

    it("should throw a `RangeError` if the `value` is not a divisor of `1`", () => {
      expect(() => Math.inv(toSmallInteger(2))).toThrow(RangeError);
      expect(() => Math.inv(toSmallInteger(0))).toThrow(RangeError);
    });
  });

  describe("#neg(value)", () => {
    it("should negate the passed the `value`", () => {
      expect(Math.neg(toSmallInteger(0))).toBe(toSmallInteger(0));
      expect(Math.neg(toSmallInteger(-0))).toBe(toSmallInteger(-0));
      expect(Math.neg(toSmallInteger(2))).toBe(toSmallInteger(-2));
      expect(Math.neg(toSmallInteger(-2))).toBe(toSmallInteger(2));
    });
  });

  describe("#sign(value)", () => {
    it("should return `0` if the `value` is equal zero", () => {
      expect(Math.sign(toSmallInteger(0))).toBe(toSmallInteger(0));
    });

    it("should return `SmallInt(1)` if the `value` is greater than zero", () => {
      expect(Math.sign(toSmallInteger(1))).toBe(toSmallInteger(1));
      expect(Math.sign(toSmallInteger(2))).toBe(toSmallInteger(1));
    });

    it("should return `SmallInt(-1)` if the `value` is less than zero", () => {
      expect(Math.sign(toSmallInteger(-1))).toBe(toSmallInteger(-1));
      expect(Math.sign(toSmallInteger(-2))).toBe(toSmallInteger(-1));
    });
  });

  describe("#add(value1, value2)", () => {
    it("should return the sum of the `value1` and the `value2`", () => {
      expect(Math.add(toSmallInteger(3), toSmallInteger(2))).toBe(
        toSmallInteger(5),
      );
      expect(Math.add(toSmallInteger(3), toSmallInteger(-2))).toBe(
        toSmallInteger(1),
      );
      expect(Math.add(toSmallInteger(-3), toSmallInteger(2))).toBe(
        toSmallInteger(-1),
      );
      expect(Math.add(toSmallInteger(-3), toSmallInteger(-2))).toBe(
        toSmallInteger(-5),
      );
    });

    it("should throw a `RangeError` if the sum is out of range", () => {
      expect(() => Math.add(toSmallInteger(MAX), toSmallInteger(1))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.add(toSmallInteger(MIN), toSmallInteger(-1))).toThrow(
        OutOfRangeError,
      );
    });
  });

  describe("#sub(value1, value2)", () => {
    it("should return the difference between the `value1` and the `value2`", () => {
      expect(Math.sub(toSmallInteger(3), toSmallInteger(2))).toBe(
        toSmallInteger(1),
      );
      expect(Math.sub(toSmallInteger(3), toSmallInteger(-2))).toBe(
        toSmallInteger(5),
      );
      expect(Math.sub(toSmallInteger(-3), toSmallInteger(2))).toBe(
        toSmallInteger(-5),
      );
      expect(Math.sub(toSmallInteger(-3), toSmallInteger(-2))).toBe(
        toSmallInteger(-1),
      );
    });

    it("should throw a `RangeError` if the difference is out of range", () => {
      expect(() => Math.sub(toSmallInteger(MIN), toSmallInteger(1))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.sub(toSmallInteger(MAX), toSmallInteger(-1))).toThrow(
        OutOfRangeError,
      );
    });
  });

  describe("#mul(value1, value2)", () => {
    it("should return the product of the `value1` and the `value2`", () => {
      expect(Math.mul(toSmallInteger(3), toSmallInteger(2))).toBe(
        toSmallInteger(6),
      );
      expect(Math.mul(toSmallInteger(3), toSmallInteger(-2))).toBe(
        toSmallInteger(-6),
      );
      expect(Math.mul(toSmallInteger(-3), toSmallInteger(2))).toBe(
        toSmallInteger(-6),
      );
      expect(Math.mul(toSmallInteger(-3), toSmallInteger(-2))).toBe(
        toSmallInteger(6),
      );
    });

    it("should throw a `RangeError` if the product is out of range", () => {
      expect(() => Math.mul(toSmallInteger(MAX), toSmallInteger(2))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.mul(toSmallInteger(MIN), toSmallInteger(2))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.mul(toSmallInteger(MAX), toSmallInteger(-2))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.mul(toSmallInteger(MIN), toSmallInteger(-2))).toThrow(
        OutOfRangeError,
      );
    });
  });

  describe("#pow(value1, value2)", () => {
    it("should raise the `value1` to the power the `value2`", () => {
      expect(Math.pow(toSmallInteger(1), toSmallInteger(0))).toBe(
        toSmallInteger(1),
      );
      expect(Math.pow(toSmallInteger(2), toSmallInteger(4))).toBe(
        toSmallInteger(16),
      );
      expect(Math.pow(toSmallInteger(-2), toSmallInteger(3))).toBe(
        toSmallInteger(-8),
      );
    });

    it("should raise to the negative power if the `value1` is divisor of `1`", () => {
      expect(Math.pow(toSmallInteger(1), toSmallInteger(-1))).toBe(
        toSmallInteger(1),
      );
      expect(Math.pow(toSmallInteger(1), toSmallInteger(-2))).toBe(
        toSmallInteger(1),
      );
      expect(Math.pow(toSmallInteger(-1), toSmallInteger(-1))).toBe(
        toSmallInteger(-1),
      );
      expect(Math.pow(toSmallInteger(-1), toSmallInteger(-2))).toBe(
        toSmallInteger(1),
      );
    });

    it("should throw a `RangeError` if the power is out of range", () => {
      expect(() => Math.pow(toSmallInteger(MAX), toSmallInteger(2))).toThrow(
        OutOfRangeError,
      );
      expect(() => Math.pow(toSmallInteger(MIN), toSmallInteger(2))).toThrow(
        OutOfRangeError,
      );
      expect(() =>
        Math.pow(toSmallInteger(2), toSmallInteger(MAX_POW + 1)),
      ).toThrow(OutOfRangeError);
    });

    it("should throw a `RangeError` if the `value1` is not divisor of `1` and the `value2` is negative", () => {
      expect(() => Math.pow(toSmallInteger(2), toSmallInteger(-1))).toThrow(
        RangeError,
      );
    });

    it("should throw a `RangeError` if the `value1` and the `value2` are `0`", () => {
      expect(() => Math.pow(toSmallInteger(0), toSmallInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#div(value1, value2)", () => {
    it("should return the quotient of the `value1` divided by the `value2` if the `value2` is a divisor of the `value1`", () => {
      expect(Math.div(toSmallInteger(6), toSmallInteger(2))).toBe(
        toSmallInteger(3),
      );
      expect(Math.div(toSmallInteger(5), toSmallInteger(1))).toBe(
        toSmallInteger(5),
      );
    });

    it("should throw a `RangeError` if the `value2` is not a divisor of the `value1`", () => {
      expect(() => Math.div(toSmallInteger(6), toSmallInteger(4))).toThrow(
        RangeError,
      );
      expect(() => Math.div(toSmallInteger(1), toSmallInteger(4))).toThrow(
        RangeError,
      );
    });

    it("should throw a `RangeError` if the `value2` is zero", () => {
      expect(() => Math.div(toSmallInteger(6), toSmallInteger(0))).toThrow(
        RangeError,
      );
      expect(() => Math.div(toSmallInteger(0), toSmallInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#mod(value1, value2)", () => {
    it("should return reminder left over when the `value1` is divided by the `value2`", () => {
      expect(Math.mod(toSmallInteger(0), toSmallInteger(3))).toBe(
        toSmallInteger(0),
      );
      expect(Math.mod(toSmallInteger(2), toSmallInteger(3))).toBe(
        toSmallInteger(2),
      );
      expect(Math.mod(toSmallInteger(4), toSmallInteger(3))).toBe(
        toSmallInteger(1),
      );
      expect(Math.mod(toSmallInteger(4), toSmallInteger(-3))).toBe(
        toSmallInteger(-2),
      );
      expect(Math.mod(toSmallInteger(-4), toSmallInteger(3))).toBe(
        toSmallInteger(2),
      );
      expect(Math.mod(toSmallInteger(-4), toSmallInteger(-3))).toBe(
        toSmallInteger(-1),
      );
    });

    it("should throw a `RangeError` if the `value2` is zero", () => {
      expect(() => Math.mod(toSmallInteger(6), toSmallInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#divMod(value1, value2)", () => {
    it("should return a tuple of quotient and remainder from division the `value1` by the `value2`", () => {
      expect(Math.divMod(toSmallInteger(6), toSmallInteger(2))).toEqual([
        toSmallInteger(3),
        toSmallInteger(0),
      ]);
      expect(Math.divMod(toSmallInteger(7), toSmallInteger(3))).toEqual([
        toSmallInteger(2),
        toSmallInteger(1),
      ]);
      expect(Math.divMod(toSmallInteger(-7), toSmallInteger(3))).toEqual([
        toSmallInteger(-3),
        toSmallInteger(2),
      ]);
    });

    it("should throw a `RangeError` if the `value2` is zero", () => {
      expect(() => Math.div(toSmallInteger(6), toSmallInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#gcd(value1, value2)", () => {
    it("should return the greatest common divisor of the `value1` and the `value2`", () => {
      expect(Math.gcd(toSmallInteger(6), toSmallInteger(0))).toBe(
        toSmallInteger(6),
      );
      expect(Math.gcd(toSmallInteger(0), toSmallInteger(6))).toBe(
        toSmallInteger(6),
      );

      expect(Math.gcd(toSmallInteger(6), toSmallInteger(2))).toBe(
        toSmallInteger(2),
      );
      expect(Math.gcd(toSmallInteger(8), toSmallInteger(6))).toBe(
        toSmallInteger(2),
      );
      expect(Math.gcd(toSmallInteger(7), toSmallInteger(2))).toBe(
        toSmallInteger(1),
      );

      expect(Math.gcd(toSmallInteger(18), toSmallInteger(24))).toBe(
        toSmallInteger(6),
      );
      expect(Math.gcd(toSmallInteger(18), toSmallInteger(-24))).toBe(
        toSmallInteger(6),
      );
      expect(Math.gcd(toSmallInteger(-18), toSmallInteger(24))).toBe(
        toSmallInteger(6),
      );
      expect(Math.gcd(toSmallInteger(-18), toSmallInteger(-24))).toBe(
        toSmallInteger(6),
      );
    });

    it("should throw a `RangeError` if the `value1` and the `value2` are equal `0`", () => {
      expect(() => Math.gcd(toSmallInteger(0), toSmallInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#lcm(value1, value2)", () => {
    it("should return the least common multiple of the `value1` and the `value2`", () => {
      expect(Math.lcm(toSmallInteger(6), toSmallInteger(0))).toBe(
        toSmallInteger(0),
      );
      expect(Math.lcm(toSmallInteger(0), toSmallInteger(6))).toBe(
        toSmallInteger(0),
      );

      expect(Math.lcm(toSmallInteger(6), toSmallInteger(2))).toBe(
        toSmallInteger(6),
      );
      expect(Math.lcm(toSmallInteger(8), toSmallInteger(6))).toBe(
        toSmallInteger(24),
      );
      expect(Math.lcm(toSmallInteger(7), toSmallInteger(2))).toBe(
        toSmallInteger(14),
      );

      expect(Math.lcm(toSmallInteger(18), toSmallInteger(24))).toBe(
        toSmallInteger(72),
      );
      expect(Math.lcm(toSmallInteger(18), toSmallInteger(-24))).toBe(
        toSmallInteger(72),
      );
      expect(Math.lcm(toSmallInteger(-18), toSmallInteger(24))).toBe(
        toSmallInteger(72),
      );
      expect(Math.lcm(toSmallInteger(-18), toSmallInteger(-24))).toBe(
        toSmallInteger(72),
      );
    });

    it("should throw a `RangeError` if the least common multiple is out of range", () => {
      expect(() => Math.lcm(toSmallInteger(MAX), toSmallInteger(2))).toThrow(
        OutOfRangeError,
      );
    });

    it("should throw a `RangeError` if the `value1` and the `value2` are zeros", () => {
      expect(() => Math.lcm(toSmallInteger(0), toSmallInteger(0))).toThrow(
        RangeError,
      );
    });
  });

  describe("#toValue(value)", () => {
    it("should convert the `value` to a SmallInt", () => {
      expect(Math.toValue(1)).toBe(toSmallInteger(1));
      expect(Math.toValue("1")).toBe(toSmallInteger(1));
      expect(Math.toValue(1n)).toBe(toSmallInteger(1));
    });

    it("should throw `RangeError` if the numeric the `value` cannot be converted to a SmallInt", () => {
      expect(() => Math.toValue(1.1)).toThrow(RangeError);
      expect(() => Math.toValue(Infinity)).toThrow(RangeError);
      expect(() => Math.toValue(NaN)).toThrow(RangeError);
    });

    it("should throw `SyntaxError` if the `value` cannot be converted to a SmallInt", () => {
      expect(() => Math.toValue("a")).toThrow(SyntaxError);
      expect(() => Math.toValue(BigInt(MAX + 1))).toThrow(SyntaxError);
    });
  });
});
