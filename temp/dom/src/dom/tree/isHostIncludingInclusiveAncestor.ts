import { DocumentFragment } from "../DocumentFragment";
import type { Node } from "../node/Node";
import { isInclusiveAncestor } from "./isInclusiveAncestor";

/**
 * https://dom.spec.whatwg.org/#concept-tree-host-including-inclusive-ancestor
 *
 * An object A is a [host-including inclusive ancestor] of an object B, if
 * either A is an [inclusive ancestor] of B, or if B’s [root] has a non-null
 * [host] and A is a [host-including inclusive ancestor] of B’s root’s [host].
 */
export function isHostIncludingInclusiveAncestor(
  nodeA: Node,
  nodeB: Node
): boolean {
  return (
    isInclusiveAncestor(nodeA, nodeB) ||
    (nodeB instanceof DocumentFragment &&
      nodeB.host !== null &&
      isHostIncludingInclusiveAncestor(nodeA, nodeB.host))
  );
}
