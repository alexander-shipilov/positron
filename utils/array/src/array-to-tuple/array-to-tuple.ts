/**
 * The {@link ArrayToTuple} type creates a tuple by removing non-fixed-length
 * sequences of elements from the passed `TArray`.
 *
 * @example
 * ```ts
 *  type T1 = ArrayToTuple<[1, 2, ...3[]]>
 *  // [1, 2]
 *
 *  type T2 = ArrayToTuple<[...1[], 2]>
 *  // [2]
 *
 *  type T3 = ArrayToTuple<[1, ...2[], 3]>
 *  // [1, 3]
 *
 *  type T4 = ArrayToTuple<1[]>
 *  // []
 * ```
 *
 * @typeParam TArray - The array type to convert to a tuple.
 *
 * @public
 */
export type ArrayToTuple<TArray extends readonly unknown[]> =
  Readonly<TArray> extends TArray
    ? Readonly<ArrayToTuple_<[...TArray]>>
    : ArrayToTuple_<[...TArray]>;

/**
 * @internal
 */
type ArrayToTuple_<TArray extends unknown[]> = TArray extends [
  infer First,
  ...infer Tail extends unknown[],
]
  ? [First, ...ArrayToTuple_<Tail>]
  : TArray extends [...infer Head extends unknown[], infer Last]
    ? [...ArrayToTuple_<Head>, Last]
    : [];
