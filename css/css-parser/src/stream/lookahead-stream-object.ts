import type { Nullish } from "@positron/lang";

import type { LookaheadStream } from "./lookahead-stream";
import type { StreamElement } from "./stream-element";
import type { StreamNext } from "./stream-next";
import { StreamObject } from "./stream-object";

/**
 * The {@link LookaheadStreamObject} class implements the
 * {@link LookaheadStream} interface.
 *
 * @privateRemarks
 *   - `#next` holds the original source reader function so that
 *     {@link LookaheadStreamObject.peek} and
 *     {@link LookaheadStreamObject.lookahead} can populate `#cache` directly
 *     without advancing the parent pushback state.
 *
 *   - Synchronizes `#cache` with the parent pushback state so that
 *     {@link LookaheadStreamObject.peek} and
 *     {@link LookaheadStreamObject.lookahead} observe reconsumed elements
 *     while {@link StreamObject.reconsume} remains the single source of truth
 *     for backtracking eligibility.
 *
 * @typeParam TElement - The type of elements yielded by this stream.
 *
 * @public
 */
export class LookaheadStreamObject<TElement extends StreamElement>
  extends StreamObject<TElement>
  implements LookaheadStream<TElement>
{
  readonly #cache: TElement[] = [];

  readonly #next: StreamNext<TElement>;

  /**
   * The {@link LookaheadStreamObject} constructor creates a new
   * {@link LookaheadStreamObject} backed by the given `next` reader function.
   *
   * @param next - The function to read the next element from the source.
   */
  public constructor(next: StreamNext<TElement>) {
    super((): Nullish<TElement> => this.#cache.shift() ?? next());

    this.#next = next;
  }

  /**
   * {@inheritDoc Stream.consume}
   */
  public override consume(): Nullish<TElement> {
    if (this.reconsumed && this.current != null) {
      this.#cache.shift();
    }

    return super.consume();
  }

  /**
   * {@inheritDoc LookaheadStream.lookahead}
   */
  public lookahead(count: number = 1): TElement[] {
    let elements: TElement[] = [];

    if (count >= 1) {
      let element: Nullish<TElement>;

      while (this.#cache.length <= count - 1) {
        element = this.#next();

        if (element == null) {
          break;
        }

        this.#cache.push(element);
      }

      // Always return a shallow copy to prevent external mutation of the cache.
      elements = this.#cache.slice(0, count);
    }

    return elements;
  }

  /**
   * {@inheritDoc LookaheadStream.peek}
   */
  public peek(): Nullish<TElement> {
    let element: Nullish<TElement>;

    if (this.#cache.length > 0) {
      element = this.#cache[0] ?? null;
    } else {
      element = this.#next();

      if (element != null) {
        this.#cache.push(element);
      }
    }

    return element;
  }

  /**
   * {@inheritDoc Stream.reconsume}
   */
  public override reconsume(): boolean {
    const reconsumed = super.reconsume();

    if (reconsumed && this.current != null) {
      this.#cache.unshift(this.current);
    }

    return reconsumed;
  }
}
