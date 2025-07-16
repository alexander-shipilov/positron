import type { Node } from "../node/Node";
import { isSibling } from "./isSibling";

export function isFollowingSibling(nodeA: Node, nodeB: Node): boolean {
  return isSibling(nodeA, nodeB) && nodeA.index > nodeB.index;
}
