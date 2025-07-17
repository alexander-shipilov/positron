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
 * @typeParam TArray - The array / tuple type to unique items from.
 *
 * @public
 */
export type ArrayUnique<TArray extends readonly unknown[]> =
  Readonly<TArray> extends TArray
    ? Readonly<_ArrayUnique<[...TArray]>>
    : _ArrayUnique<[...TArray]>;

/**
 * @internal
 */
type _ArrayUnique<
  TArray extends unknown[],
  TUnique extends unknown[] = [],
> = TArray extends [infer First, ...infer Tail extends unknown[]]
  ? _ArrayUnique<Tail, _ArrayUniqueItem<[...TUnique, First]>>
  : TArray extends [...infer Head extends unknown[], infer Last]
    ? _ArrayUniqueItem<[..._ArrayUnique<Head, TUnique>, Last]>
    : _ArrayUniqueItem<[...TUnique, ArrayType<TArray>]> | TUnique;

/**
 * @internal
 */
type _ArrayUniqueItem<TUnique extends unknown[]> = TUnique extends [
  ...infer Head,
  infer Last,
]
  ? Last extends ArrayType<Head>
    ? Head
    : [...Head, Last]
  : TUnique;
