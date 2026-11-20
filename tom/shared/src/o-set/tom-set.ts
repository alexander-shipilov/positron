import { assert } from "@positron/lang";

import { TomTreeSet } from "./tom-tree-set";
import { TomTreeSetNode } from "./tom-tree-set-node";

export class TomSet<TValue> {
  protected readonly items: Map<TValue, TomTreeSetNode> = new Map();
  protected readonly root: TomTreeSetNode;

  protected readonly tree: TomTreeSet;

  public get size(): number {
    return this.root.value;
  }

  public constructor(values: Iterable<TValue>) {
    this.tree = new TomTreeSet();

    this.append(...values);
  }

  public append(...values: TValue[]) {
    for (const value of values) {
      this.insertBefore(
        this.items.getOrInsertComputed(value, () => new TomTreeSetNode(1)),
        this.end,
      );
    }
  }

  public prepend(...values: TValue[]) {
    for (const value of values) {
      this.insertAfter(
        this.items.getOrInsertComputed(value, () => new TomTreeSetNode(1)),
        this.start,
      );
    }
  }

  protected getLeftDepth(node: TomTreeSetNode): number {
    return node.left?.depth ?? 0;
  }

  protected getLeftLeaf(node: TomTreeSetNode): TomTreeSetNode {
    let left = node;

    while (left.left) {
      left = left.left;
    }

    return left;
  }

  protected getLeftSize(node: TomTreeSetNode): number {
    return node.left?.size ?? 0;
  }

  protected getRightLeaf(node: TomTreeSetNode): TomTreeSetNode {
    let right = node;

    while (right.right) {
      right = right.right;
    }

    return right;
  }

  protected getRightSize(node: TomTreeSetNode): number {
    return node.right?.size ?? 0;
  }

  protected insertAfter(node: TomTreeSetNode, after: TomTreeSetNode) {
    assert(node !== this.start, () => "Cannot insert before start node");
    assert(after !== this.end, () => "Cannot insert after end node");

    node.parent = this.getRightLeaf(after);
    node.parent.right = node;
  }

  protected insertBefore(node: TomTreeSetNode, before: TomTreeSetNode) {
    assert(node !== this.end, () => "Cannot insert after end node");
    assert(before !== this.start, () => "Cannot insert before start node");

    node.parent = this.getLeftLeaf(before);
    node.parent.left = node;
  }

  protected removeNode(item: OSetItem) {
    if (this.root === item) {
    }
  }

  protected setLeft(node: TomTreeSetNode, left: TomTreeSetNode) {
    node.left = left;
    left.parent = node;
  }

  protected updateCounts(item: OSetItem) {
    let { parent } = item;

    while (parent) {
      parent.count += item.count;
      parent = parent.parent;
    }
  }
}
