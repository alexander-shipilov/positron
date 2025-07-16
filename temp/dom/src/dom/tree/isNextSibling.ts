import type { Node } from "../node/Node";
import { isSibling } from "./isSibling";

/**
 * https://dom.spec.whatwg.org/#concept-tree-next-sibling
 *
 * The [next sibling] of an object is its first [following] [sibling] or null
 * if it has no [following] [sibling].
 */
export function isNextSibling(nodeA: Node, nodeB: Node): boolean {
  return isSibling(nodeA, nodeB) && nodeA.index - nodeB.index === 1;
}
