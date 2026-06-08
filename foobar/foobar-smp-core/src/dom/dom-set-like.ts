/**
 * The {@link DomSetLike} interface describes a set-like object.
 *
 * A set-like object is an object that provides the following:
 *  - A `size` property that contains a number.
 *  - A `has()` method that takes an element and returns a boolean.
 *  - A `keys()` method that returns an `iterator` of the elements in the set.
 *
 * @public
 */
export interface DomSetLike<TItem> {
  /**
   * The {@link DomSetLike.size} property returns the number of (unique)
   * elements in this set-like object.
   */
  readonly size: number;

  /**
   * The {@link DomSetLike.has} method returns a `boolean` indicating whether
   * an element with the specified value exists in this set-like object or not.
   *
   * @param value - The value to test for presence in the {@link DomSetLike}
   *   object.
   */
  has(value: TItem): boolean;

  /**
   * The {@link DomSetLike.values} method returns a new iterator object that
   * contains the values for each element in this set-like object in insertion
   * order.
   */
  keys(): IterableIterator<TItem>;
}
