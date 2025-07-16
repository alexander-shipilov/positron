import type { Tree } from "../Tree";
import { TreeException } from "../TreeException";
import { TreeExceptionNameEnum } from "../TreeExceptionName.enum";
import type { TreeNode } from "../TreeNode";
import { getParent } from "./getParent";
import { remove } from "./remove";

/**
 * https://dom.spec.whatwg.org/#concept-node-pre-remove
 *
 * @param tree - Tree
 * @param child - Child
 * @param parent - Parent
 */
export function preRemove<T extends TreeNode>(
  tree: Tree,
  child: T,
  parent: TreeNode
): T {
  // 1. If `child`’s [node parent] is not `parent`, then throw
  // a "NotFoundError" TreeException.
  if (getParent(tree, child) !== parent) {
    throw new TreeException("tbd", TreeExceptionNameEnum.NotFoundError);
  }

  // 2. [Remove] `child`.
  remove(tree, child);

  // 3. Return `child`.
  return child;
}
