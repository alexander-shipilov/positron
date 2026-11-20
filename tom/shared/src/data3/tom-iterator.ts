import type { TypeGuard } from "@positron/lang";

import type { TomEntryTest } from "./tom-entry-test";

/**
 * An {@link TomIterator} object is an object that conforms to the iterator
 * protocol by providing a {@link TomIterator.next} method that returns an
 * iterator result object.
 *
 * @remarks
 *
 *   The {@link TomIterator} object provides a `[Symbol.iterator]()` method that
 *   returns the iterator object itself, making the iterator also iterable. It
 *   also provides some helper methods for working with iterators.
 *
 * @public
 */
export interface TomIterator<TValue> {
  [Symbol.iterator](): TomIterator<TValue>;

  /**
   * The {@link TomIterator.drop} method returns a new {@link TomIterator}
   * object that skips the given number of elements at the start of this
   * iterator.
   *
   * @param limit - The number of elements to drop from the start of the
   *   iteration.
   *
   * @returns A new {@link TomIterator} object.
   *   The first time the returned iterator's {@link TomIterator.next}
   *   method is called, this iterator is immediately advanced by `limit`
   *   elements, and then the next element is yielded. The returned iterator
   *   then yields the remaining elements one-by-one. If this iterator has
   *   fewer than `limit` elements, the returned iterator will be immediately
   *   completed the first time {@link TomIterator.next} is called.
   *
   * @throws RangeError exception if `limit` is not a finite, non-negative
   *   number.
   */
  drop(limit: number): TomIterator<TValue>;

  /**
   * The {@link TomIterator.every} method returns `false` if it finds an
   * element that does not satisfy the provided testing function. Otherwise, if
   * the iterator is exhausted without finding such an element, it returns
   * `true`.
   *
   * @param predicate - A function to execute for each element produced by the
   *   iterator. It should return a truthy value to indicate the element passes
   *   the test, and a falsy value otherwise.
   *
   * @returns `true` if predicate returns a truthy value for every element.
   *   Otherwise, `false`.
   */
  every(predicate: (value: TValue, index: number) => unknown): boolean;

  /**
   * The {@link TomIterator.(filter:1)} method returns a new
   * {@link TomIterator} object that yields only those elements of the
   * iterator for which the provided `predicate` function returns `true`.
   *
   * @example
   * ```ts
   *  import type { TomIterator } from "@postron/tom";
   *
   *  declare const it: TomIterator<number | string>;
   *
   *  for (const string of it.filter((v) => typeof v === "string")) {
   *    string.toUpperCase();
   *    // OK
   *  }
   * ```
   *
   * @param predicate - A type-guard function to execute for each element
   *   produced by this iterator.
   *
   * @returns A new {@link TomIterator} object.
   *   Each time the returned iterator's {@link TomIterator.next} method is
   *   called, it returns the next element in this iterator for which the
   *   `predicate` function returns `true`. When this iterator is completed, the
   *   returned iterator is also completed.
   */
  filter<TExpected extends TValue>(
    predicate: TypeGuard<TValue, TExpected>,
  ): TomIterator<TExpected>;

  /**
   * The {@link TomIterator.(filter:2)} method returns a new
   * {@link TomIterator} object that yields only those elements of the
   * iterator for which the provided `predicate` function returns a truthy
   * value.
   *
   * @example
   * ```ts
   *  import type { TomIterator } from "@postron/tom";
   *
   *  declare const it: TomIterator<number>;
   *
   *  for (const num of it.filter((v) => v % 2 === 0)) {
   *    console.log(num);
   *    // `num` is even number
   *  }
   * ```
   *
   * @param predicate - A function to execute for each element produced by this
   *   iterator. It should return a truthy value to make the element yielded by
   *   the iterator, and a falsy value otherwise.
   *
   * @returns A new {@link TomIterator} object.
   *   Each time the returned iterator's {@link TomIterator.next} method is
   *   called, it returns the next element in this iterator for which the
   *   `predicate` function returns a truthy value. When this iterator is
   *   completed, the returned iterator is also completed.
   */
  filter(predicate: TomEntryTest<TValue, number>): TomIterator<TValue>;

  /**
   * The {@link TomIterator.map} method returns a new
   * {@link TomIterator} object that yields elements of the iterator, each
   * transformed by a mapping function.
   *
   * @param callback - A function to execute for each element produced by the
   *   iterator. Its return value is yielded by the iterator.
   *
   * @returns A new {@link TomIterator} object.
   *   Each time the returned iterator's {@link TomIterator.next} method is
   *   called, it gets the next element from this iterator, applies `callback`,
   *   and yields the return value. When this iterator is completed, the
   *   returned iterator is also completed.
   */
  map<TReturn>(
    callback: (value: TValue, index: number) => TReturn,
  ): TomIterator<TReturn>;

  /**
   *
   */
  next(): IteratorResult<TValue>;

  /**
   * The {@link TomIterator.some} method returns `true` if it finds an
   * element that satisfies the provided testing function. Otherwise, if the
   * iterator is exhausted without finding such an element, it returns `false`.
   *
   * @param predicate - A function to execute for each element produced by this
   *   iterator. It should return a truthy value to indicate the element passes
   *   the test, and a falsy value otherwise.
   *
   * @returns `true` if the predicate function returns a truthy value for at
   *   least one element. Otherwise, `false`.
   */
  some(predicate: TomEntryTest<TValue, number>): boolean;

  /**
   * The {@link TomIterator.take} method returns a new {@link TomIterator}
   * object that yields the given number of elements in this iterator and then
   * terminates.
   *
   * @param limit - The number of elements to take from the start of the
   *   iteration.
   *
   * @returns A new {@link TomIterator} object.
   *   The returned iterator yields the elements in this iterator one-by-one,
   *   and then completes once `limit` elements have been yielded, or when the
   *   original iterator is exhausted, whichever comes first.
   *
   * @throws RangeError if `limit` is not a non-negative number.
   */
  take(limit: number): TomIterator<TValue>;
}
