import { isString } from "@positron/core";

import type { Prefix } from "./prefix";

/**
 * The {@link isPrefixedKey} function checks if the passed `maybePrefix` is a
 *   {@link Prefix}
 *
 * @example
 * ```ts
 *  isPrefix('foo') // true
 *  isPrefix('foo-bar') // true
 *  isPrefix(1) // false
 * ```
 *
 * @param maybePrefix - - The value to be tested for being a `Prefix`.
 *
 * @returns The boolean value `true` if the given `maybeNumber` is a
 *   `number`. Otherwise, `false
 *
 * @public
 */
export function isPrefix(maybePrefix: unknown): maybePrefix is Prefix {
  return isString(maybePrefix);
}
