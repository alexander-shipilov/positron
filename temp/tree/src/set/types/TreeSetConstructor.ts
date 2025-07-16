import type { TreeSet } from "src/set";

export interface TreeSetConstructor<Item> {
  new (): TreeSet<Item>;

  isSet(maybeSet: unknown): maybeSet is TreeSet<unknown>;
}
