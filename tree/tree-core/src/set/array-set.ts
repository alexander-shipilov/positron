import { ArrayLikeProxy } from "@positron/array";

import type { TreeItem, TreeList, TreeSet } from "../core";

export class ArraySet<TItem extends TreeItem>
  extends ArrayLikeProxy<TItem>
  implements TreeSet<TItem>
{
  protected readonly items: TItem[];

  constructor(...items: TItem[]) {
    super(items);
    this.items = items;
  }

  append(item: TItem): boolean {
    const index = this.indexOf(item);
    const shouldAppend = index !== this.items.length - 1;

    if (shouldAppend) {
      if (index !== -1) {
        this.items.splice(index, 1);
      }

      this.items.push(item);
    }

    return shouldAppend;
  }

  entries(): IterableIterator<[number, TItem]> {
    return this.items.entries();
  }

  forEach(
    callback: (value: TItem, key: number, parent: TreeList<TItem>) => void,
    thisArg?: unknown,
  ): void {
    return this.items.forEach(
      (item: TItem, index: number) => callback(item, index, this),
      thisArg,
    );
  }

  indexOf(item: TItem): number {
    return this.items.findIndex((i) => Object.is(i, item));
  }

  insert(item: TItem, refItem: TItem): boolean {
    throw new Error("Method not implemented.");
  }

  item(index: number): TItem | undefined {
    return this[index];
  }

  keys(): IterableIterator<number> {
    return this.items.keys();
  }

  remove(item: TItem): boolean {
    const index = this.indexOf(item);
    const shouldRemove = index !== -1;

    if (shouldRemove) {
      this.items.splice(index, 1);
    }

    return shouldRemove;
  }

  replace(item: TItem, newItem: TItem): boolean {
    throw new Error("Method not implemented.");
  }

  values(): IterableIterator<TItem> {
    return this.items.values();
  }
}
