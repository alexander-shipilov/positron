/**
 * Checks if the passed string `key` has the specified `prefix`
 * @public
 *
 * @example
 * ```ts
 *  isPrefixed('foo-bar', 'foo') // true
 *  isPrefixed('foo-bar', 'baz') // false
 *  isPrefixed('bar', 'foo') // false
 * ```
 *
 * @param key - Property to check
 * @param prefix - Prefix to check
 */
export function isPrefixedKey(key: string, prefix: string): boolean {
  return key.length > prefix.length + 1 && key.startsWith(`${prefix}-`);
}
