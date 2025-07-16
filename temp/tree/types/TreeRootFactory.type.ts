import type { TreeRootImplementationInterface } from "./TreeRootImplementation.interface";

export type TreeRootFactoryInterface<
  TNode,
  TRoot extends TNode,
  TFragment extends TNode,
> = (impl: TreeRootImplementationInterface<TNode, TRoot, TFragment>) => TRoot;
