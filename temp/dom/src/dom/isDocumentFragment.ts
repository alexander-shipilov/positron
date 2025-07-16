import { DocumentFragment } from "./DocumentFragment";
import type { Node } from "./node/Node";

export function isDocumentFragment(
  node: Node | null
): node is DocumentFragment {
  return node instanceof DocumentFragment;
}
