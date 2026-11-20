import type { Nullish, Optional } from "@positron/lang";

import type { TomTreeSetNode } from "./tom-tree-set-node";

export class TomTreeSet<TValue> {
  protected root: Nullish<TomTreeSetNode<TValue>> = null;

  public append(...nodes: TomTreeSetNode<TValue>[]) {
    let root: Optional<TomTreeSetNode<TValue>>;

    for (const node of nodes) {
      (root || (root = node)).getRightLeaf().setRight(node);
    }

    if (root) {
      root = root.balance();

      if (this.root) {
        this.root.getRightLeaf().setRight(root);
      } else {
        this.root = root;
      }
    }
  }
}
