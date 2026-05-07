/**
 * The {@link isNegativeZero} function checks if the passed
 *
 * @param maybeNegativeZero
 */
export function isNegativeZero(maybeNegativeZero: number): boolean {
  return Object.is(maybeNegativeZero, -0);
}
