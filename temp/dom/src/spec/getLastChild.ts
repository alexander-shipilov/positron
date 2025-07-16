import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";

/**
 * https://dom.spec.whatwg.org/#concept-tree-last-child
 *
 * @param tree - Tree
 * @param node - Node
 */
export function getLastChild(tree: Tree, node: TreeNode): TreeNode | null {
  return tree.nodeStore.getLastChild(node);
}
