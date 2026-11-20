import type { Nullish } from "@positron/lang";

import type { StreamElement } from "./stream-element";

/**
 * The {@link Stream} interface represents a sequential reader that consumes
 * elements one by one from an underlying data source, with support for
 * single-element backtracking.
 *
 * @typeParam TElement - The type of elements yielded by this stream.
 *
 * @public
 */
export interface Stream<TElement extends StreamElement> {
  /**
   * The {@link Stream.consume} method reads the element at the current
   * cursor position and advances the cursor to the next element.
   *
   * @returns The next element in the stream, or `null` if the end of the
   *   stream has been reached.
   */
  consume(): Nullish<TElement>;

  /**
   * The {@link Stream.reconsume} method pushes the most recently consumed
   * element back onto the stream, moving the cursor one step backward so that
   * the next call to {@link Stream.consume} returns that same element again.
   *
   * @remarks
   *   Only single-element backtracking is supported: multiple consecutive calls
   *   without an intervening {@link Stream.consume} are idempotent and behave
   *   as a single call. Calling this method before any element has been
   *   consumed is a safe no-op.
   *
   * @returns `true` if the most recently consumed element was pushed back onto
   *   the stream; `false` if no element has been consumed yet or
   *   {@link Stream.reconsume} has already been called since the last
   *   {@link Stream.consume}.
   */
  reconsume(): boolean;
}
