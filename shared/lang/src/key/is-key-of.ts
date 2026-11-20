import type { KeyOf } from "./key-of";
import { hasKey } from "./has-key";

/**
 * The {@link isKeyOf} type-guard function returns `true` if the specified
 * `value` has the indicated `maybeKeyOf` as its property key.
 *
 * @remarks
 *   {@link isKeyOf} is a type-guard function that determines whether the
 *   provided `maybeKeyOf` conforms to the type `KeyOf<TValue>`.
 *
 * @param maybeKeyOf - The key to check.
 *
 * @param value - The value to check key presence of.
 *
 * @returns The boolean value `true` if the given `maybeKeyOf` is a key of
 *   `value`.
 *
 * @public
 */
export function isKeyOf<TValue>(
  maybeKeyOf: PropertyKey,
  value: TValue,
): maybeKeyOf is KeyOf<TValue> {
  return hasKey(value, maybeKeyOf);
}
