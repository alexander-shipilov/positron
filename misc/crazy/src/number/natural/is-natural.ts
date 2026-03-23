import { isInteger } from "../integer";

import type { Natural } from "./natural";

/**
 * The {@link isNatural} function determines whether the passed
 * `maybeNatural` is an {@Link Natural}.
 *
 * @param maybeNatural - The value to be checked.
 *
 * @public
 */
export function isNatural(maybeNatural: unknown): maybeNatural is Natural {
  return isInteger(maybeNatural) && maybeNatural >= 0;
}
