import type { ArrayReverse } from "../array-reverse";
import type { ArrayUnique } from "../array-unique";

/**
 * The {@link ArrayUnique} type constructs the array / tuple type of the
 * unique items from the passed `TArray`.
 *
 * @example
 * ```ts
 *  type T1 = ArrayUniqueTail<[1, 2, 1, 3, 3]>
 *  // [2, 1, 3]
 * ```
 *
 * @typeParam TArray - The array / tuple type to unique items from.
 *
 * @public
 */
export type ArrayUniqueTail<TArray extends readonly unknown[]> = ArrayReverse<
  ArrayUnique<ArrayReverse<TArray>>
>;
