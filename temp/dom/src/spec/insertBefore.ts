import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";

/**
 *
 * @param tree - Tree
 * @param parent - Parent
 * @param node - Node
 */
export function insertBefore<TNode extends TreeNode>(
  tree: Tree,
  parent: TreeNode,
  node: TNode,
  relNode: TreeNode
): TNode {
  return node;
}
