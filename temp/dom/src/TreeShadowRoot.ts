import type { Tree } from "./Tree";
import { TreeFragment } from "./TreeFragment";
import type { TreeNode } from "./TreeNode";

export class TreeShadowRoot extends TreeFragment {
  /**
   * @param implementation - Implementation
   * @param host - Link to host tree or null
   */
  constructor(implementation: Tree, host: TreeNode) {
    super(implementation, host);
  }
}
