// @flow

import type { TreeMap } from "./types/TreeMap";
import type { TreeStoreItem } from "./types/TreeStoreItem";

export abstract class AbstractTreeMap<
  Node,
  Item extends TreeStoreItem<Node> = TreeStoreItem<Node>,
> {
  protected abstract create(): Item;

  /**
   * @param map - Map-like object to store
   */
  protected constructor(protected map: TreeMap<Node, Item>) {}
}
