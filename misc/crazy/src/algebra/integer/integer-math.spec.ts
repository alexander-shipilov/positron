import { describe, expect, it } from "@jest/globals";

import { Exception } from "../../exception";
import { Integer, isIntegerNumber } from "../../number";

import { IntegerMath } from "./integer-math";

describe(IntegerMath, () => {
  const math = new IntegerMath(Integer, isIntegerNumber);

  const MAX_POW = 53;
  const MAX = 2 ** MAX_POW - 1;
  const MIN = -(2 ** MAX_POW) + 1;

  describe("#compare(arg1, arg2)", () => {
    it("should return `1` if the `arg1` is greater than the `arg2`", () => {
      expect(math.compare(Integer(6), Integer(2))).toBe(1);
    });

    it("should return `-1` if the `arg1` is less than the `arg2`", () => {
      expect(math.compare(Integer(2), Integer(6))).toBe(-1);
    });

    it("should return `0` if the `arg1` is equal the `arg2`", () => {
      expect(math.compare(Integer(2), Integer(2))).toBe(0);
    });
  });

  describe("#abs(arg)", () => {
    it("should return the absolute arg of a the `arg`", () => {
      expect(math.abs(Integer(0))).toBe(Integer(0));
      expect(math.abs(Integer(-0))).toBe(Integer(0));
      expect(math.abs(Integer(1))).toBe(Integer(1));
      expect(math.abs(Integer(-1))).toBe(Integer(1));
    });
  });

  describe("#inv(arg)", () => {
    it("should return a the `arg` if the `arg` is a divisor of `1`", () => {
      expect(math.inv(Integer(1))).toBe(Integer(1));
      expect(math.inv(Integer(-1))).toBe(Integer(-1));
    });

    it("should throw a `Exception` if the `arg` is not a divisor of `1`", () => {
      expect(() => math.inv(Integer(2))).toThrow(
        new Exception(Exception.NonIntegralDivision),
      );
      expect(() => math.inv(Integer(0))).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
    });
  });

  describe("#neg(arg)", () => {
    it("should negate the passed the `arg`", () => {
      expect(math.neg(Integer(0))).toBe(Integer(0));
      expect(math.neg(Integer(-0))).toBe(Integer(0));
      expect(math.neg(Integer(2))).toBe(Integer(-2));
      expect(math.neg(Integer(-2))).toBe(Integer(2));
    });
  });

  describe("#sign(arg)", () => {
    it("should return `0` if the `arg` is equal zero", () => {
      expect(math.sign(Integer(0))).toBe(Integer(0));
    });

    it("should return `Bigint1024(1)` if the `arg` is greater than zero", () => {
      expect(math.sign(Integer(1))).toBe(Integer(1));
      expect(math.sign(Integer(2))).toBe(Integer(1));
    });

    it("should return `Bigint1024(-1)` if the `arg` is less than zero", () => {
      expect(math.sign(Integer(-1))).toBe(Integer(-1));
      expect(math.sign(Integer(-2))).toBe(Integer(-1));
    });
  });

  describe("#add(arg1, arg2)", () => {
    it("should return the sum of the `arg1` and the `arg2`", () => {
      expect(math.add(Integer(3), Integer(2))).toBe(Integer(5));
      expect(math.add(Integer(3), Integer(-2))).toBe(Integer(1));
      expect(math.add(Integer(-3), Integer(2))).toBe(Integer(-1));
      expect(math.add(Integer(-3), Integer(-2))).toBe(Integer(-5));
    });

    it("should throw a `Exception` if the sum is out of range", () => {
      expect(() => math.add(Integer(MAX), Integer(1))).toThrow(
        new Exception(Exception.OutOfRange),
      );
      expect(() => math.add(Integer(MIN), Integer(-1))).toThrow(
        new Exception(Exception.OutOfRange),
      );
    });
  });

  describe("#sub(arg1, arg2)", () => {
    it("should return the difference between the `arg1` and the `arg2`", () => {
      expect(math.sub(Integer(3), Integer(2))).toBe(Integer(1));
      expect(math.sub(Integer(3), Integer(-2))).toBe(Integer(5));
      expect(math.sub(Integer(-3), Integer(2))).toBe(Integer(-5));
      expect(math.sub(Integer(-3), Integer(-2))).toBe(Integer(-1));
    });

    it("should throw a `Exception` if the difference is out of range", () => {
      expect(() => math.sub(Integer(MIN), Integer(1))).toThrow(
        new Exception(Exception.OutOfRange),
      );
      expect(() => math.sub(Integer(MAX), Integer(-1))).toThrow(
        new Exception(Exception.OutOfRange),
      );
    });
  });

  describe("#mul(arg1, arg2)", () => {
    it("should return the product of the `arg1` and the `arg2`", () => {
      expect(math.mul(Integer(3), Integer(2))).toBe(Integer(6));
      expect(math.mul(Integer(3), Integer(-2))).toBe(Integer(-6));
      expect(math.mul(Integer(-3), Integer(2))).toBe(Integer(-6));
      expect(math.mul(Integer(-3), Integer(-2))).toBe(Integer(6));
    });

    it("should throw a `Exception` if the product is out of range", () => {
      expect(() => math.mul(Integer(MAX), Integer(2))).toThrow(
        new Exception(Exception.OutOfRange),
      );
      expect(() => math.mul(Integer(MIN), Integer(2))).toThrow(
        new Exception(Exception.OutOfRange),
      );
      expect(() => math.mul(Integer(MAX), Integer(-2))).toThrow(
        new Exception(Exception.OutOfRange),
      );
      expect(() => math.mul(Integer(MIN), Integer(-2))).toThrow(
        new Exception(Exception.OutOfRange),
      );
    });
  });

  describe("#pow(arg1, arg2)", () => {
    it("should raise the `arg1` to the power the `arg2`", () => {
      expect(math.pow(Integer(1), Integer(0))).toBe(Integer(1));
      expect(math.pow(Integer(2), Integer(4))).toBe(Integer(16));
      expect(math.pow(Integer(-2), Integer(3))).toBe(Integer(-8));
    });

    it("should raise to the negative power if the `arg1` is divisor of `1`", () => {
      expect(math.pow(Integer(1), Integer(-1))).toBe(Integer(1));
      expect(math.pow(Integer(1), Integer(-2))).toBe(Integer(1));
      expect(math.pow(Integer(-1), Integer(-1))).toBe(Integer(-1));
      expect(math.pow(Integer(-1), Integer(-2))).toBe(Integer(1));
    });

    it("should throw a `Exception` if the power is out of range", () => {
      expect(() => math.pow(Integer(MAX), Integer(2))).toThrow(
        new Exception(Exception.OutOfRange),
      );
      expect(() => math.pow(Integer(MIN), Integer(2))).toThrow(
        new Exception(Exception.OutOfRange),
      );
      expect(() => math.pow(Integer(2), Integer(MAX_POW + 1))).toThrow(
        new Exception(Exception.OutOfRange),
      );
    });

    it("should throw a `Exception` if the `arg1` is not divisor of `1` and the `arg2` is negative", () => {
      expect(() => math.pow(Integer(2), Integer(-1))).toThrow(
        new Exception(Exception.NonIntegralDivision),
      );
    });

    it("should throw a `Exception` if the `arg1` and the `arg2` are `0`", () => {
      expect(() => math.pow(Integer(0), Integer(0))).toThrow(
        new Exception(Exception.ZeroPowerOfZero),
      );
    });
  });

  describe("#div(arg1, arg2)", () => {
    it("should return the quotient of the `arg1` divided by the `arg2` if the `arg2` is a divisor of the `arg1`", () => {
      expect(math.div(Integer(6), Integer(2))).toBe(Integer(3));
      expect(math.div(Integer(5), Integer(1))).toBe(Integer(5));
    });

    it("should throw a `Exception` if the `arg2` is not a divisor of the `arg1`", () => {
      expect(() => math.div(Integer(6), Integer(4))).toThrow(
        new Exception(Exception.NonIntegralDivision),
      );
      expect(() => math.div(Integer(1), Integer(4))).toThrow(
        new Exception(Exception.NonIntegralDivision),
      );
    });

    it("should throw a `Exception` if the `arg2` is zero", () => {
      expect(() => math.div(Integer(6), Integer(0))).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
      expect(() => math.div(Integer(0), Integer(0))).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
    });
  });

  describe("#mod(arg1, arg2)", () => {
    it("should return reminder left over when the `arg1` is divided by the `arg2`", () => {
      expect(math.rem(Integer(0), Integer(3))).toBe(Integer(0));
      expect(math.rem(Integer(2), Integer(3))).toBe(Integer(2));
      expect(math.rem(Integer(4), Integer(3))).toBe(Integer(1));
      expect(math.rem(Integer(4), Integer(-3))).toBe(Integer(1));
      expect(math.rem(Integer(-4), Integer(3))).toBe(Integer(2));
      expect(math.rem(Integer(-4), Integer(-3))).toBe(Integer(2));
    });

    it("should throw a `Exception` if the `arg2` is zero", () => {
      expect(() => math.rem(Integer(6), Integer(0))).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
    });
  });

  describe("#divMod(arg1, arg2)", () => {
    it("should return a tuple of quotient and remainder from division the `arg1` by the `arg2`", () => {
      expect(math.divRem(Integer(6), Integer(2))).toEqual([
        Integer(3),
        Integer(0),
      ]);
      expect(math.divRem(Integer(7), Integer(3))).toEqual([
        Integer(2),
        Integer(1),
      ]);
      expect(math.divRem(Integer(-7), Integer(3))).toEqual([
        Integer(-3),
        Integer(2),
      ]);
    });

    it("should throw a `Exception` if the `arg2` is zero", () => {
      expect(() => math.div(Integer(6), Integer(0))).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
    });
  });

  describe("#gcd(arg1, arg2)", () => {
    it("should return the greatest common divisor of the `arg1` and the `arg2`", () => {
      expect(math.gcd(Integer(6), Integer(0))).toBe(Integer(6));
      expect(math.gcd(Integer(0), Integer(6))).toBe(Integer(6));

      expect(math.gcd(Integer(6), Integer(2))).toBe(Integer(2));
      expect(math.gcd(Integer(8), Integer(6))).toBe(Integer(2));
      expect(math.gcd(Integer(7), Integer(2))).toBe(Integer(1));

      expect(math.gcd(Integer(18), Integer(24))).toBe(Integer(6));
      expect(math.gcd(Integer(18), Integer(-24))).toBe(Integer(6));
      expect(math.gcd(Integer(-18), Integer(24))).toBe(Integer(6));
      expect(math.gcd(Integer(-18), Integer(-24))).toBe(Integer(6));
    });

    it("should throw a `Exception` if the `arg1` and the `arg2` are equal `0`", () => {
      expect(() => math.gcd(Integer(0), Integer(0))).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
    });
  });

  describe("#lcm(arg1, arg2)", () => {
    it("should return the least common multiple of the `arg1` and the `arg2`", () => {
      expect(math.lcm(Integer(6), Integer(0))).toBe(Integer(0));
      expect(math.lcm(Integer(0), Integer(6))).toBe(Integer(0));

      expect(math.lcm(Integer(6), Integer(2))).toBe(Integer(6));
      expect(math.lcm(Integer(8), Integer(6))).toBe(Integer(24));
      expect(math.lcm(Integer(7), Integer(2))).toBe(Integer(14));

      expect(math.lcm(Integer(18), Integer(24))).toBe(Integer(72));
      expect(math.lcm(Integer(18), Integer(-24))).toBe(Integer(72));
      expect(math.lcm(Integer(-18), Integer(24))).toBe(Integer(72));
      expect(math.lcm(Integer(-18), Integer(-24))).toBe(Integer(72));
    });

    it("should throw a `Exception` if the least common multiple is out of range", () => {
      expect(() => math.lcm(Integer(MAX), Integer(2))).toThrow(
        new Exception(Exception.OutOfRange),
      );
    });

    it("should throw a `Exception` if the `arg1` and the `arg2` are zeros", () => {
      expect(() => math.lcm(Integer(0), Integer(0))).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
    });
  });
});
