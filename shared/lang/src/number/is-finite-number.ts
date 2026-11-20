/**
 * The {@link isFiniteNumber} type-guard function determines whether the passed
 * `value` is a finite number. This is type-guard version of the
 * `Number.isFinite` function.
 *
 * @remarks
 *   The {@link isFiniteNumber} checks that the given `value` is a number,
 *   that is not equal to `Infinity`, `-Infinity`, or `NaN`.
 *
 * @param maybeFiniteNumber - The value to be tested for finiteness.
 *
 * @returns The boolean value `true` if the given value is a finite number.
 *   Otherwise, `false`.
 *
 * @public
 */
export function isFiniteNumber(
  maybeFiniteNumber: unknown,
): maybeFiniteNumber is number {
  return Number.isFinite(maybeFiniteNumber);
}
