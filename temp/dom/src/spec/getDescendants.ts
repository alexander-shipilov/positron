import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { getChildren } from "./getChildren";

/**
 * https://dom.spec.whatwg.org/#concept-tree-descendant
 *
 * @param tree - Tree
 * @param node - Node
 */
export function* getDescendants(
  tree: Tree,
  node: TreeNode
): IterableIterator<TreeNode> {
  for (const childNode of getChildren(tree, node)) {
    yield childNode;
    yield* getDescendants(tree, childNode);
  }
}
