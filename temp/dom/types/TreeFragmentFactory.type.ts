import { TreeNodeImplementationInterface } from "./TreeNodeImplementation.interface";

export type TreeFragmentFactoryType<TNode, TFragment extends TNode> = (
  implementation: TreeNodeImplementationInterface<TNode>,
  host: TNode | null
) => TFragment;
