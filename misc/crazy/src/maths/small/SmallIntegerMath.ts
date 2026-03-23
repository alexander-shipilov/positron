import type { NumberLike, Pair } from "core";

import type { IntegralMath } from "../integral";
import type { SmallInteger } from "../types";
import { OutOfRangeError } from "../error";

import { isSmallInteger } from "./isSmallInteger";
import { toSmallInteger } from "./toSmallInteger";

/**
 * Converts unsafe operation result to `smallint`
 * @param value - Unsafe operation result
 */
function toResult(value: number): SmallInteger {
  if (isSmallInteger(value)) {
    return value;
  }

  throw new OutOfRangeError("Result is out of range");
}

export const SmallIntegerMath: Readonly<IntegralMath<SmallInteger>> = {
  ZERO: 0 as SmallInteger,

  ONE: 1 as SmallInteger,

  equals(value1: SmallInteger, value2: SmallInteger): boolean {
    return value1 === value2;
  },

  compare(value1: SmallInteger, value2: SmallInteger): number {
    return value1 > value2 ? 1 : value1 < value2 ? -1 : 0;
  },

  abs(value: SmallInteger): SmallInteger {
    return Math.abs(value) as SmallInteger;
  },

  inv(value: SmallInteger): SmallInteger {
    return SmallIntegerMath.div(this.ONE, value);
  },

  neg(value: SmallInteger): SmallInteger {
    return (value === this.ZERO ? value : -value) as SmallInteger;
  },

  sign(value: SmallInteger): SmallInteger {
    return Math.sign(value) as SmallInteger;
  },

  add(value1: SmallInteger, value2: SmallInteger): SmallInteger {
    return toResult(value1 + value2);
  },

  sub(value1: SmallInteger, value2: SmallInteger): SmallInteger {
    return toResult(value1 - value2);
  },

  mul(value1: SmallInteger, value2: SmallInteger): SmallInteger {
    return toResult(value1 * value2);
  },

  div(value1: SmallInteger, value2: SmallInteger): SmallInteger {
    const { ZERO } = this;

    if (value2 === ZERO) {
      throw new RangeError("Division by zero");
    }

    if (value1 % value2 !== ZERO) {
      throw new RangeError("Result is not integer");
    }

    return (value1 / value2) as SmallInteger;
  },

  pow(value1: SmallInteger, value2: SmallInteger): SmallInteger {
    const { ZERO } = this;

    if (value1 === ZERO && value2 === ZERO) {
      throw new RangeError("Zero to the power of zero");
    }

    return toResult(
      value2 < ZERO
        ? SmallIntegerMath.inv(value1) ** -value2
        : value1 ** value2,
    );
  },

  mod(value1: SmallInteger, value2: SmallInteger): SmallInteger {
    if (value2 === this.ZERO) {
      throw new RangeError("Division by zero");
    }

    return (((value1 % value2) + value2) % value2) as SmallInteger;
  },

  divMod(value1: SmallInteger, value2: SmallInteger): Pair<SmallInteger> {
    const remainder = SmallIntegerMath.mod(value1, value2);

    return [((value1 - remainder) / value2) as SmallInteger, remainder];
  },

  gcd(value1: SmallInteger, value2: SmallInteger): SmallInteger {
    const { ZERO } = this;

    if (value1 === ZERO && value2 === ZERO) {
      throw new RangeError("Division by zero");
    }

    let divisor = SmallIntegerMath.abs(value2);
    let remainder = SmallIntegerMath.abs(value1);

    while (remainder !== ZERO) {
      [divisor, remainder] = [remainder, (divisor % remainder) as SmallInteger];
    }

    return divisor;
  },

  lcm(value1: SmallInteger, value2: SmallInteger): SmallInteger {
    const gcd = SmallIntegerMath.gcd(value1, value2);

    return toResult(
      SmallIntegerMath.abs((value1 * (value2 / gcd)) as SmallInteger),
    );
  },

  toValue(value: NumberLike): SmallInteger {
    return toSmallInteger(value);
  },
};
