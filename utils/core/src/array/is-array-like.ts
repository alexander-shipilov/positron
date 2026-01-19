import { isNumber } from "../number";
import { isPropertyOwner } from "../property";

/**
 * The {@link isArrayLike} function determines if the passed `value` is the
 *   `ArrayLike`
 *
 * @param value - Value to check
 *
 * @public
 */
export function isArrayLike<TValue = unknown>(
  value: ArrayLike<unknown> | TValue,
): value is ArrayLike<unknown> {
  return isPropertyOwner(value, "length") && isNumber(value.length);
}
