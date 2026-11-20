/**
 * The {@link lowercase} function converts the given string converted to
 * lowercase. Added for compatibility with `Lowercase` type.
 *
 * @public
 */
export function lowercase<TValue extends string>(
  value: TValue,
): Lowercase<TValue> {
  return value.toLowerCase() as Lowercase<TValue>;
}
