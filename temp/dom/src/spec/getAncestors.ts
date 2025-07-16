import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { getParent } from "./getParent";

/**
 * https://dom.spec.whatwg.org/#concept-tree-ancestor
 *
 * @param tree - Tree
 * @param node - Node
 */
export function* getAncestors(
  tree: Tree,
  node: TreeNode
): IterableIterator<TreeNode> {
  let ancestor = getParent(tree, node);

  while (ancestor !== null) {
    yield ancestor;

    ancestor = getParent(tree, ancestor);
  }
}
