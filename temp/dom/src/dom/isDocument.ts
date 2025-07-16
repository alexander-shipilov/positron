import { Document } from "./Document";
import type { Node } from "./node/Node";

export function isDocument(node: Node | null): node is Document {
  return node instanceof Document;
}
