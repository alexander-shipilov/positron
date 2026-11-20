import { isString } from "@positron/lang";

import type { Prefix } from "./prefix";
import type { PrefixedKey } from "./prefixed-key";
import { PREFIX_SEPARATOR } from "./prefix-separator";

/**
 * The {@link isPrefixedKey} function determines whether the passed `key` is
 * prefixed by the specified `prefix`.
 *
 * @example
 * ```ts
 *  isPrefixedKey('foo', 'foo-bar') // true
 *  isPrefixedKey('foo-bar', 'foo-bar-ted') // true
 *
 *  isPrefixedKey('baz', 'foo-bar') // false
 *  isPrefixedKey('foo', 'bar') // false
 *  isPrefixedKey('foo', 'foo') // false
 * ```
 *
 * @param prefix - The prefix.
 *
 * @param key - The property key to be checked.
 *
 * @public
 */
export function isPrefixedKey<TPrefix extends Prefix>(
  prefix: TPrefix,
  key: PropertyKey,
): key is PrefixedKey<TPrefix> {
  return (
    isString(key) &&
    key.length > prefix.length &&
    key.startsWith(`${prefix}${PREFIX_SEPARATOR}`)
  );
}
