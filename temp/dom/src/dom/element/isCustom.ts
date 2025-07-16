import type { Node } from "../node/Node";
import { CustomElementState } from "./CustomElementState";
import type { Element } from "./Element";
import { customElementState } from "./Element.symbols";
import { isElement } from "./isElement";

/**
 * https://dom.spec.whatwg.org/#concept-element-custom
 *
 * An [element] whose `custom element state` is "custom" is said to be [custom].
 */
export function isCustom(node: Node): node is Element {
  return (
    isElement(node) && node[customElementState] === CustomElementState.custom
  );
}
