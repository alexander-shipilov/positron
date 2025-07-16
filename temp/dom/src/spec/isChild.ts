import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { getParent } from "./getParent";

/**
 * https://dom.spec.whatwg.org/#concept-tree-child
 *
 * @param tree - Tree
 * @param maybeChild - Maybe child
 * @param node - Node
 */
export function isChild(
  tree: Tree,
  maybeChild: TreeNode,
  node: TreeNode
): boolean {
  return getParent(tree, maybeChild) === node;
}
