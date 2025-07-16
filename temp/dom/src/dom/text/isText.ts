import type { Node } from "../node/Node";
import { Text } from "./Text";

export function isText(node: Node | null): node is Text {
  return node instanceof Text;
}
