import type { Node } from "../node/Node";
import { ancestors } from "./ancestors";

/**
 * https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor
 *
 * An [inclusive ancestor] is an object or one of its [ancestors].
 */
export function* inclusiveAncestors(node: Node): IterableIterator<Node> {
  yield node;
  yield* ancestors(node);
}
