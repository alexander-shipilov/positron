import type { TreeItem } from "./tree-item";
import type { TreeList } from "./tree-list";

export interface TreeStore<TItem extends TreeItem> {
  appendChild<TChild extends TItem>(parent: TItem, item: TChild): TChild;

  getChildList(item: TItem): TreeList<TItem>[];

  getNextSibling(item: TItem): TItem | undefined;

  getParentNode(item: TItem): TItem | undefined;

  getPrevSibling(item: TItem): TItem | undefined;

  insertBefore(parent: TItem, item: TItem, refItem: TItem): TItem;

  removeChild(parent: TItem, item: TItem): TItem | undefined;

  replaceChild(parent: TItem, item: TItem, newItem: TItem): TItem;
}

Node;
