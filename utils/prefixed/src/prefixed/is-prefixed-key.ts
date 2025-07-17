import { isString } from "@positron/core";

import type { Prefix } from "../prefix";
import { PREFIX_SEPARATOR } from "../prefix";

import type { PrefixedKey } from "./prefixed-key";

/**
 * @public
 * Function {@link isPrefixedKey} checks if the passed `key` has the
 *   specified `prefix`
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
 * @param key - Property to check
 * @param prefix - Prefix to check
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
