import { Prefix } from "./Prefix";

/**
 * Key without prefix
 */
export type Unprefix<P extends string, T extends string> =
  // no-format
  T extends Prefix<P, infer U> ? U : T;
