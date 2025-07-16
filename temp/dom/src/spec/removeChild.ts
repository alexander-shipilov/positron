import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { preRemove } from "./preRemove";

/**
 * @param tree - Tree
 * @param parent - Parent
 * @param node - Node
 */
export function removeChild<T extends TreeNode>(
  tree: Tree,
  parent: TreeNode,
  node: T
): T {
  return preRemove(tree, node, parent);
}
