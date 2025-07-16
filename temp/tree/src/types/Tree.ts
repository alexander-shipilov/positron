import type { TreeImplementation } from "./TreeImplementation";
import type { TreeNode } from "./TreeNode";

export interface Tree<Node extends TreeNode = TreeNode> {
  readonly implementation: TreeImplementation<Node>;
}
