import type { ArrayUnique_ } from "./array-unique_";

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
