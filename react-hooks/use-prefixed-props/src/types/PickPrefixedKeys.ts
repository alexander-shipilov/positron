import { Prefix } from "./Prefix";

/**
 * Removes keys with prefix from the `Key` type
 */
export type PickPrefixedKeys<
  Prefix extends string,
  Key extends string
> = Key extends Prefix<Prefix, string> ? Key : never;
