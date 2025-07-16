import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";

/**
 * @param tree - Tree
 * @param node - Node
 * @param parentNode - Parent node
 */
export function setParent(
  tree: Tree,
  node: TreeNode,
  parentNode: TreeNode
): void {
  tree.nodeStore.setParentNode(node, parentNode);
}
