import { isNonNullable } from "../null/is-non-nullable";

/**
 * The {@link hasOwnKey} function determines whether the passed
 * `value` has the own property keyed by the given `key`.
 *
 * @remarks
 *   {@link hasOwnKey} is a type-guard function that determines whether the
 *   provided `value` conforms to the type `Record<TKey, unknown>`.
 *
 * @example
 * ```ts
 *  declare const someValue: unknown;
 *
 *  // @ts-expect-error TS18046: someValue is of type unknown
 *  console.log(someValue.foo);
 *
 *  if (hasOwnKey(someValue, "foo")) {
 *    console.log(someValue.foo);
 *    // OK
 *  }
 * ```
 *
 * @param value - The value to check key presence of.
 *
 * @param key - The key to check
 *
 * @returns `true` if `value` has the own property `key`; otherwise, `false`.
 *
 * @public
 */
export function hasOwnKey<TKey extends PropertyKey>(
  value: unknown,
  key: TKey,
): value is Record<TKey, unknown> {
  return isNonNullable(value) && Object.hasOwn(value, key);
}
