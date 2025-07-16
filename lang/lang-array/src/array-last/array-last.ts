import type { ArrayType } from "../array-type";

/**
 * The {@link ArrayLast} type returns the last item type from the passed
 * array / tuple type `TArray` or `never` if `TArray` is the `[]` literal type.
 *
 * @example
 * ```ts
 *  type T1 = ArrayLast<[string, number, boolean]>;
 *  // type T1 = boolean
 *
 *  type T2 = ArrayLast<[...string[], number]>;
 *  // type T2 = number
 *
 *  type T3 = ArrayLast<[number, string, ...boolean[]]>;
 *  // type T3 = boolean | string
 *
 *  type T4 = ArrayLast<number[]>;
 *  // type T4 = number
 *
 *  type T5 = ArrayLast<[]>
 *  // type T5 = never
 * ```
 *
 * @typeParam TArray - The array / tuple type to extract the last item type
 *   from.
 *
 * @public
 */
export type ArrayLast<TArray extends readonly unknown[]> =
  TArray extends readonly [...unknown[], infer Last]
    ? Last
    : TArray extends readonly [unknown, infer Item, ...infer Tail]
      ? ArrayLast<[Item, ...Tail]>
      : ArrayType<TArray>;
