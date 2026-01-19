import { isNullLike } from "../null";

import type { PropertyOwner } from "./property-owner";

/**
 * The {@link hasOwnProperty} function determines whether the passed
 * {@link value} has the own property keyed by the given {@link key}.
 *
 * @param value -
 * @param key
 *
 * @returns `true` if `value` has the own property `key`; otherwise, `false`.
 *
 * @public
 */
export function hasOwnProperty<TKey extends PropertyKey>(
  value: unknown,
  key: TKey,
): value is PropertyOwner<TKey> {
  return !isNullLike(value) && Object.hasOwn(value, key);
}
