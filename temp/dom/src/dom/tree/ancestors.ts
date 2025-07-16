import type { Node } from "../node/Node";

/**
 * https://dom.spec.whatwg.org/#concept-tree-ancestor
 *
 * An object A is called an [ancestor] of an object B if and only if B
 * is a [descendant] of A.
 */
export function* ancestors(node: Node): Iterable<Node> {
  let ancestor = node.parent;

  while (ancestor !== null) {
    yield ancestor;

    ancestor = ancestor.parent;
  }
}
