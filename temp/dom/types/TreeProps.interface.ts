import {
  TreeFragmentFactoryType,
  TreeNodeFactoryType,
  TreeNodeStoreInterface,
  TreeRootFactoryType,
} from "./index";

export interface TreePropsInterface<
  TNode,
  TRoot extends TNode,
  TFragment extends TNode
> {
  readonly createFragment: TreeFragmentFactoryType<TNode, TFragment>;

  readonly createNode: TreeNodeFactoryType<TNode>;

  readonly createRoot: TreeRootFactoryType<TNode, TRoot, TFragment>;

  readonly nodeStore: TreeNodeStoreInterface<TNode, TRoot>;
}
