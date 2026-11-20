/**
 * The {@link isIntegerNumber} type-guard function determines whether the
 * passed value is an integer. This is type-guard version of the
 * `Number.isInteger` function.
 *
 * @param maybeIntegerNumber - The value to be tested for being an integer.
 *
 * @returns The boolean value `true` if the given value is an integer.
 *   Otherwise, `false`.
 *
 * @public
 */
export function isIntegerNumber(
  maybeIntegerNumber: unknown,
): maybeIntegerNumber is number {
  return Number.isInteger(maybeIntegerNumber);
}
