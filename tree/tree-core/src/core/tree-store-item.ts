import type { TreeItem } from "./tree-item";
import type { TreeList } from "./tree-list";

export type TreeStoreItem<TItem extends TreeItem> = {
  childList: TreeList<TItem>;
  nextSibling: TItem | undefined;
  parent: TItem | undefined;
  prevSibling: TItem | undefined;
};
