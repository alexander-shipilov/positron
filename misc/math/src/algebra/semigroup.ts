import type { Magma } from "./magma";

export type Semigroup<TElement, TOperation extends string> = Magma<
  TElement,
  TOperation
> & {
  // todo add possible left / right identities
};
