import { assertType, error, isFiniteNumber } from "@positron/lang";

import type { Double } from "./double";

/**
 * The {@link toDouble} function validates that `value` is a finite `number`
 * and brands it as {@link Double}.
 *
 * @param value - The numeric value to validate.
 *
 * @returns The finite number branded as {@link Double}.
 *
 * @throws `RangeError` If `value` is `NaN`, `Infinity`, or `-Infinity`.
 *
 * @public
 */
export function toDouble(value: number): Double {
  return assertType(value, isFiniteNumber, () =>
    error("The provided double value is non-finite.", TypeError),
  ) as Double;
}
