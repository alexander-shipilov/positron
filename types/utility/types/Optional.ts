/**
 * Adds `undefined` type to `T`
 *
 * @example
 * ```ts
 *  type T = Optional<string>;
 *  // type T = string | undefined
 * ```
 */
export type Optional<T> = T | undefined;
