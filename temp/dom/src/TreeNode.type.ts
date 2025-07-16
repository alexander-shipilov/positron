import { TreeSet } from "./TreeSet";

/**
 * Properties of TreeNode
 */
export type TreeNodeType<TNode, TRoot extends TNode> = {
  readonly childNodes: TreeSet<TNode>;

  ownerTree: TRoot | null;

  parentNode: TNode | null;
};
