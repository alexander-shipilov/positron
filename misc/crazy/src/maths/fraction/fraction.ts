import type { NumberLike } from "@positron/core";

import type { Vector2 } from "../../utils";

/**
 *
 * @public
 */
export type Fraction<TValue> = Readonly<Vector2<TValue>>;

/**
 * The {@link Fraction} function creates a {@link Fraction}.
 *
 * @param toValue - A function
 * @param num - Numerator
 * @param den - Denominator
 *
 * @public
 */
export function Fraction<TValue>(
  toValue: (value: NumberLike) => TValue,
  num: NumberLike,
  den: NumberLike = 1,
): Fraction<TValue> {
  return [toValue(num), toValue(den)];
}
