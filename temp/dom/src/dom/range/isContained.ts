/**
 * https://dom.spec.whatwg.org/#contained
 */
import { length } from "../node/length";
import type { Node } from "../node/Node";
import { BoundaryPointPosition } from "./BoundaryPointPosition";
import { position } from "./position";
import type { Range } from "./Range";

/**
 * A [node] `node` is contained in a [live range] `range` if `node`’s [root]
 * is `range`’s [root], and (`node`, 0) is after `range`’s [start], and
 * (`node`, `node`’s [length]) is [before] `range`’s [end].
 */
export function isContained(node: Node, range: Range): boolean {
  return (
    node.root === range.root &&
    position([node.root, 0], range.start) === BoundaryPointPosition.after &&
    position([node, length(node)], range.end) === BoundaryPointPosition.before
  );
}
