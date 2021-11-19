/**
 * Returns array or tuple type of the given array / tuple type `T` tail
 *
 * @remarks
 *
 * If `T` is not array / tuple type then result type will be `never`
 *
 * ```ts
 *  type T = ArrayTail<string>
 *  // type T = never
 * ```
 *
 * Result type will be `never[]` if `T` is empty tuple type
 *
 * ```ts
 *  type T = ArrayTail<[]>
 *  // type T = never
 * ```
 *
 * @example
 *
 * ```ts
 *  type T1 = ArrayTail<[number, string, boolean]>;
 *  // type T1 = [string, boolean]
 *
 *  type T2 = ArrayTail<number[]>;
 *  // type T2 = number[]
 * ```
 */
export type ArrayTail<T> = T extends [unknown, ...infer E]
  ? E
  : T extends Array<infer E>
  ? E[]
  : never;
