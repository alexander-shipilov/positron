import type { Node } from "../node/Node";
import { inclusiveAncestors } from "./inclusiveAncestors";

/**
 * https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor
 *
 * An [inclusive ancestor] is an object or one of its [ancestors].
 */
export function isInclusiveAncestor(nodeA: Node, nodeB: Node): boolean {
  for (const ancestor of inclusiveAncestors(nodeB)) {
    if (ancestor === nodeA) {
      return true;
    }
  }

  return false;
}
