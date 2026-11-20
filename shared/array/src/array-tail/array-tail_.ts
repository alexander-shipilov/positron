/**
 * @public
 */
export type ArrayTail_<TArray extends unknown[]> = TArray extends [
  unknown,
  ...infer Tail,
]
  ? Tail
  : TArray extends readonly []
    ? never[]
    : TArray;
