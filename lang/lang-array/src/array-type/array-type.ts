/**
 * The {@link ArrayType} type returns a type of the passed array or tuple type
 * `TArray`. The result type will be `never` if `TArray` is an empty tuple type.
 *
 * @example
 * ```ts
 *  type T1 = ArrayType<[number, string, boolean]>;
 *  // type T1 = number | string | boolean
 *
 *  type T2 = ArrayType<string[]>;
 *  // type T2 = string
 *
 *  type T3 = ArrayType<[]>
 *  // type T3 = never
 * ```
 *
 * @public
 */
export type ArrayType<TArray extends readonly unknown[]> =
  TArray extends readonly (infer Type)[] ? Type : never;
