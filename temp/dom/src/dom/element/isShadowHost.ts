import type { Node } from "../node/Node";
import type { Element } from "./Element";
import type { ElementShadowRoot } from "./ElementShadowRoot";
import { isElement } from "./isElement";

/**
 * An [element] is a [shadow host] if its [shadow root] is non-null.
 */
export function isShadowHost(node: Node): node is Element & {
  shadowRoot: Exclude<ElementShadowRoot, null>;
} {
  return isElement(node) && node.shadowRoot !== null;
}
