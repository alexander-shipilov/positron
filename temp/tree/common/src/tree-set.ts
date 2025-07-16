/**
 * The interface {@link TreeSet} describes an object which lets you store
 * unique values of any type, whether primitive values or object references.
 *
 * @public
 */
export interface TreeSet<TItem> {
  /**
   * The {@link add} method of {@link TreeSet} instances inserts a new element
   * with a specified `value` in to this set, if there isn't an element with
   * the same `value` already in this set.
   *
   * @param value - The value to add to the {@link TreeSet}
   *   object.
   *
   * @public
   */
  add(value: TItem): this;

  /**
   * The {@link delete} method of {@link TreeSet} instances removes a specified
   * `value` from this set, if it is in the set.
   *
   * @param value -The value to remove from {@link TreeSet}.
   *
   * @returns Returns `true` if value was already in {@link TreeSet}; otherwise
   *   `false`.
   *
   *
   * @public
   */
  delete(value: TItem): boolean;

  /**
   * The {@link has} method of {@link TreeSet} instances returns a boolean
   * indicating whether an element with the specified `value` exists in this
   * set or not.
   *
   * @param value - The value to test for presence in the {@link TreeSet}
   *   object.
   *
   * @public
   */
  has(value: TItem): boolean;

  /**
   * The {@link size} accessor property of {@link TreeSet} instances returns
   * the number of (unique) elements in this set.
   */
  readonly size: number;
}
