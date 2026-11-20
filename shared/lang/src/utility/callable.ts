import type { Any } from "../any/any";

/**
 * The {@link Callable} represents an object that has `()` signature and
 * therefore can be called.
 *
 * @typeParam TReturn - Returned value.
 *
 * @typeParam TArgs - Parameters.
 *
 * @public
 */
export type Callable<TReturn = unknown, TArgs extends Any[] = never[]> = (
  ...args: TArgs
) => TReturn;
