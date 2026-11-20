/**
 * @public
 */
export type ArrayReverse_<TArray extends unknown[]> = TArray extends [
  infer First,
  ...infer Tail extends unknown[],
]
  ? [...ArrayReverse_<Tail>, First]
  : TArray extends [...infer Head extends unknown[], infer Last]
    ? [Last, ...ArrayReverse_<Head>]
    : TArray;
