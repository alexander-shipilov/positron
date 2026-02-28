import type { ArrayType } from "../array-type";

import type { ArrayUniqueItem_ } from "./array-unique-item_";

/**
 * @public
 */
export type ArrayUnique_<
  TArray extends unknown[],
  TUnique extends unknown[] = [],
> = TArray extends [infer First, ...infer Tail extends unknown[]]
  ? ArrayUnique_<Tail, ArrayUniqueItem_<[...TUnique, First]>>
  : TArray extends [...infer Head extends unknown[], infer Last]
    ? ArrayUniqueItem_<[...ArrayUnique_<Head, TUnique>, Last]>
    : ArrayUniqueItem_<[...TUnique, ArrayType<TArray>]> | TUnique;
