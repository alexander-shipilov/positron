import { TreeRangeInterface } from "../types";
import type { Tree } from "./Tree";
import { TreeFragment } from "./TreeFragment";
import { TreeNode } from "./TreeNode";

export class TreeRange
  implements TreeRangeInterface<TreeRange, TreeNode, TreeFragment>
{
  get collapsed(): boolean {
    return false;
  }

  get endContainer(): TreeNode {
    return new TreeNode(this.implementation);
  }

  get endOffset(): number {
    return NaN;
  }

  get startContainer(): TreeNode {
    return new TreeNode(this.implementation);
  }

  get startOffset(): number {
    return NaN;
  }

  constructor(public readonly implementation: Tree) {}

  cloneContents(): TreeFragment {
    return new TreeFragment(this.implementation);
  }

  cloneRange(): TreeRange {
    return this;
  }

  collapse(toStart?: boolean): void {
    // TBD
  }

  compareBoundaryPoints(how: number, sourceRange: TreeRange): number {
    return 0;
  }

  deleteContents(): void {
    // todo: implement
  }

  extractContents(): TreeFragment {
    return new TreeFragment(this.implementation);
  }

  insertNode(node: TreeNode): void {
    // todo: implement
  }

  selectNode(node: TreeNode): void {
    // todo: implement
  }

  selectNodeContents(node: TreeNode): void {
    // todo: implement
  }

  setEnd(node: TreeNode, offset: number): void {
    // todo: implement
  }

  setEndAfter(node: TreeNode): void {
    // todo: implement
  }

  setEndBefore(node: TreeNode): void {
    // todo: implement
  }

  setStart(node: TreeNode, offset: number): void {
    // todo: implement
  }

  setStartAfter(node: TreeNode): void {
    // todo: implement
  }

  setStartBefore(node: TreeNode): void {
    // todo: implement
  }

  surroundContents(newParent: TreeNode): void {
    // todo: implement
  }
}
