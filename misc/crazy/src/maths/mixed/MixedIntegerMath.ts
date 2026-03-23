import type { NumberLike, Pair } from "@positron/core";

import type { IntegralMath } from "../integral";
import type { MixedInteger } from "../types";
import { BigIntegerMath } from "../big-integer";
import { OutOfRangeError } from "../error";
import { isSmallInteger, SmallIntegerMath } from "../small";

import { toMixedInteger } from "./toMixedInteger";

/**
 * Integer math
 */
export const MixedIntegerMath: Readonly<IntegralMath<MixedInteger>> = {
  ZERO: 0 as MixedInteger,

  ONE: 1 as MixedInteger,

  equals(value1: MixedInteger, value2: MixedInteger): boolean {
    return MixedIntegerMath.compare(value1, value2) === 0;
  },

  compare(value1: MixedInteger, value2: MixedInteger): number {
    return value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
  },

  abs(value: MixedInteger): MixedInteger {
    return isSmallInteger(value)
      ? SmallIntegerMath.abs(value)
      : BigIntegerMath.abs(value);
  },

  inv(value: MixedInteger): MixedInteger {
    return isSmallInteger(value)
      ? SmallIntegerMath.inv(value)
      : BigIntegerMath.inv(value);
  },

  neg(value: MixedInteger): MixedInteger {
    return isSmallInteger(value)
      ? SmallIntegerMath.neg(value)
      : BigIntegerMath.neg(value);
  },

  sign(value: MixedInteger): MixedInteger {
    return isSmallInteger(value)
      ? SmallIntegerMath.sign(value)
      : BigIntegerMath.sign(value);
  },

  add(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    if (isSmallInteger(value1) && isSmallInteger(value2)) {
      try {
        return SmallIntegerMath.add(value1, value2);
      } catch (error: unknown) {
        if (!(error instanceof OutOfRangeError)) {
          throw error;
        }
      }
    }

    return toMixedInteger(BigIntegerMath.add(BigInt(value1), BigInt(value2)));
  },

  sub(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    if (isSmallInteger(value1) && isSmallInteger(value2)) {
      try {
        return SmallIntegerMath.sub(value1, value2);
      } catch (error: unknown) {
        if (!(error instanceof OutOfRangeError)) {
          throw error;
        }
      }
    }

    return toMixedInteger(BigIntegerMath.sub(BigInt(value1), BigInt(value2)));
  },

  mul(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    if (isSmallInteger(value1) && isSmallInteger(value2)) {
      try {
        return SmallIntegerMath.mul(value1, value2);
      } catch (error: unknown) {
        if (!(error instanceof OutOfRangeError)) {
          throw error;
        }
      }
    }

    return toMixedInteger(BigIntegerMath.mul(BigInt(value1), BigInt(value2)));
  },

  div(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    return isSmallInteger(value1) && isSmallInteger(value2)
      ? SmallIntegerMath.div(value1, value2)
      : BigIntegerMath.div(BigInt(value1), BigInt(value2));
  },

  pow(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    if (isSmallInteger(value1) && isSmallInteger(value2)) {
      try {
        return SmallIntegerMath.pow(value1, value2);
      } catch (error: unknown) {
        if (!(error instanceof OutOfRangeError)) {
          throw error;
        }
      }
    }

    return toMixedInteger(BigIntegerMath.pow(BigInt(value1), BigInt(value2)));
  },

  mod(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    return isSmallInteger(value1) && isSmallInteger(value2)
      ? SmallIntegerMath.mod(value1, value2)
      : BigIntegerMath.mod(BigInt(value1), BigInt(value2));
  },

  divMod(value1: MixedInteger, value2: MixedInteger): Pair<MixedInteger> {
    return isSmallInteger(value1) && isSmallInteger(value2)
      ? SmallIntegerMath.divMod(value1, value2)
      : BigIntegerMath.divMod(BigInt(value1), BigInt(value2));
  },

  gcd(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    return isSmallInteger(value1) && isSmallInteger(value2)
      ? SmallIntegerMath.gcd(value1, value2)
      : BigIntegerMath.gcd(BigInt(value1), BigInt(value2));
  },

  lcm(value1: MixedInteger, value2: MixedInteger): MixedInteger {
    if (isSmallInteger(value1) && isSmallInteger(value2)) {
      try {
        return SmallIntegerMath.lcm(value1, value2);
      } catch (error: unknown) {
        if (!(error instanceof OutOfRangeError)) {
          throw error;
        }
      }
    }

    return toMixedInteger(BigIntegerMath.lcm(BigInt(value1), BigInt(value2)));
  },

  toValue(value: NumberLike): MixedInteger {
    return toMixedInteger(value);
  },
};
