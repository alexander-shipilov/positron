import type { Node } from "../node/Node";

/**
 * https://dom.spec.whatwg.org/#concept-range-bp
 *
 * A [boundary point] is a tuple consisting of a [node] (a [node]) and
 * an [offset] (a non-negative integer).
 */
export type BoundaryPoint = [node: Node, offset: number];
