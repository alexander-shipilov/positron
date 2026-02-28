import { isNumber } from "../number";
import { hasProperty } from "../property";

/**
 * The {@link isArrayLike} function determines if the passed `maybeArrayLike`
 * is the
 *   `ArrayLike`
 *
 * @param maybeArrayLike - Value to check
 *
 * @public
 */
export function isArrayLike(
  maybeArrayLike: unknown,
): maybeArrayLike is ArrayLike<unknown> {
  return (
    hasProperty(maybeArrayLike, "length") && isNumber(maybeArrayLike.length)
  );
}
