import type { TreeSetInterface } from "./TreeSet.interface";

export interface TreeNodeStoreInterface<TNode, TRoot extends TNode> {
  /**
   * Creates node properties
   * @param node - Node
   * @param rootNode - Root node
   */
  createNode<T extends TNode>(node: T, rootNode: TRoot): T;

  /**
   * Returns child nodes of the provided `node`
   * @param node - Node
   */
  getChildNodes(node: TNode): TreeSetInterface<TNode>;

  /**
   * Returns descendants of the provided `node`
   * @param node - Node
   */
  getDescendant(node: TNode): Generator<TNode>;

  /**
   * Returns the first child of the provided `node`
   * @param node - Node
   */
  getFirstChild(node: TNode): TNode | null;

  /**
   * Returns inclusive descendants of the provided `node`
   * @param node - Node
   */
  getInclusiveDescendant(node: TNode): Generator<TNode>;

  /**
   * Returns node of the given `node`
   * @param node - Node
   */
  getIndex(node: TNode): number;

  /**
   * Returns the last child of the provided `node`
   * @param node - Node
   */
  getLastChild(node: TNode): TNode | null;

  /**
   * Returns next sibling of the given `node`
   * @param node - Node
   */
  getNextSibling(node: TNode): TNode | null;

  /**
   * Returns root node of the provided `node`
   * @param node - Node
   */
  getOwnerRoot(node: TNode): TRoot;

  /**
   * Returns node of the given `node`
   * @param node - Node
   */
  getParentNode(node: TNode): TNode | null;

  /**
   * Returns previous sibling of the given `node`
   * @param node - Node
   */
  getPreviousSibling(node: TNode): TNode | null;

  /**
   * Associate the given `rootNode` to the provided `node`
   * @param node - Node
   * @param rootNode - Root node
   */
  setOwnerRoot<T extends TNode>(node: T, rootNode: TRoot): T;

  /**
   * Associate the given `node` to the provided `node`
   * @param node - Node
   * @param nodeNode - Node
   */
  setParentNode<T extends TNode>(node: T, nodeNode: TNode): T;
}
