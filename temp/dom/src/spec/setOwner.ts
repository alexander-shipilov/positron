import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import type { TreeRoot } from "../TreeRoot";

/**
 * @param tree - Tree
 * @param node - Node
 * @param ownerRoot - Owner root
 */
export function setOwner(
  tree: Tree,
  node: TreeNode,
  ownerRoot: TreeRoot
): void {
  tree.nodeStore.setOwnerRoot(node, ownerRoot);
}
