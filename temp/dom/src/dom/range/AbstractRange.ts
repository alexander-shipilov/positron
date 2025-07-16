import type { Node } from "../node/Node";
import type { BoundaryPoint } from "./BoundaryPoint";

/**
 * https://dom.spec.whatwg.org/#abstractrange
 *
 * Objects implementing the [AbstractRange] interface are known as [ranges].
 */
export abstract class AbstractRange {
  // A range has two [associated boundary] points — a [start] and [end].
  // For convenience, a [range]’s [start node] is its [start]’s [node], its
  // [start offset] is its [start]’s [offset], its [end node] is its [end]’s
  // [node], and its [end offset] is its [end]’s [offset].

  /**
   * https://dom.spec.whatwg.org/#concept-range-end
   */
  abstract end: BoundaryPoint;

  /**
   * https://dom.spec.whatwg.org/#concept-range-start
   */
  abstract start: BoundaryPoint;

  /**
   * https://dom.spec.whatwg.org/#range-collapsed
   */
  get collapsed(): boolean {
    // A [range] is collapsed if its [start node] is its [end node] and
    // its [start offset] is its [end offset].
    return (
      this.startNode === this.endNode && this.startOffset === this.endOffset
    );
  }

  /**
   * https://dom.spec.whatwg.org/#concept-range-end-node
   */
  get endNode(): Node {
    return this.end[0];
  }

  /**
   * https://dom.spec.whatwg.org/#concept-range-end-offset
   */
  get endOffset(): number {
    return this.end[1];
  }

  /**
   * https://dom.spec.whatwg.org/#concept-range-start-node
   */
  get startNode(): Node {
    return this.start[0];
  }

  /**
   * https://dom.spec.whatwg.org/#concept-range-start-offset
   */
  get startOffset(): number {
    return this.start[1];
  }
}
