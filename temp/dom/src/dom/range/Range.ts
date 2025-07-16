import type { Node } from "../node/Node";
import { AbstractRange } from "./AbstractRange";

/**
 * https://dom.spec.whatwg.org/#range
 *
 * Objects implementing the [Range] interface are known as [live ranges].
 */
export abstract class Range extends AbstractRange {
  /**
   * https://dom.spec.whatwg.org/#concept-range-root
   */
  get root(): Node {
    // The [root] of a [live range] is the [root] of its [start node].
    return this.startNode.root;
  }
}
