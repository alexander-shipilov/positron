import type { Node } from "../node/Node";
import { Attr } from "./Attr";

/**
 * https://dom.spec.whatwg.org/#concept-attribute
 * Attr [nodes] are simply known as [attributes]. They are sometimes referred
 * to as [content attributes] to avoid confusion with IDL attributes.
 */
export function isAttr(node: Node | null): node is Attr {
  return node instanceof Attr;
}
