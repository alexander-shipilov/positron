import type { Node } from "../node/Node";
import { isSibling } from "./isSibling";

/**
 * https://dom.spec.whatwg.org/#concept-tree-previous-sibling
 *
 * The [previous sibling] of an object is its first [preceding] [sibling] or
 * `null` if it has no [preceding] [sibling].
 */
export function isPreviousSibling(nodeA: Node, nodeB: Node): boolean {
  return isSibling(nodeA, nodeB) && nodeA.index - nodeB.index === -1;
}
