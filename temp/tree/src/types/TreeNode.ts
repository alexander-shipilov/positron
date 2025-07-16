import type { TreeList } from "src/list";
import type { Tree } from "./Tree";

export interface TreeNode {
  /**
   *
   */
  readonly childNodes: TreeList<TreeNode>;

  /**
   * The read-only `firstChild` property of the {@link TreeNode} interface
   * returns the node's first child in the tree, or `null` if the node has no
   * children.
   */
  readonly firstChild: TreeNode;

  /**
   *
   */
  readonly lastChild: TreeNode | null;

  /**
   *
   */
  readonly ownerTree: Tree<TreeNode>;

  /**
   *
   */
  readonly nextSibling: TreeNode | null;

  /**
   *
   */
  readonly parentNode: TreeNode | null;

  /**
   *
   */
  readonly previousSibling: TreeNode | null;

  /**
   * @param child - Child
   */
  appendChild<T extends TreeNode>(child: T): T;

  /**
   *
   * @param deep - Deep
   */
  cloneNode(deep: boolean): TreeNode;

  /**
   *
   * @param node
   */
  contains(node: TreeNode | null): boolean;

  /**
   * @param node - Node
   */
  compareTreePosition(node: TreeNode): number;

  /**
   *
   * @param child - Child
   * @param relChild - Rel child
   */
  insertBefore<Node extends TreeNode>(
    child: Node,
    relChild: TreeNode | null,
  ): Node;

  /**
   *
   * @param child - Node
   */
  removeChild<Node extends TreeNode>(child: Node): Node;

  /**
   * @param newChild - New child
   * @param oldChild - Old child
   */
  replaceChild<Node extends TreeNode>(newChild: TreeNode, oldChild: Node): Node;
}
