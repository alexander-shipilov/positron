import { TreeListImpl } from "src/list";
import type { TreeSet } from "src/set/index";

const indexes = Symbol();

/**
 * Some lists are designated as ordered sets. An ordered set is a list with the
 * additional semantic that it must not contain the same item twice.
 */
export class TreeSetImpl<Item extends object = object>
  extends TreeListImpl<Item>
  implements TreeSet<Item>
{
  /**
   * Item indexes
   * {@label indexes}
   */
  protected readonly [indexes]: Map<Item, number> = new Map<Item, number>();

  /**
   * @returns First item or `null`
   */
  get first(): Item | null {
    return this[0];
  }

  /**
   * @returns Last item or `null`
   */
  get last(): Item | null {
    return this[this.length - 1];
  }

  /**
   * Returns the next item of the given `item` or `null`.
   *
   * @param item - Item
   */
  next(item: Item): Item | null {
    return this[this.indexOf(item) + 1];
  }

  /**
   * Returns the previous item of the given `item` or `null`.
   *
   * @param item - Item
   */
  previous(item: Item): Item | null {
    return this[this.indexOf(item) - 1];
  }

  /**
   *
   * @param item - Item
   */
  indexOf(item: Item): number {
    return this[indexes].get(item) ?? -1;
  }

  /**
   *
   * @param item - The item to be inserted.
   * @param refItem - The item before which `item` is inserted.
   */
  insert(item: Item, refItem: Item | null = null): this {
    const index = super.indexOf(item);

    if (index === -1) {
      const refIndex = refItem === null ? this.length : this.indexOf(refItem);

      if (refIndex !== -1 && refIndex !== index) {
        this.splice(refIndex, 0, item);
      }
    }

    return this;
  }

  /**
   *
   * @param item - Item
   */
  remove(item: Item): this {
    const index = this.indexOf(item);

    if (index !== -1) {
      this.splice(index, 1);
    }

    return this;
  }

  /**
   * @override
   */
  clear(): this {
    this.length = 0;
    this[indexes].clear();

    return this;
  }

  /**
   * To replace within a set, given `oldItem` and `newItem`: if set
   * contains `oldItem` or `newItem`, then replace the first instance of either
   * with `newItem` and remove all other instances.
   *
   * @param oldItem - The oldItem to replace `oldItem`
   * @param newItem - The oldItem to be replaced
   */
  replace(oldItem: Item, newItem: Item): this {
    const oldIndex = this.indexOf(oldItem);
    const newIndex = this.indexOf(newItem);

    if (oldIndex !== newIndex) {
      const minIndex = oldIndex < newIndex ? oldIndex : newIndex;
      const maxIndex = oldIndex > newIndex ? oldIndex : newIndex;

      if (minIndex !== -1) {
        this.splice(minIndex, 1, newItem);
        this.splice(maxIndex, 1);
      } else if (maxIndex !== newIndex) {
        this.splice(maxIndex, 1, newItem);
      }
    }

    return this;
  }

  /**
   * @param index - Index
   * @param removeCount - Count of items to remove
   * @param items - Items to insert
   */
  splice(index: number, removeCount: number, ...items: Item[]): Item[] {
    const removed = super.splice(index, removeCount, ...items);

    this.removeIndexes(removed);
    this.updateIndexes(
      index,
      items.length === removed.length ? index + items.length : this.length,
    );

    return removed;
  }

  /**
   * Removes indexes for given `items`
   *
   * @param items - Items to remove indexes for
   */
  protected removeIndexes(items: Item[]): void {
    for (let i = 0; i < items.length; i += 1) {
      this[indexes].delete(items[i]);
    }
  }

  /**
   * Updates indexes from the `startIndex` (inclusive) to
   * the `endIndex` (exclusive)
   *
   * @param startIndex - Start index
   * @param endIndex - End index
   */
  protected updateIndexes(startIndex: number, endIndex: number): void {
    for (let i = startIndex; i < endIndex; i += 1) {
      this[indexes].set(this[i], i);
    }
  }
}
