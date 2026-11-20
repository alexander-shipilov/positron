/**
 * The {@link isNonNullable} function determines whether the passed
 * `maybeNonNullable` is a `NonNullable`.
 *
 * @param maybeNonNullable - The value to the check.
 *
 * @returns The boolean value `true` if the given `maybeNonNullable` is neither
 *   `null` nor `undefined`. Otherwise, `false`.
 *
 * @public
 */
export function isNonNullable<TValue>(
  maybeNonNullable: TValue,
): maybeNonNullable is NonNullable<TValue> {
  return maybeNonNullable != null;
}
