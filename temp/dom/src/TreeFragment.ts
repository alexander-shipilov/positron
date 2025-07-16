import type { TreeFragmentInterface } from "../types";
import type { Tree } from "./Tree";
import { TreeNode } from "./TreeNode";
import type { TreeRoot } from "./TreeRoot";

export class TreeFragment
  extends TreeNode
  implements TreeFragmentInterface<TreeNode, TreeRoot>
{
  /**
   * @param implementation - Implementation
   * @param host - Link to host tree or null
   */
  constructor(
    implementation: Tree,
    public readonly host: TreeNode | null = null
  ) {
    super(implementation);
  }
}
