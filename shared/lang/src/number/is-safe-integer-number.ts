/**
 * The {@link isSafeIntegerNumber} type-guard function determines whether the
 * provided value is a number that is a `safe integer`. This is type-guard
 * version of the `Number.isSafeInteger` function.
 *
 * @remarks
 *   The safe integers consist of all integers from `-(2 ** 53 - 1)` to
 *   `2 ** 53 - 1`, inclusive (`±9,007,199,254,740,991`). A safe integer is an
 *   integer that:
 *
 *   - can be exactly represented as an IEEE-754 double precision number, and
 *
 *   - whose IEEE-754 representation cannot be the result of rounding any other
 *    integer to fit the IEEE-754 representation.
 *
 *   For example, `2 ** 53 - 1` is a safe integer: it can be exactly
 *   represented, and no other integer rounds to it under any IEEE-754 rounding
 *   mode. In contrast, `2 ** 53` is not a safe integer: it can be exactly
 *   represented in IEEE-754, but the integer `2 ** 53 + 1` can't be directly
 *   represented in IEEE-754 but instead rounds to `2 ** 53` under
 *   round-to-nearest and round-to-zero rounding.
 *
 * @param maybeSafeIntegerNumber - The value to be tested for being a safe
 *   integer.
 *
 * @returns The boolean value `true` if the given value is a number that is a
 *   safe integer. Otherwise, `false`.
 *
 * @public
 */
export function isSafeIntegerNumber(
  maybeSafeIntegerNumber: unknown,
): maybeSafeIntegerNumber is number {
  return Number.isSafeInteger(maybeSafeIntegerNumber);
}
