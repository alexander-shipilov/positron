import type { TreeListInterface, TreeNodeInterface } from "../types";
import type { Tree } from "./Tree";
import type { TreeRoot } from "./TreeRoot";
import { isRoot } from "./utils/isRoot";

export class TreeNode implements TreeNodeInterface<TreeNode, TreeRoot> {
  /**
   *
   */
  get childNodes(): TreeListInterface<TreeNode> {
    return this.implementation.nodeStore.getChildNodes(this);
  }

  /**
   *
   */
  get firstChild(): TreeNode | null {
    return this.implementation.nodeStore.getFirstChild(this);
  }

  /**
   *
   */
  get lastChild(): TreeNode | null {
    return this.implementation.nodeStore.getLastChild(this);
  }

  /**
   *
   */
  public get nextSibling(): TreeNode | null {
    return this.implementation.nodeStore.getNextSibling(this);
  }

  /**
   *
   */
  public get parentNode(): TreeNode | null {
    return this.implementation.nodeStore.getParentNode(this);
  }

  /**
   *
   */
  public get previousSibling(): TreeNode | null {
    return this.implementation.nodeStore.getPreviousSibling(this);
  }

  /**
   *
   */
  get rootNode(): TreeRoot | null {
    return isRoot(this)
      ? null
      : this.implementation.nodeStore.getOwnerRoot(this);
  }

  /**
   * @param implementation - Tree implementation
   */
  constructor(public readonly implementation: Tree) {}

  /**
   * @param child - Child
   */
  appendChild<T extends TreeNode>(child: T): T {
    return this.implementation.appendChild(this, child);
  }

  /**
   * @param deep - Deep
   */
  cloneNode(deep: boolean): TreeNode {
    return this.implementation.cloneNode(this, deep);
  }

  /**
   *
   * @param node - Node
   */
  public compareTreePosition(node: TreeNode): number {
    return this.implementation.compareTreePosition(this, node);
  }

  /**
   *
   * @param child - Child
   * @param relChild - Rel child
   */
  insertBefore<T extends this | TreeNode>(
    child: T,
    relChild: TreeNode | null
  ): T {
    return this.implementation.insertBefore(this, child, relChild);
  }

  removeChild<T extends TreeNode>(node: T): T {
    return this.implementation.removeChild(this, node);
  }

  replaceChild<T extends TreeNode>(newNode: this | TreeNode, oldNode: T): T {
    return this.implementation.replaceChild(this, newNode, oldNode);
  }
}
