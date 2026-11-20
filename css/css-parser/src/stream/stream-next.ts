import type { Nullish } from "@positron/lang";

/**
 * The {@link StreamNext} type represents a function that reads the next element
 * from the source and advances its internal position.
 *
 * @remarks
 *   Once the end of the source is reached, subsequent calls to this function
 *   should continue returning `null` without throwing. Implementations do not
 *   need to handle backtracking.
 *
 * @typeParam TElement - The type of elements yielded by the function.
 *
 * @returns The next element from the source, or `null` if the end has been
 *   reached.
 *
 * @public
 */
export type StreamNext<TElement> = () => Nullish<TElement>;
