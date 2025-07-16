import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { isDescendant } from "./isDescendant";

/**
 * https://dom.spec.whatwg.org/#concept-tree-ancestor
 *
 * @param tree - Tree
 * @param maybeAncestor - Node to check
 * @param node - Node
 */
export function isAncestor(
  tree: Tree,
  maybeAncestor: TreeNode,
  node: TreeNode
): boolean {
  return isDescendant(tree, node, maybeAncestor);
}
