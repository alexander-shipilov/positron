import type { DocumentFragment } from "../DocumentFragment";
import type { Element } from "../element/Element";
import { isDocumentFragment } from "../isDocumentFragment";
import type { Node } from "../node/Node";

export function isShadowRoot(
  node: Node | null
): node is DocumentFragment & { host: Element } {
  return isDocumentFragment(node) && node.host !== null;
}
