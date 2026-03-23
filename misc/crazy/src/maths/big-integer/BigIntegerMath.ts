import type { NumberLike, Pair } from "@positron/core";

import type { IntegralMath } from "../integral";
import { OutOfRangeError } from "../error";

import type { BigInteger } from "./BigInteger";

export const BigIntegerMath: Readonly<IntegralMath<BigInteger>> = {
  ZERO: 0n,

  ONE: 1n,

  equals(value1: BigInteger, value2: BigInteger): boolean {
    return value1 === value2;
  },

  compare(value1: BigInteger, value2: BigInteger): number {
    return value1 > value2 ? 1 : value1 < value2 ? -1 : 0;
  },

  abs(value: BigInteger): BigInteger {
    return value < this.ZERO ? -value : value;
  },

  inv(value: BigInteger): BigInteger {
    return BigIntegerMath.div(this.ONE, value);
  },

  neg(value: BigInteger): BigInteger {
    return value === this.ZERO ? value : -value;
  },

  sign(value: BigInteger): BigInteger {
    const { ZERO, ONE } = this;

    return value < ZERO ? -ONE : value > ZERO ? ONE : ZERO;
  },

  add(value1: BigInteger, value2: BigInteger): BigInteger {
    try {
      return value1 + value2;
    } catch (error: unknown) {
      throw new OutOfRangeError("Result is out of range");
    }
  },

  sub(value1: BigInteger, value2: BigInteger): BigInteger {
    try {
      return value1 - value2;
    } catch (error: unknown) {
      throw new OutOfRangeError("Result is out of range");
    }
  },

  mul(value1: BigInteger, value2: BigInteger): BigInteger {
    try {
      return value1 * value2;
    } catch (error: unknown) {
      throw new OutOfRangeError("Result is out of range");
    }
  },

  div(value1: BigInteger, value2: BigInteger): BigInteger {
    if (value1 % value2 !== this.ZERO) {
      throw new RangeError("Result of division is not a BigInteger");
    }

    return value1 / value2;
  },

  pow(value1: BigInteger, value2: BigInteger): BigInteger {
    const { ZERO } = this;

    if (value1 === ZERO && value2 === ZERO) {
      throw new RangeError("Zero to the power of zero");
    }

    try {
      return value2 < ZERO
        ? BigIntegerMath.inv(value1) ** -value2
        : value1 ** value2;
    } catch (error: unknown) {
      throw new OutOfRangeError("Result is out of range");
    }
  },

  mod(value1: BigInteger, value2: BigInteger): BigInteger {
    return ((value1 % value2) + value2) % value2;
  },

  divMod(value1: BigInteger, value2: BigInteger): Pair<BigInteger> {
    const remainder = BigIntegerMath.mod(value1, value2);

    return [(value1 - remainder) / value2, remainder];
  },

  gcd(value1: BigInteger, value2: BigInteger): BigInteger {
    const { ZERO } = this;

    if (value1 === ZERO && value2 === ZERO) {
      throw new RangeError("Division by zero");
    }

    let divisor = BigIntegerMath.abs(value2);
    let remainder = BigIntegerMath.abs(value1);

    while (remainder !== ZERO) {
      [divisor, remainder] = [remainder, divisor % remainder];
    }

    return divisor;
  },

  lcm(value1: BigInteger, value2: BigInteger): BigInteger {
    const gcd = BigIntegerMath.gcd(value1, value2);

    try {
      return BigIntegerMath.abs(value1 * (value2 / gcd));
    } catch (error: unknown) {
      throw new OutOfRangeError("Result is out of range");
    }
  },

  toValue(value: NumberLike): BigInteger {
    return BigInt(value);
  },
};
