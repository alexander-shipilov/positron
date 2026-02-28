/**
 * @public
 */
export type ArrayToTuple_<TArray extends unknown[]> = TArray extends [
  infer First,
  ...infer Tail extends unknown[],
]
  ? [First, ...ArrayToTuple_<Tail>]
  : TArray extends [...infer Head extends unknown[], infer Last]
    ? [...ArrayToTuple_<Head>, Last]
    : [];
