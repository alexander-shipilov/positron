import type { ArrayType } from "../array-type";

/**
 * @public
 */
export type ArrayUniqueItem_<TUnique extends unknown[]> = TUnique extends [
  ...infer Head,
  infer Last,
]
  ? Last extends ArrayType<Head>
    ? Head
    : [...Head, Last]
  : TUnique;
