import type { Node } from "../node/Node";

/**
 * https://dom.spec.whatwg.org/#concept-tree-descendant
 *
 * An object A is called a [descendant] of an object B, if either A is a
 * [child] of B or A is a [child] of an object C that is a [descendant] of B.
 */
export function isDescendant(nodeA: Node, nodeB: Node): boolean {
  let ancestorA = nodeA.parent;

  while (ancestorA !== null) {
    if (ancestorA === nodeB) {
      return true;
    }

    ancestorA = ancestorA.parent;
  }

  return false;
}
