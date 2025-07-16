import { TreeListInterface } from "./TreeList.interface";

export interface TreeNodeInterface<TNode, TRoot extends TNode> {
  /**
   *
   */
  readonly childNodes: TreeListInterface<TNode>;

  /**
   *
   */
  readonly firstChild: TNode | null;

  /**
   *
   */
  readonly lastChild: TNode | null;

  /**
   *
   */
  readonly nextSibling: TNode | null;

  /**
   *
   */
  readonly parentNode: TNode | null;

  /**
   *
   */
  readonly previousSibling: TNode | null;

  /**
   *
   */
  readonly rootNode: TRoot | null;

  /**
   * @param child - Child
   */
  appendChild<T extends TNode>(child: T): T;

  /**
   *
   * @param deep - Deep
   */
  cloneNode(deep: boolean): TNode;

  /**
   * @param node - Node
   */
  compareTreePosition(node: TNode): number;

  /**
   *
   * @param child - Child
   * @param relChild - Rel child
   */
  insertBefore<T extends TNode>(child: T, relChild: TNode | null): T;

  /**
   *
   * @param child - Node
   */
  removeChild<T extends TNode>(child: T): T;

  /**
   * @param newChild - New child
   * @param oldChild - Old child
   */
  replaceChild<T extends TNode>(newChild: TNode, oldChild: T): T;
}
