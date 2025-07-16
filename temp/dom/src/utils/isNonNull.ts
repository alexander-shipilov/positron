/**
 * Checks if the passed `value` is non-null
 * @param value - Value
 */
export function isNonNull<T>(value: T): value is Exclude<T, null> {
  return value !== null;
}
