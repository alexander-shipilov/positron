import type { Node } from "./node/Node";
import { ProcessingInstruction } from "./ProcessingInstruction";

export function isProcessingInstruction(
  node: Node | null
): node is ProcessingInstruction {
  return node instanceof ProcessingInstruction;
}
