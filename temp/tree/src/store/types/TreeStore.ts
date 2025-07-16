import type { TreeCollection } from "../../collection";

export interface TreeStore<Node extends object> {
  /**
   * Returns ancestors of the `node`
   *
   * @param node - Node
   */
  getAncestors(node: Node): Iterable<Node>;

  /**
   * Returns child nodes of the provided `node`
   *
   * @param node - Node
   */
  getChildren(node: Node): TreeCollection<Node>;

  /**
   * Returns descendants of the provided `node`
   *
   * @param node - Node
   */
  getDescendants(node: Node): Iterable<Node>;

  /**
   * Returns the first child of the provided `node`
   *
   * @param node - Node
   */
  getFirstChild(node: Node): Node | null;

  /**
   * Returns following siblings of the provided `node`
   *
   * @param node - Node
   */
  getFollowingSiblings(node: Node): Iterable<Node>;

  /**
   * Returns inclusive ancestors of the provided `node`
   *
   * @param node - Node
   */
  getInclusiveAncestors(node: Node): Iterable<Node>;

  /**
   * Returns inclusive descendants of the provided `node`
   *
   * @param node - Node
   */
  getInclusiveDescendants(node: Node): Iterable<Node>;

  /**
   * Returns inclusive following siblings of the provided `node`
   *
   * @param node - Node
   */
  getInclusiveFollowingSiblings(node: Node): Iterable<Node>;

  /**
   * Returns the last child of the provided `node`
   * @param node - Node
   */
  getLastChild(node: Node): Node | null;

  /**
   * Returns next sibling of the given `node`
   * @param node - Node
   */
  getNextSibling(node: Node): Node | null;

  /**
   * Returns node of the given `node`
   * @param node - Node
   */
  getParent(node: Node): Node | null;

  /**
   * Returns previous sibling of the given `node`
   * @param node - Node
   */
  getPreviousSibling(node: Node): Node | null;

  /**
   * Returns inclusive preceding siblings of the provided `node`
   *
   * @param node - Node
   */
  getPrecedingSiblings(node: Node): Iterable<Node>;

  /**
   * Returns inclusive preceding siblings of the provided `node`
   *
   * @param node - Node
   */
  getInclusivePrecedingSiblings(node: Node): Iterable<Node>;

  /**
   * Checks if the {@link maybeAncestor} is ancestor of `node`
   * @param maybeAncestor - Node to check
   * @param node - Node
   */
  isAncestor(maybeAncestor: Node, node: Node): boolean;

  /**
   * Checks if the {@link maybeChild} is child of `node`
   * @param maybeChild - Node to check
   * @param node - Node
   */
  isChild(maybeChild: Node, node: Node): boolean;

  /**
   * Checks if the {@link maybeDescendant} is descendant of `node`
   * @param maybeDescendant - Node to check
   * @param node - Node
   */
  isDescendant(maybeDescendant: Node, node: Node): boolean;

  /**
   * Checks if the {@link maybeFollowing} is following node of `node`
   * @param maybeFollowing - Node to check
   * @param node - Node
   */
  isFollowing(maybeFollowing: Node, node: Node): boolean;

  /**
   * Checks if the {@link maybeFollowingSibling} is following sibling  of `node`
   * @param maybeFollowingSibling - Node to check
   * @param node - Node
   */
  isFollowingSibling(maybeFollowingSibling: Node, node: Node): boolean;

  /**
   * Checks if the {@link maybeInclusiveAncestor} is inclusive ancestor of `node`
   * @param maybeInclusiveAncestor - Node to check
   * @param node - Node
   */
  isInclusiveAncestor(maybeInclusiveAncestor: Node, node: Node): boolean;

  /**
   * Checks if the {@link maybeInclusiveDescendant} is inclusive descendant of `node`
   * @param maybeInclusiveDescendant - Node to check
   * @param node - Node
   */
  isInclusiveDescendant(maybeInclusiveDescendant: Node, node: Node): boolean;

  /**
   * Checks if the {@link maybeNextSibling} is next sibling of `node`
   * @param maybeNextSibling - Node to check
   * @param node - Node
   */
  isNextSibling(maybeNextSibling: Node, node: Node): boolean;

  /**
   * Checks if the {@link maybePreceding} is preceding node of `node`
   * @param maybePreceding - Node to check
   * @param node - Node
   */
  isPreceding(maybePreceding: Node, node: Node): boolean;

  /**
   * Checks if the {@link maybePrecedingSibling} is preceding sibling of `node`
   * @param maybePrecedingSibling - Node to check
   * @param node - Node
   */
  isPrecedingSibling(maybePrecedingSibling: Node, node: Node): boolean;

  /**
   * Checks if the {@link maybeSibling} is sibling of `node`
   * @param maybeSibling - Node to check
   * @param node - Node
   */
  isSibling(maybeSibling: Node, node: Node): boolean;

  /**
   * Inserts the given `node` to the provided `parentNode` before `refNode`
   * @param node - Node to insert
   * @param parentNode - Parent node
   * @param refNode - Reference node to insert `node` before or `null` to
   *   append `node` to the end
   */
  insert<T extends Node>(node: T, parentNode: Node, refNode: Node | null): T;

  /**
   * Removes the given `node` from the provided `parentNode`
   * @param node - Node to remove
   * @param parentNode - Parent node
   */
  remove<T extends Node>(node: T, parentNode: Node): T;
}
