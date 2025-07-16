import type { Node } from "../node/Node";
import { shadowIncludingDescendants } from "./shadowIncludingDescendants";

/**
 * https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-descendant
 *
 * A [shadow-including inclusive descendant] is an object or one of its
 * [shadow-including descendants].
 */
export function* shadowIncludingInclusiveDescendants(
  node: Node
): Iterable<Node> {
  yield node;
  yield* shadowIncludingDescendants(node);
}
