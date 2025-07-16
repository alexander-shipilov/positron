import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { getParent } from "./getParent";

/**
 * https://dom.spec.whatwg.org/#concept-tree-descendant
 *
 * @param tree - Tree
 * @param maybeDescendant - Maybe descendant
 * @param node - Node
 */
export function isDescendant(
  tree: Tree,
  maybeDescendant: TreeNode,
  node: TreeNode
): boolean {
  let ancestor = getParent(tree, maybeDescendant);

  while (ancestor !== null) {
    if (ancestor === node) {
      return true;
    }

    ancestor = getParent(tree, ancestor);
  }

  return false;
}
