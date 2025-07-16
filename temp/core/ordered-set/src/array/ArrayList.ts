import { assert, isUndefined } from "@positron/lang";

import type { List } from "../List";
import type { ListItem } from "../ListItem";

import { ListNotFoundError } from "../ListNotFoundError";

export class ArrayList<TItem extends ListItem> implements List<TItem> {
  protected items: TItem[] = [];

  public get size(): number {
    return this.items.length;
  }

  public constructor(items: Iterable<TItem> = []) {
    this.init(items);
  }

  public clear(): void {
    this.items = [];
  }

  public delete(item: TItem): boolean {
    return this.deleteItem(item) !== -1;
  }

  protected deleteAt(index: number): number {
    if (index !== -1) {
      this.items.splice(index, 1);
    }

    return index;
  }

  /**
   * Removes the `item` from the list
   *
   * @param item - The item
   * @returns The index from which the `item` was removed or `-1`
   */
  protected deleteItem(item: TItem): number {
    return this.deleteAt(this.indexOf(item));
  }

  public entries(): IterableIterator<[number, TItem]> {
    return this.items.entries();
  }

  public has(item: TItem): boolean {
    return this.items.includes(item);
  }

  public indexOf(item: TItem): number {
    return this.items.findIndex((currItem) => Object.is(item, currItem));
  }

  protected init(items: Iterable<TItem>) {
    for (const item of items) {
      this.insert(item);
    }
  }

  public insert(item: TItem, refItem?: TItem): this {
    const refIndex = isUndefined(refItem) ? this.size : this.indexOf(refItem);

    assert(
      refIndex !== -1,
      new ListNotFoundError("List does not contain the given `refItem`"),
    );

    if (!Object.is(item, isUndefined(refItem) ? this.item(-1) : refItem)) {
      this.insertItem(item, refIndex);
    }

    return this;
  }

  /**
   * Inserts `item` at the specified `index`
   *
   * @param item - The item to insert
   * @param index - Position
   *
   * @returns A pair of indexes: `[oldIndex, newIndex]`, where:
   *  `oldIndex` - An index of `item` before insertion or `-1`
   *  `newIndex` - An index of `item` after insertion
   */
  protected insertItem(item: TItem, index: number): [number, number] {
    const oldIndex = this.deleteAt(this.indexOf(item));
    const newIndex = oldIndex === -1 || oldIndex >= index ? index : index - 1;

    this.items.splice(newIndex, 0, item);

    return [oldIndex, newIndex];
  }

  public item(index: number): TItem | undefined {
    return this.items.at(index);
  }

  public keys(): IterableIterator<number> {
    return this.items.keys();
  }

  public replace(item: TItem, newItem: TItem): this {
    const index = this.indexOf(item);

    assert(
      index !== -1,
      new ListNotFoundError("List does not contain the given `item`"),
    );

    this.replaceItem(newItem, index);

    return this;
  }

  /**
   * Replaces an element at the specified `index` by the provided `item`
   *
   * @param item - The item
   * @param index - Index
   *
   * @returns A pair of indexes: `[oldIndex, newIndex]`, where:
   *  `oldIndex` - An index of `item` before replacement or `-1`
   *  `newIndex` - An index of `item` after replacement
   */
  protected replaceItem(item: TItem, index: number): [number, number] {
    const oldIndex = this.deleteItem(item);
    const newIndex = oldIndex === -1 || oldIndex >= index ? index : index - 1;

    this.items.splice(newIndex, 1, item);

    return [oldIndex, newIndex];
  }

  public [Symbol.iterator](): IterableIterator<TItem> {
    return this.items[Symbol.iterator]();
  }

  public values(): IterableIterator<TItem> {
    return this.items.values();
  }
}
