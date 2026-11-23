import { NUMBER_UNIT } from "../unit/number-unit";

/**
 * The {@link isNumberUnit} function determines whether `maybeNumber` matches
 * the `"number"` unit identifier regardless of character case.
 *
 * @param maybeNumber - The string value to inspect.
 *
 * @returns `true` if `maybeNumber` equals `"number"` case-insensitively;
 *   otherwise, `false`.
 *
 * @public
 */
export function isNumberUnit(maybeNumber: string): boolean {
  return maybeNumber.toLowerCase() === NUMBER_UNIT;
}
