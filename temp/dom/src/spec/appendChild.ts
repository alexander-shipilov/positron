import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";

/**
 *
 * @param tree - Tree
 * @param parent - Parent
 * @param node - Node
 */
export function appendChild<T extends TreeNode>(
  tree: Tree,
  parent: TreeNode,
  node: T
): T {
  return node;
}
