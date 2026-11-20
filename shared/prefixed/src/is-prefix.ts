import { isString } from "@positron/lang";

import type { Prefix } from "./prefix";

/**
 * The {@link isPrefix} type-guard function determines whether the passed
 * `maybePrefix` is a {@link Prefix}.
 *
 * @example
 * ```ts
 *  isPrefix('foo') // true
 *  isPrefix('foo-bar') // true
 *  isPrefix(1) // false
 * ```
 *
 * @param maybePrefix - The value to be tested for being a {@link Prefix}.
 *
 * @returns The boolean value which is `true` if the given `maybePrefix` is a
 *   {@link Prefix}. Otherwise, `false`.
 *
 * @public
 */
export function isPrefix(maybePrefix: unknown): maybePrefix is Prefix {
  return isString(maybePrefix);
}
