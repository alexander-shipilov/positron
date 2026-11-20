import type { Semigroup } from "./semigroup";

export type Monoid<
  TElement,
  TOperation extends string,
  TId extends string,
> = Semigroup<TElement, TOperation> & {
  [id in TId]: TElement;
};
