import type { TreeSetInterface } from "./TreeSet.interface";

export interface TreeInterface<TNode> {
  /**
   * Returns ancestors of the `node`
   * @param node - Node
   */
  getAncestors(node: TNode): Iterable<TNode>;

  /**
   * Returns child nodes of the provided `node`
   * @param node - Node
   */
  getChildNodes(node: TNode): TreeSetInterface<TNode>;

  /**
   * Returns descendants of the provided `node`
   * @param node - Node
   */
  getDescendants(node: TNode): Iterable<TNode>;

  /**
   * Returns the first child of the provided `node`
   * @param node - Node
   */
  getFirstChild(node: TNode): TNode | null;

  /**
   * Returns following siblings of the provided `node`
   * @param node - Node
   */
  getFollowingSiblings(node: TNode): Iterable<TNode>;

  /**
   * Returns inclusive ancestors of the provided `node`
   * @param node - Node
   */
  getInclusiveAncestors(node: TNode): Iterable<TNode>;

  /**
   * Returns inclusive descendants of the provided `node`
   * @param node - Node
   */
  getInclusiveDescendants(node: TNode): Iterable<TNode>;

  /**
   * Returns inclusive following siblings of the provided `node`
   * @param node - Node
   */
  getInclusiveFollowingSiblings(node: TNode): Iterable<TNode>;

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
   * Checks if the {@link maybeAncestor} is ancestor of `node`
   * @param maybeAncestor - Node to check
   * @param node - Node
   */
  isAncestor(maybeAncestor: TNode, node: TNode): boolean;

  /**
   * Checks if the {@link maybeChild} is child of `node`
   * @param maybeChild - Node to check
   * @param node - Node
   */
  isChild(maybeChild: TNode, node: TNode): boolean;

  /**
   * Checks if the {@link maybeDescendant} is descendant of `node`
   * @param maybeDescendant - Node to check
   * @param node - Node
   */
  isDescendant(maybeDescendant: TNode, node: TNode): boolean;

  /**
   * Checks if the {@link maybeFollowing} is following node of `node`
   * @param maybeFollowing - Node to check
   * @param node - Node
   */
  isFollowing(maybeFollowing: TNode, node: TNode): boolean;

  /**
   * Checks if the {@link maybeFollowingSibling} is following sibling  of `node`
   * @param maybeFollowingSibling - Node to check
   * @param node - Node
   */
  isFollowingSibling(maybeFollowingSibling: TNode, node: TNode): boolean;

  /**
   * Checks if the {@link maybeInclusiveAncestor} is inclusive ancestor of `node`
   * @param maybeInclusiveAncestor - Node to check
   * @param node - Node
   */
  isInclusiveAncestor(maybeInclusiveAncestor: TNode, node: TNode): boolean;

  /**
   * Checks if the {@link maybeInclusiveDescendant} is inclusive descendant of `node`
   * @param maybeInclusiveDescendant - Node to check
   * @param node - Node
   */
  isInclusiveDescendant(maybeInclusiveDescendant: TNode, node: TNode): boolean;

  /**
   * Checks if the {@link maybeNextSibling} is next sibling of `node`
   * @param maybeNextSibling - Node to check
   * @param node - Node
   */
  isNextSibling(maybeNextSibling: TNode, node: TNode): boolean;

  /**
   * Checks if the {@link maybePreceding} is preceding node of `node`
   * @param maybePreceding - Node to check
   * @param node - Node
   */
  isPreceding(maybePreceding: TNode, node: TNode): boolean;

  /**
   * Checks if the {@link maybePrecedingSibling} is preceding sibling of `node`
   * @param maybePrecedingSibling - Node to check
   * @param node - Node
   */
  isPrecedingSibling(maybePrecedingSibling: TNode, node: TNode): boolean;

  /**
   * Checks if the {@link maybeSibling} is sibling of `node`
   * @param maybeSibling - Node to check
   * @param node - Node
   */
  isSibling(maybeSibling: TNode, node: TNode): boolean;

  /**
   * Associate the given `node` to the provided `node`
   * @param node - Node
   * @param nodeNode - Node
   */
  setParentNode<T extends TNode>(node: T, nodeNode: TNode): T;
}
