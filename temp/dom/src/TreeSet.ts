import { TreeSetInterface } from "../types";
import { TreeException } from "./TreeException";
import { TreeExceptionNameEnum } from "./TreeExceptionName.enum";
import { TreeList } from "./TreeList";

/**
 * Some lists are designated as ordered sets. An ordered set is a list with the
 * additional semantic that it must not contain the same item twice.
 */
export class TreeSet<TItem>
  extends TreeList<TItem>
  implements TreeSetInterface<TItem>
{
  /**
   * Item indexes
   */
  protected readonly indexes: Map<TItem, number> = new Map<TItem, number>();

  /**
   * @override
   */
  public includes(item: TItem): boolean {
    return this.indexes.has(item);
  }

  /**
   * @override
   */
  public indexOf(item: TItem): number {
    return this.indexes.get(item) ?? -1;
  }

  /**
   * Inserts the given `item` before the `refItem`.
   *
   * @param item - The item to be inserted.
   * @param refItem - The item before which `item` is inserted.
   */
  public insertItem(item: TItem, refItem: TItem | null = null): this {
    const refItemIndex = refItem === null ? this.length : this.indexOf(refItem);

    if (this.includes(item)) {
      throw new RangeError("TreeSet already contains `item`");
    }

    if (refItemIndex === -1) {
      throw new TreeException(
        "TreeSet does not contain `refItem`",
        TreeExceptionNameEnum.NotFoundError
      );
    }

    this.splice(refItemIndex, 0, item);

    return this;
  }

  /**
   * Returns the next item of the given `item` or `null`.
   *
   * @param item - Item
   */
  public nextItem(item: TItem): TItem | null {
    const itemIndex = this.indexOf(item);

    if (itemIndex === -1) {
      throw new TreeException(
        "TreeSet does not contain `item`",
        TreeExceptionNameEnum.NotFoundError
      );
    }

    return this.item(itemIndex + 1);
  }

  /**
   * Returns the previous item of the given `item` or `null`.
   *
   * @param item - Item
   */
  public previousItem(item: TItem): TItem | null {
    const itemIndex = this.indexOf(item);

    if (itemIndex === -1) {
      throw new TreeException(
        "TreeSet does not contain `item`",
        TreeExceptionNameEnum.NotFoundError
      );
    }

    return this.item(itemIndex - 1);
  }

  /**
   * @override
   */
  public removeAll(): this {
    this.indexes.clear();

    return super.removeAll();
  }

  /**
   * Replaces the given `oldItem` by the `newItem`.
   *
   * @param newItem - The item to replace `oldItem`
   * @param oldItem - The item to be replaced
   */
  public replaceItem(newItem: TItem, oldItem: TItem): this {
    if (this.includes(newItem)) {
      throw new RangeError("TreeSet already contains `newItem`");
    }

    return super.replaceItem(newItem, oldItem);
  }

  /**
   * @param index - Index
   * @param removeCount - Count of items to remove
   * @param addedItems - Items to insert
   */
  public splice(
    index: number,
    removeCount: number,
    ...addedItems: TItem[]
  ): TItem[] {
    const removedItems = super.splice(index, removeCount, ...addedItems);

    this.removeIndexes(removedItems);
    this.updateIndexes(
      index,
      addedItems.length === removedItems.length
        ? index + addedItems.length
        : this.length
    );

    return removedItems;
  }

  /**
   * Removes indexes for given `items`
   *
   * @param items - Items to remove indexes for
   */
  protected removeIndexes(items: TItem[]): void {
    const { indexes } = this;

    for (let i = 0; i < items.length; i += 1) {
      indexes.delete(items[i]);
    }
  }

  /**
   * Updates indexes from `startIndex` (inclusive) to `endIndex` (exclusive)
   *
   * @param startIndex - Start index
   * @param endIndex - End index
   */
  protected updateIndexes(startIndex: number, endIndex: number): this {
    const { indexes } = this;

    for (let i = startIndex; i < endIndex; i += 1) {
      indexes.set(this[i], i);
    }

    return this;
  }
}
