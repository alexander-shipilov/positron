import { describe, expect, it } from "@jest/globals";

import { Integer } from "../../number";
import { MathException, MathExceptionName } from "../exception";

import { IntegerMath as Math } from "./integer-math";

describe("IntegerMath", () => {
  const MAX_POW = 53;
  const MAX = 2 ** MAX_POW - 1;
  const MIN = -(2 ** MAX_POW) + 1;

  describe("#equals(value1, value2)", () => {
    it("should return `true` if the `value1` equals the `value2`", () => {
      expect(Math.equals(Integer(6), Integer(6))).toBe(true);
      expect(Math.equals(Integer(6), Integer(2))).toBe(false);
    });
  });

  describe("#compare(value1, value2)", () => {
    it("should return `1` if the `value1` is greater than the `value2`", () => {
      expect(Math.compare(Integer(6), Integer(2))).toBe(1);
    });

    it("should return `-1` if the `value1` is less than the `value2`", () => {
      expect(Math.compare(Integer(2), Integer(6))).toBe(-1);
    });

    it("should return `0` if the `value1` is equal the `value2`", () => {
      expect(Math.compare(Integer(2), Integer(2))).toBe(0);
    });
  });

  describe("#abs(value)", () => {
    it("should return the absolute value of a the `value`", () => {
      expect(Math.abs(Integer(0))).toBe(Integer(0));
      expect(Math.abs(Integer(-0))).toBe(Integer(0));
      expect(Math.abs(Integer(1))).toBe(Integer(1));
      expect(Math.abs(Integer(-1))).toBe(Integer(1));
    });
  });

  describe("#inv(value)", () => {
    it("should return a the `value` if the `value` is a divisor of `1`", () => {
      expect(Math.inv(Integer(1))).toBe(Integer(1));
      expect(Math.inv(Integer(-1))).toBe(Integer(-1));
    });

    it("should throw a `MathException` if the `value` is not a divisor of `1`", () => {
      expect(() => Math.inv(Integer(2))).toThrow(
        new MathException(MathExceptionName.NonIntegralDivision),
      );
      expect(() => Math.inv(Integer(0))).toThrow(
        new MathException(MathExceptionName.DivisionByZero),
      );
    });
  });

  describe("#neg(value)", () => {
    it("should negate the passed the `value`", () => {
      expect(Math.neg(Integer(0))).toBe(Integer(-0));
      expect(Math.neg(Integer(-0))).toBe(Integer(0));
      expect(Math.neg(Integer(2))).toBe(Integer(-2));
      expect(Math.neg(Integer(-2))).toBe(Integer(2));
    });
  });

  describe("#sign(value)", () => {
    it("should return `0` if the `value` is equal zero", () => {
      expect(Math.sign(Integer(0))).toBe(Integer(0));
    });

    it("should return `Integer(1)` if the `value` is greater than zero", () => {
      expect(Math.sign(Integer(1))).toBe(Integer(1));
      expect(Math.sign(Integer(2))).toBe(Integer(1));
    });

    it("should return `Integer(-1)` if the `value` is less than zero", () => {
      expect(Math.sign(Integer(-1))).toBe(Integer(-1));
      expect(Math.sign(Integer(-2))).toBe(Integer(-1));
    });
  });

  describe("#add(value1, value2)", () => {
    it("should return the sum of the `value1` and the `value2`", () => {
      expect(Math.add(Integer(3), Integer(2))).toBe(Integer(5));
      expect(Math.add(Integer(3), Integer(-2))).toBe(Integer(1));
      expect(Math.add(Integer(-3), Integer(2))).toBe(Integer(-1));
      expect(Math.add(Integer(-3), Integer(-2))).toBe(Integer(-5));
    });

    it("should throw a `MathException` if the sum is out of range", () => {
      expect(() => Math.add(Integer(MAX), Integer(1))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
      expect(() => Math.add(Integer(MIN), Integer(-1))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
    });
  });

  describe("#sub(value1, value2)", () => {
    it("should return the difference between the `value1` and the `value2`", () => {
      expect(Math.sub(Integer(3), Integer(2))).toBe(Integer(1));
      expect(Math.sub(Integer(3), Integer(-2))).toBe(Integer(5));
      expect(Math.sub(Integer(-3), Integer(2))).toBe(Integer(-5));
      expect(Math.sub(Integer(-3), Integer(-2))).toBe(Integer(-1));
    });

    it("should throw a `MathException` if the difference is out of range", () => {
      expect(() => Math.sub(Integer(MIN), Integer(1))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
      expect(() => Math.sub(Integer(MAX), Integer(-1))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
    });
  });

  describe("#mul(value1, value2)", () => {
    it("should return the product of the `value1` and the `value2`", () => {
      expect(Math.mul(Integer(3), Integer(2))).toBe(Integer(6));
      expect(Math.mul(Integer(3), Integer(-2))).toBe(Integer(-6));
      expect(Math.mul(Integer(-3), Integer(2))).toBe(Integer(-6));
      expect(Math.mul(Integer(-3), Integer(-2))).toBe(Integer(6));
    });

    it("should throw a `MathException` if the product is out of range", () => {
      expect(() => Math.mul(Integer(MAX), Integer(2))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
      expect(() => Math.mul(Integer(MIN), Integer(2))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
      expect(() => Math.mul(Integer(MAX), Integer(-2))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
      expect(() => Math.mul(Integer(MIN), Integer(-2))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
    });
  });

  describe("#pow(value1, value2)", () => {
    it("should raise the `value1` to the power the `value2`", () => {
      expect(Math.pow(Integer(1), Integer(0))).toBe(Integer(1));
      expect(Math.pow(Integer(2), Integer(4))).toBe(Integer(16));
      expect(Math.pow(Integer(-2), Integer(3))).toBe(Integer(-8));
    });

    it("should raise to the negative power if the `value1` is divisor of `1`", () => {
      expect(Math.pow(Integer(1), Integer(-1))).toBe(Integer(1));
      expect(Math.pow(Integer(1), Integer(-2))).toBe(Integer(1));
      expect(Math.pow(Integer(-1), Integer(-1))).toBe(Integer(-1));
      expect(Math.pow(Integer(-1), Integer(-2))).toBe(Integer(1));
    });

    it("should throw a `MathException` if the power is out of range", () => {
      expect(() => Math.pow(Integer(MAX), Integer(2))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
      expect(() => Math.pow(Integer(MIN), Integer(2))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
      expect(() => Math.pow(Integer(2), Integer(MAX_POW + 1))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
    });

    it("should throw a `MathException` if the `value1` is not divisor of `1` and the `value2` is negative", () => {
      expect(() => Math.pow(Integer(2), Integer(-1))).toThrow(
        new MathException(MathExceptionName.NonIntegralDivision),
      );
    });

    it("should throw a `MathException` if the `value1` and the `value2` are `0`", () => {
      expect(() => Math.pow(Integer(0), Integer(0))).toThrow(MathException);
    });
  });

  describe("#div(value1, value2)", () => {
    it("should return the quotient of the `value1` divided by the `value2` if the `value2` is a divisor of the `value1`", () => {
      expect(Math.div(Integer(6), Integer(2))).toBe(Integer(3));
      expect(Math.div(Integer(5), Integer(1))).toBe(Integer(5));
    });

    it("should throw a `MathException` if the `value2` is not a divisor of the `value1`", () => {
      expect(() => Math.div(Integer(6), Integer(4))).toThrow(MathException);
      expect(() => Math.div(Integer(1), Integer(4))).toThrow(MathException);
    });

    it("should throw a `MathException` if the `value2` is zero", () => {
      expect(() => Math.div(Integer(6), Integer(0))).toThrow(MathException);
      expect(() => Math.div(Integer(0), Integer(0))).toThrow(MathException);
    });
  });

  describe("#mod(value1, value2)", () => {
    it("should return reminder left over when the `value1` is divided by the `value2`", () => {
      expect(Math.mod(Integer(0), Integer(3))).toBe(Integer(0));
      expect(Math.mod(Integer(2), Integer(3))).toBe(Integer(2));
      expect(Math.mod(Integer(4), Integer(3))).toBe(Integer(1));
      expect(Math.mod(Integer(4), Integer(-3))).toBe(Integer(-2));
      expect(Math.mod(Integer(-4), Integer(3))).toBe(Integer(2));
      expect(Math.mod(Integer(-4), Integer(-3))).toBe(Integer(-1));
    });

    it("should throw a `MathException` if the `value2` is zero", () => {
      expect(() => Math.mod(Integer(6), Integer(0))).toThrow(MathException);
    });
  });

  describe("#divMod(value1, value2)", () => {
    it("should return a tuple of quotient and remainder from division the `value1` by the `value2`", () => {
      expect(Math.divMod(Integer(6), Integer(2))).toEqual([
        Integer(3),
        Integer(0),
      ]);
      expect(Math.divMod(Integer(7), Integer(3))).toEqual([
        Integer(2),
        Integer(1),
      ]);
      expect(Math.divMod(Integer(-7), Integer(3))).toEqual([
        Integer(-3),
        Integer(2),
      ]);
    });

    it("should throw a `MathException` if the `value2` is zero", () => {
      expect(() => Math.div(Integer(6), Integer(0))).toThrow(MathException);
    });
  });

  describe("#gcd(value1, value2)", () => {
    it("should return the greatest common divisor of the `value1` and the `value2`", () => {
      expect(Math.gcd(Integer(6), Integer(0))).toBe(Integer(6));
      expect(Math.gcd(Integer(0), Integer(6))).toBe(Integer(6));

      expect(Math.gcd(Integer(6), Integer(2))).toBe(Integer(2));
      expect(Math.gcd(Integer(8), Integer(6))).toBe(Integer(2));
      expect(Math.gcd(Integer(7), Integer(2))).toBe(Integer(1));

      expect(Math.gcd(Integer(18), Integer(24))).toBe(Integer(6));
      expect(Math.gcd(Integer(18), Integer(-24))).toBe(Integer(6));
      expect(Math.gcd(Integer(-18), Integer(24))).toBe(Integer(6));
      expect(Math.gcd(Integer(-18), Integer(-24))).toBe(Integer(6));
    });

    it("should throw a `MathException` if the `value1` and the `value2` are equal `0`", () => {
      expect(() => Math.gcd(Integer(0), Integer(0))).toThrow(MathException);
    });
  });

  describe("#lcm(value1, value2)", () => {
    it("should return the least common multiple of the `value1` and the `value2`", () => {
      expect(Math.lcm(Integer(6), Integer(0))).toBe(Integer(0));
      expect(Math.lcm(Integer(0), Integer(6))).toBe(Integer(0));

      expect(Math.lcm(Integer(6), Integer(2))).toBe(Integer(6));
      expect(Math.lcm(Integer(8), Integer(6))).toBe(Integer(24));
      expect(Math.lcm(Integer(7), Integer(2))).toBe(Integer(14));

      expect(Math.lcm(Integer(18), Integer(24))).toBe(Integer(72));
      expect(Math.lcm(Integer(18), Integer(-24))).toBe(Integer(72));
      expect(Math.lcm(Integer(-18), Integer(24))).toBe(Integer(72));
      expect(Math.lcm(Integer(-18), Integer(-24))).toBe(Integer(72));
    });

    it("should throw a `MathException` if the least common multiple is out of range", () => {
      expect(() => Math.lcm(Integer(MAX), Integer(2))).toThrow(
        new MathException(MathExceptionName.OutOfRange),
      );
    });

    it("should throw a `MathException` if the `value1` and the `value2` are zeros", () => {
      expect(() => Math.lcm(Integer(0), Integer(0))).toThrow(MathException);
    });
  });

  describe("#operand(value)", () => {
    it("should convert the `value` to a Integer", () => {
      expect(Math.operand(1)).toBe(Integer(1));
      expect(Math.operand("1")).toBe(Integer(1));
      expect(Math.operand(1n)).toBe(Integer(1));
    });

    it("should throw `MathException` if the numeric the `value` cannot be converted to a Integer", () => {
      expect(() => Math.operand(1.1)).toThrow(MathException);
      expect(() => Math.operand(Infinity)).toThrow(MathException);
      expect(() => Math.operand(NaN)).toThrow(MathException);
    });

    it("should throw `SyntaxError` if the `value` cannot be converted to a Integer", () => {
      expect(() => Math.operand("a")).toThrow(SyntaxError);
      expect(() => Math.operand(BigInt(MAX + 1))).toThrow(SyntaxError);
    });
  });
});
