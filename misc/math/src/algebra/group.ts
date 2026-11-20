import type { Monoid } from "./monoid";

export type Group<
  TElement,
  TOperation extends string,
  TId extends string,
> = Monoid<TElement, TOperation, TId> & {
  [id in TId]: TElement;
};
