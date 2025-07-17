/**
 * The {@link ArrayTail} type constructs an array / tuple type by removing the
 * first item from the passed `TArray` type.
 *
 * @example
 * ```ts
 *  type T1 = ArrayTail<[number, string, boolean]>;
 *  // type T1 = [string, boolean]
 *
 *  type T2 = ArrayTail<[...number[], string]>
 *   // type T2 = [...number[], string]
 *
 *  type T3 = ArrayTail<number[]>;
 *  // type T3 = number[]
 *
 *  type T4 = ArrayTail<[]>
 *  // type T4 = never
 * ```
 *
 * @typeParam TArray - The array / tuple type to extract the tail from.
 *
 * @public
 */
export type ArrayTail<TArray extends readonly unknown[]> =
  Readonly<TArray> extends TArray
    ? Readonly<ArrayTail_<[...TArray]>>
    : ArrayTail_<[...TArray]>;

/**
 * @internal
 */
type ArrayTail_<TArray extends unknown[]> = TArray extends [
  unknown,
  ...infer Tail,
]
  ? Tail
  : TArray extends readonly []
    ? never[]
    : TArray;
