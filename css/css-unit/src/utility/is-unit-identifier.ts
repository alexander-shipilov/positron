/**
 * The {@link isUnitIdentifier} function determines if the passed `maybeUnit`
 * can be used as unit identifier.
 *
 * @param maybeUnit - The value to be checked.
 *
 * @public
 */
export function isUnitIdentifier(maybeUnit: string): boolean {
  return maybeUnit !== "" && maybeUnit === maybeUnit.toLowerCase();
}
