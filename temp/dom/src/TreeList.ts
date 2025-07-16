import { TreeListInterface } from "../types";
import { TreeException } from "./TreeException";
import { TreeExceptionNameEnum } from "./TreeExceptionName.enum";

/**
 * Implementation of {@link TreeListInterface}
 */
export class TreeList<TItem>
  extends Array<TItem>
  implements TreeListInterface<TItem>
{
  constructor() {
    super();
  }

  /**
   * Returns the first item in the list.
   */
  public firstItem(): TItem | null {
    return this.item(0);
  }

  /**
   * Inserts the given `item` before the `refItem`.
   *
   * @param item - The item to be inserted.
   */
  public insertItem(item: TItem): this {
    this.push(item);

    return this;
  }

  public item(index: number): TItem | null {
    return this[index] ?? null;
  }

  /**
   * Returns the last item in the list.
   */
  public lastItem(): TItem | null {
    return this.item(this.length - 1);
  }

  /**
   * Removes all items
   */
  removeAll(): this {
    return Object.assign(this, { length: 0 });
  }

  /**
   * Removes the given `item`.
   *
   * @param item - The item to be removed.
   */
  removeItem(item: TItem): this {
    let itemIndex = this.indexOf(item);

    if (itemIndex === -1) {
      throw new TreeException(
        "TreeSet does not contain `item`",
        TreeExceptionNameEnum.NotFoundError
      );
    }

    do {
      this.splice(itemIndex, 1);
    } while ((itemIndex = this.indexOf(item)) !== -1);

    return this;
  }

  /**
   * Replaces the given `oldItem` by the `newItem`.
   *
   * @param oldItem - The item to be replaced
   * @param newItem - The item to replace `oldItem`
   */
  replaceItem(oldItem: TItem, newItem: TItem): this {
    let oldItemIndex = this.indexOf(oldItem);

    if (oldItemIndex === -1) {
      throw new TreeException(
        "TreeSet does not contain `oldItem`",
        TreeExceptionNameEnum.NotFoundError
      );
    }

    do {
      this.splice(oldItemIndex, 1, newItem);
    } while ((oldItemIndex = this.indexOf(oldItem)) !== -1);

    return this;
  }
}
