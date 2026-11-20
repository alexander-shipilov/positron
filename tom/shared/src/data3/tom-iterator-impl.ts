import { assert, isIterable, template } from "@positron/lang";

import type { TomIterator } from "./tom-iterator";

/**
 * The {@link TomIteratorImpl} abstract class is intended to be used as the
 * superclass of other classes that create iterators. It throws an error when
 * constructed by itself.
 *
 * @remarks
 *
 *   The {@link TomIteratorImpl} represents an abstract class - a class that
 *   provides common utilities for its subclasses, but is not intended to be
 *   instantiated itself.
 *
 *   It is the superclass of all other iterator classes, and is used to create
 *   subclasses that implement specific iteration algorithms - namely, all
 *   subclasses of {@link TomIteratorImpl} must implement a
 *   {@link TomIterator.next} method as required by the iterator protocol.
 *
 *   Because {@link TomIteratorImpl} doesn't actually provide the
 *   {@link TomIterator.next} method, it doesn't make sense to construct an
 *   {@link TomIteratorImpl} directly.
 *
 *   You can also use {@link TomIteratorImpl.from} static method to create
 *   an {@link TomIterator.next} instance from an existing iterable or
 *   iterator object.
 *
 * @public
 */
export abstract class TomIteratorImpl<TValue> implements TomIterator<TValue> {
  /**
   * The {@link TomIteratorImpl.from} static method creates a new
   * {@link TomIterator} object from an iterator or iterable object.
   *
   * @param iterable -
   *
   * @returns A new {@link TomIterator} instance.
   */
  public static from<TValue>(
    iterable: Iterable<TValue> | Iterator<TValue>,
  ): TomIterator<TValue> {
    const iterator = isIterable(iterable)
      ? iterable[Symbol.iterator]()
      : iterable;

    return Object.create(TomIteratorImpl.prototype, {
      next: {
        configurable: false,
        enumerable: false,
        writable: false,
        value: () => iterator.next(),
      },
    }) as TomIterator<TValue>;
  }

  /**
   * {@inheritDoc TomIterator.drop}
   */
  public drop(limit: number): TomIterator<TValue> {
    assert(
      Number.isSafeInteger(limit) && limit >= 0,
      () => template`Expected finite non-negative integer, ${0} given`(limit),
      RangeError,
    );

    return TomIteratorImpl.from(
      (function* (iterator: TomIteratorImpl<TValue>) {
        let current = 0;

        for (const value of iterator) {
          if (++current > limit) {
            yield value;
            yield* iterator;
          }
        }
      })(this),
    );
  }

  /**
   * {@inheritDoc TomIterator.every}
   */
  public every(predicate: (value: TValue, index: number) => unknown): boolean {
    let index = 0;

    for (const value of this) {
      if (!predicate(value, index++)) {
        return false;
      }
    }

    return true;
  }

  /**
   * {@inheritDoc TomIterator.(filter:1)}
   */
  public filter<TExpected extends TValue>(
    predicate: (value: TValue, index: number) => value is TExpected,
  ): TomIterator<TExpected>;
  /**
   * {@inheritDoc TomIterator.(filter:2)}
   */
  public filter(
    predicate: (value: TValue, index: number) => unknown,
  ): TomIterator<TValue> {
    return TomIteratorImpl.from(
      (function* (iterator: TomIterator<TValue>) {
        let index = 0;

        for (const value of iterator) {
          if (predicate(value, index++)) {
            yield value;
          }
        }
      })(this),
    );
  }

  /**
   * {@inheritDoc TomIterator.map}
   */
  public map<TReturn>(
    callback: (value: TValue, index: number) => TReturn,
  ): TomIterator<TReturn> {
    return TomIteratorImpl.from(
      (function* (iterator: TomIterator<TValue>) {
        let index = 0;

        for (const value of iterator) {
          yield callback(value, index++);
        }
      })(this),
    );
  }

  /**
   * {@inheritDoc TomIterator.next}
   */
  public abstract next(): IteratorResult<TValue>;

  /**
   * {@inheritDoc TomIterator.some}
   */
  public some(predicate: (value: TValue, index: number) => unknown): boolean {
    let index = 0;

    for (const value of this) {
      if (predicate(value, index++)) {
        return true;
      }
    }

    return false;
  }

  public [Symbol.iterator](): TomIterator<TValue> {
    return this;
  }

  /**
   * {@inheritDoc TomIterator.take}
   */
  public take(limit: number): TomIterator<TValue> {
    assert(
      Number.isSafeInteger(limit) && limit >= 0,
      () => template`Expected safe non-negative integer, ${0} given`(limit),
      RangeError,
    );

    return TomIteratorImpl.from(
      (function* (iterator: TomIteratorImpl<TValue>) {
        let current = 0;

        for (const value of iterator) {
          if (++current > limit) {
            break;
          }

          yield value;
        }
      })(this),
    );
  }
}
