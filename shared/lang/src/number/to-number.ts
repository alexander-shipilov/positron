import type { NumericLike } from "../numeric/numeric-like";

import { isNumber } from "./is-number";

/**
 * The {@link toNumber} function converts the passed {@link NumericLike}
 * `value` to the `number` type.
 *
 * @param value - The value to be converted.
 *
 * @returns The converted `number` value.
 *
 * @public
 */
export function toNumber(value: NumericLike): number {
  return isNumber(value) ? value : Number(value);
}
