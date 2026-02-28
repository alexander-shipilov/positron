/**
 * The {@link TreeSetLike} interface describes a set-like object.
 *
 * A set-like object is an object that provides the following:
 *  - A `size` property that contains a number.
 *  - A `has()` method that takes an element and returns a boolean.
 *  - A `keys()` method that returns an `iterator` of the elements in the set.
 *
 * @public
 */
export interface TreeSetLike<TItem> {
  /**
   * The {@link has} method of the {@link TreeSetLike} object returns a `boolean`
   * indicating whether an element with the specified value exists in this
   * set-like object or not.
   *
   * @param value - The value to test for presence in the {@link TreeSetLike}
   *   object.
   */
  has(value: TItem): boolean;

  /**
   * The {@link values} method of the {@link TreeSetLike} object returns a new
   * {@link SetIterator} object that contains the values for each element in
   * this set-like object in insertion order.
   */
  keys(): Iterabl<TItem>;

  /**
   * The {@link size} accessor property of {@link TreeSetLike} interface returns
   * the number of (unique) elements in this set-like object.
   */
  readonly size: number;
}
