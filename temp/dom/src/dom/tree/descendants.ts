import type { Node } from "../node/Node";

/**
 * https://dom.spec.whatwg.org/#concept-tree-descendant
 */
export function* descendants(node: Node): Iterable<Node> {
  for (const childNode of node.children) {
    yield childNode;
    yield* descendants(childNode);
  }
}
