import type { List } from "./List";
import type { ListItem } from "./ListItem";

export interface ListConstructor<TItem extends ListItem = ListItem> {
  new (items?: Iterable<TItem>): List<TItem>;
  prototype: List<TItem>;
}
