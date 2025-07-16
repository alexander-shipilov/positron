import { DocumentFragment } from "../DocumentFragment";
import type { Node } from "../node/Node";
import { inclusiveAncestors } from "./inclusiveAncestors";

/**
 * https://dom.spec.whatwg.org/#concept-tree-host-including-inclusive-ancestor
 *
 * An object A is a host-including inclusive ancestor of an object B, if
 * either A is an inclusive ancestor of B, or if B’s [root] has a non-null
 * [host] and A is a [host-including inclusive ancestor] of B’s root’s [host].
 */
export function* hostIncludingInclusiveAncestors(node: Node): Iterable<Node> {
  const { root } = node;

  yield* inclusiveAncestors(node);

  if (root instanceof DocumentFragment && root.host !== null) {
    yield* hostIncludingInclusiveAncestors(root.host);
  }
}
