import type { PropertyKeyOf } from "@positron/core/src";
import { hasOwnProperty } from "@positron/core";

/**
 * The {@link ArrayLikeProxy} class creates a proxy to the given array-like.
 *
 * This is useful if you need to create a class that implements `ArrayLike` but
 * you can't or don't want to use `Array` as a base class.
 *
 * @example
 * The following example demonstrates this:
 *
 * ```ts
 *  abstract class MyNodeList extends ArrayLikeProxy<Node> implements NodeList {
 *    constructor(protected readonly items: Node[]) {
 *      super(items);
 *    }
 *
 *    item(index: number): Node | null {
 *      return this.items.at(index) ?? null;
 *    }
 *
 *    // ...
 *  }
 * ```
 */
export class ArrayLikeProxy<TValue> implements ArrayLike<TValue> {
  /**
   * @override
   */
  readonly [n: number]: TValue;

  /**
   * @override
   */
  declare readonly length: number;

  /**
   * @param arrayLike - An `ArrayLike` that provide the items.
   */
  constructor(arrayLike: ArrayLike<TValue>) {
    return new Proxy(this, {
      get: (target: ArrayLikeProxy<TValue>, key: PropertyKey): unknown =>
        isArrayLikeProperty(arrayLike, key)
          ? arrayLike[key]
          : target[key as keyof ArrayLikeProxy<TValue>],
    });
  }
}

/**
 * @param values
 * @param key
 *
 * @internal
 */
function isArrayLikeProperty<TValues extends ArrayLike<unknown>>(
  values: TValues,
  key: PropertyKey,
): key is PropertyKeyOf<TValues> {
  return key === "length" || hasOwnProperty(values, key);
}
