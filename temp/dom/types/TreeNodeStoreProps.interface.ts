import { TreeSetInterface } from "./TreeSet.interface";

/**
 * Properties associated with {@link TreeNodeInterface}
 */
export interface TreeNodeStorePropsInterface<TNode, TRoot extends TNode> {
  readonly childNodes: TreeSetInterface<TNode>;

  ownerRoot: TRoot;

  parentNode: TNode | null;
}
