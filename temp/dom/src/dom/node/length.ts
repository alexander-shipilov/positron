import { Attr } from "../attribute/Attr";
import { CharacterData } from "../CharacterData";
import { DocumentType } from "../DocumentType";
import type { Node } from "./Node";

/**
 * https://dom.spec.whatwg.org/#concept-node-length
 *
 * To determine the [length] of a [node] `node`, run these steps:
 */
export function length(node: Node) {
  // 1. If `node` is a [DocumentType] or [Attr] node, then return 0.
  if (node instanceof DocumentType || node instanceof Attr) {
    return 0;
  }

  // 2. If `node` is a [CharacterData] node, then return `node`’s [data]’s
  // length.
  if (node instanceof CharacterData) {
    return node.data.length;
  }

  // 3. Return the number of `node`’s [children].
  return node.children.size;
}
