/**
 * Excludes `undefined` from `T`
 *
 * @example
 * ```ts
 *  type T = Mandatory<string | undefined>;
 *  // type T = string
 * ```
 */
export type Mandatory<T> = T extends undefined ? never : T;
