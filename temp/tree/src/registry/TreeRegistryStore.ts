import type { TreeSetImpl } from "../set/TreeSetImpl";
import { TreeItemMap } from "../TreeItemMap";
import type { TreeList, TreeStore } from "../types";
import type { TreeStoreItem } from "../types/TreeStoreItem";

export class TreeRegistryStore<Node> implements TreeStore<Node> {
  protected items = new TreeItemMap<Node>();

  protected hasItem(node: Node): boolean {
    return this.items.has(node);
  }

  protected getItem(node: Node): TreeStoreItem<Node> {
    return this.items.get(node);
  }

  protected getItemChildren(node: Node): TreeSetImpl<Node> {
    return this.getItem(node).children;
  }

  getParent(node: Node): Node | null {
    return this.hasItem(node) ? this.getItem(node).parent : null;
  }

  getChildren(node: Node): TreeList<Node> {
    return this.getItemChildren(node);
  }

  getIndex(node: Node): number {
    const parent = this.getParent(node);

    return parent && this.hasItem(parent)
      ? this.getItemChildren(parent).indexOf(node)
      : -1;
  }

  getFirstChild(node: Node): Node | null {
    return this.hasItem(node) ? this.getItemChildren(node).first : null;
  }

  getLastChild(node: Node): Node | null {
    return this.hasItem(node) ? this.getItemChildren(node).last : null;
  }

  getNextSibling(node: Node): Node | null {
    return this.hasItem(node) ? this.getItemChildren(node).next(node) : null;
  }

  getPreviousSibling(node: Node): Node | null {
    return this.hasItem(node)
      ? this.getItemChildren(node).previous(node)
      : null;
  }

  *getAncestors(node: Node): Iterable<Node> {
    let ancestor = this.getParent(node);

    while (ancestor !== null) {
      yield ancestor;

      ancestor = this.getParent(ancestor);
    }
  }

  *getDescendants(node: Node): Iterable<Node> {
    if (this.hasItem(node)) {
      for (const childNode of this.getItemChildren(node)) {
        yield childNode;
        yield* this.getDescendants(childNode);
      }
    }
  }

  *getFollowingSiblings(node: Node): Iterable<Node> {
    let followingSibling = this.getNextSibling(node);

    while (followingSibling) {
      yield followingSibling;

      followingSibling = this.getNextSibling(followingSibling);
    }
  }

  *getInclusiveAncestors(node: Node): Iterable<Node> {
    yield node;
    yield* this.getAncestors(node);
  }

  *getInclusiveDescendants(node: Node): Iterable<Node> {
    yield node;
    yield* this.getDescendants(node);
  }

  *getInclusiveFollowingSiblings(node: Node): Iterable<Node> {
    yield node;
    yield* this.getFollowingSiblings(node);
  }

  *getPrecedingSiblings(node: Node): Iterable<Node> {
    let precedingSibling = this.getPreviousSibling(node);

    while (precedingSibling) {
      yield precedingSibling;

      precedingSibling = this.getPreviousSibling(precedingSibling);
    }
  }

  *getInclusivePrecedingSiblings(node: Node): Iterable<Node> {
    yield node;
    yield* this.getPrecedingSiblings(node);
  }

  isChild(maybeChild: Node, node: Node): boolean {
    return this.getParent(maybeChild) === node;
  }

  isAncestor(maybeAncestor: Node, node: Node): boolean {
    return this.isDescendant(node, maybeAncestor);
  }

  isInclusiveAncestor(maybeInclusiveAncestor: Node, node: Node): boolean {
    return (
      maybeInclusiveAncestor === node ||
      this.isAncestor(maybeInclusiveAncestor, node)
    );
  }

  isDescendant(maybeDescendant: Node, node: Node): boolean {
    let ancestor = this.getParent(maybeDescendant);

    while (ancestor !== null) {
      if (ancestor === node) {
        return true;
      }

      ancestor = this.getParent(ancestor);
    }

    return false;
  }

  isInclusiveDescendant(maybeInclusiveDescendant: Node, node: Node): boolean {
    return (
      maybeInclusiveDescendant === node ||
      this.isDescendant(maybeInclusiveDescendant, node)
    );
  }

  isFollowing(maybeFollowing: Node, node: Node): boolean {
    return false;
  }

  isFollowingSibling(maybeFollowingSibling: Node, node: Node): boolean {
    return (
      this.isSibling(maybeFollowingSibling, node) &&
      this.getIndex(maybeFollowingSibling) > this.getIndex(node)
    );
  }

  isNextSibling(maybeNextSibling: Node, node: Node): boolean {
    return this.getNextSibling(node) === maybeNextSibling;
  }

  isPreceding(maybePreceding: Node, node: Node): boolean {
    return false;
  }

  isPrecedingSibling(maybePrecedingSibling: Node, node: Node): boolean {
    return (
      this.isSibling(maybePrecedingSibling, node) &&
      this.getIndex(maybePrecedingSibling) < this.getIndex(node)
    );
  }

  isSibling(maybeSibling: Node, node: Node): boolean {
    const parent = this.getParent(maybeSibling);

    return parent !== null && parent === this.getParent(node);
  }

  insert<T extends Node>(node: T, parentNode: Node, refNode: Node | null): T {
    return node;
  }

  remove<T extends Node>(node: T, parentNode: Node): T {
    return node;
  }
}
