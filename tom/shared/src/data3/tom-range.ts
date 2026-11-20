import type { TomCollection } from "./tom-collection";
import type { TomIterator } from "./tom-iterator";

export interface TomRange extends TomCollection, TomIterator<number> {
  reverse(): TomRange;
}
