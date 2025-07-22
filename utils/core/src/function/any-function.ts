import type { TypedFunction } from "./typed-function";

/**
 * The {@link AnyFunction} type represents a function that accepts any
 * number of arguments and return unknown.
 *
 * @public
 */
export type AnyFunction<TReturn = unknown> = TypedFunction<TReturn>;
