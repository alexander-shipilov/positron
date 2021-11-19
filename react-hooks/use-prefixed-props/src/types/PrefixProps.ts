import { PrefixKey } from "./PrefixKey";

/**
 * Prefix each string property of `T` by `P`
 */
export type PrefixProps<P extends string, T> = {
  [K in keyof T as PrefixKey<P, K>]: T[K];
};
