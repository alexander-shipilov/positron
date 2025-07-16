import type { Node } from "../node/Node";
import { CustomElementState } from "./CustomElementState";
import type { Element } from "./Element";
import { isElement } from "./isElement";

/**
 * https://dom.spec.whatwg.org/#concept-element-defined
 *
 * An element whose `custom element state` is "uncustomized" or "custom" is
 * said to be [defined]
 */
export function isDefined(node: Node): node is Element {
  return (
    isElement(node) &&
    (node.customElementState === CustomElementState.uncustomized ||
      node.customElementState === CustomElementState.custom)
  );
}
