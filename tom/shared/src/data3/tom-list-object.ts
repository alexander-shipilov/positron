import type { Nullish } from "@positron/lang";

import type { TomCollection } from "./tom-collection";
import type { TomElement } from "./tom-element";
import type { TomElementTest } from "./tom-element-test";

/**
 * The {@link TomListObject} interface represents a finite collection of
 * elements, where each element is assigned an ordinal number, called an index.
 *
 * @public
 */
export interface TomListObject<TValue> extends TomCollection {
  /**
   * The {@link TomListObject.append} method adds the specified items to
   * the end of this collection.
   *
   * @remarks
   *
   *   {@link TomListObject.prepend} works similarly to
   *   {@link TomListObject.append}, but adds items to the start of this
   *   collection.
   *
   *   {@link TomListObject.insert} works similarly to
   *   {@link TomListObject.append}, but inserts items at the specified
   *   position.
   *
   * @param items - The items to append to this collection.
   *
   * @returns A count of the appended items.
   *   If no items are appended, `0` is returned.
   */
  append(...items: TValue[]): number;

  /**
   * The {@link TomListObject.at} method returns the item located at the
   * specified `index` in this collection.
   *
   * @remarks
   *
   *   Both positive and negative indexes are accepted.
   *   Negative indexes are counted in reverse, starting from the last
   *   element of this collection.
   *
   * @param index - The zero-based index.
   *   Negative index is counted from the end of this collection:
   *   if `index < 0`, the value `index + collection.size` is used.
   *
   * @returns The item of this collection located at the specified `index`.
   *
   * @throws TypeError if the provided `index` is not a safe integer (for
   *   example, `Infinity` or `NaN`). This exception is thrown because
   *   iterating over such indices could lead to infinite loops and other
   *   unexpected results.
   *
   * @throws RangeError if the resulting index is less than `0` or greater than
   *   or equal to the size of this collection.
   */
  at(index: number): TValue;

  /**
   * The {@link TomListObject.deleteAt} method removes the element located at
   * the specified `index` from this collection.
   *
   * @remarks
   *
   *   Both positive and negative indexes are accepted.
   *   Negative indexes are counted in reverse, starting from the last element
   *   of this collection.
   *
   * @param index - The zero-based index.
   *   Negative index is counted from the end of this collection:
   *   if `index < 0`, the value `index + collection.size` is used.
   *
   * @returns `true` if the element is removed from this collection.
   */
  deleteAt(index: number): boolean;

  /**
   * The {@link TomListObject.elements} method returns a new iterator object
   * containing the pairs `[index, item]` of the elements in this collection
   * within the range from `start` to `end` (excluding `end`), where `start`
   * and `end` represent the indices of elements in this collection.
   *
   * @remarks
   *
   *   If `end` points to an index preceding the one pointed to by `start`,
   *   the resulting iterator will traverse in reverse order.
   *
   *   If the range from `start` to `end` (excluding `end`) does not overlap
   *   with the collection indices range, the resulting iterator will be empty.
   *
   * @example
   *
   * ```ts
   *  import type { TomIndexed } from "@positron/tom";
   *
   *  declare const collection: TomIndexed<string>;
   *  // Let `collection` be a `TomIndexed` collection of
   *  // ["a", "b", "c"]
   *
   *  console.log([...collection.elements()]);
   *  // > [[0, "a"], [1, "b"], [2, "c"]]
   *
   *  console.log([...collection.elements(1)]);
   *  // > [[1, "b"], [2, "c"]]
   *
   *  console.log([...collection.elements(-2)]);
   *  // > [[1, "b"], [2, "c"]]
   *
   *  console.log([...collection.elements(-1, -collection.size - 1)]);
   *  // > [[2, "c"], [1, "b"], [0, "a"]]
   *
   *  console.log([...collection.elements(-1, -1)]);
   *  // > []
   *
   *  console.log([...collection.elements(collection.size)]);
   *  // > []
   * ```
   *
   * @param start - Zero-based index at witch the iteration begins.
   *   Negative indexes are counted from the end of this collection:
   *   if `start < 0`, `start + collection.size` is used.
   *   Default is `0`.
   *
   * @param end - Zero-based index at witch the iteration ends.
   *   Negative indexes are counted from the end of this collection:
   *   if `end < 0`, `end + collection.size` is used.
   *   Default is `collection.size`.
   *
   * @returns A new iterable iterator object.
   *
   * @throws TypeError if the provided `start` or `end` are not safe integers
   *   (for example, `Infinity` or `NaN`). This exception is thrown because
   *   iterating over such indices could lead to infinite loops and other
   *   unexpected results.
   */
  elements(start?: number, end?: number): IterableIterator<TomElement<TValue>>;

  /**
   * The {@link TomListObject.hasAt} method determines whether this
   * collection contains a certain `index` among its indexes.
   *
   * @remarks
   *
   *   Both positive and negative indexes are accepted.
   *   Negative indexes are counted in reverse, starting from the last
   *   element of this collection.
   *
   *   The {@link TomListObject.hasAt} method always returns `false` if the
   *   specified `index` is not a safe integer.
   *
   * @param index - The zero-based index.
   *   Negative index is counted from the end of this collection:
   *   if `index < 0`, the value `index + collection.size` is used.
   *
   * @returns `true` if the given `index` is found among the indexes of this
   *   collection.
   */
  hasAt(index: number): Nullish<number>;

  /**
   * The {@link TomListObject.indices} method returns a new iterator object
   * containing the indices of the elements in this collection within the range
   * from `start` to `end` (excluding `end`), where `start` and `end`
   * represent the indices of elements in this collection.
   *
   * @remarks
   *
   *   If `end` points to an index preceding the one pointed to by `start`,
   *   the resulting iterator will traverse in reverse order.
   *
   *   If the range from `start` to `end` (excluding `end`) does not overlap
   *   with the collection indices range, the resulting iterator will be empty.
   *
   * @example
   *
   * ```ts
   *  import type { TomIndexed } from "@positron/tom";
   *
   *  declare const collection: TomIndexed<string>;
   *  // Let `collection` be a `TomIndexed` collection of
   *  // ["a", "b", "c"]
   *
   *  console.log([...collection.indices()]);
   *  // > [0, 1, 2]
   *
   *  console.log([...collection.indices(1)]);
   *  // > [1, 2]
   *
   *  console.log([...collection.indices(-2)]);
   *  // > [1, 2]
   *
   *  console.log([...collection.indices(-1, -collection.size - 1)]);
   *  // > [2, 1, 0]
   *
   *  console.log([...collection.indices(-1, -1)]);
   *  // > []
   *
   *  console.log([...collection.indices(collection.size)]);
   *  // > []
   * ```
   *
   * @param start - Zero-based index at which the iteration begins.
   *   Negative index is counted from the end of this collection:
   *   if `start < 0`, `start + collection.size` is used.
   *   Default is `0`.
   *
   * @param end - Zero-based index at which the iteration ends.
   *   Negative index is counted from the end of this collection:
   *   if `end < 0`, `end + collection.size` is used.
   *   Default is `collection.size`.
   *
   * @returns A new iterable iterator object.
   *
   * @throws TypeError if the provided `start` or `end` are not safe integers
   *   (for example, `Infinity` or `NaN`). This exception is thrown because
   *   iterating over such indices could lead to infinite loops and other
   *   unexpected results.
   */
  indices(start?: number, end?: number): IterableIterator<number>;
  /**
   * The {@link TomListObject.insert} method inserts the provided `items` into
   * this collection at the specified `index`.
   *
   * @remarks
   *   Both positive and negative indexes are accepted.
   *   Negative indexes are counted in reverse, starting from the last
   *   element of this collection.
   *
   *   If index to insert is equal to `0`, then
   *   {@link TomListObject.insert} prepends items to this collection.
   *
   *   If index to insert is equal to the size of this collection, then
   *   {@link TomListObject.insert} appends items to this collection.
   *
   *   Note: If multiple items are passed as parameters, they are inserted
   *   at the specified index as a single block - in the same order
   *   in which they were provided. Hence, calling {@link TomListObject.insert}
   *   with `n` items once, or calling it `n` times with `1` item, don't
   *   yield the same results.
   *
   * @param index - The zero-based index to insert `items` at.
   *   if `at < 0`, the value `at + collection.size` is used.
   *
   * @param items - The items to insert into this collection.
   *
   * @returns A count of the inserted items.
   *   If no items are inserted, `0` is returned.
   *
   * @throws TypeError if the provided `index` is not a safe integer
   *   (for example, `Infinity` or `NaN`). This exception is thrown because
   *   iterating over such indices could lead to infinite loops and other
   *   unexpected results.
   *
   * @throws RangeError if the resulting index to insert `items` at is less
   *   than `0` or greater than the size of this collection.
   */
  insert(index: number, ...items: TValue[]): number;

  /**
   * The {@link TomListObject.items} method returns a new iterator object
   * containing the items in this collection within the range from `start` to
   * `end` (excluding `end`), where `start` and `end` represent the indices of
   * elements in this collection.
   *
   * @remarks
   *
   *   If `end` points to an index preceding the one pointed to by `start`,
   *   the resulting iterator will traverse in reverse order.
   *
   *   If the range from `start` to `end` (excluding `end`) does not overlap
   *   with the collection indices range, the resulting iterator will be empty.
   *
   * @example
   *
   * ```ts
   *  import type { TomIndexed } from "@positron/tom";
   *
   *  declare const collection: TomIndexed<string>;
   *  // collection of ["a", "b", "c"]
   *
   *  console.log([...collection.items()]);
   *  // > ["a", "b", "c"]
   *
   *  console.log([...collection.items(1)]);
   *  // > ["b", "c"]
   *
   *  console.log([...collection.items(-2)]);
   *  // > ["b", "c"]
   *
   *  console.log([...collection.items(-1, -collection.size - 1)]);
   *  // > ["c", "b", "a"]
   *
   *  console.log([...collection.items(-1, -1)]);
   *  // > []
   *
   *  console.log([...collection.items(collection.size)]);
   *  // > []
   * ```
   *
   * @param start - Zero-based index at witch the iteration begins.
   *   Negative index is counted from the end of this collection:
   *   if `start < 0`, `start + collection.size` is used.
   *   Default is `0`.
   *
   * @param end - Zero-based index at witch the iteration ends.
   *   Negative index is counted from the end of this collection:
   *   if `end < 0`, `end + collection.size` is used.
   *   Default is `collection.size`.
   *
   * @returns A new iterable iterator object.
   *
   * @throws TypeError if the provided `start` or `end` are not safe integers
   *   (for example, `Infinity` or `NaN`). This exception is thrown because
   *   iterating over such indices could lead to infinite loops and other
   *   unexpected results.
   */
  items(start?: number, end?: number): IterableIterator<TValue>;

  /**
   * The {@link TomListObject.prepend} method adds the specified `items` to
   * the start of this collection.
   *
   * @remarks
   *
   *   {@link TomListObject.append} works similarly to {@link
   *   TomListObject.prepend}, but adds items to the end of this collection.
   *
   *   {@link TomListObject.insert} works similarly to {@link
   *   TomListObject.prepend}, but inserts items at the specified position.
   *
   *   Note: If multiple items are passed as parameters, they are inserted
   *   at the start of this collection as a single block - in the same order
   *   in which they were provided. Hence, calling {@link TomListObject.prepend}
   *   with `n` items once, or calling it `n` times with `1` item, don't yield
   *   the same results.
   *
   * @param items - The items to add to the start of this collection.
   *
   * @returns A count of the prepended items.
   *   If no items are inserted, `0` is returned.
   */
  prepend(...items: TValue[]): number;

  /**
   * The {@link TomListObject.replace} method replaces a range of items
   * from this collection - from `start` to `end` (excluding `end`).
   * Where `start` and `end` represent indices within this collection.
   *
   * @remarks
   *
   *   In essence, the {@link TomListObject.deleteIndices} method removes items
   *   whose indices fall within the intersection of the specified range
   *   (from `start` to `end`, excluding `end`) and the collection's index
   *   range (from `0` to `collection.size`, excluding `collection.size`).
   *
   *   If the specified range (from `start` to `end`, excluding `end`) does not
   *   overlap with the collection's index range, no items will be removed.
   *
   * @param start - Zero-based index at witch the deletion begins.
   *   Negative index is counted from the end of this collection:
   *   if `start < 0`, `start + collection.size` is used.
   *
   * @param end - Zero-based index at witch the deletion ends.
   *   Negative index is counted from the end of this collection:
   *   if `end < 0`, `end + collection.size` is used.
   *
   * @param items - The items to insert to this collection.
   *
   * @returns An array of removed items. If no items are removed, an empty
   *   array is returned.
   *
   * @throws TypeError if the provided `start` or `end` are not safe integers
   *   (for example, `Infinity` or `NaN`). This exception is thrown because
   *   iterating over such indices could lead to infinite loops and other
   *   unexpected results.
   */
  replace(start: number, end: number, ...items: TValue[]): TValue[];

  /**
   * The {@link TomListObject.replaceItems} replaces all items within this
   * collection that match the provided condition with the given `newItem`.
   *
   * @param predicate - A function to check whether an element meets a specific
   *   condition. It should return a truthy value if the item passes the
   *   check, and a falsy value otherwise.
   *
   * @param newItem - The new value to replace matched items.
   *
   * @returns `true` if at least one element is replaced within this collection.
   */
  replaceItems(predicate: TomElementTest<TValue>, newItem: TValue): TValue[];
}
