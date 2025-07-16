import type { TreeSetInterface } from "./TreeSet.interface";

/**
 * Properties associated with {@link TreeNodeInterface}
 */
export interface TreeStorePropsInterface<TNode, TRoot extends TNode> {
  readonly childNodes: TreeSetInterface<TNode>;

  parentNode: TNode | null;

  rootNode: TRoot;
}
