import type { Key, KeyOf } from "@positron/lang";
import { isOwnKeyOf } from "@positron/lang";

/**
 * @param target
 * @param key
 *
 * @internal
 */
function isPropertyOfArrayLike<TTarget extends ArrayLike<unknown>>(
  key: Key,
  target: TTarget,
): key is KeyOf<TTarget> {
  return key === "length" || isOwnKeyOf(key, target);
}

/**
 * The {@link ArrayLikeProxy} class creates a proxy to the given array-like.
 *
 * This is useful if you need to create a class that implements `ArrayLike` but
 * you can't or don't want to use `Array` as a base class.
 *
 * @example
 * The following example demonstrates this:
 *
 * @example
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
 *
 * @public
 */
export class ArrayLikeProxy<TValue> implements ArrayLike<TValue> {
  /**
   * @override
   */
  readonly [n: number]: TValue;

  /**
   * @override
   */
  declare public readonly length: number;

  /**
   * @param arrayLike - An `ArrayLike` that provide the items.
   */
  public constructor(arrayLike: ArrayLike<TValue>) {
    return new Proxy(this, {
      get: (target: ArrayLikeProxy<TValue>, key: Key): unknown =>
        isPropertyOfArrayLike(key, arrayLike)
          ? arrayLike[key]
          : target[key as keyof ArrayLikeProxy<TValue>],
    });
  }
}
