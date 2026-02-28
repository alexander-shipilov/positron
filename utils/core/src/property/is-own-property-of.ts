import type { PropertyKeyOf } from "./property-key-of";
import { hasOwnProperty } from "./has-own-property";

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
 * @param maybePropertyOf - The key to check
 *
 * @returns `true` if the specified `object` has the indicated
 *   `maybePropertyOf` as its own key. If the `target` is nullable or the `key`
 *   is inherited, or does not exist, returns `false`.
 *
 * @public
 */
export function isOwnPropertyOf<TTarget>(
  maybePropertyOf: PropertyKey,
  target: TTarget,
): maybePropertyOf is PropertyKeyOf<TTarget> {
  return hasOwnProperty(target, maybePropertyOf);
}
