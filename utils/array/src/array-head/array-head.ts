/**
 * The {@link ArrayHead} type constructs an array / tuple type by removing the
 * last item from the passed `TArray` type.
 *
 * @example
 * ```ts
 *  type T1 = ArrayHead<[number, string, boolean]>;
 *  // type T1 = [number, string]
 *
 *  type T2 = ArrayHead<[string, ...number[]]>
 *   // type T2 = [string, ...number[]]
 *
 *  type T3 = ArrayHead<number[]>;
 *  // type T3 = number[]
 *
 *  type T4 = ArrayHead<[]>
 *  // type T4 = never
 * ```
 *
 * @typeParam TArray - The array / tuple type to extract the head from.
 *
 * @public
 */
export type ArrayHead<TArray extends readonly unknown[]> =
  Readonly<TArray> extends TArray
    ? Readonly<ArrayHead_<[...TArray]>>
    : ArrayHead_<[...TArray]>;

/**
 * @internal
 */
type ArrayHead_<TArray extends unknown[]> = TArray extends [
  ...infer Head,
  unknown,
]
  ? Head
  : TArray extends []
    ? never[]
    : TArray;
