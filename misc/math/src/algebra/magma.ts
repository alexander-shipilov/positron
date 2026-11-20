import type { Domain } from "./domain";
import type { Operations } from "./operations";

export type Magma<TElement, TOperation extends string> = Domain<TElement> &
  Operations<TElement, 2, TOperation>;
