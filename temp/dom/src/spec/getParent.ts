import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";

/**
 * https://dom.spec.whatwg.org/#concept-tree-parent
 *
 * @param tree - Tree
 * @param node - Node
 */
export function getParent(tree: Tree, node: TreeNode): TreeNode | null {
  return tree.nodeStore.getParentNode(node);
}
