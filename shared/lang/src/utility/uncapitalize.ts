/**
 * The {@link uncapitalize} function converts first letter of the passed string
 * to the lower case. Added for compatibility with `Uncapitalize` type.
 *
 * @example
 * ```ts
 *  // todo: Add example
 * ```
 *
 * @public
 */
export function uncapitalize<TValue extends string>(
  value: TValue,
): Uncapitalize<TValue> {
  return (
    value.length > 0 ? value.charAt(0).toLowerCase() + value.slice(1) : value
  ) as Uncapitalize<TValue>;
}
