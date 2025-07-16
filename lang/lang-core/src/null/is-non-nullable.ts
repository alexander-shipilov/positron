/**
 * The {@link isNonNullable} function checks if the passed
 * {@link maybeNonNullable} is a `NonNullable`
 *
 * @param maybeNonNullable - The value to the check
 *
 * @public
 */
export function isNonNullable<TValue>(
  maybeNonNullable: TValue,
): maybeNonNullable is NonNullable<TValue> {
  return maybeNonNullable != null;
}
