/**
 * Returns type of the array type `T`
 *
 * @remarks
 *
 * If `T` is not array / tuple type result type will be `never`
 *
 * ```ts
 *  type T4 = ArrayType<string>
 *  // type T4 = never
 * ```
 *
 * Also result will be `never` if `T` is empty tuple type
 *
 * ```ts
 *  type T = ArrayType<[]>
 *  // type T = never
 * ```
 *
 * See examples below.
 *
 * @example
 *
 * ```ts
 *  type T1 = ArrayType<[number, string, boolean]>;
 *  // type T1 = number | string | boolean
 *
 *  type T2 = ArrayType<string[]>;
 *  // type T2 = string
 * ```
 */
export type ArrayType<T> = T extends Array<infer E> ? E : never;
