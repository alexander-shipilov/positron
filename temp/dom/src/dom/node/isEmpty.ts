import { length } from "./length";
import type { Node } from "./Node";

/**
 * https://dom.spec.whatwg.org/#concept-node-empty
 */
export function isEmpty(node: Node): boolean {
  // A [node] is considered [empty] if its [length] is 0.
  return length(node) === 0;
}
