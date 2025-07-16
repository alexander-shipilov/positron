/**
 * Converts first letter of the passed string to the upper case.
 * Added for compatibility with `Capitalize` type.
 *
 * @example
 * ```ts
 *  const getter = <TKey extends string>(key: TKey): `get${Capitalize<TKey>}`
 *   => `get${capitalize(key)}`
 * ```
 *
 * @public
 */
export function capitalize<TValue extends string>(
  value: TValue,
): Capitalize<TValue> {
  return (
    value.length > 0 ? value.charAt(0).toUpperCase() + value.slice(1) : value
  ) as Capitalize<TValue>;
}
