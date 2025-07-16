// noinspection ES6PreferShortImport

import type { TreeSet } from "./TreeSet";

export interface TreeMutableSet<Item extends object> extends TreeSet<Item> {
  insert(item: Item, refItem?: Item | null): TreeMutableSet<Item>;

  remove(item: Item): TreeMutableSet<Item>;

  replace(item: Item, newItem: Item): TreeMutableSet<Item>;
}
