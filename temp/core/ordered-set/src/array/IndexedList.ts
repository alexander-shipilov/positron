import type { ListItem } from "../ListItem";

import { ArrayList } from "./ArrayList";

export class IndexedList<TItem extends ListItem> extends ArrayList<TItem> {
  protected indexes: Map<TItem, number>;

  constructor(items: Iterable<TItem> = []) {
    super();

    this.indexes = new Map();
    this.init(items);
  }

  public clear() {
    super.clear();
    this.indexes = new Map();
  }

  protected deleteItem(item: TItem): number {
    const oldIndex = super.deleteItem(item);

    if (oldIndex !== -1) {
      this.indexes.delete(item);
      this.updateIndexes(oldIndex, this.size - 1);
    }

    return oldIndex;
  }

  public has(item: TItem): boolean {
    return this.indexes.has(item);
  }

  public indexOf(item: TItem): number {
    return this.indexes.get(item) ?? -1;
  }

  protected insertItem(item: TItem, index: number): [number, number] {
    const [oldIndex, newIndex] = super.insertItem(item, index);

    this.updateIndexes(oldIndex === -1 ? this.size - 1 : oldIndex, newIndex);

    return [oldIndex, newIndex];
  }

  protected replaceItem(item: TItem, index: number): [number, number] {
    const oldItem = this.items[index];
    const [oldIndex, newIndex] = super.replaceItem(item, index);

    this.indexes.delete(oldItem);
    this.indexes.set(item, newIndex);

    return [oldIndex, newIndex];
  }

  protected updateIndexes(start: number, end: number) {
    const { indexes, items, size } = this;
    const min = Math.min(Math.min(end, start), size - 1);
    const max = Math.min(Math.max(end, start), size - 1);

    for (let i = min; i <= max; i++) {
      indexes.set(items[i], i);
    }
  }
}
