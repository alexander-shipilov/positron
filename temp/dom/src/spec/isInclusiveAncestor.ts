import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { isAncestor } from "./isAncestor";

/**
 * https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor
 *
 * @param tree - Tree
 * @param maybeInclusiveAncestor - Maybe inclusive ancestor
 * @param node - Node
 */
export function isInclusiveAncestor(
  tree: Tree,
  maybeInclusiveAncestor: TreeNode,
  node: TreeNode
): boolean {
  return (
    maybeInclusiveAncestor === node ||
    isAncestor(tree, maybeInclusiveAncestor, node)
  );
}
