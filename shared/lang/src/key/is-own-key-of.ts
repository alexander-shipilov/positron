import type { KeyOf } from "./key-of";
import { hasOwnKey } from "./has-own-key";

/**
 * The {@link isOwnKeyOf} type-guard function returns `true` if the specified
 * `value` has the indicated `maybeKeyOf` as its own property key. If the
 * property is inherited or does not exist, the function returns `false`.
 *
 * @remarks
 *   This function works like `Object#hasOwn` but does not throw an exception if
 *   `value` is `null` or `undefined`.
 *
 *   {@link isOwnKeyOf} determines whether the provided `maybeKeyOf` conforms
 *   to the type `keyof TValue`.
 *
 * @example
 * ```ts
 * import { isOwnKeyOf } from "@positron/lang";
 *
 * const target = { foo: 1 };
 *
 * isOwnKeyOf("foo", target);
 * // `true`, since `target` has own key `foo`
 *
 * isOwnKeyOf("bar", target);
 * // `false`, since `target` has no own key `bar`
 *
 * isOwnKeyOf("toString", target);
 * // `false`, since key `toString` is inherited from `Object.prototype`
 *
 * isOwnKeyOf("foo", null);
 * // `false`, since `null` does not have properties at all
 * ```
 *
 * @param maybeKeyOf - The key to check.
 *
 * @param value - The value to check key presence of.
 *
 * @returns The boolean value `true` if `value` has `maybeKeyOf` as its own
 *   key; otherwise, `false`.
 *
 * @public
 */
export function isOwnKeyOf<TValue>(
  maybeKeyOf: PropertyKey,
  value: TValue,
): maybeKeyOf is KeyOf<TValue> {
  return hasOwnKey(value, maybeKeyOf);
}
