import type { Node } from "../node/Node";

/**
 * @param nodeA
 * @param nodeB
 */
export function isSibling(nodeA: Node, nodeB: Node): boolean {
  return nodeA.parent === nodeB.parent;
}
