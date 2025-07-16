import { isNumber } from "../number";
import { hasProperty } from "../property";

/**
 * Function {@link isArrayLike} determines if the passed `value` is the
 *   `ArrayLike`
 *
 * @param value - Value to check
 *
 * @public
 */
export function isArrayLike<TValue = unknown>(
  value: ArrayLike<unknown> | TValue,
): value is ArrayLike<unknown> {
  return hasProperty(value, "length") && isNumber(value.length);
}
