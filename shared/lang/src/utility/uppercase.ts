/**
 * The {@link uppercase} function converts the given string converted to
 * uppercase. Added for compatibility with `Uppercase` type.
 *
 * @example
 * ```ts
 *  // todo: Add example
 * ```
 *
 * @public
 */
export function uppercase<TValue extends string>(
  value: TValue,
): Uppercase<TValue> {
  return value.toUpperCase() as Uppercase<TValue>;
}
