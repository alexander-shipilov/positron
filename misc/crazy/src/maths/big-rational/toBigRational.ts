import type { NumberLike } from "@positron/core";

import type { BigRational } from "../types";
import { BigIntegerMath } from "../big-integer/BigIntegerMath";
import { toIntegralFraction } from "../integral";

/**
 * Converts a pair of values to `rational`
 * @param num - Numerator
 * @param den - Denominator
 */
export function toBigRational(
  num: NumberLike,
  den: NumberLike = 1,
): BigRational {
  return toIntegralFraction(BigIntegerMath, num, den);
}
