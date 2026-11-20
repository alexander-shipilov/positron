import type { NumericLike } from "../numeric/numeric-like";

import { isBigint } from "./is-bigint";

/**
 * The {@link toBigint} converts the passed {@link NumericLike} `value` to the
 * `bigint` type.
 *
 * @param value - The value to be converted.
 *
 * @public
 */
export function toBigint(value: NumericLike): bigint {
  return isBigint(value) ? value : BigInt(value);
}
