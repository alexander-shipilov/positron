import { TreeFragment } from "../TreeFragment";
import type { TreeNode } from "../TreeNode";

/**
 * Checks if the passed `node` is tree fragment
 * @param node - Node
 */
export function isFragment(node: TreeNode): node is TreeFragment {
  return node instanceof TreeFragment;
}
