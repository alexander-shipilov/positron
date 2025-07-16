import { TreeNode } from "../TreeNode";

/**
 * https://dom.spec.whatwg.org/#dom-node-replacechild
 *
 * @param parent
 * @param node
 * @param child
 */
export function replaceChild<T extends TreeNode>(
  parent: TreeNode,
  node: TreeNode,
  child: T
): T {}
