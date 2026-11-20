import type { NumericLike } from "@positron/lang";

import type { Vector2 } from "../../utils";

/**
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
  toValue: (value: NumericLike) => TValue,
  num: NumericLike,
  den: NumericLike = 1,
): Fraction<TValue> {
  return [toValue(num), toValue(den)];
}
