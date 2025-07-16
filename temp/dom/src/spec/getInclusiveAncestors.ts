import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { getAncestors } from "./getAncestors";

/**
 * https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor
 *
 * @param tree - Tree
 * @param node - Node
 */
export function* getInclusiveAncestors(
  tree: Tree,
  node: TreeNode
): IterableIterator<TreeNode> {
  yield node;
  yield* getAncestors(tree, node);
}
