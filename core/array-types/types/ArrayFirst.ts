import { ArrayType } from "./ArrayType";

/**
 * Returns type of the first element in the array / tuple type `T`
 *
 * @remarks
 *
 * If `T` is not array / tuple type result type will be `never`
 *
 * ```ts
 *  type T = ArrayFirst<string>
 *  // type T = never
 * ```
 *
 * Also result will be `never` if `T` is empty tuple type
 *
 * ```ts
 *  type T = ArrayFirst<[]>
 *  // type T = never
 * ```
 *
 * @example
 *
 * ```ts
 *  type T1 = ArrayFirst<[string, number, boolean]>;
 *  // type T1 = string
 *
 *  type T2 = ArrayFirst<string[]>;
 *  // type T2 = string
 * ```
 *
 * @typeParam T - Type
 */

export type ArrayFirst<T> = T extends [infer E, ...unknown[]]
  ? E
  : ArrayType<T>;
