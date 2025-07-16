import type { TreeRootInterface } from "../types";
import { TreeNode } from "./TreeNode";

export class TreeRoot
  extends TreeNode
  implements TreeRootInterface<TreeNode, TreeRoot>
{
  public adoptNode<T extends TreeNode>(node: T): T {
    return this.implementation.adoptNode(this, node);
  }

  public createFragment(): TreeNode {
    return this.implementation.createFragment(this, null);
  }

  public createNode(): TreeNode {
    return this.implementation.cloneNode(this);
  }

  public importNode<T extends TreeNode>(node: T): TreeNode {
    return this.implementation.importNode(this, node);
  }
}
