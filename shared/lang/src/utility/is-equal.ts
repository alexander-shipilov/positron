/**
 * The {@link isEqual} type-guard function determines whether the passed
 * `value` is strictly equal to the `expected` value.
 *
 * @param value - The value to check equality.
 *
 * @param expected - The expected value.
 *
 * @returns A boolean indicating whether the passed arguments are strictly
 *   equal.
 *
 * @public
 */
export function isEqual<TValue, TExpected extends TValue>(
  value: TValue,
  expected: TExpected,
): value is TExpected {
  return value === expected;
}
