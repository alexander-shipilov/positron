import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { getDescendants } from "./getDescendants";

export function* getInclusiveDescendants(
  tree: Tree,
  node: TreeNode
): IterableIterator<TreeNode> {
  yield node;
  yield* getDescendants(tree, node);
}
