/**
 * Returns type of the last element in the array / tuple type `T`
 *
 * @remarks
 *
 * If `T` is not array / tuple type result type will be `never`
 *
 * ```ts
 *  type T = ArrayLast<string>
 *  // type T = never
 * ```
 *
 * Also result will be `never` if `T` is empty tuple type
 *
 * ```ts
 *  type T = ArrayLast<[]>
 *  // type T = never
 * ```
 *
 * @example
 *
 * ```ts
 *  type T = ArrayLast<[string, number, boolean]>;
 *  // type T1 = boolean
 *
 *  type T = ArrayLast<string[]>;
 *  // type T2 = string
 * ```
 */
export type ArrayLast<T> = T extends [...unknown[], infer U]
  ? U
  : T extends Array<infer E>
  ? E
  : never;
