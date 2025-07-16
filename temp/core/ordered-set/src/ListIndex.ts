import type { ListItem } from "./ListItem";

export interface ListIndex<TItem extends ListItem> {
  indexOf(item: TItem): number;

  itemAt(index: number): TItem | null;

  removeIndex(item: TItem): void;

  setIndex(item: TItem, index: number): void;

  updateIndexes(fromIndex: TItem, toIndex: number): void;
}
