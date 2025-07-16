import type { Node } from "../node/Node";
import { isDescendant } from "./isDescendant";

/**
 * https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant
 *
 * An [inclusive descendant] is an object or one of its [descendants].
 */
export function isInclusiveDescendant(nodeA: Node, nodeB: Node): boolean {
  return nodeA === nodeB || isDescendant(nodeA, nodeB);
}
