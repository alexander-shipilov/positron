import type { TreeList } from "./tree-list";

export type TreeStoreItem<TItem> = {
  childList: TreeList<TItem>;
  nextSibling: TItem | undefined;
  parent: TItem | undefined;
  prevSibling: TItem | undefined;
};
