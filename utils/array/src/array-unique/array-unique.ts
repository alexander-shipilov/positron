import type { ArrayType } from "../array-type";

/**
 * The {@link ArrayUnique} type constructs the array / tuple type of the
 * unique items from the passed `TArray`.
 *
 * @example
 * ```ts
 *  type T1 = ArrayUnique<[1, 2, 3, 3]>
 *  // [1, 2, 3]
 * ```
 *
 * @typeParam TArray - The array / tuple type to get unique items from.
 *
 * @public
 */
export type ArrayUnique<TArray extends readonly unknown[]> =
  Readonly<TArray> extends TArray
    ? Readonly<ArrayUnique_<[...TArray]>>
    : ArrayUnique_<[...TArray]>;

/**
 * @internal
 */
type ArrayUnique_<
  TArray extends unknown[],
  TUnique extends unknown[] = [],
> = TArray extends [infer First, ...infer Tail extends unknown[]]
  ? ArrayUnique_<Tail, ArrayUniqueItem_<[...TUnique, First]>>
  : TArray extends [...infer Head extends unknown[], infer Last]
    ? ArrayUniqueItem_<[...ArrayUnique_<Head, TUnique>, Last]>
    : ArrayUniqueItem_<[...TUnique, ArrayType<TArray>]> | TUnique;

/**
 * @internal
 */
type ArrayUniqueItem_<TUnique extends unknown[]> = TUnique extends [
  ...infer Head,
  infer Last,
]
  ? Last extends ArrayType<Head>
    ? Head
    : [...Head, Last]
  : TUnique;
