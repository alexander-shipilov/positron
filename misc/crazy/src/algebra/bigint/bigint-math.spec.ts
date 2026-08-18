import { describe, expect, it } from "@jest/globals";

import { isBigint } from "@positron/core";

import { Exception } from "../../exception";

import { BigintMath } from "./bigint-math";

describe("BigintMath", () => {
  const math = new BigintMath(BigInt, isBigint);

  describe("#compare(arg1, arg2)", () => {
    it("should return `1` if the `arg1` is greater than the `arg2`", () => {
      expect(math.compare(6n, 2n)).toBe(1);
    });

    it("should return `-1` if the `arg1` is less than the `arg2`", () => {
      expect(math.compare(2n, 6n)).toBe(-1);
    });

    it("should return `0` if the `arg1` is equal the `arg2`", () => {
      expect(math.compare(2n, 2n)).toBe(0);
    });
  });

  describe("#abs(arg)", () => {
    it("should return the absolute arg of a the `arg`", () => {
      expect(math.abs(0n)).toBe(0n);
      expect(math.abs(1n)).toBe(1n);
      expect(math.abs(-1n)).toBe(1n);
    });
  });

  describe("#inv(arg)", () => {
    it("should return a the `arg` if the `arg` is a divisor of `1n`", () => {
      expect(math.inv(1n)).toBe(1n);
      expect(math.inv(-1n)).toBe(-1n);
    });

    it("should throw a `Exception` if the `arg` is not a divisor of `1n`", () => {
      expect(() => math.inv(2n)).toThrow(
        new Exception(Exception.NonIntegralDivision),
      );
      expect(() => math.inv(0n)).toThrow(new Exception(Exception.ZeroDivisor));
    });
  });

  describe("#neg(arg)", () => {
    it("should negate the passed the `arg`", () => {
      expect(math.neg(0n)).toBe(-0n);
      expect(math.neg(-0n)).toBe(0n);
      expect(math.neg(2n)).toBe(-2n);
      expect(math.neg(-2n)).toBe(2n);
    });
  });

  describe("#sign(arg)", () => {
    it("should return `0n` if the `arg` is equal zero", () => {
      expect(math.sign(0n)).toBe(0n);
    });

    it("should return `1n` if the `arg` is greater than zero", () => {
      expect(math.sign(1n)).toBe(1n);
      expect(math.sign(2n)).toBe(1n);
    });

    it("should return `-1n` if the `arg` is less than zero", () => {
      expect(math.sign(-1n)).toBe(-1n);
      expect(math.sign(-2n)).toBe(-1n);
    });
  });

  describe("#add(arg1, arg2)", () => {
    it("should return the sum of the `arg1` and the `arg2`", () => {
      expect(math.add(3n, 2n)).toBe(5n);
      expect(math.add(3n, -2n)).toBe(1n);
      expect(math.add(-3n, 2n)).toBe(-1n);
      expect(math.add(-3n, -2n)).toBe(-5n);
    });
  });

  describe("#sub(arg1, arg2)", () => {
    it("should return the difference between the `arg1` and the `arg2`", () => {
      expect(math.sub(3n, 2n)).toBe(1n);
      expect(math.sub(3n, -2n)).toBe(5n);
      expect(math.sub(-3n, 2n)).toBe(-5n);
      expect(math.sub(-3n, -2n)).toBe(-1n);
    });
  });

  describe("#mul(arg1, arg2)", () => {
    it("should return the product of the `arg1` and the `arg2`", () => {
      expect(math.mul(3n, 2n)).toBe(6n);
      expect(math.mul(3n, -2n)).toBe(-6n);
      expect(math.mul(-3n, 2n)).toBe(-6n);
      expect(math.mul(-3n, -2n)).toBe(6n);
    });
  });

  describe("#pow(arg1, arg2)", () => {
    it("should raise the `arg1` to the power the `arg2`", () => {
      expect(math.pow(1n, 0n)).toBe(1n);
      expect(math.pow(2n, 4n)).toBe(16n);
      expect(math.pow(-2n, 3n)).toBe(-8n);
    });

    it("should raise to the negative power if the `arg1` is divisor of `1n`", () => {
      expect(math.pow(1n, -1n)).toBe(1n);
      expect(math.pow(1n, -2n)).toBe(1n);
      expect(math.pow(-1n, -1n)).toBe(-1n);
      expect(math.pow(-1n, -2n)).toBe(1n);
    });

    it("should throw a `Exception` if the `arg1` is not divisor of `1n` and the `arg2` is negative", () => {
      expect(() => math.pow(2n, -1n)).toThrow(
        new Exception(Exception.NonIntegralDivision),
      );
    });

    it("should throw a `Exception` if the `arg1` and the `arg2` are `0n`", () => {
      expect(() => math.pow(0n, 0n)).toThrow(
        new Exception(Exception.ZeroPowerOfZero),
      );
    });
  });

  describe("#div(arg1, arg2)", () => {
    it("should return the quotient of the `arg1` divided by the `arg2` if the `arg2` is a divisor of the `arg1`", () => {
      expect(math.div(6n, 2n)).toBe(3n);
      expect(math.div(5n, 1n)).toBe(5n);
    });

    it("should throw a `Exception` if the `arg2` is not a divisor of the `arg1`", () => {
      expect(() => math.div(6n, 4n)).toThrow(
        new Exception(Exception.NonIntegralDivision),
      );
      expect(() => math.div(1n, 4n)).toThrow(
        new Exception(Exception.NonIntegralDivision),
      );
    });

    it("should throw a `Exception` if the `arg2` is zero", () => {
      expect(() => math.div(6n, 0n)).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
      expect(() => math.div(0n, 0n)).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
    });
  });

  describe("#rem(arg1, arg2)", () => {
    it("should return reminder left over when the `arg1` is divided by the `arg2`", () => {
      expect(math.rem(0n, 3n)).toBe(0n);
      expect(math.rem(2n, 3n)).toBe(2n);
      expect(math.rem(4n, 3n)).toBe(1n);
      expect(math.rem(4n, -3n)).toBe(1n);
      expect(math.rem(-4n, 3n)).toBe(2n);
      expect(math.rem(-4n, -3n)).toBe(2n);
    });

    it("should throw a `Exception` if the `arg2` is zero", () => {
      expect(() => math.rem(6n, 0n)).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
    });
  });

  describe("#divRem(arg1, arg2)", () => {
    it("should return a tuple of quotient and remainder from division the `arg1` by the `arg2`", () => {
      expect(math.divRem(6n, 2n)).toEqual([3n, 0n]);
      expect(math.divRem(7n, 3n)).toEqual([2n, 1n]);
      expect(math.divRem(-7n, 3n)).toEqual([-3n, 2n]);
    });

    it("should throw a `Exception` if the `arg2` is zero", () => {
      expect(() => math.div(6n, 0n)).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
    });
  });

  describe("#gcd(arg1, arg2)", () => {
    it("should return the greatest common divisor of the `arg1` and the `arg2`", () => {
      expect(math.gcd(6n, 0n)).toBe(6n);
      expect(math.gcd(0n, 6n)).toBe(6n);

      expect(math.gcd(6n, 2n)).toBe(2n);
      expect(math.gcd(8n, 6n)).toBe(2n);
      expect(math.gcd(7n, 2n)).toBe(1n);

      expect(math.gcd(18n, 24n)).toBe(6n);
      expect(math.gcd(18n, -24n)).toBe(6n);
      expect(math.gcd(-18n, 24n)).toBe(6n);
      expect(math.gcd(-18n, -24n)).toBe(6n);
    });

    it("should throw a `Exception` if the `arg1` and the `arg2` are equal `0n`", () => {
      expect(() => math.gcd(0n, 0n)).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
    });
  });

  describe("#lcm(arg1, arg2)", () => {
    it("should return the least common multiple of the `arg1` and the `arg2`", () => {
      expect(math.lcm(6n, 0n)).toBe(0n);
      expect(math.lcm(0n, 6n)).toBe(0n);

      expect(math.lcm(6n, 2n)).toBe(6n);
      expect(math.lcm(8n, 6n)).toBe(24n);
      expect(math.lcm(7n, 2n)).toBe(14n);

      expect(math.lcm(18n, 24n)).toBe(72n);
      expect(math.lcm(18n, -24n)).toBe(72n);
      expect(math.lcm(-18n, 24n)).toBe(72n);
      expect(math.lcm(-18n, -24n)).toBe(72n);
    });

    it("should throw a `Exception` if the `arg1` and the `arg2` are zeros", () => {
      expect(() => math.lcm(0n, 0n)).toThrow(
        new Exception(Exception.ZeroDivisor),
      );
    });
  });
});
