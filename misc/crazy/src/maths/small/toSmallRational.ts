import type { NumberLike } from "@positron/core";

import type { SmallRational } from "../types";
import { Fraction } from "../fraction";

import { SmallIntegerMath } from "./SmallIntegerMath";

/**
 * Converts a pair of values to a `rational`
 * @param value1 - Numerator
 * @param value2 - Denominator
 */
export function toSmallRational(
  value1: NumberLike,
  value2: NumberLike = 1,
): SmallRational {
  return Fraction(SmallIntegerMath, value1, value2);
}
