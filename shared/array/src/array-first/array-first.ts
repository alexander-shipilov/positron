import type { ArrayType } from "../array-type";

/**
 * The {@link ArrayFirst} type returns the first item type from the passed
 * array / tuple type `TArray` or `never` if `TArray` is the `[]` literal type.
 *
 * @example
 * ```ts
 *  type T1 = ArrayFirst<[string, number, boolean]>;
 *  // type T1 = string
 *
 *  type T2 = ArrayFirst<[string, ...number[]]>;
 *  // type T2 = string
 *
 *  type T3 = ArrayFirst<[...number[], string, boolean]>;
 *  // type T3 = number | string
 *
 *  type T4 = ArrayFirst<number[]>;
 *  // type T4 = number
 *
 *  type T5 = ArrayFirst<[]>
 *  // type T5 = never
 * ```
 *
 * @typeParam TArray - The array / tuple type to extract the first item type
 *   from.
 *
 * @public
 */
export type ArrayFirst<TArray extends readonly unknown[]> =
  TArray extends readonly [infer First, ...unknown[]]
    ? First
    : TArray extends readonly [...infer Head, infer Item, unknown]
      ? ArrayFirst<[...Head, Item]>
      : ArrayType<TArray>;
