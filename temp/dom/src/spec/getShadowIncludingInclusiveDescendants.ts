import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { getInclusiveDescendants } from "./getInclusiveDescendants";

/**
 * https://dom.spec.whatwg.org/#concept-shadow-including-inclusive-descendant
 *
 * @param tree - Tree
 * @param node - Node
 */
export function* getShadowIncludingInclusiveDescendants(
  tree: Tree,
  node: TreeNode
): IterableIterator<TreeNode> {
  yield* getInclusiveDescendants(tree, node);
}
