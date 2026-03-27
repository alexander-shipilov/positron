import type { NumberLike } from "@positron/core";

import type { MixedRational } from "../types";
import { IntegralFraction } from "../integral";

import { MixedIntegerMath } from "./MixedIntegerMath";

/**
 * Converts a pair of values to `rational`
 * @param value1 - Numerator
 * @param value2 - Denominator
 */
export function toMixedRational(
  value1: NumberLike,
  value2: NumberLike = 1,
): MixedRational {
  return IntegralFraction(MixedIntegerMath, value1, value2);
}
