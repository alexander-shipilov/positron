import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import type { TreeRoot } from "../TreeRoot";

/**
 *
 * @param tree - Tree
 * @param node - Node
 */
export function getOwner(tree: Tree, node: TreeNode): TreeRoot {
  return tree.nodeStore.getOwnerRoot(node);
}
