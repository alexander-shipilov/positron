import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import { ensurePreInsertionValidity } from "./ensurePreInsertionValidity";
import { getNextSibling } from "./getNextSibling";
import { insert } from "./insert";

/**
 * https://dom.spec.whatwg.org/#concept-node-pre-insert
 *
 * @param tree - Tree
 * @param node - Node
 * @param parent - Parent
 * @param child - Child
 */
export function preInsert<T extends TreeNode>(
  tree: Tree,
  node: T,
  parent: TreeNode,
  child: TreeNode | null
): T {
  // To pre-insert a `node` into a `parent` before a `child`, run these steps:
  // 1. Ensure [pre-insertion validity] of `node` into `parent` before `child`.
  ensurePreInsertionValidity(tree, node, parent, child);

  // 2. Let `referenceChild` be `child`.
  // 3. If `referenceChild` is `node`, then set `referenceChild` to
  // `node`’s [next sibling].
  const referenceChild = child === node ? getNextSibling(tree, node) : child;

  // 4. [Insert] `node` into [parent] before [referenceChild].
  insert(tree, node, parent, referenceChild);

  // 5. Return `node`.
  return node;
}
