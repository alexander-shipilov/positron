import { Symbols } from "./symbols";

export interface Comparable<TElement> {
  [Symbols.cmp](value1: TElement, value2: TElement): number;
}
