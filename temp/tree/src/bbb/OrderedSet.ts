export interface OrderedSet<Item> {
  indexOf(item: Item): number;

  insert(item: Item, beforeItem: Item | null): OrderedSet<Item>;

  item(index: number): Item | null;

  remove(item: Item): OrderedSet<Item>;
}
