import type { Node } from "../node/Node";

/**
 * https://dom.spec.whatwg.org/#concept-tree-child
 *
 * An object A is called a [descendant] of an object B, if either A is a
 * [child] of B or A is a [child] of an object C that is a [descendant] of B.
 */
export function isChild(nodeA: Node, nodeB: Node): boolean {
  return nodeA.parent === nodeB;
}
