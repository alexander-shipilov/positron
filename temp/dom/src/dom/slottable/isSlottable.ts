import { Element } from "../element/Element";
import { isElement } from "../element/isElement";
import type { Node } from "../node/Node";
import { isText } from "../text/isText";
import { Text } from "../text/Text";
import type { Slottable } from "./Slottable";

/**
 * https://dom.spec.whatwg.org/#concept-slotable
 *
 * [Element] and [Text] nodes are [slottables].
 */
export function isSlottable(node: Node): node is Slottable & (Element | Text) {
  return isElement(node) || isText(node);
}
