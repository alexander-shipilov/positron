import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";

/**
 * https://dom.spec.whatwg.org/#concept-tree-index
 *
 * @param tree - Tree
 * @param node - Node
 */
export function getIndex(tree: Tree, node: TreeNode): number {
  return tree.nodeStore.getIndex(node);
}
