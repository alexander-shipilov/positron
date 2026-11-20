/**
 * The {@link TomCollection} interface represents a collection of a finite
 * number of elements.
 *
 * @public
 */
export interface TomCollection {
  /**
   * The {@link TomCollection.size} property represents this collection size.
   */
  readonly size: number;

  /**
   * The {@link TomCollection.clear} method removes all elements from this
   * collection.
   *
   * @returns `true` if at least one element is removed.
   */
  clear(): boolean;

  /**
   * The {@link TomCollection.clone} method creates a shallow copy of this
   * collection.
   *
   * @returns A new instance of the {@link TomCollection}.
   */
  clone(): TomCollection;

  /**
   * The {@link TomCollection.equals} method determines if the passed
   * `collection` is equal to this collection.
   *
   * @param collection - The collection with which to compare.
   */
  equals(collection: this): boolean;
}
