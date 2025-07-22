/**
 * The {@link TypedFunction} type represents a function.
 *
 * @public
 */
export type TypedFunction<TReturn, TArgs extends unknown[] = never[]> = (
  ...args: TArgs
) => TReturn;
