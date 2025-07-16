import type { Tree } from "../Tree";
import type { TreeNode } from "../TreeNode";
import type { TreeRoot } from "../TreeRoot";
import { isFragment } from "./isFragment";
import { isRoot } from "./isRoot";

export function cloneNode(
  tree: Tree,
  node: TreeNode,
  rootNode: TreeRoot
): TreeNode {
  return isRoot(node)
    ? tree.createRoot()
    : isFragment(node)
    ? tree.createFragment(rootNode, node.host)
    : tree.createNode(rootNode);
}
