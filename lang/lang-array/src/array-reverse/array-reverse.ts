/**
 * The {@link ArrayReverse} type creates an array/tuple type from the elements
 * of the passed `TArray`, placed in reverse order.
 *
 * @example
 * ```ts
 *  type T1 = ArrayReverse<[1, 2, 3]>
 *  // [3, 2, 1]
 *
 *  type T2 = ArrayReverse<[1, 2, ...3[]]>
 *  // [...3[], 2, 1]
 *
 *  type T3 = ArrayReverse<3[]>
 *  // 3[]
 * ```
 *
 * @typeParam TArray - The array / tuple type to unique items from.
 *
 * @public
 */
export type ArrayReverse<TArray extends readonly unknown[]> =
  Readonly<TArray> extends TArray
    ? Readonly<_ArrayReverse<[...TArray]>>
    : _ArrayReverse<[...TArray]>;

/**
 * @internal
 */
type _ArrayReverse<TArray extends unknown[]> = TArray extends [
  infer First,
  ...infer Tail extends unknown[],
]
  ? [..._ArrayReverse<Tail>, First]
  : TArray extends [...infer Head extends unknown[], infer Last]
    ? [Last, ..._ArrayReverse<Head>]
    : TArray;
