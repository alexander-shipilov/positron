/**
 * The {@link Indexed} interface represents an indexed collection.
 *
 * @typeParam TElement - The type of elements in the indexed collection.
 *
 * @public
 */
export interface Indexed<TElement = unknown> {
  /**
   * The `Indexed[index]` read-only index property allows accessing elements of
   * an {@link Indexed} object by their indices.
   */
  readonly [index: number]: TElement;

  /**
   * The {@link Indexed.length} read-only property represents the number of
   * elements in that {@link Indexed} object. The value is an unsigned, 32-bit
   * integer that is always numerically greater than the highest index in the
   * {@link Indexed} object.
   */
  readonly length: number;
}
