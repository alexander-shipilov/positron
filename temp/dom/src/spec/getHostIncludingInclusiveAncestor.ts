import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { getInclusiveAncestors } from "./getInclusiveAncestors";

/**
 * https://dom.spec.whatwg.org/#concept-tree-host-including-inclusive-ancestor
 *
 * @param tree - Tree
 * @param node - Node
 */
export function* getHostIncludingInclusiveAncestor(
  tree: Tree,
  node: TreeNode
): IterableIterator<TreeNode> {
  // An object A is a host-including inclusive ancestor of an object B, if
  // either A is an inclusive ancestor of B, or if B’s root has a non-null host
  // and A is a host-including inclusive ancestor of B’s root’s host.

  yield* getInclusiveAncestors(tree, node);
}
