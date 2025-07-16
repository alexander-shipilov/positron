import type { TreeNodeImplementationInterface } from "./TreeNodeImplementation.interface";

export interface TreeNodeFactoryInterface<TNode> {
  createFragment(
    implementation: TreeNodeImplementationInterface<TNode>,
    host: TNode | null,
  ): TNode;

  createNode(implementation: TreeNodeImplementationInterface<TNode>): TNode;
}
