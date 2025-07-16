import type { TreeNodeImplementationInterface } from "./TreeNodeImplementation.interface";

export type TreeNodeFactoryType<TNode> = (
  impl: TreeNodeImplementationInterface<TNode>
) => TNode;
