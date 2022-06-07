/**
 * Returns array or tuple type of the given array / tuple type `T` head
 *
 * ```ts
 *  type T1 = ArrayHead<[number, string, boolean]>;
 *  // type T1 = [number, string]
 *
 *  type T2 = ArrayHead<number[]>;
 *  // type T2 = number[]
 * ```
 *
 * If `T` is not array / tuple type then result type will be `never`
 *
 * ```ts
 *  type T = ArrayHead<string>
 *  // type T = never
 * ```
 *
 * Result type will be `never[]` if `T` is empty tuple type
 *
 * ```ts
 *  type T = ArrayHead<[]>
 *  // type T = never
 * ```
 */
export type ArrayHead<T> = T extends [...infer E, unknown]
  ? E
  : T extends Array<infer E>
  ? E[]
  : never;
