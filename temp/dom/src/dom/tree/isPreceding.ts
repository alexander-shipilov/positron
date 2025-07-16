import type { Node } from "../node/Node";
import { findSiblingAncestors } from "./findSiblingAncestors";
import { hostIncludingInclusiveAncestors } from "./hostIncludingInclusiveAncestors";
import { isPrecedingSibling } from "./isPrecedingSibling";

/**
 * https://dom.spec.whatwg.org/#concept-tree-following
 *
 * An object A is [following] an object B if A and B are in the same tree and A
 * comes after B in tree order.
 */

export function isPreceding(nodeA: Node, nodeB: Node): boolean {
  const siblingAncestors = findSiblingAncestors(
    hostIncludingInclusiveAncestors,
    nodeA,
    nodeB
  );

  return siblingAncestors !== null && isPrecedingSibling(...siblingAncestors);
}
