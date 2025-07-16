import type { Node } from "../node/Node";
import { Element } from "./Element";

/**
 * https://dom.spec.whatwg.org/#concept-element
 *
 * [Element] nodes are simply known as [elements].
 */
export function isElement(node: Node | null): node is Element {
  return node instanceof Element;
}
