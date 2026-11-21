import type { NumericLike } from "../numeric/numeric-like";

import { isBigint } from "./is-bigint";

/**
 * The {@link toBigint} function converts the passed {@link NumericLike}
 * `value` to the `bigint` type.
 *
 * @param value - The value to be converted.
 *
 * @returns The converted `bigint` value.
 *
 * @public
 */
export function toBigint(value: NumericLike): bigint {
  return isBigint(value) ? value : BigInt(value);
}
