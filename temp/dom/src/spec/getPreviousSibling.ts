import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";

/**
 * https://dom.spec.whatwg.org/#concept-tree-previous-sibling
 *
 * @param tree - Tree
 * @param node - Node
 */
export function getPreviousSibling(
  tree: Tree,
  node: TreeNode
): TreeNode | null {
  return tree.nodeStore.getPreviousSibling(node);
}
