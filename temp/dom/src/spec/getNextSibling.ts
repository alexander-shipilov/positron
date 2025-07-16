import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";

export function getNextSibling(tree: Tree, node: TreeNode): TreeNode | null {
  return tree.nodeStore.getNextSibling(node);
}
