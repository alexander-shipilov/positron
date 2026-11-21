import { isNonNullable } from "../null/is-non-nullable";

/**
 * The {@link hasKey} type-guard function determines whether the passed `value`
 * has the property keyed by the given `key`.
 *
 * @remarks
 *   {@link hasKey} determines whether the provided `value` conforms to the
 *   type `Record<TKey, unknown>`.
 *
 * @example
 * ```ts
 * import { hasKey } from "@positron/lang";
 *
 * declare const someValue: unknown;
 *
 * // @ts-expect-error TS18046: someValue is of type unknown
 * console.log(someValue.foo);
 *
 * if (hasKey(someValue, "foo")) {
 *   console.log(someValue.foo);
 *   // OK
 * }
 * ```
 *
 * @param value - The value to check key presence of.
 *
 * @param key - The key to check.
 *
 * @returns The boolean value `true` if `value` has the property `key`;
 *   otherwise, `false`.
 *
 * @public
 */
export function hasKey<TKey extends PropertyKey>(
  value: unknown,
  key: TKey,
): value is Record<TKey, unknown> {
  return isNonNullable(value) && key in Object(value);
}
