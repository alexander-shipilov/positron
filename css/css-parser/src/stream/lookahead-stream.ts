import type { Nullish } from "@positron/lang";

import type { Stream } from "./stream";
import type { StreamElement } from "./stream-element";

/**
 * The {@link LookaheadStream} interface extends the {@link Stream} interface,
 * adding the ability to look ahead and examine upcoming elements in the stream
 * without consuming them.
 *
 * @typeParam TElement - The type of elements yielded by this stream.
 *
 * @public
 */
export interface LookaheadStream<
  TElement extends StreamElement,
> extends Stream<TElement> {
  /**
   * The {@link LookaheadStream.lookahead} method returns an array containing
   * the next `count` unconsumed elements starting from the current cursor
   * position.
   *
   * @remarks
   *   - Reading upcoming elements is non-destructive and does not advance or
   *     alter the current cursor position.
   *
   *   - If {@link Stream.reconsume} was called right before
   *     {@link LookaheadStream.lookahead}, the reconsumed element is treated
   *     as unconsumed and will appear first in the returned array.
   *
   *   - The length of the returned array may be smaller than `count` if fewer
   *     elements remain in the stream. Always check the array length before
   *     indexing into it to avoid `undefined` values (especially with
   *     `noUncheckedIndexedAccess` enabled).
   *
   * @param count - The number of elements to look ahead. Defaults to `1`.
   *   Non-integer values are truncated toward zero (e.g., `lookahead(2.5)`
   *   reads `2` elements).
   *
   * @returns An array of upcoming elements, or an empty array if `count` is
   *   less than `1` (or `NaN`) or the end of the stream has been reached.
   */
  lookahead(count?: number): TElement[];

  /**
   * The {@link LookaheadStream.peek} method returns the immediate next
   * unconsumed element at the current cursor position without consuming it.
   *
   * @remarks
   *
   *   - Unlike {@link LookaheadStream.lookahead}, this method does not
   *     allocate an array and is intended for single-element inspection.
   *
   *   - Reading the next element is non-destructive and does not advance or
   *     alter the current cursor position.
   *
   *   - If {@link Stream.reconsume} was called right before
   *     {@link LookaheadStream.peek}, the reconsumed element is treated as
   *     unconsumed and will be returned.
   *
   * @returns The immediate next element in the stream, or `null` if the end
   *   of the stream has been reached.
   */
  peek(): Nullish<TElement>;
}
