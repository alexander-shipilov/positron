import { DocumentType } from "./DocumentType";
import type { Node } from "./node/Node";

export function isDocumentType(node: Node | null): node is DocumentType {
  return node instanceof DocumentType;
}
