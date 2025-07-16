import type { TreeCollection } from "./tree-collection";

export interface TreeStoreItem<TItem> {
  next: TItem | undefined,

  prev: TItem | undefined,

  parent: TItem | undefined,

  children: TreeCollection<TItem>,
}