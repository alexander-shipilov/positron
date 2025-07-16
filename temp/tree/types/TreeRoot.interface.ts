import type { TreeImplementationInterface } from "./TreeImplementation.interface";
import type { TreeNodeInterface } from "./TreeNode.interface";

export interface TreeInterface<TTree, TNode>
  extends TreeNodeInterface<TTree, TNode> {
  readonly implementation: TreeImplementationInterface<TTree>;

  readonly rootNode: TNode;

  adoptNode<T extends TNode>(node: T): T;

  createFragment(): TNode;

  createNode(): TNode;

  importNode<T extends TNode>(node: T): TNode;
}
