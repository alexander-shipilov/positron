export interface TreeNodeImplInterface<TNode> {
  /**
   *
   * @param parent - parent
   * @param node - node
   */
  appendChild<T extends TNode>(parent: TNode, node: T): T;

  /**
   *
   * @param node - Node
   * @param deep - Deep flag
   */
  cloneNode(node: TNode, deep: boolean): TNode;

  /**
   * @param node1 - Node 1
   * @param node2 - Node 2
   */
  compareTreePosition(node1: TNode, node2: TNode): number;

  /**
   *
   * @param parent - Node node
   * @param node - Child node
   * @param child - Ref child
   */
  insertBefore<T extends TNode>(parent: TNode, node: T, child: TNode | null): T;

  /**
   *
   * @param parent - Node node
   * @param node - Child node
   */
  removeChild<T extends TNode>(parent: TNode, node: T): T;

  /**
   *
   * @param parent - Node node
   * @param newNode - New node
   * @param oldNode - Old node
   */
  replaceChild<T extends TNode>(parent: TNode, newNode: TNode, oldNode: T): T;
}
