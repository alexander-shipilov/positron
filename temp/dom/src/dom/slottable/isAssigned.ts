import type { Node } from "../node/Node";
import type { AssignedSlot } from "./AssignedSlot";
import { isSlottable } from "./isSlottable";
import type { Slottable } from "./Slottable";
import { assignedSlot } from "./Slottable.symbols";

export function isAssigned<T extends Node & Slottable>(
  node: T
): node is T & { [assignedSlot]: Exclude<AssignedSlot, null> } {
  return isSlottable(node) && node[assignedSlot] !== null;
}
