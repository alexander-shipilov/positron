import type { Tree } from "../Tree";
import { TreeException } from "../TreeException";
import { TreeExceptionNameEnum } from "../TreeExceptionName.enum";
import type { TreeNode } from "../TreeNode";
import type { TreeRoot } from "../TreeRoot";
import { isFragment } from "../utils/isFragment";
import { isNonNull } from "../utils/isNonNull";
import { isRoot } from "../utils/isRoot";
import { isShadowRoot } from "../utils/isShadowRoot";
import { adopt } from "./adopt";

/**
 * https://dom.spec.whatwg.org/#dom-document-adoptnode
 *
 * @param tree - Tree
 * @param root - Root
 * @param node - Node
 */
export function adoptNode<TNode extends TreeNode>(
  tree: Tree,
  root: TreeRoot,
  node: TNode
): TNode {
  // 1. If `node` is a root, then throw a "NotSupportedError" TreeException.
  if (isRoot(node)) {
    throw new TreeException("tbd", TreeExceptionNameEnum.NotSupportedError);
  }

  // 2. If `node` is a shadow root, then throw a "HierarchyRequestError"
  // TreeException.
  if (isShadowRoot(node)) {
    throw new TreeException("tbd", TreeExceptionNameEnum.HierarchyRequestError);
  }

  // 3. If `node` is a fragment whose `host` is non-null, then return.
  if (isFragment(node) && isNonNull(node.host)) {
    return node;
  }

  // 4. [adopt] `node` into `root`.
  adopt(tree, node, root);

  // 5. Return node.
  return node;
}
