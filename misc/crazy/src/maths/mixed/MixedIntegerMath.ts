import type { NumberLike, Pair } from "@positron/core";

import type { IntegralMath } from "../integral";
import type { MixedInteger } from "../types";
import { BigIntegerMath } from "../big-integer";
import { OutOfRangeError } from "../error";
import { IntegerMath, isSmallInteger } from "../integer";

import { toMixedInteger } from "./toMixedInteger";

/**
 * Integer math
 */
export const MixedIntegerMath: Readonly<IntegralMath<MixedInteger>> = {
  abs(value: MixedInteger): MixedInteger {
    return isSmallInteger(value)
      ? IntegerMath.abs(value)
      : BigIntegerMath.abs(value);
  },

  add(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    if (isSmallInteger(value1) && isSmallInteger(value2)) {
      try {
        return IntegerMath.add(value1, value2);
      } catch (error: unknown) {
        if (!(error instanceof OutOfRangeError)) {
          throw error;
        }
      }
    }

    return toMixedInteger(BigIntegerMath.add(BigInt(value1), BigInt(value2)));
  },

  compare(value1: MixedInteger, value2: MixedInteger): number {
    return value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
  },

  div(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    return isSmallInteger(value1) && isSmallInteger(value2)
      ? IntegerMath.div(value1, value2)
      : BigIntegerMath.div(BigInt(value1), BigInt(value2));
  },

  divMod(value1: MixedInteger, value2: MixedInteger): Pair<MixedInteger> {
    return isSmallInteger(value1) && isSmallInteger(value2)
      ? IntegerMath.divMod(value1, value2)
      : BigIntegerMath.divMod(BigInt(value1), BigInt(value2));
  },

  equals(value1: MixedInteger, value2: MixedInteger): boolean {
    return MixedIntegerMath.compare(value1, value2) === 0;
  },

  gcd(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    return isSmallInteger(value1) && isSmallInteger(value2)
      ? IntegerMath.gcd(value1, value2)
      : BigIntegerMath.gcd(BigInt(value1), BigInt(value2));
  },

  inv(value: MixedInteger): MixedInteger {
    return isSmallInteger(value)
      ? IntegerMath.inv(value)
      : BigIntegerMath.inv(value);
  },

  lcm(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    if (isSmallInteger(value1) && isSmallInteger(value2)) {
      try {
        return IntegerMath.lcm(value1, value2);
      } catch (error: unknown) {
        if (!(error instanceof OutOfRangeError)) {
          throw error;
        }
      }
    }

    return toMixedInteger(BigIntegerMath.lcm(BigInt(value1), BigInt(value2)));
  },

  mod(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    return isSmallInteger(value1) && isSmallInteger(value2)
      ? IntegerMath.mod(value1, value2)
      : BigIntegerMath.mod(BigInt(value1), BigInt(value2));
  },

  mul(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    if (isSmallInteger(value1) && isSmallInteger(value2)) {
      try {
        return IntegerMath.mul(value1, value2);
      } catch (error: unknown) {
        if (!(error instanceof OutOfRangeError)) {
          throw error;
        }
      }
    }

    return toMixedInteger(BigIntegerMath.mul(BigInt(value1), BigInt(value2)));
  },

  neg(value: MixedInteger): MixedInteger {
    return isSmallInteger(value)
      ? IntegerMath.neg(value)
      : BigIntegerMath.neg(value);
  },

  ONE: 1 as MixedInteger,

  pow(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    if (isSmallInteger(value1) && isSmallInteger(value2)) {
      try {
        return IntegerMath.pow(value1, value2);
      } catch (error: unknown) {
        if (!(error instanceof OutOfRangeError)) {
          throw error;
        }
      }
    }

    return toMixedInteger(BigIntegerMath.pow(BigInt(value1), BigInt(value2)));
  },

  sign(value: MixedInteger): MixedInteger {
    return isSmallInteger(value)
      ? IntegerMath.sign(value)
      : BigIntegerMath.sign(value);
  },

  sub(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    if (isSmallInteger(value1) && isSmallInteger(value2)) {
      try {
        return IntegerMath.sub(value1, value2);
      } catch (error: unknown) {
        if (!(error instanceof OutOfRangeError)) {
          throw error;
        }
      }
    }

    return toMixedInteger(BigIntegerMath.sub(BigInt(value1), BigInt(value2)));
  },

  toValue(value: NumberLike): MixedInteger {
    return toMixedInteger(value);
  },

  ZERO: 0 as MixedInteger,
};
