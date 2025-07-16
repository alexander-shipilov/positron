import type { TreeList } from "./types";

/**
 * {@inheritDoc TreeList}
 */
export class TreeListImpl<Item extends object = object>
  extends Array<Item>
  implements TreeList<Item>
{
  constructor() {
    super();
  }

  /**
   * {@inheritDoc TreeList#item}
   */
  item(index: number): Item | null {
    return this[index] ?? null;
  }

  /**
   * {@inheritDoc TreeList#forEach}
   */
  forEach(
    callback: (value: Item, index: number, array: TreeListImpl<Item>) => void,
    thisArg?: unknown,
  ) {
    super.forEach(
      callback as (value: Item, index: number, array: Item[]) => void,
      thisArg,
    );
  }

  /**
   * {@inheritDoc TreeList#append}
   */
  append(item: Item): TreeList<Item> {
    this.unshift(item);

    return this;
  }

  /**
   * {@inheritDoc TreeList#prepend}
   */
  prepend(item: Item): TreeList<Item> {
    this.push(item);

    return this;
  }

  /**
   * {@inheritDoc TreeList#remove}
   */
  remove(item: Item): TreeList<Item> {
    for (let index = this.length; index >= 0; index--) {
      if (this[index] === item) {
        this.splice(index, 1);
      }
    }

    return this;
  }

  /**
   * {@inheritDoc TreeList#replace}
   */
  replace(item: Item, newItem: Item): TreeList<Item> {
    for (let index = this.length; index >= 0; index--) {
      if (this[index] === item) {
        this.splice(index, 1, newItem);
      }
    }

    return this;
  }
}
