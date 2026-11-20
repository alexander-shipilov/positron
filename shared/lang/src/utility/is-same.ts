/**
 * The {@link isSame} type-guard function determined whether the passed
 * `value` is the same as `expected` value. This is type-guard version of the
 * `Object.is` function.
 *
 * @remarks
 *   The {@link isSame} is not equivalent to the `===` operator. The only
 *   difference between {@link isSame} and `===` is in their treatment of
 *   signed zeros and `NaN` values. The `===` operator treats the number values
 *   `-0` and `+0` as equal, but treats `NaN` as not equal to each other.
 *
 * @param value - The value to check equality.
 *
 * @param expected - The expected value.
 *
 * @returns A boolean indicating whether the passed arguments are the same
 *   value.
 *
 * @public
 */
export function isSame<TValue, TExpected extends TValue>(
  value: TValue,
  expected: TExpected,
): value is TExpected {
  return Object.is(value, expected);
}
