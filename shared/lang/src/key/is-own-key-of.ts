import type { KeyOf } from "./key-of";
import { hasOwnKey } from "./has-own-key";

/**
 * The {@link isOwnKeyOf} type-guard function returns `true` if the specified
 * `value` has the indicated `maybeKeyOf` as its own property key. If the
 * property is inherited or does not exist, the function returns `false`.
 *
 * @remarks
 *   This function works like `Object#hasOwn` but does not throw an exception
 *   if the `value` is `null` or `undefined`.
 *
 *   {@link isOwnKeyOf} is a type-guard function that determines whether the
 *   provided `maybeKeyOf` conforms to the type `keyof TValue`.
 *
 * @example
 * ```ts
 *  const target = { foo: 1 };
 *
 *  isOwnKeyOf('foo', target);
 *  // `true`, since `target` has own key `foo`
 *
 *  isOwnKeyOf('bar', target);
 *  // `false`, since `target` has no own key `bar`
 *
 *  isOwnKeyOf('toString', target);
 *  // `false`, since key `toString` is inherited from `Object.prototype`
 *
 *  isOwnKeyOf('foo', null);
 *  // `false`, since `null` does not have properties at all
 * ```
 *
 * @param maybeKeyOf - The key to check.
 *
 * @param value - The value to check key presence of.
 *
 * @returns `true` if the specified `value` has the indicated `maybeKeyOf` as
 *   its own key. If the `value` is nullable or the `maybeKeyOf` is inherited,
 *   or does not exist, returns `false`.
 *
 * @public
 */
export function isOwnKeyOf<TValue>(
  maybeKeyOf: PropertyKey,
  value: TValue,
): maybeKeyOf is KeyOf<TValue> {
  return hasOwnKey(value, maybeKeyOf);
}
