import type {
  TreeFragmentFactoryType,
  TreeNodeFactoryType,
  TreeRootFactoryType,
  TreeStoreInterface,
} from "./index";

export interface TreeImplementationPropsInterface<
  TNode,
  TTree extends TNode,
  TFragment extends TNode,
> {
  readonly createFragment: TreeFragmentFactoryType<TNode, TFragment>;

  readonly createNode: TreeNodeFactoryType<TNode>;

  readonly createRoot: TreeRootFactoryType<TNode, TTree, TFragment>;

  readonly store: TreeStoreInterface<TNode, TTree>;
}
