import type { TreeSetInterface } from "../../types";
import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";

/**
 * https://dom.spec.whatwg.org/#concept-tree-child
 *
 * @param tree - Tree
 * @param node - Node
 */
export function getChildren(
  tree: Tree,
  node: TreeNode
): TreeSetInterface<TreeNode> {
  return tree.nodeStore.getChildNodes(node);
}
