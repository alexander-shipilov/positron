import type { OrderedSet } from "./OrderedSet";

export interface MapListItem<Item extends object> {
  index: number;
  next: Item | null;
  prev: Item | null;
}

export class MapList<Item extends object>
  extends Map<Item | null, MapListItem<Item>>
  implements OrderedSet<Item>
{
  constructor() {
    super([[null, { index: -1, next: null, prev: null }]]);
  }

  protected next(item: Item | null): Item | null {
    return this.get(item)?.next ?? null;
  }

  protected prev(item: Item | null): Item | null {
    return this.get(item)?.prev ?? null;
  }

  protected isIndex(maybeIndex: number): boolean {
    return (
      maybeIndex > 0 && maybeIndex < this.size && Number.isInteger(maybeIndex)
    );
  }

  protected index(item: Item | null): number {
    return this.get(item)?.index ?? -1;
  }

  getFirst(): Item | null {
    return this.next(null);
  }

  getLast(): Item | null {
    return this.prev(null);
  }

  getNext(item: Item): Item | null {
    return this.next(item);
  }

  getPrev(item: Item): Item | null {
    return this.prev(item);
  }

  indexOf(item: Item): number {
    return this.index(item);
  }

  insert(item: Item, beforeItem: Item | null): OrderedSet<Item> {
    if (!this.has(beforeItem)) {
      throw new Error("List does not contain `beforeItem`");
    }

    const prevItem = this.prev(beforeItem);

    this.set(item, {
      index: this.index(prevItem) + 1,
      next: beforeItem,
      prev: prevItem,
    });

    this.get(prevItem)!.next = item;

    return this;
  }

  item(index: number): Item | null {
    let item = null;

    if (this.isIndex(index)) {
      let currIndex = -1;

      do {
        item = this.next(item);
        currIndex++;
      } while (currIndex !== index && item);
    }

    return item;
  }

  remove(item: Item): OrderedSet<Item> {
    return this;
  }
}
