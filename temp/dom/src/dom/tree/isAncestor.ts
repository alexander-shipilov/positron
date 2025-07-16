import type { Node } from "../node/Node";
import { isDescendant } from "./isDescendant";

/**
 * https://dom.spec.whatwg.org/#concept-tree-ancestor
 *
 * An object A is called an [ancestor] of an object B if and only if B
 * is a [descendant] of A.
 */
export function isAncestor(nodeA: Node, nodeB: Node): boolean {
  return isDescendant(nodeB, nodeA);
}
