import { TreeImplementationInterface } from "./TreeImplementation.interface";
import { TreeNodeInterface } from "./TreeNode.interface";

export interface TreeRootInterface<TNode, TRoot extends TNode>
  extends TreeNodeInterface<TNode, TRoot> {
  readonly implementation: TreeImplementationInterface<TRoot>;

  adoptNode<T extends TNode>(node: T): T;

  createFragment(): TNode;

  createNode(): TNode;

  importNode<T extends TNode>(node: T): TNode;
}
