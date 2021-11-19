import { Unprefix } from "./Unprefix";

/**
 * Returns a set of properties of T
 */
export type UnprefixProps<P extends string, T> = {
  [K in keyof T as K extends string ? Unprefix<P, K> : never]: T[K];
};
