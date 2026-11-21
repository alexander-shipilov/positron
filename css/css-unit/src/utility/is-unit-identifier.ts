/**
 * The {@link isUnitIdentifier} function determines whether the passed
 * `maybeUnit` can be used as a lowercase unit identifier.
 *
 * @param maybeUnit - The string value to check.
 *
 * @returns `true` if `maybeUnit` is a non-empty lowercase string; otherwise,
 *   `false`.
 *
 * @public
 */
export function isUnitIdentifier(maybeUnit: string): boolean {
  return maybeUnit !== "" && maybeUnit === maybeUnit.toLowerCase();
}
