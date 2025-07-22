import { isFunction } from "../function";
import { isObject } from "../object";

import type { PropertyOwner } from "./property-owner";

const hasOwn = isFunction(Object.hasOwn)
  ? Object.hasOwn
  : (() => {
      const object = {};

      return (target: unknown, key: PropertyKey) =>
        object.hasOwnProperty.call(target, key);
    })();

/**
 * The {@link isOwnPropertyOf} function returns `true` if the specified
 * object has the indicated property as its own property. If the property is
 * inherited or does not exist, the method returns `false`.
 *
 * @remarks
 * This function works like `Object#hasOwn` (and uses it if possible)
 * but does not throw an exception if the `target` is `null` or `undefined`
 *
 * @example
 * ```ts
 *  const target = { foo: 1 }
 *
 *  isOwnPropertyOf('foo', target) // true
 *  // `target` has own key `foo`
 *
 *  isOwnPropertyOf('bar', target) // false
 *  // `target` has no own key `bar`
 *
 *  isOwnPropertyOf('toString', target) // false
 *  // key `toString` is inherited from `Object.prototype`
 *
 *  isOwnPropertyOf('foo', null) // false
 *  // `null` does not have properties at all
 * ```
 *
 * @param target - The object to check
 * @param key - The key to check
 *
 * @returns `true` if the specified `object` has the indicated `key` as its own
 *   key. If the `target` is nullable or the `key` is inherited, or does not
 *   exist, returns `false`.
 *
 * @public
 */
export function isOwnPropertyOf<TKey extends PropertyKey>(
  key: TKey,
  target: unknown,
): target is PropertyOwner<TKey> {
  return isObject(target) && hasOwn(target, key);
}
