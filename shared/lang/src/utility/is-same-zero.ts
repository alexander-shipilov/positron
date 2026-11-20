/**
 * The {@link isSameZero} type-guard function determined whether the passed
 * `value` is the same as `expected` value. Its implements same-value-zero
 * equality algorithm.
 *
 * @remarks
 *   The {@link isSameZero} is not equivalent to the `===` operator. The only
 *   difference between {@link isSameZero} and `===` is in their treatment of
 *   signed `NaN` values. The `===` operator (and the `==` operator) treats
 *   `NaN` values as not equal to each other.
 *
 *   The {@link isSameZero} is not equivalent to the `Object.is` function. The
 *   only difference between {@link isSameZero} and `Object.is` is in their
 *   treatment of signed zeros. The `Object.is` treats `-0` is not equal to
 *   `0`.
 *
 * @param value - The value to check equality.
 *
 * @param expected - The expected value.
 *
 * @returns A boolean indicating whether the two arguments are the same value.
 *
 * @public
 */
export function isSameZero<TValue, TExpected extends TValue>(
  value: TValue,
  expected: TExpected,
): value is TExpected {
  return value === expected || (value !== value && expected !== expected);
}
