import type { TreeNode } from "../TreeNode";
import { TreeShadowRoot } from "../TreeShadowRoot";

/**
 * Checks if the passed `node` is shadow root
 * @param node - Node
 */
export function isShadowRoot(node: TreeNode): node is TreeShadowRoot {
  return node instanceof TreeShadowRoot;
}
