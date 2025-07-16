import { isShadowHost } from "../element/isShadowHost";
import type { Node } from "../node/Node";
import { descendants } from "./descendants";

/**
 * https://dom.spec.whatwg.org/#concept-shadow-including-descendant
 *
 * An object A is a [shadow-including descendant] of an object B, if A is a
 * [descendant] of B, or A’s [root] is a [shadow root] and A’s [root]’s [host]
 * is a  [shadow-including inclusive descendant] of B.
 */
export function* shadowIncludingDescendants(node: Node): Iterable<Node> {
  for (const descendant of descendants(node)) {
    yield descendant;

    if (isShadowHost(descendant)) {
      yield descendant.shadowRoot;
      yield* shadowIncludingDescendants(descendant.shadowRoot);
    }
  }
}
