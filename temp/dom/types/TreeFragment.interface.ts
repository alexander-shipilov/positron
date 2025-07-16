import { TreeNodeInterface } from "./TreeNode.interface";

export interface TreeFragmentInterface<TNode, TRoot extends TNode>
  extends TreeNodeInterface<TNode, TRoot> {
  /**
   *
   */
  readonly host: TNode | null;
}
