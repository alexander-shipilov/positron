import { TreeAbstractRangeInterface } from "./TreeAbstractRange.interface";

export interface TreeRangeInterface<TRange, TNode, TFragment extends TNode>
  extends TreeAbstractRangeInterface<TNode> {
  cloneContents(): TFragment;

  cloneRange(): TRange;

  collapse(toStart?: boolean): void;

  compareBoundaryPoints(how: number, sourceRange: TRange): number;

  deleteContents(): void;

  extractContents(): TFragment;

  insertNode(node: TNode): void;

  selectNode(node: TNode): void;

  selectNodeContents(node: TNode): void;

  setEnd(node: TNode, offset: number): void;

  setEndAfter(node: TNode): void;

  setEndBefore(node: TNode): void;

  setStart(node: TNode, offset: number): void;

  setStartAfter(node: TNode): void;

  setStartBefore(node: TNode): void;

  surroundContents(newParent: TNode): void;
}
