import type { Node } from "../node/Node";
import { descendants } from "./descendants";

/**
 * https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant
 *
 * An inclusive descendant is an object or one of its descendants.
 */
export function* inclusiveDescendants(node: Node): Iterable<Node> {
  yield node;
  yield* descendants(node);
}
