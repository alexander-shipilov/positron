import type { TreeNode } from "../index";
import { TreeRoot } from "../index";

/**
 * Checks if the passed `node` is tree root
 * @param node - Node
 */
export function isRoot(node: TreeNode): node is TreeRoot {
  return node instanceof TreeRoot;
}
