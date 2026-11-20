import type { Nullish } from "@positron/lang";

import type { Stream } from "./stream";
import type { StreamElement } from "./stream-element";
import type { StreamNext } from "./stream-next";

/**
 * The {@link StreamObject} class implements the {@link Stream} interface using
 * a single-element pushback buffer for backtracking.
 *
 * @remarks
 *   Callers only need to provide a {@link StreamNext} reader function for
 *   forward sequential reading. Single-element backtracking via
 *   {@link StreamObject.reconsume} is handled entirely by this class.
 *
 * @privateRemarks
 *   State machine invariants:
 *
 *   - `#consumed` distinguishes an untouched stream (where `reconsume()`
 *      must be a no-op and return `false`) from a stream that has already
 *      yielded `null` (EOF).
 *
 *   - `null` (EOF) is treated as a valid consumed token: reconsuming at EOF
 *      replays `null` on the next `consume()` call without invoking `next()`
 *      again.
 *
 * @typeParam TElement - The type of elements yielded by this stream.
 *
 * @public
 */
export class StreamObject<
  TElement extends StreamElement,
> implements Stream<TElement> {
  protected current: Nullish<TElement> = null;

  protected readonly next: StreamNext<TElement>;

  protected reconsumed = false;

  #consumed = false;

  /**
   * @param next - The function to read the next element from the source.
   */
  public constructor(next: StreamNext<TElement>) {
    this.next = next;
  }

  /**
   * {@inheritDoc Stream.consume}
   */
  public consume(): Nullish<TElement> {
    let element: Nullish<TElement>;

    if (this.reconsumed) {
      element = this.current;
      this.reconsumed = false;
    } else {
      element = this.next();
      this.current = element;
      this.#consumed = true;
    }

    return element;
  }

  /**
   * {@inheritDoc Stream.reconsume}
   */
  public reconsume(): boolean {
    const canReconsume = this.#consumed && !this.reconsumed;

    if (canReconsume) {
      this.reconsumed = true;
    }

    return canReconsume;
  }
}
