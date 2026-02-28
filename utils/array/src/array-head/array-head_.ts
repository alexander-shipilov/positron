/**
 * @public
 */
export type ArrayHead_<TArray extends unknown[]> = TArray extends [
  ...infer Head,
  unknown,
]
  ? Head
  : TArray extends []
    ? never[]
    : TArray;
