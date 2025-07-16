import type { TreeRootImplementationInterface } from "./TreeRootImplementation.interface";

export type TreeRootFactoryType<
  TNode,
  TRoot extends TNode,
  TFragment extends TNode
> = (impl: TreeRootImplementationInterface<TNode, TRoot, TFragment>) => TRoot;
