import { Prefix } from "./Prefix";

/**
 * Removes keys with prefix from the `Key` type
 */
export type OmitPrefixedKeys<
  Prefix extends string,
  Key extends string
> = Key extends Prefix<Prefix, string> ? never : Key;
